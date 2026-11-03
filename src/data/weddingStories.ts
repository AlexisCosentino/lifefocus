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
      "Le 6 septembre 2025, Océane et Greg se sont mariés au Château Le Gâtelet à Peyrins, près de Romans-sur-Isère : cérémonie laïque émouvante et arrivée à cheval.",
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
        heading: "L’arrivée de Greg à cheval",
        paragraphs: [
          "Pour rejoindre la cérémonie, Greg est arrivé à cheval. Une entrée remarquée, qui a donné le ton d’une journée personnelle et pleine de surprises. Au milieu des arbres et des vieilles pierres du domaine, les invités ont pu prendre place avant l’arrivée d’Océane.",
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
