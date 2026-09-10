import type { ImageMetadata } from "astro";

import alexis from "../images/home/alexis.jpg";
import breathing from "../images/home/family-pregnancy.jpg";
import familyMain from "../images/home/family-family.jpg";
import familySecondary from "../images/home/family-birth.jpg";
import hero from "../images/home/hero-main.jpg";
import weddingMain from "../images/home/wedding-main.jpg";
import weddingSecondary from "../images/home/wedding-secondary.jpg";

import award2020 from "../assets/mariages.net/photographe mariage award 2020.jpg";
import award2021 from "../assets/mariages.net/photographe mariage award 2021.jpg";
import award2022 from "../assets/mariages.net/photographe mariage award 2022.jpg";
import award2023 from "../assets/mariages.net/photographe mariage award 2023.jpg";
import award2024 from "../assets/mariages.net/photographe mariage award 2024.jpg";
import award2025 from "../assets/mariages.net/photographe mariage award 2025.jpg";
import award2026 from "../assets/mariages.net/photographe mariage award 2026.jpg";
import recommendationMariagesNet from "../assets/mariages.net/recommandation mariages-net.png";

export interface HomeImage {
  src: ImageMetadata;
  alt: string;
}

export interface AwardImage extends HomeImage {
  year: string;
}

export const homeImages = {
  hero: {
    src: hero,
    alt: "Couple de mariés dans un paysage de campagne, près d'une voiture ancienne.",
  },
  heroSecondary: {
    src: weddingSecondary,
    alt: "Portrait vertical d'un couple de mariés dans un champ.",
  },
  weddingMain: {
    src: weddingMain,
    alt: "Portrait lumineux d'un couple de mariés au coucher du soleil.",
  },
  weddingSecondary: {
    src: weddingSecondary,
    alt: "Couple de mariés dans un champ de fleurs rouges.",
  },
  breathing: {
    src: breathing,
    alt: "Portrait naturel dans un champ de lavande.",
  },
  familyMain: {
    src: familyMain,
    alt: "Famille assise dehors, réunie dans un moment simple et naturel.",
  },
  familySecondary: {
    src: familySecondary,
    alt: "Moment de famille simple et naturel en extérieur.",
  },
  familyGrossesse: {
    src: weddingSecondary,
    alt: "Portrait vertical dans un champ de fleurs rouges.",
  },
  familyNaissance: {
    src: weddingSecondary,
    alt: "Portrait vertical dans un champ de fleurs rouges.",
  },
  familyFamille: {
    src: familyMain,
    alt: "Famille assise dehors, réunie dans un moment simple et naturel.",
  },
  alexis: {
    src: alexis,
    alt: "Portrait d'Alexis Cosentino, photographe Life Focus.",
  },
} satisfies Record<string, HomeImage>;

export const awardImages = [
  {
    year: "2020",
    src: award2020,
    alt: "Wedding Award Mariages.net 2020 reçu par Life Focus.",
  },
  {
    year: "2021",
    src: award2021,
    alt: "Wedding Award Mariages.net 2021 reçu par Life Focus.",
  },
  {
    year: "2022",
    src: award2022,
    alt: "Wedding Award Mariages.net 2022 reçu par Life Focus.",
  },
  {
    year: "2023",
    src: award2023,
    alt: "Wedding Award Mariages.net 2023 reçu par Life Focus.",
  },
  {
    year: "2024",
    src: award2024,
    alt: "Wedding Award Mariages.net 2024 reçu par Life Focus.",
  },
  {
    year: "2025",
    src: award2025,
    alt: "Wedding Award Mariages.net 2025 reçu par Life Focus.",
  },
  {
    year: "2026",
    src: award2026,
    alt: "Wedding Award Mariages.net 2026 reçu par Life Focus.",
  },
  {
    year: "Recommandé",
    src: recommendationMariagesNet,
    alt: "Recommandation Mariages.net reçue par Life Focus.",
  },
] satisfies AwardImage[];
