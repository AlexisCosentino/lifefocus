<?php
declare(strict_types=1);

const CONTACT_TO = 'contact@lifefocus.fr';
const CONTACT_FROM = 'noreply@lifefocus.fr';
const REDIRECT_SUCCESS = '/contact/?status=success';
const REDIRECT_ERROR = '/contact/?status=error';
const REDIRECT_SUCCESS_EN = '/en/wedding-photographer-drome-provence/?status=success#contact';
const REDIRECT_ERROR_EN = '/en/wedding-photographer-drome-provence/?status=error#contact';
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const RATE_LIMIT_WINDOW_SECONDS = 600;
const RATE_LIMIT_MAX_REQUESTS = 5;

function redirect_to(string $url): void
{
    header('Location: ' . $url, true, 303);
    exit;
}

function reject(bool $silentSuccess = false): void
{
    $language = $GLOBALS['contact_language'] ?? 'fr';
    redirect_to(contact_redirect_url($silentSuccess ? 'success' : 'error', is_string($language) ? $language : 'fr'));
}

function contact_redirect_url(string $status, string $language): string
{
    $isEnglish = $language === 'en';

    if ($status === 'success') {
        return $isEnglish ? REDIRECT_SUCCESS_EN : REDIRECT_SUCCESS;
    }

    return $isEnglish ? REDIRECT_ERROR_EN : REDIRECT_ERROR;
}

function post_string(string $key, int $maxLength): ?string
{
    if (!isset($_POST[$key]) || is_array($_POST[$key])) {
        return null;
    }

    $value = (string)$_POST[$key];

    if (strlen($value) > $maxLength) {
        return null;
    }

    return $value;
}

function clean_text(string $value): string
{
    $value = trim($value);
    $value = str_replace(["\r", "\n"], ' ', $value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    $value = strip_tags($value);

    return trim($value);
}

function clean_message(string $value): string
{
    $value = trim($value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    $value = strip_tags($value);

    return trim($value);
}

function has_header_injection(string $value): bool
{
    return strpos($value, "\r") !== false || strpos($value, "\n") !== false;
}

function encode_subject(string $value): string
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

function first_name_from(string $name): string
{
    $parts = preg_split('/\s+/', trim($name));

    if (!is_array($parts) || $parts === []) {
        return $name;
    }

    return $parts[0] !== '' ? $parts[0] : $name;
}

function client_ip(): string
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? '';

    return filter_var($ip, FILTER_VALIDATE_IP) ? $ip : 'unknown';
}

function check_rate_limit(string $ip): bool
{
    $directory = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'lifefocus-contact-rate';

    if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) {
        return true;
    }

    $file = $directory . DIRECTORY_SEPARATOR . hash('sha256', $ip) . '.json';
    $handle = fopen($file, 'c+');

    if ($handle === false) {
        return true;
    }

    try {
        if (!flock($handle, LOCK_EX)) {
            return true;
        }

        $now = time();
        $contents = stream_get_contents($handle);
        $timestamps = is_string($contents) && $contents !== '' ? json_decode($contents, true) : [];

        if (!is_array($timestamps)) {
            $timestamps = [];
        }

        $timestamps = array_values(array_filter($timestamps, static function ($timestamp) use ($now): bool {
            return is_int($timestamp) && $timestamp > ($now - RATE_LIMIT_WINDOW_SECONDS);
        }));

        if (count($timestamps) >= RATE_LIMIT_MAX_REQUESTS) {
            return false;
        }

        $timestamps[] = $now;
        ftruncate($handle, 0);
        rewind($handle);
        fwrite($handle, json_encode($timestamps));

        return true;
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
}

function config_value(string $key): ?string
{
    $value = getenv($key);

    if (is_string($value) && trim($value) !== '') {
        return trim($value);
    }

    foreach ([$_ENV[$key] ?? null, $_SERVER[$key] ?? null] as $candidate) {
        if (is_string($candidate) && trim($candidate) !== '') {
            return trim($candidate);
        }
    }

    $configPath = getenv('LIFEFOCUS_CONTACT_CONFIG');
    if (is_string($configPath) && is_file($configPath)) {
        $config = require $configPath;
        if (is_array($config) && isset($config[$key]) && is_string($config[$key]) && trim($config[$key]) !== '') {
            return trim($config[$key]);
        }
    }

    $defaultConfigPath = dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'lifefocus-contact-config.php';
    if (is_file($defaultConfigPath)) {
        $config = require $defaultConfigPath;
        if (is_array($config) && isset($config[$key]) && is_string($config[$key]) && trim($config[$key]) !== '') {
            return trim($config[$key]);
        }
    }

    return null;
}

function verify_turnstile(string $token, string $secret, string $ip): bool
{
    if ($token === '' || strlen($token) > 2048 || has_header_injection($token)) {
        return false;
    }

    $payload = http_build_query([
        'secret' => $secret,
        'response' => $token,
        'remoteip' => $ip,
    ]);

    if (function_exists('curl_init')) {
        $curl = curl_init(TURNSTILE_VERIFY_URL);

        if ($curl === false) {
            return false;
        }

        curl_setopt_array($curl, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $payload,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CONNECTTIMEOUT => 4,
            CURLOPT_TIMEOUT => 8,
            CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
        ]);

        $response = curl_exec($curl);
        $status = (int)curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
        curl_close($curl);

        if (!is_string($response) || $status < 200 || $status >= 300) {
            return false;
        }
    } else {
        $context = stream_context_create([
            'http' => [
                'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
                'method' => 'POST',
                'content' => $payload,
                'timeout' => 8,
            ],
        ]);

        $response = file_get_contents(TURNSTILE_VERIFY_URL, false, $context);

        if (!is_string($response)) {
            return false;
        }
    }

    $result = json_decode($response, true);

    return is_array($result) && ($result['success'] ?? false) === true;
}

function is_valid_date(string $value): bool
{
    $date = DateTimeImmutable::createFromFormat('!Y-m-d', $value);

    return $date instanceof DateTimeImmutable && $date->format('Y-m-d') === $value;
}

function is_valid_phone(string $value): bool
{
    if (!preg_match('/^\+?[0-9][0-9\s().-]{5,39}$/', $value)) {
        return false;
    }

    $digits = preg_replace('/\D/', '', $value) ?? '';

    return strlen($digits) >= 6 && strlen($digits) <= 20;
}

function is_valid_name(string $value): bool
{
    return (bool)preg_match('/^[\p{L}\p{M}][\p{L}\p{M}\s\'’.-]{1,119}$/u', $value);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    reject();
}

$languageRaw = post_string('lang', 5);
$acceptedLanguages = ['fr', 'en'];
$contactLanguage = in_array($languageRaw, $acceptedLanguages, true) ? $languageRaw : 'fr';
$GLOBALS['contact_language'] = $contactLanguage;

$honeypot = post_string('website', 200);
if ($honeypot === null || trim($honeypot) !== '') {
    reject(true);
}

$ip = client_ip();
if (!check_rate_limit($ip)) {
    reject();
}

$turnstileSecret = config_value('TURNSTILE_SECRET_KEY');
$turnstileToken = post_string('cf-turnstile-response', 2048);

if ($turnstileSecret === null || $turnstileToken === null || !verify_turnstile($turnstileToken, $turnstileSecret, $ip)) {
    reject();
}

$sessionLabels = [
    'mariage' => 'Mariage',
    'grossesse' => 'Grossesse',
    'naissance' => 'Naissance',
    'famille' => 'Famille',
    'autre' => 'Autre',
];

$sessionLabelsEn = [
    'mariage' => 'Wedding',
    'grossesse' => 'Pregnancy',
    'naissance' => 'Newborn',
    'famille' => 'Family',
    'autre' => 'Other',
];

$nameRaw = post_string('name', 120);
$emailRaw = post_string('email', 160);
$phoneRaw = post_string('phone', 40);
$sessionTypeRaw = post_string('session_type', 30);
$eventDateRaw = post_string('event_date', 20);
$locationRaw = post_string('location', 160);
$messageRaw = post_string('message', 4000);
$phoneRequired = $contactLanguage !== 'en';

if (
    $nameRaw === null ||
    $emailRaw === null ||
    ($phoneRequired && $phoneRaw === null) ||
    $sessionTypeRaw === null ||
    $eventDateRaw === null ||
    $locationRaw === null ||
    $messageRaw === null ||
    has_header_injection($emailRaw) ||
    has_header_injection($nameRaw)
) {
    reject();
}

$name = clean_text($nameRaw);
$emailCandidate = trim($emailRaw);
$email = filter_var($emailCandidate, FILTER_VALIDATE_EMAIL);
$phone = $phoneRaw === null ? '' : clean_text($phoneRaw);
$sessionType = clean_text($sessionTypeRaw);
$eventDate = clean_text($eventDateRaw);
$location = clean_text($locationRaw);
$message = clean_message($messageRaw);

if (
    $name === '' ||
    !is_valid_name($name) ||
    $email === false ||
    ($phoneRequired && $phone === '') ||
    ($phone !== '' && !is_valid_phone($phone)) ||
    $message === '' ||
    strlen($message) < 10 ||
    !array_key_exists($sessionType, $sessionLabels)
) {
    reject();
}

if ($eventDate !== '' && !is_valid_date($eventDate)) {
    reject();
}

if (
    has_header_injection($phone) ||
    has_header_injection($sessionType) ||
    has_header_injection($eventDate) ||
    has_header_injection($location)
) {
    reject();
}

$sessionLabel = $sessionLabels[$sessionType];
$sessionLabelForClient = $contactLanguage === 'en' ? $sessionLabelsEn[$sessionType] : $sessionLabel;
$subject = $contactLanguage === 'en'
    ? sprintf('New Life Focus enquiry - %s', $sessionLabelForClient)
    : sprintf('Nouvelle demande Life Focus - %s', $sessionLabel);
$clientSubject = $contactLanguage === 'en' ? 'Thank you for your message' : 'Merci pour votre message';

$body = implode("\n", [
    $contactLanguage === 'en' ? 'New enquiry from the Life Focus website' : 'Nouvelle demande depuis le site Life Focus',
    'Langue : ' . ($contactLanguage === 'en' ? 'Anglais' : 'Français'),
    '',
    'Nom et prénom : ' . $name,
    'Email : ' . $email,
    'Téléphone : ' . ($phone !== '' ? $phone : 'Non renseigné'),
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

$clientBody = $contactLanguage === 'en'
    ? implode("\n", [
        'Hello ' . first_name_from($name) . ',',
        '',
        'Thank you for your message.',
        '',
        'I have received your enquiry and will get back to you soon so we can talk about your wedding.',
        '',
        'Summary of your enquiry',
        '',
        'Session type: ' . $sessionLabelForClient,
        'Date: ' . ($eventDate !== '' ? $eventDate : 'Not provided'),
        'Location: ' . ($location !== '' ? $location : 'Not provided'),
        '',
        'Your message:',
        $message,
        '',
        'Speak soon,',
        'Alexis - Life Focus',
    ])
    : implode("\n", [
        'Bonjour ' . first_name_from($name) . ',',
        '',
        'Merci pour votre message.',
        '',
        'J’ai bien reçu votre demande et je reviendrai vers vous rapidement pour échanger autour de votre projet.',
        '',
        'Récapitulatif de votre demande',
        '',
        'Type de séance : ' . $sessionLabel,
        'Date de la séance / événement : ' . ($eventDate !== '' ? $eventDate : 'Non renseignée'),
        'Lieu : ' . ($location !== '' ? $location : 'Non renseigné'),
        '',
        'Votre message :',
        $message,
        '',
        'À très bientôt,',
        'Alexis - Life Focus',
    ]);

$headers = [
    'From: Life Focus <' . CONTACT_FROM . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$clientHeaders = [
    'From: Life Focus <' . CONTACT_FROM . '>',
    'Reply-To: ' . CONTACT_TO,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail(CONTACT_TO, encode_subject($subject), $body, implode("\r\n", $headers));

if ($sent) {
    mail($email, encode_subject($clientSubject), $clientBody, implode("\r\n", $clientHeaders));
}

redirect_to(contact_redirect_url($sent ? 'success' : 'error', $contactLanguage));
