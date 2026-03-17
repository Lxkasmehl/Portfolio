/**
 * Project data: IDs and URLs only. All translatable text (name, period, description, etc.) lives in content/translations.
 */

export const PROJECTS = [
  {
    id: "turtletracker",
    github: "https://github.com/Lxkasmehl/TurtleTracker",
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
