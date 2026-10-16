import type { ImageMetadata } from "astro";

export interface LocalWeddingPhoto {
  src: ImageMetadata;
  alt: string;
}

interface LocalWeddingPhotos {
  opening: LocalWeddingPhoto[];
  place: LocalWeddingPhoto[];
  approach: LocalWeddingPhoto[];
  afterPackages: LocalWeddingPhoto[];
  closing: LocalWeddingPhoto[];
}

export interface LocalWeddingPageData {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  region: string;
  introduction: string[];
  placeTitle: string;
  placeParagraphs: string[];
  planningTitle: string;
  planningParagraphs: string[];
  approach: string[];
  guide?: { href: string; label: string };
  resource?: { href: string; label: string };
  faq: { question: string; answer: string }[];
  photos: LocalWeddingPhotos;
}

const photoModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/images/mariage/mariage_*/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

const photo = (folder: string, filename: string, alt: string): LocalWeddingPhoto => {
  const src = photoModules[`/src/images/mariage/${folder}/${filename}`]?.default;
  if (!src) throw new Error(`Photo de mariage introuvable : ${folder}/${filename}`);
  return { src, alt };
};

export const localWeddingPages: Record<string, LocalWeddingPageData> = {
  romans: {
    slug: "photographe-mariage-romans-sur-isere",
    title: "Photographe de mariage à Romans-sur-Isère",
    seoTitle: "Photographe de mariage à Romans-sur-Isère | Life Focus",
    description: "Basé à Romans-sur-Isère, je photographie votre mariage dans la Drôme avec une approche naturelle. Découvrez mes reportages, mes formules et mon accompagnement.",
    region: "Romans-sur-Isère · Drôme des Collines",
    introduction: [
      "Romans-sur-Isère, c'est ma ville. J'y suis basé et je photographie les mariages ici comme dans la Drôme des Collines, avec l'envie de raconter une journée vécue, pas de la mettre en scène.",
      "Je vous accompagne quand cela aide à garder le fil, puis je laisse de la place aux rencontres, aux gestes et aux moments que personne n'avait prévus.",
    ],
    placeTitle: "Une cérémonie à Romans, une journée qui reste fluide",
    placeParagraphs: [
      "Une cérémonie civile à la mairie peut ouvrir la journée au cœur de Romans. Le centre historique et les abords de la collégiale Saint-Barnard offrent un autre rythme que la campagne environnante, sans obliger à multiplier les arrêts photo.",
      "Balmes le Château, près de Romans, est un domaine où j'ai déjà travaillé. Ses espaces permettent de varier les images autour de la réception, sans repartir chercher un décor. Si votre cérémonie a lieu en ville et la suite dans la Drôme des Collines, nous pouvons prévoir ensemble le passage d'un lieu à l'autre et le moment des photos de groupe.",
      "Une réception à Peyrins ou à Châteauneuf-sur-Isère peut aussi prolonger une cérémonie à Romans. Le lieu choisi donne sa couleur à la suite de la journée ; je m'attache surtout à raconter ce qui s'y passe, avec vos proches, plutôt qu'à multiplier les décors.",
    ],
    planningTitle: "Des portraits proches de ce que vous vivez",
    planningParagraphs: [
      "Après la mairie, une rue du centre ou les bords de l'Isère peuvent convenir si votre programme laisse cette pause. Si vous rejoignez directement votre lieu de réception, je chercherai plutôt les portraits sur place : le choix se fait avec votre journée, pas avec une liste de lieux à cocher.",
    ],
    approach: [
      "Je photographie surtout ce qui se passe entre les temps forts : une attente avant la cérémonie, un rire pendant le cocktail, les personnes qui se retrouvent. Pour les portraits et les groupes, je vous guide simplement, sans faire de la journée une succession de poses.",
    ],
    guide: { href: "/conseils/photographe-mariage-romans-sur-isere/", label: "Mes conseils pour se marier à Romans-sur-Isère" },
    resource: { href: "/conseils/plus-beaux-domaines-mariage-drome/", label: "Des domaines de mariage dans la Drôme" },
    faq: [
      { question: "Photographiez-vous les cérémonies civiles à Romans ?", answer: "Oui. Parlez-moi aussi de ce qui est prévu avant et après la mairie : je pourrai vous conseiller un temps de présence qui laisse une place aux arrivées, à la sortie et aux retrouvailles." },
      { question: "Quand prévoir les photos de groupe si la réception est ailleurs ?", answer: "Le lieu de réception est souvent plus confortable, une fois les invités réunis. Nous pouvons le prévoir en amont pour éviter de les rassembler juste avant un départ." },
      { question: "Faut-il prévoir un lieu réservé aux portraits de couple ?", answer: "Non. Nous pouvons regarder ce qui se trouve près de la mairie ou du domaine et choisir selon votre parcours. Il n'est pas nécessaire d'ajouter un trajet pour cette seule raison." },
      { question: "Photographiez-vous aussi les mariages autour de Romans-sur-Isère ?", answer: "Oui, notamment vers Peyrins et Châteauneuf-sur-Isère. Je suis basé à Romans et j'adapte le reportage aux lieux où se déroule réellement votre journée." },
    ],
    photos: {
      opening: [
        photo("mariage_romans", "Melissa & Nicolas_380.jpg", "Couple de mariés assis avec la ville en arrière-plan."),
        photo("mariage_romans", "Melissa & Nicolas_158.jpg", "Cérémonie civile dans une salle de mairie, entourée des proches des mariés."),
      ],
      place: [
        photo("mariage_romans", "Louise & Alexandre_581.jpg", "Invités devant une bâtisse de réception avec une fontaine au premier plan."),
        photo("mariage_romans", "Melissa & Nicolas_172.jpg", "Mariés entrant ensemble dans une salle de cérémonie civile."),
        photo("mariage_romans", "Melissa & Nicolas_198.jpg", "Mariés devant l'assemblée pendant leur cérémonie civile."),
        photo("mariage_romans", "Natalia & Arthur_328.jpg", "Salle de réception dressée pour un mariage."),
      ],
      approach: [
        photo("mariage_romans", "Maeva & Joris_89.jpg", "Mariée et proches levant leurs verres pendant les préparatifs."),
        photo("mariage_romans", "preparation-2.jpg", "Mariée entourée de ses proches pendant les préparatifs."),
        photo("mariage_romans", "Natalia & Arthur_57.jpg", "Mariés enlacés sous les arbres."),
        photo("mariage_romans", "Natalia & Arthur_142.jpg", "Couple de mariés assis sous une arche végétale."),
      ],
      afterPackages: [
        photo("mariage_romans", "Natalia & Arthur_77.jpg", "Mariés s'embrassant dans un champ à la lumière du soir."),
        photo("mariage_romans", "Natalia & Arthur_392.jpg", "Mariés enlacés parmi des fleurs violettes."),
      ],
      closing: [
        photo("mariage_romans", "Océane & Greg_3.jpg", "Mariés posant avec un cheval dans un parc."),
        photo("mariage_romans", "Océane & Greg_10.jpg", "Mariés enlacés dans un jardin à la lumière du soir."),
      ],
    },
  },
  valence: {
    slug: "photographe-mariage-valence",
    title: "Photographe de mariage à Valence",
    seoTitle: "Photographe de mariage à Valence | Life Focus",
    description: "Photographe de mariage à Valence, basé à Romans-sur-Isère. Des images naturelles, un accompagnement attentif et des formules adaptées à votre journée.",
    region: "Valence · Drôme et rive ardéchoise",
    introduction: [
      "Je viens de Romans-sur-Isère pour photographier les mariages à Valence et dans ses environs. Ici, une cérémonie en ville peut se prolonger dans la campagne drômoise ou de l'autre côté du Rhône, en Ardèche.",
      "Mon approche reste celle d'un reportage : être présent pour les moments importants, sans vous demander de jouer un rôle devant l'appareil.",
    ],
    placeTitle: "De la mairie de Valence à votre lieu de réception",
    placeParagraphs: [
      "Je connais la mairie de Valence pour les cérémonies civiles : les arrivées, les retrouvailles et la sortie racontent déjà une part du mariage. Si le programme le permet, le Champ de Mars ou le parc Jouvet peuvent accueillir quelques portraits, sans faire de la ville un parcours imposé.",
      "La suite peut rester proche de la ville, à Bourg-lès-Valence ou vers Portes-lès-Valence. Du côté de Chabeuil ou de Montélier, elle peut prendre un caractère plus champêtre. Et si votre réception se tient à Guilherand-Granges ou à Saint-Péray, elle se déroule déjà en Ardèche. Dans chaque cas, je photographie la journée là où vous l'avez choisie, sans imposer une étape photo supplémentaire.",
    ],
    planningTitle: "La lumière plutôt qu'une liste de décors",
    planningParagraphs: [
      "Si la cérémonie se termine dans le centre, quelques portraits dans les rues voisines peuvent garder le caractère urbain de Valence. Le Champ de Mars ou le parc Jouvet sont aussi des possibilités pour vous deux, selon l'envie et le moment.",
    ],
    approach: [
      "J'observe les échanges et les détails de votre journée, puis j'interviens quand une indication vous aide à vous sentir à l'aise. Le reste du temps, je laisse les choses se dérouler. C'est ainsi que les images restent proches de ce que vous avez vécu.",
    ],
    guide: { href: "/conseils/photographe-mariage-valence/", label: "Mes conseils pour se marier à Valence" },
    resource: { href: "/conseils/plus-beaux-domaines-mariage-drome/", label: "Explorer des domaines de mariage dans la Drôme" },
    faq: [
      { question: "Pouvez-vous suivre notre mariage après la cérémonie à Valence ?", answer: "Oui, selon le temps de présence choisi. Indiquez-moi où se déroulent la réception et les préparatifs pour que nous regardions ensemble la place de chaque moment dans le reportage." },
      { question: "Et si notre réception a lieu de l'autre côté du Rhône ?", answer: "Je peux raconter la cérémonie à Valence puis la réception côté ardéchois. Nous parlons des lieux ensemble en amont pour choisir une formule adaptée à votre journée." },
      { question: "Devons-nous prévoir les photos de couple en centre-ville ?", answer: "Non. Nous pouvons en faire quelques-unes après la cérémonie si le programme le permet, ou les garder pour un moment plus calme près de la réception." },
      { question: "Photographiez-vous aussi les mariages autour de Valence ?", answer: "Oui. Si la cérémonie se passe en ville et la réception dans une commune voisine, je peux raconter ces deux ambiances dans le même reportage. Dites-moi surtout quels moments vous souhaitez garder en images." },
    ],
    photos: {
      opening: [
        photo("mariage_valence", "Clothilde & Loïc.jpg", "Mariés et invités devant la mairie de Valence."),
        photo("mariage_valence", "David & Sonia.jpg", "Façade de la mairie de Valence lors d'un mariage."),
      ],
      place: [
        photo("mariage_valence", "Clothilde & Loïc_53.jpg", "Invités réunis dans la salle de cérémonie civile de Valence."),
        photo("mariage_valence", "Clothilde & Loïc_90.jpg", "Mariés et proches pendant une cérémonie civile."),
        photo("mariage_valence", "Clothilde & Loïc_95.jpg", "Mariés au centre de la salle de cérémonie civile."),
        photo("mariage_valence", "David & Sonia_79.jpg", "Mariés se tenant la main pendant la cérémonie civile."),
      ],
      approach: [
        photo("mariage_valence", "David & Sonia_195.jpg", "Portrait des mariés à l'ombre des arbres."),
        photo("mariage_valence", "David & Sonia_211.jpg", "Mains des mariés portant leurs alliances."),
      ],
      afterPackages: [
        photo("mariage_valence", "Marine & Mickael_40.jpg", "Mariés et invités dans une salle de cérémonie civile."),
        photo("mariage_valence", "Marine & Mickael_118.jpg", "Mariés sortant de la mairie sous les applaudissements."),
      ],
      closing: [
        photo("mariage_valence", "Marine & Mickael.jpg", "Mariés enlacés dans la salle de cérémonie civile."),
      ],
    },
  },
  montelimar: {
    slug: "photographe-mariage-montelimar",
    title: "Photographe de mariage à Montélimar",
    seoTitle: "Photographe de mariage à Montélimar | Life Focus",
    description: "Je me déplace depuis Romans-sur-Isère pour photographier votre mariage à Montélimar et en Drôme provençale. Reportage naturel, formules et contact.",
    region: "Montélimar · Drôme provençale",
    introduction: [
      "Je suis basé à Romans-sur-Isère et me déplace à Montélimar pour raconter les mariages avec une approche naturelle. Des préparatifs à la réception, je cherche les gestes, les liens et l'atmosphère qui rendent votre journée singulière.",
      "Nous prenons le temps de parler de votre déroulé en amont pour que les photos trouvent leur place sans vous éloigner inutilement de vos invités.",
    ],
    placeTitle: "Une cérémonie en ville, une réception dans les environs",
    placeParagraphs: [
      "Le centre historique et la silhouette du château des Adhémar donnent son caractère à Montélimar. Pour une cérémonie civile à la mairie, je pense d'abord aux moments qui s'y déroulent vraiment : l'arrivée des proches, la cérémonie et les échanges à la sortie, avant le départ vers la réception.",
      "J'ai déjà travaillé à Maison Claudie, à Allan, et aux Terres de Sarson, à Grignan. À Allan, le lieu soigné laisse vivre les échanges sans imposer de mise en scène ; à Grignan, les espaces donnent une atmosphère différente aux préparatifs, au cocktail et à la soirée. Ces deux adresses demandent chacune de penser la transition depuis une cérémonie à Montélimar : selon votre programme, les photos de groupe auront davantage leur place une fois arrivés à la réception.",
      "Le secteur ne se résume pas à la ville : La Bâtie-Rolland, Marsanne et surtout Mirmande ouvrent d'autres possibilités autour de Montélimar. Les vieilles pierres de Marsanne et les ruelles du village perché de Mirmande ont une présence bien différente d'une cérémonie en centre-ville. Si vous avez choisi de vous marier dans l'un de ces villages, c'est cette atmosphère que je chercherai à garder dans les images.",
    ],
    planningTitle: "Prendre le temps sans allonger les trajets",
    planningParagraphs: [
      "À Maison Claudie, les terrasses et les oliviers font déjà partie du récit ; aux Terres de Sarson, la vue et les espaces ouverts invitent à attendre que la lumière baisse. Dans la Drôme provençale, les lavandes peuvent aussi entrer dans le cadre lorsqu'elles sont en fleurs, sans devenir une condition pour de belles images. Je préfère chercher un moment de couple dans le lieu où se poursuit votre mariage plutôt que d'ajouter un arrêt entre la ville et la réception.",
    ],
    approach: [
      "Je reste attentif aux proches, aux imprévus et à ce qui se passe hors du centre de l'attention. Je peux vous orienter pour les photos de couple ou de famille, puis retrouver une présence discrète pour le reportage.",
    ],
    resource: { href: "/conseils/plus-beaux-domaines-mariage-drome/", label: "Découvrir des domaines de mariage dans la Drôme" },
    faq: [
      { question: "Vous déplacez-vous de Romans-sur-Isère jusqu'à Montélimar ?", answer: "Oui, selon votre projet. Donnez-moi les adresses de la cérémonie et de la réception : les formules n'ont pas toutes le même périmètre de déplacement, et nous vérifierons ensemble les conditions applicables." },
      { question: "Comment organiser les photos de groupe entre la mairie et le domaine ?", answer: "Si vos proches reprennent la route après la cérémonie, il est souvent plus simple de les réunir au lieu de réception. Nous pouvons choisir ce moment avant le jour J, en tenant compte de l'arrivée des invités et du cocktail." },
      { question: "Faut-il prévoir un arrêt en ville pour les portraits ?", answer: "Seulement si cela s'intègre naturellement à votre parcours. Quand la réception se déroule à Allan ou à Grignan, je peux aussi chercher avec vous un moment de couple une fois sur place." },
      { question: "Peut-on imaginer un mariage vers Marsanne ou Mirmande ?", answer: "Oui, ces villages offrent un cadre différent de Montélimar. Si vous y avez choisi un lieu, racontez-moi ce qui vous plaît dans son atmosphère : les photos pourront s'accorder à votre journée sans chercher à reconstituer un décor de carte postale." },
    ],
    photos: {
      opening: [
        photo("mariage_montelimar", "Emilie & Julien_192.jpg", "Mariés assis sur un muret en pierre avec le paysage derrière eux."),
        photo("mariage_montelimar", "Emilie & Julien_212.jpg", "Portrait en noir et blanc des mariés sous une arche de pierre."),
      ],
      place: [
        photo("mariage_montelimar", "Emilie & Julien_202.jpg", "Mariés assis sur les marches en pierre d'un village."),
        photo("mariage_montelimar", "Emilie & Julien_230.jpg", "Mariés saluant depuis une voiture ancienne dans une rue de village."),
        photo("mariage_montelimar", "Hélène & Florian_212.jpg", "Mariés accueillis par leurs proches à la sortie d'une cérémonie."),
        photo("mariage_montelimar", "Krissmed & Eric_7.jpg", "Mariés dans une église éclairée par un lustre."),
        photo("mariage_montelimar", "Krissmed & Eric_8.jpg", "Mariés et invités à la sortie d'une église sous une pluie de confettis."),
      ],
      approach: [
        photo("mariage_montelimar", "Hélène & Florian_231.jpg", "Couple de mariés devant une voiture ancienne dans un parc."),
        photo("mariage_montelimar", "Hélène & Florian_265.jpg", "Mariés s'embrassant devant des fleurs roses."),
        photo("mariage_montelimar", "Krissmed & Eric_9.jpg", "Portrait en noir et blanc des mariés vu à travers une voiture."),
      ],
      afterPackages: [
        photo("mariage_montelimar", "Krissmed & Eric_12.jpg", "Mariés et invités réunis dans le jardin d'un domaine."),
        photo("mariage_montelimar", "Krissmed & Eric_13.jpg", "Mariée célébrant avec ses invités sur la pelouse."),
        photo("mariage_montelimar", "Marine & Mickael_7.jpg", "Mariés dans un champ de tournesols en fin de journée."),
        photo("mariage_montelimar", "Marine & Mickael_8 1.jpg", "Mariés enlacés devant un champ de tournesols au coucher du soleil."),
      ],
      closing: [
        photo("mariage_montelimar", "Omblinne & Cyril_259.jpg", "Mariés s'embrassant sous les arbres, le voile porté par le vent."),
        photo("mariage_montelimar", "Omblinne & Cyril_293.jpg", "Mariés près d'une voiture blanche dans un jardin."),
        photo("mariage_montelimar", "Omblinne & Cyril_306.jpg", "Portrait des mariés entourés de végétation."),
      ],
    },
  },
  ardeche: {
    slug: "photographe-mariage-ardeche",
    title: "Photographe de mariage en Ardèche",
    seoTitle: "Photographe de mariage en Ardèche | Life Focus",
    description: "Photographe de mariage en Ardèche, basé à Romans-sur-Isère. Je raconte votre journée avec discrétion et spontanéité, des proches aux paysages qui l'entourent.",
    region: "Ardèche · depuis Romans-sur-Isère",
    introduction: [
      "Je suis photographe de mariage basé à Romans-sur-Isère, dans la Drôme, et je peux vous accompagner pour votre mariage en Ardèche. Ce qui m'intéresse reste le même, quel que soit le lieu : les personnes, les gestes et la façon dont votre journée se vit vraiment.",
      "Je reste attentif aux grands moments comme aux petits détails qui échappent au programme, pour que vos images racontent aussi ce que vous n'avez pas vu sur le moment.",
    ],
    placeTitle: "Des paysages différents, une histoire qui reste la vôtre",
    placeParagraphs: [
      "Près de Valence, Guilherand-Granges et Saint-Péray ont pour horizon le Rhône et les reliefs ardéchois. Vers Tournon-sur-Rhône, les coteaux viticoles donnent un autre caractère aux images. Plus au sud, les villages et les paysages changent encore : je ne cherche pas à faire entrer tous les mariages ardéchois dans le même décor.",
      "Que vous célébriez votre union dans un village, un domaine ou chez vous, je porte mon attention sur ce qui se passe entre les personnes. Le lieu a sa place dans le reportage, mais il ne doit pas prendre celle de votre histoire.",
    ],
    planningTitle: "Laisser le lieu exister sans en faire une mise en scène",
    planningParagraphs: [
      "Les paysages peuvent inspirer quelques portraits, mais il n'est pas nécessaire de bâtir la journée autour d'un point de vue. Je regarde la lumière et les espaces du lieu que vous avez choisi, puis je vous guide juste assez pour que ce moment à deux reste naturel.",
    ],
    approach: [
      "Je vous conseille en amont, puis je reste disponible le jour J sans diriger chaque instant. Mon travail est d'observer les liens et l'ambiance, de vous guider quand c'est utile et de vous laisser profiter de vos proches.",
    ],
    faq: [
      { question: "Quelle place donnez-vous aux paysages ardéchois dans le reportage ?", answer: "Ils racontent l'atmosphère du mariage, sans éclipser les personnes. Je photographie aussi bien le cadre que les échanges, les gestes et les moments que vous vivez avec vos proches." },
      { question: "Devons-nous choisir un décor particulier pour les photos de couple ?", answer: "Non. Un coin tranquille près de votre lieu de mariage peut suffire. Je vous propose un moment à deux selon la lumière et l'ambiance de la journée, sans séance figée." },
      { question: "Comment préparez-vous les photos de famille ?", answer: "Nous parlons avant le mariage des groupes qui comptent pour vous. Le jour J, je vous guide pour réaliser ces images simplement, puis je retrouve une place plus discrète dans le reportage." },
      { question: "Et si la météo change le jour du mariage ?", answer: "Je m'adapte à la lumière et aux espaces disponibles. Les images ne dépendent pas d'un panorama précis ou d'un programme photo arrêté à la minute." },
    ],
    photos: {
      opening: [
        photo("mariage_ardeche", "Flavie & Anthony_459.jpg", "Mariée seule dans une prairie à la lumière du soir."),
        photo("mariage_ardeche", "Flavie & Anthony_470.jpg", "Mariés enlacés dans une prairie au soleil couchant."),
      ],
      place: [
        photo("mariage_ardeche", "Flavie & Anthony_39.jpg", "Mariés se tenant la main sous les arbres."),
        photo("mariage_ardeche", "Flavie & Anthony_502.jpg", "Marié et amis célébrant dans un bois."),
        photo("mariage_ardeche", "Flavie & Anthony_556.jpg", "Mariés avançant parmi leurs invités à la lumière du soir."),
      ],
      approach: [
        photo("mariage_ardeche", "Hélène & Florian_265.jpg", "Mariés s'embrassant devant des fleurs roses."),
        photo("mariage_ardeche", "Typhanie & François_2.jpg", "Mariés embrassant leur bébé sous les arbres."),
        photo("mariage_ardeche", "Typhanie & François_3.jpg", "Mariés avec leur bébé dans un sous-bois."),
      ],
      afterPackages: [
        photo("mariage_ardeche", "Typhanie & François_5.jpg", "Mariés dans un paysage de collines à la lumière du soir."),
        photo("mariage_ardeche", "Typhanie & François_6.jpg", "Mariée en robe blanche sous les arbres."),
      ],
      closing: [
        photo("mariage_ardeche", "Typhanie & François_21.jpg", "Mariés assis au premier rang pendant une cérémonie civile."),
        photo("mariage_ardeche", "Typhanie & François.jpg", "Mariés échangeant leurs alliances pendant une cérémonie civile."),
      ],
    },
  },
};
