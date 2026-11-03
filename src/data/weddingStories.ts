/**
 * Add only real, publication-ready weddings here. Drafts never get a route.
 * Image paths are relative to src/images and are rendered through ImageSlot.
 */
export interface WeddingStory {
  slug: string;
  published: boolean;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  weddingDate?: string;
  venue: string;
  venueTown: string;
  ceremonyVenue?: string;
  ceremonyTown?: string;
  cover: { path: string; alt: string };
  gallery: Array<{ path: string; alt: string }>;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    image?: { path: string; alt: string };
  }>;
  relatedLocalUrls: string[];
  venueUrl?: string;
}

export const weddingStories: WeddingStory[] = [
  {
    slug: "mariage-chateau-gatelet-peyrins-romans-sur-isere-oceane-greg",
    published: true,
    title:
      "Mariage au Château Le Gâtelet à Peyrins, près de Romans-sur-Isère — Océane & Greg",
    seoTitle:
      "Mariage au Château Le Gâtelet à Peyrins | Océane & Greg près de Romans-sur-Isère",
    description:
      "Le 6 septembre 2025, Océane et Greg se sont mariés au Château Le Gâtelet à Peyrins, près de Romans-sur-Isère : cérémonie laïque émouvante et arrivée d’Océane à cheval.",
    excerpt:
      "Le 6 septembre 2025, Océane et Greg ont réuni leurs proches au Château Le Gâtelet, à Peyrins, pour une cérémonie laïque pleine d’émotion, à quelques minutes de Romans-sur-Isère.",
    publishedAt: "2026-11-03",
    weddingDate: "2025-09-06",
    venue: "Château Le Gâtelet",
    venueTown: "Peyrins",
    ceremonyVenue: "Château Le Gâtelet",
    ceremonyTown: "Peyrins",
    cover: {
      path: "src/images/reportages/Océane & Greg/Océane & Greg_9.jpg",
      alt: "Océane et Greg devant le Château Le Gâtelet à Peyrins, près de Romans-sur-Isère.",
    },
    gallery: [
      {
        path: "src/images/reportages/Océane & Greg/Océane & Greg_278.jpg",
        alt: "Greg arrive au Château Le Gâtelet tandis que les invités l’accueillent.",
      },
      {
        path: "src/images/reportages/Océane & Greg/Océane & Greg_518.jpg",
        alt: "Océane et Greg entourés de leurs proches à la sortie de la cérémonie laïque.",
      },
      {
        path: "src/images/reportages/Océane & Greg/Océane & Greg_815.jpg",
        alt: "La salle de réception préparée au Château Le Gâtelet à Peyrins.",
      },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg.jpg", alt: "Océane et Greg partagent un baiser dans le parc du Château Le Gâtelet." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_10.jpg", alt: "Océane et Greg enlacés sous les arbres après leur mariage à Peyrins." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_141.jpg", alt: "Océane prend un moment au calme dans une pièce du domaine." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_17.jpg", alt: "Greg partage un instant complice avec un proche pendant les préparatifs." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_175.jpg", alt: "Greg devant la mairie d’Hostun avant la cérémonie laïque." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_2.jpg", alt: "Océane se prépare avant de rejoindre ses invités au Château Le Gâtelet." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_209.jpg", alt: "Océane et Greg entourés de leurs proches pendant la cérémonie civile." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_283.jpg", alt: "Océane et Greg traversent une haie d’honneur formée par leurs invités." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_288.jpg", alt: "Une voiture ancienne arrive au Château Le Gâtelet à Peyrins." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_29.jpg", alt: "Un proche ajuste la tenue de Greg avant la cérémonie." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_293.jpg", alt: "Océane près de la voiture ancienne dans le parc du domaine." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_3.jpg", alt: "Portrait d’Océane et Greg sous la lumière du parc à Peyrins." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_34.jpg", alt: "Détail de la robe d’Océane dans la chambre du domaine." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_372.jpg", alt: "Les invités prennent place pour la cérémonie laïque au Château Le Gâtelet." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_389.jpg", alt: "Un proche prend la parole pendant la cérémonie laïque en extérieur." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_394.jpg", alt: "Les proches accompagnent la cérémonie laïque dans le parc arboré." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_4.jpg", alt: "Océane et Greg près du cheval dans la lumière de fin de journée." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_405.jpg", alt: "Océane et Greg assis ensemble après leur cérémonie à Peyrins." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_41.jpg", alt: "Les proches aident Océane à se préparer avant le mariage." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_412.jpg", alt: "Les invités observent la cérémonie laïque au milieu des arbres." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_429.jpg", alt: "Greg ému pendant la cérémonie laïque au Château Le Gâtelet." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_449.jpg", alt: "Océane et Greg assis côte à côte pendant la cérémonie." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_46.jpg", alt: "Portrait d’Océane quelques instants avant la cérémonie." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_5.jpg", alt: "Océane et Greg partagent un moment avec le cheval dans le parc." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_509.jpg", alt: "Océane et Greg enlacés sous les arbres du domaine à Peyrins." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_530.jpg", alt: "Océane sourit dans le parc après la cérémonie laïque." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_57.jpg", alt: "Détail des chaussures et de la robe d’Océane pendant les préparatifs." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_6.jpg", alt: "Océane et Greg près du cheval au Château Le Gâtelet." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_61.jpg", alt: "Océane dans la chambre du domaine avant de rejoindre ses invités." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_639.jpg", alt: "Le DJ prépare la musique en extérieur au Château Le Gâtelet." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_670.jpg", alt: "Océane et Greg posent avec leurs amis pour une photo de groupe." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_69.jpg", alt: "Le couloir en pierre du Château Le Gâtelet pendant les préparatifs." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_691.jpg", alt: "Océane et Greg réunis avec leurs proches pour une photo de groupe." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_7.jpg", alt: "Océane et Greg arrivent ensemble au domaine en voiture ancienne." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_727.jpg", alt: "Les invités applaudissent Océane et Greg à la sortie de la cérémonie." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_788.jpg", alt: "Détail des alliances et des mains d’Océane et Greg." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_79.jpg", alt: "Greg rejoint la cérémonie laïque sous le regard de ses invités." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_8.jpg", alt: "Portrait d’Océane dans le parc du Château Le Gâtelet." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_808.jpg", alt: "La salle du Château Le Gâtelet décorée pour le dîner de mariage." },
      { path: "src/images/reportages/Océane & Greg/Océane & Greg_86.jpg", alt: "Océane et Greg avec leurs proches après la cérémonie civile à Hostun." },
    ],
    sections: [
      {
        heading: "Un mariage près de Romans-sur-Isère, au Château Le Gâtelet",
        paragraphs: [
          "Le samedi 6 septembre 2025, Océane et Greg ont célébré leur mariage au Château Le Gâtelet, à Peyrins, dans la Drôme. À quelques minutes de Romans-sur-Isère, le domaine a réuni leurs proches pour une journée pensée autour de l’essentiel : se retrouver, partager et profiter de chaque instant.",
          "La mairie avait été célébrée auparavant à Hostun. Cette journée au Gâtelet était donc consacrée à leurs retrouvailles avec leurs familles et amis, puis à la cérémonie laïque organisée sur place.",
        ],
        image: {
          path: "src/images/reportages/Océane & Greg/Océane & Greg_1.jpg",
          alt: "Océane et Greg réunis dans le parc arboré du Château Le Gâtelet, à Peyrins.",
        },
      },
      {
        heading: "L’arrivée d’Océane à cheval",
        paragraphs: [
          "Alors que tout le monde était prêt et que Greg était déjà assis, Océane est arrivée à cheval pour rejoindre la cérémonie. Une entrée remarquée au milieu des arbres et des vieilles pierres du Château Le Gâtelet, sous le regard de leurs proches.",
        ],
        image: {
          path: "src/images/reportages/Océane & Greg/Océane & Greg_562.jpg",
          alt: "Océane et Greg près du cheval dans le parc du Château Le Gâtelet.",
        },
      },
      {
        heading: "Une cérémonie laïque à Peyrins, entre rires et larmes",
        paragraphs: [
          "La cérémonie laïque s’est tenue au Château Le Gâtelet, entourée de leurs proches. Les mots échangés ont laissé place à toutes les réactions : des rires, des larmes, des accolades et ces regards complices qui racontent une histoire mieux qu’un long discours.",
          "Famille et amis s’étaient retrouvés pour vivre ce moment avec eux. En reportage, je garde aussi une place pour ces gestes spontanés : un câlin après une émotion, un sourire échangé, une main qui se tend.",
        ],
        image: {
          path: "src/images/reportages/Océane & Greg/Océane & Greg_379.jpg",
          alt: "Océane et Greg pendant leur cérémonie laïque au Château Le Gâtelet, entourés de leurs invités.",
        },
      },
      {
        heading: "Les photos de groupe en cinq minutes de musique",
        paragraphs: [
          "Pour les photos de groupe, le principe était simple : cinq minutes de musique, chacun prend sa photo, puis on passe au groupe suivant. Le rythme était donné, les proches se sont retrouvés devant l’objectif et les images de famille se sont enchaînées dans la bonne humeur.",
          "Une façon vivante de rassembler tout le monde sans laisser les photos prendre toute la place. Les groupes se forment, la musique continue, et les mariés profitent de leurs invités entre deux images.",
        ],
        image: {
          path: "src/images/reportages/Océane & Greg/Océane & Greg_644.jpg",
          alt: "Océane et Greg posent avec leurs proches pour une photo de groupe dans le parc du domaine.",
        },
      },
      {
        heading: "Un reportage de mariage autour de Romans-sur-Isère",
        paragraphs: [
          "Peyrins, Hostun et Romans-sur-Isère dessinent le fil de cette journée dans la Drôme : la mairie, les retrouvailles au domaine, la cérémonie laïque et les photos avec les proches. Le Château Le Gâtelet a offert le cadre de ces moments, vécus simplement avec leurs familles et amis.",
          "Vous préparez votre mariage à Romans-sur-Isère, Peyrins, Hostun ou ailleurs dans la Drôme ? Je réalise des reportages naturels pour raconter votre journée telle qu’elle se déroule, des émotions fortes aux petits instants partagés.",
        ],
        image: {
          path: "src/images/reportages/Océane & Greg/Océane & Greg_656.jpg",
          alt: "Océane, Greg et leurs amis partagent un moment joyeux après la cérémonie.",
        },
      },
    ],
    relatedLocalUrls: ["/photographe-mariage-romans-sur-isere/"],
    venueUrl: "https://www.chateaulegatelet.com/",
  },
];

export const publishedWeddingStories = weddingStories.filter(
  (story) => story.published,
);
