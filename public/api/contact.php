<?php
declare(strict_types=1);

const CONTACT_TO = 'contact@lifefocus.fr';
const CONTACT_FROM = 'noreply@lifefocus.fr';
const REDIRECT_SUCCESS = '/contact/?status=success';
const REDIRECT_ERROR = '/contact/?status=error';

function redirect_to(string $url): void
{
    header('Location: ' . $url, true, 303);
    exit;
}

function clean_text(string $value, int $maxLength): string
{
    $value = trim($value);
    $value = str_replace(["\r", "\n"], ' ', $value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    $value = strip_tags($value);

    if (strlen($value) > $maxLength) {
        $value = substr($value, 0, $maxLength);
    }

    return trim($value);
}

function clean_message(string $value, int $maxLength): string
{
    $value = trim($value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    $value = strip_tags($value);

    if (strlen($value) > $maxLength) {
        $value = substr($value, 0, $maxLength);
    }

    return trim($value);
}

function has_header_injection(string $value): bool
{
    return strpos($value, "\r") !== false || strpos($value, "\n") !== false;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_to(REDIRECT_ERROR);
}

$honeypot = trim((string)($_POST['website'] ?? ''));
if ($honeypot !== '') {
    redirect_to(REDIRECT_SUCCESS);
}

$sessionLabels = [
    'mariage' => 'Mariage',
    'grossesse' => 'Grossesse',
    'naissance' => 'Naissance',
    'famille' => 'Famille',
    'autre' => 'Autre',
];

$name = clean_text((string)($_POST['name'] ?? ''), 120);
$emailRaw = trim((string)($_POST['email'] ?? ''));
$email = filter_var($emailRaw, FILTER_VALIDATE_EMAIL);
$phone = clean_text((string)($_POST['phone'] ?? ''), 40);
$sessionType = clean_text((string)($_POST['session_type'] ?? ''), 30);
$eventDate = clean_text((string)($_POST['event_date'] ?? ''), 20);
$location = clean_text((string)($_POST['location'] ?? ''), 160);
$message = clean_message((string)($_POST['message'] ?? ''), 4000);

if (
    $name === '' ||
    $email === false ||
    $phone === '' ||
    $message === '' ||
    !array_key_exists($sessionType, $sessionLabels) ||
    has_header_injection($emailRaw) ||
    has_header_injection($name)
) {
    redirect_to(REDIRECT_ERROR);
}

if ($eventDate !== '' && !preg_match('/^\d{4}-\d{2}-\d{2}$/', $eventDate)) {
    redirect_to(REDIRECT_ERROR);
}

$sessionLabel = $sessionLabels[$sessionType];
$subject = sprintf('Nouvelle demande Life Focus - %s', $sessionLabel);

$body = implode("\n", [
    'Nouvelle demande depuis le site Life Focus',
    '',
    'Nom et prénom : ' . $name,
    'Email : ' . $email,
    'Téléphone : ' . $phone,
    'Type de séance : ' . $sessionLabel,
    'Date de la séance / événement : ' . ($eventDate !== '' ? $eventDate : 'Non renseignée'),
    'Lieu : ' . ($location !== '' ? $location : 'Non renseigné'),
    '',
    'Message :',
    $message,
    '',
    '---',
    'Envoyé depuis lifefocus.fr',
]);

$headers = [
    'From: Life Focus <' . CONTACT_FROM . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail(CONTACT_TO, $subject, $body, implode("\r\n", $headers));

redirect_to($sent ? REDIRECT_SUCCESS : REDIRECT_ERROR);
