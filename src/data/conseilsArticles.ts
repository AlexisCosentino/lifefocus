export interface AdviceArticle {
  title: string;
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
    title: "Les plus beaux domaines de mariage dans la Drôme",
    description:
      "Une sélection personnelle de domaines de mariage dans la Drôme, vue par un photographe habitué aux mariages autour de Valence, Romans-sur-Isère et en Drôme provençale.",
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
