/**
 * Edit these to match your data. Used for Stats page, links, tech stack, and socials.
 */
export const GITHUB_USERNAME: string = "Lxkasmehl";
// Software-development hours are tracked automatically by my time tracker (zeit.lukasmehl.com) and loaded live.
// CODING_HOURS_CURRENT is only the fallback if that request fails.
export const CODING_HOURS_CURRENT = 2647;
export const CODING_HOURS_URL = "https://zeit.lukasmehl.com/public/dev-hours";
export const CODING_HOURS_GOAL = 10_000;

/** Social profile URLs. Simple Icons (cdn.simpleicons.org) used for logos – MIT license, fair use for attribution. */
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/lukas-mehl-61922423a",
  instagram: "https://www.instagram.com/lxkasmehl/",
  strava: "https://www.strava.com/athletes/68981361",
  github: `https://github.com/${GITHUB_USERNAME}`,
} as const;

/** Tech stack by category. Slugs match simple-icons (cdn.jsdelivr.net/npm/simple-icons). */
export const TECH_STACK_BY_CATEGORY = {
  frontend: ["react", "typescript", "javascript", "html5", "css3", "mui", "redux", "vite"],
  languages: ["python", "openjdk", "kotlin", "c"],
  testing: ["playwright", "selenium"],
  tools: ["docker", "git", "mysql"],
  platforms: ["sap", "androidstudio"],
} as const;
