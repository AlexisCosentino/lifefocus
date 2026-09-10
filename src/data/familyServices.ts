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
    title: "Photographe grossesse Drôme & Valence | Life Focus",
    description:
      "Photographe grossesse à Romans-sur-Isère, Valence et dans la Drôme. Une séance photo naturelle, seule, en couple ou en famille, à partir de 250 €.",
    canonicalUrl: "https://lifefocus.fr/grossesse/",
    hero: {
      eyebrow: "GROSSESSE",
      title: "Photographe grossesse dans la Drôme",
      text:
        "Une séance photo grossesse naturelle à Romans-sur-Isère, Valence et dans la Drôme, pour garder une trace de cette période, seule, en couple ou en famille.",
      image: image(homeImages.breathing.src, "Portrait naturel dans une lumière douce.", "wide"),
      secondaryImage: image(homeImages.weddingSecondary.src, "Portrait de grossesse naturel en extérieur.", "portrait"),
    },
    approach: {
      label: "01 / APPROCHE",
      title: "Laisser de la place au corps, aux liens, au moment.",
      text:
        "Pas besoin de savoir poser. La séance reste simple et détendue, avec quelques indications lorsque vous en avez besoin. Je cherche surtout à photographier votre grossesse naturellement, en laissant de la place aux gestes, aux liens et à ce qui se passe entre vous.",
      image: image(homeImages.breathing.src, "Portrait naturel dans une lumière douce.", "wide"),
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
        "Une séance photo d’environ 1 heure, en intérieur ou en extérieur.",
        "Toutes les photographies sélectionnées sont traitées et retouchées naturellement.",
        "Les photographies sont livrées en haute définition, sans limite de nombre.",
        "Déplacement inclus jusqu’à 30 km autour de Valence.",
        "Livraison de la galerie numérique sous 1 semaine maximum.",
      ],
      formula: {
        context:
          "Une séance grossesse d’environ 1 heure, seule, en couple ou avec vos enfants, en intérieur ou en extérieur.",
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
          "Le moment idéal se situe généralement lorsque le ventre est bien visible tout en restant confortable pour vous. Nous choisissons surtout la période en fonction de votre grossesse, de vos envies et du type de photos que vous souhaitez réaliser.",
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
          "Choisissez avant tout des vêtements dans lesquels vous vous sentez bien. Nous pouvons échanger avant la séance sur les tenues, les matières et les couleurs afin qu’elles correspondent au lieu et à l’ambiance recherchée.",
      },
      {
        question: "Où se déroule la séance photo grossesse ?",
        answer:
          "Les séances peuvent être réalisées en extérieur ou dans un lieu qui correspond à l’ambiance recherchée. Je suis basé à Romans-sur-Isère et je me déplace notamment autour de Valence et dans la Drôme.",
      },
      {
        question: "Combien de photos sont livrées ?",
        answer:
          "Je ne fixe pas de nombre maximum. Après le tri et la retouche, je vous livre toutes les photographies sélectionnées qui apportent quelque chose à l’histoire de votre séance.",
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
    title: "Photographe naissance Drôme & Valence | Life Focus",
    description:
      "Photographe naissance à Romans-sur-Isère, Valence et dans la Drôme. Une séance photo bébé naturelle, au rythme de votre enfant, à partir de 250 €.",
    canonicalUrl: "https://lifefocus.fr/naissance/",
    hero: {
      eyebrow: "NAISSANCE",
      title: "Photographe naissance dans la Drôme",
      text:
        "Une séance photo naissance naturelle à Romans-sur-Isère, Valence et dans la Drôme, pensée autour du rythme de votre bébé et de vos premiers moments en famille.",
      image: image(homeImages.familySecondary.src, "Moment naturel autour d'une jeune famille.", "wide"),
      secondaryImage: image(homeImages.weddingSecondary.src, "Portrait vertical dans un champ fleuri.", "portrait"),
    },
    approach: {
      label: "01 / APPROCHE",
      title: "Suivre le rythme du bébé avant tout.",
      text:
        "Pas de rythme imposé ni de poses forcées. La séance s’adapte à votre bébé, aux pauses, aux bras et aux petits imprévus. Je photographie surtout les liens, les gestes et les détails de ces premiers jours, avec les parents et la fratrie lorsqu’ils souhaitent participer.",
      image: image(homeImages.familyMain.src, "Famille photographiée dans un moment calme.", "wide"),
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
        "Une séance photo d’environ 1 heure, adaptée au rythme de votre bébé.",
        "Toutes les photographies sélectionnées sont traitées et retouchées naturellement.",
        "Les photographies sont livrées en haute définition, sans limite de nombre.",
        "Déplacement inclus jusqu’à 30 km autour de Valence.",
        "Livraison de la galerie numérique sous 1 semaine maximum.",
      ],
      formula: {
        context:
          "Une séance naissance d’environ 1 heure pour photographier votre bébé, les parents et, si vous le souhaitez, les frères et sœurs.",
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
          "Il n’existe pas un seul moment obligatoire. La séance peut être réalisée dans les premiers jours ou un peu plus tard selon votre récupération, le rythme de votre bébé et les images que vous souhaitez garder. Nous choisissons ensemble le moment qui vous convient.",
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
          "Je suis basé à Romans-sur-Isère et je me déplace notamment autour de Valence et dans la Drôme. Le lieu de la séance est choisi avec vous selon votre situation, l’âge du bébé et l’ambiance recherchée.",
      },
      {
        question: "Combien de photos sont livrées ?",
        answer:
          "Je ne fixe pas de nombre maximum. Après le tri et la retouche, je vous livre toutes les photographies sélectionnées qui apportent quelque chose à l’histoire de votre séance.",
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
    canonicalUrl: "https://lifefocus.fr/famille/",
    hero: {
      eyebrow: "FAMILLE",
      title: "Photographe famille dans la Drôme",
      text:
        "Une séance photo famille naturelle à Romans-sur-Isère, Valence et dans la Drôme, pour garder des images vivantes de vous, sans demander aux enfants de rester immobiles.",
      image: image(homeImages.familyMain.src, "Famille photographiée dehors dans un moment vivant.", "wide"),
      secondaryImage: image(homeImages.weddingSecondary.src, "Portrait vertical dans un champ fleuri.", "portrait"),
    },
    approach: {
      label: "01 / APPROCHE",
      title: "Photographier ce qui circule entre vous.",
      text:
        "Pas besoin de savoir poser ni de demander aux enfants de regarder l’appareil. La séance suit les mouvements, les jeux, les gestes et les interactions. Je vous guide lorsque c’est utile, puis je laisse surtout votre famille vivre le moment.",
      image: image(homeImages.familySecondary.src, "Moment naturel avec une famille en extérieur.", "wide"),
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
