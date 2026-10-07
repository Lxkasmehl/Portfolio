/**
 * Shape of locale messages. EN and DE must satisfy this.
 * sports.meets and sports.events: canonical key (from data) -> translated label.
 */
export interface Messages {
  meta: { title: string; description: string };
  intro: { name: string; headline: string; location: string };
  about: { title: string; paragraphs: string[] };
  experience: {
    title: string;
    washburn: {
      role: string;
      company: string;
      period: string;
      location: string;
      description: string;
      responsibilities: string[];
      note: string;
    };
    pentos: {
      role: string;
      company: string;
      period: string;
      location: string;
      description: string;
    };
    soptim: {
      role: string;
      company: string;
      period: string;
      location: string;
      description: string;
    };
  };
  education: {
    title: string;
    washburn: {
      degree: string;
      school: string;
      period: string;
      location: string;
      note: string;
      highlights: string[];
    };
    park: {
      degree: string;
      school: string;
      period: string;
      location: string;
      note: string;
    };
    highSchool: {
      degree: string;
      school: string;
      period: string;
      location: string;
      note: string;
    };
  };
  projects: {
    title: string;
    teaser: string;
    viewAll: string;
    linkLive: string;
    linkGithub: string;
    linkGithubWeb: string;
    linkGithubAndroid: string;
    pictur: {
      name: string;
      period: string;
      org: string;
      description: string;
      aspects: string[];
    };
    pqcscanner: {
      name: string;
      period: string;
      description: string;
      aspects: string[];
    };
    runsync: {
      name: string;
      period: string;
      description: string;
      aspects: string[];
    };
    heiligtumsfahrt: {
      name: string;
      period: string;
      description: string;
      linkLabel: string;
      aspects: string[];
    };
  };
  publications: { title: string; items: { date: string; text: string }[] };
  certifications: { title: string; items: string[] };
  skills: {
    title: string;
    categoryFrontend: string;
    categoryLanguages: string;
    categoryTesting: string;
    categoryTools: string;
    categoryPlatforms: string;
    list: string;
  };
  languages: { title: string; list: string };
  footer: { findMe: string; linkedIn: string; instagram: string };
  nav: {
    home: string;
    cv: string;
    projects: string;
    sports: string;
    stats: string;
  };
  home: {
    tagline: string;
    photoAlt: string;
    rightNow: string;
    roleShort: string;
    explore: string;
    cvTeaser: string;
    projectsTeaser: string;
    sportsTeaser: string;
    statsTeaser: string;
  };
  sports: {
    title: string;
    storyLead: string;
    intro: string;
    linksHeading: string;
    tfrrsLabel: string;
    ladvLabel: string;
    stravaLabel: string;
    personalBestsHeading: string;
    personalBestsTrack: string;
    personalBestsXC: string;
    progressionHeading: string;
    progressionSub: string;
    progression10kTitle: string;
    progression10kSub: string;
    recentResultsHeading: string;
    recentResultsSub: string;
    championshipHeading: string;
    championshipSub: string;
    teamsHeading: string;
    teamsSub: string;
    preCollegeHeading: string;
    preCollegeIntro: string;
    yearlyDistanceHeading: string;
    yearlyDistanceSub: string;
    lifetimeLabel: string;
    timeEstimateLabel: string;
    hours: string;
    days: string;
    recentHeading: string;
    recent: string[];
    highlights: string;
    photoAlt: string;
    photosNote: string;
    indoor: string;
    place: string;
    youth: string;
    teams: Record<string, { name: string; period: string }>;
    meets: Record<string, string>;
    events: Record<string, string>;
  };
  stats: {
    title: string;
    codingHours: string;
    codingGoal: string;
    githubContributions: string;
    githubPlaceholder: string;
    gladwellHeadline: string;
    gladwellIntro: string;
    myJourney: string;
    hoursToGo: string;
    milestoneLabel: string;
    whatCounts: string;
    whatCountsText: string;
    githubAsTrace: string;
    githubAsTraceText: string;
  };
}
