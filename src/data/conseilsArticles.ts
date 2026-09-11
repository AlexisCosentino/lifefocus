export interface AdviceArticle {
  title: string;
  seoTitle?: string;
  description: string;
  slug: string;
  publishedAt: Date;
  updatedAt?: Date;
  category: string;
  excerpt: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  draft?: boolean;
}

export const adviceArticles = [
  {
    title: "Organiser son mariage dans la Drôme : conseils de photographe",
    seoTitle: "Mariage dans la Drôme : conseils de photographe | Life Focus",
    description:
      "Conseils de photographe pour organiser un mariage dans la Drôme : lieu, lumière, planning, ambiance et choix des prestataires autour de Valence.",
    slug: "conseils-mariage-drome",
    publishedAt: new Date("2026-09-11"),
    category: "Mariage",
    excerpt:
      "Lieu, lumière, rythme de la journée, ambiance et choix des prestataires : mes conseils pour préparer un mariage dans la Drôme.",
    featuredImage: "weddingMain",
    featuredImageAlt: "Mariage dans la Drôme photographié dans une lumière naturelle.",
    draft: false,
  },
  {
    title: "Les plus beaux domaines de mariage dans la Drôme",
    description:
      "Domaines, châteaux et lieux de mariage dans la Drôme : ma sélection de photographe autour de Valence et Romans-sur-Isère.",
    slug: "plus-beaux-domaines-mariage-drome",
    publishedAt: new Date("2026-09-10"),
    category: "Mariage",
    excerpt:
      "Chartrognière, Sarson, Balmes le Château, Chanteperdrix ou Maison Claudie : quelques lieux de mariage que j'aime photographier dans la Drôme.",
    featuredImage: "weddingMain",
    featuredImageAlt: "Domaine de mariage dans la Drôme photographié pendant une journée de mariage.",
    draft: false,
  },
  {
    title: "Les 10 questions à poser à votre photographe avant de signer",
    seoTitle: "10 questions à poser à son photographe mariage | Life Focus",
    description:
      "Style, reportage, nombre de photos, tarifs, réservation : voici 10 questions essentielles à poser à votre photographe de mariage avant de signer.",
    slug: "10-questions-a-poser-a-votre-photographe-avant-de-signer",
    publishedAt: new Date("2026-09-08"),
    category: "Mariage",
    excerpt:
      "Dix questions concrètes pour comprendre la manière de travailler de votre photographe de mariage avant de vous engager.",
    featuredImage: "weddingMain",
    featuredImageAlt: "Couple de mariés photographié dans une lumière douce.",
    draft: false,
  },
] satisfies AdviceArticle[];
