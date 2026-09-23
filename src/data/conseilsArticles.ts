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
  coverImagePath?: string;
  featuredImageAlt?: string;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  draft?: boolean;
}

export const adviceArticles = [
  {
    title: "Une séance grossesse en hiver au Parc de Lorient",
    seoTitle: "Séance grossesse au Parc de Lorient près de Valence | Life Focus",
    description:
      "Une séance photo grossesse en hiver au Parc de Lorient, près de Valence. Une lumière douce, la nature et un reportage simple, loin des poses figées.",
    slug: "seance-grossesse-parc-lorient-valence",
    publishedAt: new Date("2026-09-23"),
    category: "Grossesse",
    excerpt:
      "Une séance grossesse réalisée en février au Parc de Lorient, près de Valence, dans une ambiance sobre, douce et hivernale.",
    coverImagePath: "src/images/conseils/seance-grossesse-parc-lorient-valence/Bérénice & Pierrick_15.jpg",
    featuredImageAlt: "Séance grossesse en hiver au Parc de Lorient près de Valence.",
    primaryCtaHref: "/grossesse/",
    primaryCtaLabel: "DÉCOUVRIR LES SÉANCES GROSSESSE →",
    draft: false,
  },
  {
    title: "Une séance grossesse un matin de gel près de Chabeuil",
    seoTitle: "Séance grossesse en hiver près de Chabeuil | Life Focus",
    description:
      "Une séance grossesse un matin de gel près de Chabeuil, dans la Drôme. Une robe rouge, une lumière froide et un paysage transformé par l’hiver.",
    slug: "seance-grossesse-hiver-chabeuil",
    publishedAt: new Date("2026-09-23"),
    category: "Grossesse",
    excerpt:
      "Une séance grossesse en plein hiver près de Chabeuil, portée par le gel, une lumière froide et le contraste d'une robe rouge.",
    coverImagePath: "src/images/conseils/seance-grossesse-hiver-chabeuil/Joffrey & Lucie_17.jpg",
    featuredImageAlt: "Séance grossesse en hiver près de Chabeuil avec une robe rouge dans un paysage gelé.",
    primaryCtaHref: "/grossesse/",
    primaryCtaLabel: "DÉCOUVRIR MON APPROCHE DES SÉANCES GROSSESSE →",
    draft: false,
  },
  {
    title: "Un soir d'été entre tournesols et lavandes, près de Valence",
    seoTitle: "Séance photo famille tournesols et lavandes près de Valence | Life Focus",
    description:
      "Une séance photo famille au coucher du soleil dans les tournesols et les lavandes, près de Valence. Des images naturelles et lumineuses dans la Drôme.",
    slug: "seance-famille-tournesols-valence",
    publishedAt: new Date("2026-09-23"),
    category: "Famille",
    excerpt:
      "Une séance famille simple et lumineuse au coucher du soleil, entre tournesols et lavandes autour de Valence, pendant quelques jours de vacances dans la Drôme.",
    coverImagePath: "src/images/conseils/seance-famille-tournesols-valence/Karlijn_22.jpg",
    featuredImageAlt: "Séance photo famille dans les tournesols et les lavandes près de Valence au coucher du soleil.",
    primaryCtaHref: "/famille/",
    primaryCtaLabel: "DÉCOUVRIR LES SÉANCES FAMILLE →",
    draft: false,
  },
  {
    title: "Où faire une séance photo grossesse dans la Drôme ?",
    seoTitle: "Séance photo grossesse Drôme | Lieux autour de Romans & Valence",
    description:
      "Où faire une séance photo grossesse dans la Drôme ? Conseils de photographe autour de Romans-sur-Isère, Valence, nature, saisons et lumière.",
    slug: "ou-faire-seance-photo-grossesse-drome",
    publishedAt: new Date("2026-09-17"),
    category: "Grossesse",
    excerpt:
      "Parc de Lorient, bois des Naix, bords du Rhône, saisons et lumière : quelques repères pour choisir un lieu de séance grossesse autour de Romans et Valence.",
    coverImagePath:
      "src/images/conseils/ou-faire_une_seance_photo_grossesse_dans_la_drome/hautes herbes.jpg",
    featuredImageAlt: "Séance grossesse en extérieur dans les hautes herbes de la Drôme.",
    primaryCtaHref: "/grossesse/",
    primaryCtaLabel: "DÉCOUVRIR LES SÉANCES GROSSESSE →",
    draft: false,
  },
  {
    title: "Séance photo naissance à domicile : comment se déroule un reportage en famille ?",
    seoTitle: "Séance photo naissance à domicile | Reportage famille",
    description:
      "Comment se déroule une séance photo naissance à domicile ? Reportage naturel en famille autour du rythme de votre bébé, dans la Drôme.",
    slug: "seance-photo-naissance-domicile",
    publishedAt: new Date("2026-09-17"),
    category: "Naissance",
    excerpt:
      "Rythme du bébé, lumière de la maison, pauses, parents, fratrie et petits détails : comment se déroule un reportage naissance à domicile.",
    coverImagePath: "src/images/conseils/seance_photo_naissance_a_domicile/couverture.jpg",
    featuredImageAlt: "Reportage naissance à domicile en famille, au rythme du bébé.",
    primaryCtaHref: "/naissance/",
    primaryCtaLabel: "DÉCOUVRIR LES REPORTAGES NAISSANCE →",
    draft: false,
  },
  {
    title: "Se marier à Valence : lieux, cérémonie et conseils d'un photographe",
    seoTitle: "Photographe mariage Valence | Lieux & conseils",
    description:
      "Photographe de mariage à Valence, je partage mes conseils et idées de lieux pour organiser votre mariage à Valence, dans la Drôme et aux alentours.",
    slug: "photographe-mariage-valence",
    publishedAt: new Date("2026-09-16"),
    category: "Mariage",
    excerpt:
      "Mairie de Valence, centre-ville, lumière et domaines proches : quelques repères pour préparer un mariage fluide autour de Valence.",
    featuredImage: "weddingMain",
    featuredImageAlt: "Mariage photographié autour de Valence dans la Drôme.",
    draft: false,
  },
  {
    title: "Se marier à Romans-sur-Isère : lieux, domaines et conseils d'un photographe local",
    seoTitle: "Photographe mariage Romans-sur-Isère | Lieux & conseils",
    description:
      "Photographe de mariage basé à Romans-sur-Isère, je partage mes conseils, lieux et domaines pour organiser un mariage autour de Romans et dans la Drôme.",
    slug: "photographe-mariage-romans-sur-isere",
    publishedAt: new Date("2026-09-16"),
    category: "Mariage",
    excerpt:
      "Lieux, domaines et conseils simples pour organiser un mariage autour de Romans-sur-Isère et dans la Drôme des Collines.",
    featuredImage: "weddingMain",
    featuredImageAlt: "Couple de mariés photographié autour de Romans-sur-Isère.",
    draft: false,
  },
  {
    title: "Prestataires de mariage de confiance dans la Drôme",
    seoTitle: "Prestataires mariage Drôme : mes adresses de confiance | Life Focus",
    description:
      "Une sélection personnelle de prestataires de mariage dans la Drôme : domaines, vidéaste et wedding planners autour de Valence et Romans.",
    slug: "prestataires-mariage-drome",
    publishedAt: new Date("2026-09-16"),
    category: "Mariage",
    excerpt:
      "Domaines, vidéo, wedding planners : quelques adresses de confiance que je recommande volontiers aux futurs mariés dans la Drôme.",
    featuredImage: "weddingMain",
    featuredImageAlt: "Détail de mariage photographié dans la Drôme par Life Focus.",
    draft: false,
  },
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
    coverImagePath: "src/images/conseils/conseils-mariage-drome/Natalia & Antonin_335.jpg",
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
