import type { ImageMetadata } from "astro";

import { homeImages } from "./homeImages";

export interface FamilyServiceImage {
  src: ImageMetadata;
  alt: string;
  size?: "wide" | "portrait" | "small";
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
  };
  approach: {
    label: string;
    title: string;
    text: string;
    image: FamilyServiceImage;
  };
  package?: FamilyServicePackage;
  gallery: FamilyServiceImage[];
  links: FamilyServiceLink[];
  faq: FamilyServiceFaq[];
}

const image = (src: ImageMetadata, alt: string, size?: FamilyServiceImage["size"]) => ({
  src,
  alt,
  size,
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
    title: "Photographe grossesse dans la Drôme - Life Focus",
    description:
      "Séance photo grossesse naturelle dans la Drôme, seule, en couple ou en famille, avec une approche simple et sensible.",
    canonicalUrl: "https://lifefocus.fr/grossesse/",
    hero: {
      eyebrow: "GROSSESSE",
      title: "Photographe grossesse dans la Drôme",
      text:
        "Une séance simple et naturelle pour garder une trace de cette période, seule, en couple ou en famille.",
      image: image(homeImages.weddingSecondary.src, "Portrait de grossesse naturel en extérieur.", "portrait"),
    },
    approach: {
      label: "01 / APPROCHE",
      title: "Laisser de la place au corps, aux liens, au moment.",
      text:
        "La séance reste détendue, avec des indications quand elles aident vraiment. L'idée est de photographier cette période sans poser un rôle autour de vous.",
      image: image(homeImages.breathing.src, "Portrait naturel dans une lumière douce.", "wide"),
    },
    package: {
      title: "GROSSESSE + NAISSANCE",
      price: "450 €",
      text:
        "Deux séances d'1h pour garder une continuité entre l'attente et les premiers jours.",
      href: "/naissance/",
      linkLabel: "DÉCOUVRIR LA SÉANCE NAISSANCE →",
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
          "Le bon moment dépend de votre rythme et de ce que vous souhaitez montrer. Ce point sera précisé avec Alexis au moment de préparer la séance.",
      },
      { question: "Combien de temps dure une séance grossesse ?", answer: standardFaq.duration },
      { question: "Quel est le tarif d'une séance grossesse ?", answer: standardFaq.price },
      {
        question: "Peut-on faire la séance en couple ?",
        answer:
          "Oui. La séance peut garder une place pour le couple si cela correspond à votre histoire et à vos envies.",
      },
      {
        question: "Peut-on venir avec les enfants ?",
        answer:
          "Oui, lorsque cela a du sens pour vous. L'objectif reste de garder un moment simple, sans demander aux enfants de jouer un rôle.",
      },
      {
        question: "Comment s'habiller pour une séance grossesse ?",
        answer:
          "La tenue sera discutée simplement selon votre style, la saison et l'ambiance recherchée. Rien ne doit vous empêcher d'être à l'aise.",
      },
      {
        question: "Où se déroule la séance ?",
        answer:
          "Le lieu sera choisi ensemble. Les détails précis seront affinés plus tard dans le contenu final.",
      },
      { question: "Combien de photos sont livrées ?", answer: standardFaq.delivered },
      {
        question: "Quand faut-il réserver ?",
        answer:
          "Le plus simple est d'écrire dès que la séance devient un projet concret, surtout si une période précise vous tient à cœur.",
      },
      {
        question: "Peut-on réserver grossesse et naissance ensemble ?",
        answer:
          "Oui. La formule Grossesse + Naissance est proposée à 450 € pour deux séances d'1h, sans limite de photos livrées.",
      },
    ],
  },
  naissance: {
    label: "Naissance",
    title: "Photographe naissance dans la Drôme - Life Focus",
    description:
      "Séance photo naissance naturelle dans la Drôme, pensée autour du rythme du bébé, des parents et des premiers gestes.",
    canonicalUrl: "https://lifefocus.fr/naissance/",
    hero: {
      eyebrow: "NAISSANCE",
      title: "Photographe naissance dans la Drôme",
      text:
        "Des images des premiers jours, à votre rythme, sans transformer ce moment en séance figée.",
      image: image(homeImages.familySecondary.src, "Moment naturel autour d'une jeune famille.", "wide"),
    },
    approach: {
      label: "01 / APPROCHE",
      title: "Suivre le rythme du bébé avant tout.",
      text:
        "La séance laisse de la place aux pauses, aux bras, aux détails et aux gestes du quotidien. Les parents et les frères et sœurs font partie de l'histoire.",
      image: image(homeImages.familyMain.src, "Famille photographiée dans un moment calme.", "wide"),
    },
    package: {
      title: "GROSSESSE + NAISSANCE",
      price: "450 €",
      text:
        "Deux séances d'1h pour relier l'attente, les premiers jours et les images que vous garderez ensemble.",
      href: "/grossesse/",
      linkLabel: "DÉCOUVRIR LA SÉANCE GROSSESSE →",
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
          "Le moment exact dépend de votre organisation et du rythme du bébé. Aucun délai précis n'est imposé ici sans validation avec Alexis.",
      },
      { question: "Combien de temps dure la séance ?", answer: standardFaq.duration },
      { question: "Quel est le tarif d'une séance naissance ?", answer: standardFaq.price },
      {
        question: "La séance respecte-t-elle le rythme du bébé ?",
        answer:
          "Oui. Le rythme du bébé passe avant la recherche d'une image figée ou d'une pose forcée.",
      },
      {
        question: "Les parents participent-ils aux photos ?",
        answer:
          "Oui, si vous le souhaitez. Les bras, les regards et les gestes simples racontent souvent beaucoup.",
      },
      {
        question: "Peut-on inclure les frères et sœurs ?",
        answer:
          "Oui, quand c'est adapté au moment. La séance reste souple pour ne pas créer de pression autour des enfants.",
      },
      {
        question: "Où se déroule la séance ?",
        answer:
          "Le lieu sera confirmé avec Alexis selon votre situation. Les règles précises ne sont pas figées dans cette version de contenu.",
      },
      { question: "Combien de photos sont livrées ?", answer: standardFaq.delivered },
      {
        question: "Quand réserver une séance naissance ?",
        answer:
          "Vous pouvez écrire dès que le projet est clair pour vous. L'organisation exacte sera ensuite ajustée ensemble.",
      },
      {
        question: "Peut-on réserver grossesse et naissance ensemble ?",
        answer:
          "Oui. La formule Grossesse + Naissance est proposée à 450 € pour deux séances d'1h, sans limite de photos livrées.",
      },
    ],
  },
  famille: {
    label: "Famille",
    title: "Photographe famille dans la Drôme - Life Focus",
    description:
      "Séance photo famille naturelle dans la Drôme, pour des images vivantes centrées sur les liens, le mouvement et les enfants.",
    canonicalUrl: "https://lifefocus.fr/famille/",
    hero: {
      eyebrow: "FAMILLE",
      title: "Photographe famille dans la Drôme",
      text:
        "Des images vivantes de votre famille, sans demander aux enfants de rester immobiles pour la photo.",
      image: image(homeImages.familyMain.src, "Famille photographiée dehors dans un moment vivant.", "wide"),
    },
    approach: {
      label: "01 / APPROCHE",
      title: "Photographier ce qui circule entre vous.",
      text:
        "La séance suit les interactions, les mouvements, les jeux et les liens. Les enfants n'ont pas besoin de performer pour que les images aient de la valeur.",
      image: image(homeImages.familySecondary.src, "Moment naturel avec une famille en extérieur.", "wide"),
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
      { question: "Combien de temps dure une séance photo famille ?", answer: standardFaq.duration },
      { question: "Quel est le tarif ?", answer: standardFaq.price },
      { question: "Combien de photos sont livrées ?", answer: standardFaq.delivered },
      {
        question: "Les enfants doivent-ils poser ?",
        answer:
          "Non. La séance cherche surtout le mouvement, les interactions et les gestes naturels.",
      },
      {
        question: "Quel âge doivent avoir les enfants ?",
        answer:
          "Il n'y a pas de règle précise indiquée ici. L'approche sera adaptée à l'âge et au rythme des enfants.",
      },
      {
        question: "Où peut-on faire une séance famille ?",
        answer:
          "Le lieu sera défini avec Alexis selon l'ambiance recherchée et ce qui est confortable pour votre famille.",
      },
      {
        question: "Comment s'habiller ?",
        answer:
          "Le plus important est de rester à l'aise et cohérent avec votre manière d'être. Les conseils précis seront adaptés à votre séance.",
      },
      {
        question: "Peut-on venir avec plusieurs enfants ?",
        answer:
          "Oui, selon votre famille. L'organisation exacte sera simplement préparée pour garder une séance fluide.",
      },
      {
        question: "Peut-on faire des photos avec les grands-parents ?",
        answer:
          "C'est possible si cela correspond à votre projet. Les détails seront validés directement avec Alexis.",
      },
      {
        question: "Quand réserver ?",
        answer:
          "Le mieux est d'écrire lorsque vous avez une période en tête. La date sera ensuite ajustée selon les disponibilités.",
      },
    ],
  },
} satisfies Record<string, FamilyServicePageData>;
