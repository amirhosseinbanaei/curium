interface SlidersData {
  projects: {
    tech: ProjectSlideTypes[];
    media: ProjectSlideTypes[];
    business: ProjectSlideTypes[];
  };
  intelligence: { id: number; image: string }[];
  about: {
    imageSlide: { src: string }[];
    timeLine: {
      dateYear: { fa: string; en: string };
    }[];
  };
}
export type ProjectSlideTypes = {
  id: number;
  image: string;
};
const slidersData: SlidersData = {
  projects: {
    tech: [
      { id: 1, image: "/hero.webp" },
      { id: 2, image: "/hero.webp" },
      { id: 3, image: "/hero.webp" },
      { id: 4, image: "/hero.webp" },
      { id: 5, image: "/hero.webp" },
      { id: 6, image: "/hero.webp" },
    ],
    media: [
      { id: 1, image: "/hero.webp" },
      { id: 2, image: "/hero.webp" },
    ],
    business: [
      { id: 1, image: "/hero.webp" },
      { id: 2, image: "/hero.webp" },
      { id: 3, image: "/hero.webp" },
      { id: 4, image: "/hero.webp" },
      { id: 5, image: "/hero.webp" },
      { id: 6, image: "/hero.webp" },
      { id: 7, image: "/hero.webp" },
    ],
  },
  intelligence: [
    {
      id: 1,
      image: "/hero.webp",
    },
    {
      id: 2,
      image: "/hero.webp",
    },
    {
      id: 3,
      image: "/hero.webp",
    },
    {
      id: 4,
      image: "/hero.webp",
    },
  ],
  about: {
    imageSlide: [
      { src: "/hero.webp" },
      { src: "/image.webp" },
      { src: "/hero.webp" },
      { src: "/hero.webp" },
      { src: "/hero.webp" },
    ],
    timeLine: [
      { dateYear: { fa: "1402", en: "2023" } },
      { dateYear: { fa: "1403", en: "2024" } },
    ],
  },
};

export default slidersData;
