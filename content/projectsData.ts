/**
 * Project data: IDs and URLs only. All translatable text (name, period, description, etc.) lives in content/translations.
 */

export const PROJECTS = [
  {
    id: "pqcscanner",
    github: "https://github.com/Lxkasmehl/pqc-scanner",  },
  {
    id: "pictur",
    github: "https://github.com/Lxkasmehl/PicTur",
    link: "https://turtles.washburn.edu/",
  },
  {
    id: "lactate",
    github: "https://github.com/Lxkasmehl/lactate-analysis",
  },
  {
    id: "runsync",
    github: "https://github.com/Lxkasmehl/RunSync",
  },
  {
    id: "heiligtumsfahrt",
    link: "https://quiz.heiligtumsfahrt-aachen.de/",
    githubWeb: "https://github.com/Wiwaltill/HeiFa-Quiz_Web-App",
    githubAndroid: "https://github.com/Lxkasmehl/HeifaAachenAndroidQuizApp",
  },
] as const;

export type ProjectId = (typeof PROJECTS)[number]["id"];
