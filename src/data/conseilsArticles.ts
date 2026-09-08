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
