import type { ImageMetadata } from "astro";

import { homeImages } from "./homeImages";

export interface FamilyServiceImage {
  src: ImageMetadata;
  alt: string;
  size?: "wide" | "portrait" | "small";
  slotPath?: string;
  slotOrientation?: "horizontal" | "vertical" | "square";
}

export interface FamilyServiceLink {
  label: string;
  href: string;
}

export interface FamilyServiceFaq {
  question: string;
  answer: string;
}

export interface FamilyServicePackage {
  title: string;
  price: string;
  text: string;
  href?: string;
  linkLabel?: string;
}

export interface FamilyServicePricingTexts {
  included: string[];
  formula: {
    context: string;
    details: string[];
  };
  combined?: {
    details: string[];
  };
}

export interface FamilyServicePageData {
  label: string;
  title: string;
  description: string;
  canonicalUrl: string;
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    image: FamilyServiceImage;
    secondaryImage: FamilyServiceImage;
  };
  approach: {
    label: string;
    title: string;
    text: string;
    image: FamilyServiceImage;
  };
  editorialBlock?: {
    label: string;
    title: string;
    text: string;
  };
  adviceBlock?: {
    label: string;
    title: string;
    text: string;
    href: string;
    linkLabel: string;
  };
  package?: FamilyServicePackage;
  pricing?: FamilyServicePricingTexts;
  gallery: FamilyServiceImage[];
  links: FamilyServiceLink[];
  faq: FamilyServiceFaq[];
}

const image = (
  src: ImageMetadata,
  alt: string,
  size?: FamilyServiceImage["size"],
  slotPath?: string,
  slotOrientation?: FamilyServiceImage["slotOrientation"],
) => ({
  src,
  alt,
  size,
  slotPath,
  slotOrientation,
});

const baseGallery = [
  image(homeImages.familyMain.src, "Famille réunie dehors dans un moment naturel.", "wide"),
  image(homeImages.weddingSecondary.src, "Portrait vertical dans un champ fleuri.", "portrait"),
  image(homeImages.breathing.src, "Portrait naturel dans un champ de lavande.", "small"),
  image(homeImages.familySecondary.src, "Moment de famille simple et lumineux.", "wide"),
  image(homeImages.weddingMain.src, "Couple photographié dans une lumière douce.", "small"),
  image(homeImages.heroSecondary.src, "Portrait vertical en extérieur.", "portrait"),
  image(homeImages.hero.src, "Couple dans un paysage de campagne.", "wide"),
  image(homeImages.familyMain.src, "Instant vivant en famille.", "small"),
  image(homeImages.weddingSecondary.src, "Portrait vertical dans la nature.", "portrait"),
  image(homeImages.breathing.src, "Portrait calme en extérieur.", "wide"),
  image(homeImages.familySecondary.src, "Image naturelle autour de la famille.", "small"),
  image(homeImages.heroSecondary.src, "Portrait vertical dans un champ.", "portrait"),
] satisfies FamilyServiceImage[];

const standardFaq = {
  duration:
    "La séance dure 1 heure. Ce format permet de garder un rythme simple, sans installer une organisation lourde.",
  price:
    "Le tarif est de 250 € pour 1 heure de séance, sans limite de photos livrées.",
  delivered:
    "Les photos livrées ne sont pas limitées en nombre. Alexis garde les images cohérentes et utiles après le tri.",
};

export const familyServices = {
  grossesse: {
    label: "Grossesse",
    title: "Photographe grossesse Drôme, Romans & Valence | Life Focus",
    description:
      "Séance grossesse naturelle en extérieur autour de Romans-sur-Isère, Valence et dans la Drôme, seule, en couple ou en famille.",
    canonicalUrl: "https://www.lifefocus.fr/grossesse/",
    hero: {
      eyebrow: "GROSSESSE",
      title: "Photographe grossesse dans la Drôme",
      text:
        "Une séance grossesse naturelle en extérieur, autour de Romans-sur-Isère, Valence et dans la Drôme, pour garder une trace de cette période dans un cadre simple, vivant et lumineux.",
      image: image(homeImages.breathing.src, "Femme enceinte en extérieur dans un paysage naturel.", "wide"),
      secondaryImage: image(homeImages.weddingSecondary.src, "Séance grossesse en plein air avec un portrait naturel.", "portrait"),
    },
    approach: {
      label: "01 / APPROCHE",
      title: "Laisser de la place au corps, aux liens, au moment.",
      text:
        "Pas besoin de savoir poser. La séance se déroule principalement dehors, en lumière naturelle, avec quelques indications lorsque vous en avez besoin. Seule, en couple ou avec vos enfants, je cherche surtout à photographier votre grossesse naturellement, en laissant de la place aux gestes, aux liens et à ce qui se passe entre vous.",
      image: image(homeImages.breathing.src, "Portrait naturel dans une lumière douce.", "wide"),
    },
    editorialBlock: {
      label: "EXPÉRIENCE",
      title: "Dehors, simplement.",
      text:
        "Nous choisissons un lieu calme autour de Romans-sur-Isère, Valence ou ailleurs dans la Drôme, selon la saison, la lumière et ce qui vous ressemble. J'aime travailler en fin de journée, quand la lumière devient plus douce : un chemin, un coin de campagne, une forêt ou un paysage ouvert suffisent. Le décor accompagne les images, sans prendre toute la place.",
    },
    adviceBlock: {
      label: "REPÈRE",
      title: "Trouver le lieu de votre séance.",
      text:
        "Parc, hautes herbes, forêt, bords du Rhône, lavandes ou couleurs d'automne : j'ai rassemblé quelques lieux et paysages que j'aime autour de Romans et Valence, avec mes conseils selon la lumière et les saisons.",
      href: "/conseils/ou-faire-seance-photo-grossesse-drome/",
      linkLabel: "Où faire une séance photo grossesse dans la Drôme ? →",
    },
    package: {
      title: "GROSSESSE + NAISSANCE",
      price: "450 €",
      text:
        "Deux séances d’environ 1 heure pour raconter la continuité entre l’attente et les premiers jours de votre bébé.",
      href: "/naissance/",
      linkLabel: "DÉCOUVRIR LA SÉANCE NAISSANCE →",
    },
    pricing: {
      included: [
        "Une séance photo d’environ 1 heure, principalement en extérieur.",
        "Toutes les photographies sélectionnées sont traitées et retouchées naturellement.",
        "Les photographies sont livrées en haute définition, sans limite de nombre.",
        "Déplacement inclus jusqu’à 30 km autour de Valence.",
        "Livraison de la galerie numérique sous 1 semaine maximum.",
      ],
      formula: {
        context:
          "Une séance grossesse d’environ 1 heure, seule, en couple ou avec vos enfants, le plus souvent en extérieur et en lumière naturelle.",
        details: [
          "Photos livrées sans limite de nombre.",
          "Un moment simple et guidé juste ce qu’il faut, sans poses figées.",
        ],
      },
      combined: {
        details: ["Deux séances d’1 h."],
      },
    },
    gallery: baseGallery,
    links: [
      { label: "DÉCOUVRIR LA SÉANCE NAISSANCE →", href: "/naissance/" },
      { label: "DÉCOUVRIR LA SÉANCE FAMILLE →", href: "/famille/" },
    ],
    faq: [
      {
        question: "Quand faire une séance photo grossesse ?",
        answer:
          "Le moment idéal se situe généralement autour du 6e mois de grossesse, lorsque le ventre est bien visible tout en restant confortable pour vous. Nous ajustons surtout la période en fonction de votre grossesse, de vos envies et du type de photos que vous souhaitez réaliser.",
      },
      {
        question: "Combien de temps dure une séance grossesse ?",
        answer:
          "La séance dure environ 1 heure. Ce format permet de prendre le temps de créer des images variées tout en gardant un moment simple et naturel.",
      },
      {
        question: "Quel est le tarif d’une séance grossesse ?",
        answer:
          "Le tarif est de 250 € pour une séance d’environ 1 heure. Les photographies sélectionnées et retouchées sont livrées sans limite de nombre dans une galerie numérique.",
      },
      {
        question: "Peut-on faire la séance grossesse en couple ?",
        answer:
          "Oui. Votre partenaire peut naturellement participer à la séance. L’objectif est aussi de photographier votre relation et cette période que vous vivez ensemble.",
      },
      {
        question: "Peut-on venir avec les enfants ?",
        answer:
          "Oui. Si vous avez déjà des enfants, ils peuvent participer à une partie ou à l’ensemble de la séance afin de créer également des photographies de votre famille avant l’arrivée du bébé.",
      },
      {
        question: "Comment s’habiller pour une séance grossesse ?",
        answer:
          "Choisissez avant tout des vêtements dans lesquels vous vous sentez vous-même. Les couleurs claires et les tenues sans motif fonctionnent souvent très bien, car elles gardent l’image douce et intemporelle. Nous pouvons aussi échanger avant la séance sur les matières et les couleurs selon le lieu choisi.",
      },
      {
        question: "Où se déroule la séance photo grossesse ?",
        answer:
          "Je privilégie les séances grossesse en extérieur, généralement autour de Romans-sur-Isère, Valence et dans la Drôme. Je vous aide à choisir un endroit adapté à la saison, à la lumière et à votre personnalité, tout en gardant de la souplesse si une autre situation a plus de sens pour vous.",
      },
      {
        question: "Combien de photos sont livrées ?",
        answer:
          "Je ne fixe pas de nombre maximum. En général, une séance grossesse permet de livrer environ 30 à 50 photographies sélectionnées et retouchées, selon le rythme de la séance et les images qui apportent quelque chose à votre histoire.",
      },
      {
        question: "Quand faut-il réserver sa séance grossesse ?",
        answer:
          "Vous pouvez me contacter dès que vous souhaitez commencer à organiser la séance. Réserver suffisamment tôt permet surtout d’avoir davantage de liberté pour choisir la période et la date qui vous conviennent.",
      },
      {
        question: "Peut-on réserver les séances grossesse et naissance ensemble ?",
        answer:
          "Oui. La formule Grossesse + Naissance est proposée à 450 € pour deux séances d’environ 1 heure. Elle permet de raconter en images l’attente de votre bébé puis ses premiers jours.",
      },
    ],
  },
  naissance: {
    label: "Naissance",
    title: "Photographe naissance Drôme, Romans & Valence | Life Focus",
    description:
      "Reportage naissance à domicile autour de Romans-sur-Isère, Valence et dans la Drôme, au rythme de votre bébé et de votre famille.",
    canonicalUrl: "https://www.lifefocus.fr/naissance/",
    hero: {
      eyebrow: "NAISSANCE",
      title: "Photographe naissance dans la Drôme",
      text:
        "Un reportage naissance à domicile autour de Romans-sur-Isère, Valence et dans la Drôme, pensé autour du rythme de votre bébé et de vos premiers moments en famille.",
      image: image(homeImages.familySecondary.src, "Parents et bébé dans un moment simple et naturel.", "wide"),
      secondaryImage: image(homeImages.weddingSecondary.src, "Portrait de famille au naturel en extérieur.", "portrait"),
    },
    approach: {
      label: "01 / APPROCHE",
      title: "Suivre le rythme du bébé avant tout.",
      text:
        "Je viens chez vous, dans votre quotidien. Pas de rythme imposé, de décor artificiel ou de posing forcé : la séance s’adapte à votre bébé, aux pauses, aux bras et aux petits imprévus. Je photographie les regards, la fratrie, les gestes, les détails de la maison et tout ce qui raconte votre vie de famille à ce moment-là.",
      image: image(homeImages.familyMain.src, "Famille dans un instant calme, dehors, pendant une séance photo.", "wide"),
    },
    editorialBlock: {
      label: "EXPÉRIENCE",
      title: "Chez vous, là où tout commence.",
      text:
        "La séance se déroule principalement à domicile, pour éviter de déplacer votre bébé et rester dans un environnement familier. On avance avec la lumière disponible, les pauses, les repas, les bras, les frères et sœurs s'il y en a. Votre maison n'a pas besoin d'être parfaite ni particulièrement lumineuse : elle devient simplement le décor réel de ces premiers jours.",
    },
    adviceBlock: {
      label: "REPÈRE",
      title: "Comment se passe une séance à la maison ?",
      text:
        "Le rythme du bébé, les pauses, la lumière, les vêtements, la chambre, les frères et sœurs : j'ai rassemblé quelques conseils pour vous montrer concrètement comment se déroule un reportage naissance à domicile.",
      href: "/conseils/seance-photo-naissance-domicile/",
      linkLabel: "Préparer votre séance naissance à la maison →",
    },
    package: {
      title: "GROSSESSE + NAISSANCE",
      price: "450 €",
      text:
        "Deux séances d’environ 1 heure pour raconter la continuité entre l’attente de votre bébé et ses premiers jours.",
      href: "/grossesse/",
      linkLabel: "DÉCOUVRIR LA SÉANCE GROSSESSE →",
    },
    pricing: {
      included: [
        "Une séance photo d’environ 1 heure à domicile, adaptée au rythme de votre bébé.",
        "Toutes les photographies sélectionnées sont traitées et retouchées naturellement.",
        "Les photographies sont livrées en haute définition, sans limite de nombre.",
        "Déplacement inclus jusqu’à 30 km autour de Valence.",
        "Livraison de la galerie numérique sous 1 semaine maximum.",
      ],
      formula: {
        context:
          "Une séance naissance d’environ 1 heure à domicile pour photographier votre bébé, les parents et, si vous le souhaitez, les frères et sœurs.",
        details: [
          "Photos livrées sans limite de nombre.",
          "Une séance souple, guidée juste ce qu’il faut, sans mise en scène lourde.",
        ],
      },
      combined: {
        details: ["Deux séances d’1 h."],
      },
    },
    gallery: [...baseGallery].reverse(),
    links: [
      { label: "DÉCOUVRIR LA SÉANCE GROSSESSE →", href: "/grossesse/" },
      { label: "DÉCOUVRIR LA SÉANCE FAMILLE →", href: "/famille/" },
    ],
    faq: [
      {
        question: "Quand faire une séance photo naissance ?",
        answer:
          "Il n’existe pas un seul moment obligatoire. J’aime généralement réaliser la séance après les 15 premiers jours, lorsque chacun commence à trouver un peu son rythme. Nous choisissons ensemble le moment qui vous convient selon votre récupération, le rythme de votre bébé et les images que vous souhaitez garder.",
      },
      {
        question: "Combien de temps dure une séance naissance ?",
        answer:
          "La séance dure environ 1 heure. Le rythme reste souple afin de laisser de la place aux pauses, aux biberons, aux changes ou simplement au besoin de prendre votre bébé dans les bras.",
      },
      {
        question: "Quel est le tarif d’une séance naissance ?",
        answer:
          "Le tarif est de 250 € pour une séance d’environ 1 heure. Les photographies sélectionnées et retouchées sont livrées sans limite de nombre dans une galerie numérique.",
      },
      {
        question: "La séance respecte-t-elle le rythme du bébé ?",
        answer:
          "Oui, toujours. Aucun déroulé rigide n’est imposé. Si votre bébé a besoin d’une pause, de manger, de dormir ou simplement d’être dans vos bras, nous adaptons naturellement la séance.",
      },
      {
        question: "Les parents participent-ils aux photos ?",
        answer:
          "Oui, et je le recommande. Une séance naissance ne raconte pas seulement votre bébé : elle raconte aussi vos premiers gestes, vos regards et la manière dont votre famille se construit autour de lui.",
      },
      {
        question: "Peut-on inclure les frères et sœurs ?",
        answer:
          "Oui. Les frères et sœurs peuvent participer afin de garder une trace de ces premiers moments en famille. Je m’adapte simplement à leur âge et à leur envie de participer.",
      },
      {
        question: "Où se déroule la séance photo naissance ?",
        answer:
          "Les reportages naissance se déroulent principalement à votre domicile, autour de Romans-sur-Isère, Valence et dans la Drôme. Je m’adapte à la lumière disponible et à votre rythme : vous n’avez pas besoin d’avoir une maison parfaite, très lumineuse ou entièrement rangée.",
      },
      {
        question: "Combien de photos sont livrées ?",
        answer:
          "Je ne fixe pas de nombre maximum. En général, une séance naissance permet de livrer environ 30 à 50 photographies sélectionnées et retouchées, selon le rythme de votre bébé et les images qui apportent quelque chose à l’histoire de votre séance.",
      },
      {
        question: "Quand réserver une séance naissance ?",
        answer:
          "Vous pouvez me contacter pendant la grossesse afin d’anticiper la séance, puis nous ajustons la date autour de la naissance. Il est également possible de me contacter après l’arrivée de votre bébé selon mes disponibilités.",
      },
      {
        question: "Peut-on réserver grossesse et naissance ensemble ?",
        answer:
          "Oui. La formule Grossesse + Naissance est proposée à 450 € pour deux séances d’environ 1 heure. Elle permet de raconter en images la grossesse puis les premiers jours avec votre bébé.",
      },
    ],
  },
  famille: {
    label: "Famille",
    title: "Photographe famille Drôme & Valence | Life Focus",
    description:
      "Photographe famille à Romans-sur-Isère, Valence et dans la Drôme. Une séance photo naturelle et vivante, avec vos enfants, à partir de 250 €.",
    canonicalUrl: "https://www.lifefocus.fr/famille/",
    hero: {
      eyebrow: "FAMILLE",
      title: "Photographe famille dans la Drôme",
      text:
        "Une séance photo famille naturelle à Romans-sur-Isère, Valence et dans la Drôme, pour garder des images vivantes de vous, sans demander aux enfants de rester immobiles.",
      image: image(homeImages.familyMain.src, "Famille réunie dehors dans un moment vivant.", "wide"),
      secondaryImage: image(homeImages.weddingSecondary.src, "Portrait naturel de famille en extérieur.", "portrait"),
    },
    approach: {
      label: "01 / APPROCHE",
      title: "Photographier ce qui circule entre vous.",
      text:
        "Pas besoin de savoir poser ni de demander aux enfants de regarder l’appareil. La séance suit les mouvements, les jeux, les gestes et les interactions. Je vous guide lorsque c’est utile, puis je laisse surtout votre famille vivre le moment.",
      image: image(homeImages.familySecondary.src, "Famille en plein air dans un moment naturel.", "wide"),
    },
    pricing: {
      included: [
        "Une séance photo d’environ 1 heure, adaptée au rythme de votre famille.",
        "Toutes les photographies sélectionnées sont traitées et retouchées naturellement.",
        "Les photographies sont livrées en haute définition, sans limite de nombre.",
        "Déplacement inclus jusqu’à 30 km autour de Valence.",
        "Livraison de la galerie numérique sous 1 semaine maximum.",
      ],
      formula: {
        context:
          "Une séance famille d’environ 1 heure, avec les enfants et les personnes qui comptent pour vous, en intérieur ou en extérieur.",
        details: [
          "Photos livrées sans limite de nombre.",
          "Un moment vivant et guidé juste ce qu’il faut, sans poses figées ni organisation lourde.",
        ],
      },
    },
    gallery: [
      baseGallery[3],
      baseGallery[1],
      baseGallery[0],
      baseGallery[4],
      baseGallery[7],
      baseGallery[5],
      baseGallery[9],
      baseGallery[2],
      baseGallery[8],
      baseGallery[10],
      baseGallery[6],
      baseGallery[11],
    ],
    links: [
      { label: "DÉCOUVRIR LA SÉANCE GROSSESSE →", href: "/grossesse/" },
      { label: "DÉCOUVRIR LA SÉANCE NAISSANCE →", href: "/naissance/" },
    ],
    faq: [
      {
        question: "Combien de temps dure une séance photo famille ?",
        answer:
          "La séance dure environ 1 heure. Ce format laisse suffisamment de temps pour que chacun prenne ses marques tout en gardant un rythme naturel, notamment avec les enfants.",
      },
      {
        question: "Quel est le tarif d’une séance photo famille ?",
        answer:
          "Le tarif est de 250 € pour une séance d’environ 1 heure. Les photographies sélectionnées et retouchées sont livrées sans limite de nombre dans une galerie numérique.",
      },
      {
        question: "Combien de photos sont livrées ?",
        answer:
          "Je ne fixe pas de nombre maximum. Après le tri et la retouche, je vous livre toutes les photographies sélectionnées qui apportent quelque chose à l’histoire de votre séance.",
      },
      {
        question: "Les enfants doivent-ils poser ?",
        answer:
          "Non. Au contraire, je préfère les laisser bouger, jouer, explorer et interagir avec vous. Je donne quelques indications lorsque c’est utile, mais l’objectif est de photographier votre famille telle qu’elle est réellement.",
      },
      {
        question: "À partir de quel âge peut-on faire une séance famille ?",
        answer:
          "Il n’y a pas d’âge minimum ou idéal. J’adapte simplement la séance au rythme et à l’âge des enfants afin que le moment reste agréable pour toute la famille.",
      },
      {
        question: "Où peut-on faire une séance photo famille ?",
        answer:
          "Je suis basé à Romans-sur-Isère et je me déplace notamment autour de Valence et dans la Drôme. Nous choisissons ensemble un lieu adapté à votre famille et à l’ambiance que vous souhaitez : nature, ville ou lieu plus personnel.",
      },
      {
        question: "Comment s’habiller pour une séance famille ?",
        answer:
          "Choisissez surtout des vêtements dans lesquels vous vous sentez bien. L’idée n’est pas d’être habillés de manière identique, mais d’avoir des couleurs et des matières qui fonctionnent bien ensemble. Nous pouvons en discuter avant la séance.",
      },
      {
        question: "Peut-on venir avec plusieurs enfants ?",
        answer:
          "Oui. La séance s’adapte naturellement à la composition de votre famille. Avec plusieurs enfants, je privilégie encore davantage les interactions et les moments spontanés plutôt qu’une succession de poses.",
      },
      {
        question: "Peut-on faire des photos avec les grands-parents ?",
        answer:
          "Oui. Une séance peut aussi réunir plusieurs générations. Les grands-parents peuvent participer à tout ou partie de la séance afin de créer des photographies de famille qui auront souvent encore plus de valeur avec le temps.",
      },
      {
        question: "Quand réserver une séance famille ?",
        answer:
          "Vous pouvez me contacter dès que vous avez une période en tête. Réserver suffisamment tôt permet simplement d’avoir davantage de choix pour la date, notamment pour les week-ends et certaines périodes de l’année.",
      },
    ],
  },
} satisfies Record<string, FamilyServicePageData>;
