/**
 * English UI strings. Structure must match de.ts.
 * Data (URLs, project links) lives in content/projectsData.ts.
 */
import type { Messages } from "@/content/translations/types";

export const en: Messages = {
  meta: {
    title: "Lukas Mehl",
    description:
      "CIS Student @ Washburn · Working Student Web Dev @ Pentos · ESEM 2026 paper on post-quantum migration readiness (PQCScanner)",
  },
  intro: {
    name: "Lukas Mehl",
    headline:
      "CIS Student @ Washburn University · Working Student in Web Application Development @ Pentos · ESEM 2026 author (PQCScanner, post-quantum cryptography)",
    location: "Topeka, KS | Würselen, DE",
  },
  about: {
    title: "About",
    paragraphs: [
      "I completed the first half of my bachelor's studies in Cybersecurity and Information and Computer Science (Computer Science concentration) at Park University and am now continuing my degree at Washburn University, majoring in Computer and Information Science.",
      "As a Working Student in Web Application Development at Pentos, I independently build software products for the SAP SuccessFactors ecosystem, more and more of them with AI-powered features. From January to May 2026 I was an Undergraduate Research Assistant (K-INBRE, SCWTE) at Washburn University, where I built the frontend of PicTur, a research web app for automated wildlife identification that I continue to develop.",
      "My own research focuses on post-quantum cryptography: PQCScanner, a static analysis tool for cryptographic API usage in Python, Java, and Go, measures how ready open-source software is for the migration to post-quantum cryptography. My sole-authored paper on it, \"PQC-Readiness of Open-Source Software: An Empirical Study\", is published in the ESEM 2026 proceedings (International Symposium on Empirical Software Engineering and Measurement, LIPIcs). I also presented the project as a poster at CCSC Central Plains 2026.",
      "I am passionate about cybersecurity, quantum-safe cryptography, and software engineering, with a focus on frontend development using React, TypeScript, JavaScript, and HTML/CSS. I also have experience with backend technologies such as Python, Java, and Kotlin, as well as automated testing with Playwright and Selenium. I enjoy developing secure, efficient, and user-friendly applications.",
      "Beyond my studies, I am a dedicated student-athlete with a proven ability to work in teams and execute projects effectively. I am fluent in both German and English and proficient in MS Office and Adobe software. As a competitive middle- and long-distance runner, I have achieved top-10 placements at the German Championships and earned multiple conference wins; I also previously held a school record before transferring. These experiences have helped me develop discipline, resilience, and a strong work ethic. I am also actively involved in community initiatives.",
      "I am always eager to apply my knowledge in practical settings, take on new challenges, and continuously expand my skill set in the IT and cybersecurity fields.",
    ],
  },
  experience: {
    title: "Experience",
    washburn: {
      role: "Undergraduate Research Assistant (K-INBRE, SCWTE)",
      company: "Washburn University",
      period: "Jan 2026 – May 2026",
      location: "Topeka, Kansas, US · Hybrid",
      description:
        "Worked on PicTur, a research web application for the fully automated identification of Ornate Box Turtles based on photos of their plastron. The goal is to reliably identify individual turtles from images and store them in a database for long-term population monitoring and biological research. Developed collaboratively with Garrett King-Cody (backend and server infrastructure); I focus on frontend development and overall system integration.",
      responsibilities: [
        "Designing and implementing the frontend architecture using React and TypeScript",
        "Building user workflows for image upload, validation, and result visualization",
        "Developing researcher-facing dashboards for interacting with identified individuals and metadata",
        "Collaborating closely with backend systems for image-based identification and database ingestion",
        "Contributing to end-to-end reliability, testing, and deployment",
      ],
      note: "First project followed from an empty repository to a fully deployed application on a self-configured server. Conducted under the mentorship of Dr. Benjamin Reed. Development of PicTur continues beyond the appointment.",
    },
    pentos: {
      role: "Working Student in Web Application Development",
      company: "Pentos",
      period: "Dec 2024 – Present",
      location: "Kissimmee, Florida, US · Remote",
      description:
        "I independently build software products for the SAP SuccessFactors ecosystem, from the first idea to a working application. The ideas come from my two supervisors and from other teams, usually based on what customers need. I build a first version, demo it in our weekly meeting, and together we decide what stays, what changes, and what comes next. Promising prototypes grow into larger products.",
      responsibilities: [
        "Mostly frontend with React, TypeScript, JavaScript, and Mustache, increasingly full-stack",
        "Weekly demos and feedback rounds that drive each product forward",
        "Integrating LLM APIs such as Anthropic's Claude API to build AI-powered features directly into the products",
      ],
    },
    soptim: {
      role: "Software Development Intern",
      company: "SOPTIM AG",
      period: "Jun 2024 – Jul 2024",
      location: "Aachen, Germany · Hybrid",
      description:
        "Developing and maintaining software for processing time series as a member of an Agile team. Participating in SCRUM meetings (Daily, Refinement, Retrospective). Handling tasks, bugs, and user stories. Reviewing merge requests. Technologies: React, TypeScript, Java, CSS, Selenium, Kotlin.",
    },
  },
  education: {
    title: "Education",
    washburn: {
      degree: "Bachelor of Science in Computer Information Science (continued)",
      school: "Washburn University",
      period: "Aug 2025 – May 2027",
      location: "Topeka, Kansas, US",
      note: "Continuing B.Sc. after transferring from Park University. Activities: Track and Field & Cross Country (NCAA Division II).",
      highlights: [
        "Cumulative GPA: 3.97/4.00",
        "Minor in Mathematics; undergraduate certificates in Cybersecurity and in Artificial Intelligence",
        "Dean's Scholarship Award (Dixie Donnelly Wantoch Scholarship) for the 2026–2027 academic year, Washburn CIS Department (Apr 2026)",
      ],
    },
    park: {
      degree: "Bachelor of Science in Cybersecurity & Information and Computer Science (started)",
      school: "Park University",
      period: "Aug 2023 – May 2025",
      location: "Parkville, Missouri, US",
      note: "Started B.Sc. in Cybersecurity & Information and Computer Science; transferred to Washburn University in Summer 2025. Activities: Track and Field & Cross Country (NAIA).",
    },
    highSchool: {
      degree: "High School Diploma",
      school: "Heilig-Geist-Gymnasium",
      period: "Aug 2015 – Jun 2023",
      location: "Würselen, Deutschland",
      note: "Student body president for the 2021/2022 school year",
    },
  },
  projects: {
    title: "Projects",
    teaser:
      "PQCScanner, PicTur, RunSync, Heiligtumsfahrtquiz and more, each with a description, timeline, and links to code or live demos.",
    viewAll: "View all projects",
    linkLive: "Live / Demo",
    linkGithub: "View on GitHub",
    linkGithubWeb: "Web (GitHub)",
    linkGithubAndroid: "Android (GitHub)",
    linkPaper: "Read the paper",
    pqcscanner: {
      name: "PQCScanner: Post-Quantum Migration Readiness of Open-Source Software",
      period: "Mar 2026 – Present",
      description:
        "Research prototype for an empirical study on post-quantum cryptography (PQC) adoption in open-source software. The scanner analyzes source code repositories, detects usage of cryptographic primitives, and classifies each finding as post-quantum-vulnerable (e.g. RSA, ECDSA, ECDH), quantum-safe, or PQC-ready (e.g. Kyber, Dilithium). Sole-authored paper published at ESEM 2026 (LIPIcs); poster at CCSC Central Plains 2026.",
      aspects: [
        "Multi-language, AST-based detection: Python via ast, Java and Go via tree-sitter",
        "Confidence levels from direct API calls down to string matches",
        "Large-scale GitHub mining: search API, shallow clones, rate limiting, resumable state in SQLite",
        "Output as per-repository JSON, aggregated CSV, and CLI report",
      ],
    },
    pictur: {
      name: "PicTur: Automated Wildlife Monitoring Platform",
      period: "Oct 2025 – Present",
      org: "Washburn University",
      description:
        "Research-focused web platform for the automated identification of Ornate Box Turtles using photos of their plastron. Identification results are stored in a database for longitudinal tracking and ecological and conservation research. Developed jointly with Garrett King-Cody (backend infrastructure and server setup); I lead frontend development and UX design. Full lifecycle from initial concept to live deployment.",
      aspects: [
        "Automated image-based individual identification workflow",
        "Researcher-facing web interface for uploads, results, and data exploration",
        "Frontend architecture and UX (my focus); backend and server (Garrett King-Cody)",
      ],
    },
    runsync: {
      name: "RunSync: Automated Fitness Data Synchronization Platform",
      period: "Sep 2024 – Oct 2025",
      description:
        "Python-based automation that synchronizes fitness data across Strava, Google Sheets, and Garmin Connect for my personal training diary. Automated sync, custom Google Sheets integration, smart title/description sync, cloud execution via GitHub Actions. Stack: Python, Strava API, Google Sheets API, Selenium, GitHub Actions, OAuth2. Impact: Reduced data management time from hours to minutes while ensuring consistency across all fitness platforms.",
      aspects: [],
    },
    heiligtumsfahrt: {
      name: "Heiligtumsfahrtquiz",
      period: "Mar 2020 – Mar 2021",
      description:
        "Development and programming of a digital quiz for children for the Heiligtumsfahrt 2023 in Aachen, implemented as a website and app.",
      linkLabel: "Live / Demo",
      aspects: [],
    },
  },
  publications: {
    title: "Conference, publications & competitions",
    items: [
      {
        date: "Oct 2026",
        text: "L. Mehl, \"PQC-Readiness of Open-Source Software: An Empirical Study\". ESEM 2026 (International Symposium on Empirical Software Engineering and Measurement), Emerging Results, Vision, and Reflection Papers track; LIPIcs, Vol. 394, Paper 53. Sole author, peer-reviewed. Introduces PQCScanner, a static analysis tool for cryptographic API usage in Python, Java, and Go that measures post-quantum migration readiness. Presented at the conference on Oct 9, 2026.",
        url: "https://doi.org/10.4230/LIPIcs.ESEM.2026.53",
        linkLabel: "doi:10.4230/LIPIcs.ESEM.2026.53",
      },
      {
        date: "2026",
        text: "CCSC Central Plains (Consortium for Computing Sciences in Colleges): research poster on PQCScanner; programming contest, 2nd place overall (with Sapnish Sharma and Ujjwal Sitaula).",
      },
    ],
  },
  publicationsPage: {
    title: "Publications",
    lead: "Research on how ready open-source software is for post-quantum cryptography.",
    paperBadge: "Conference paper",
    peerReviewed: "Peer-reviewed",
    soleAuthor: "Sole author",
    publishedOn: "Published Oct 5, 2026",
    downloadPdf: "Download PDF",
    doi: "DOI",
    code: "Code (GitHub)",
    artifact: "Replication package (Zenodo)",
    facts: [
      { value: "~14,500", label: "GitHub repositories analyzed" },
      { value: "3", label: "languages: Python, Java, Go" },
      { value: "14", label: "pages" },
    ],
    abstract: "Abstract",
    abstractNote: "",
    keywords: "Keywords",
    presentation:
      "Presented at ESEM 2026 on Oct 9, 2026 by proxy presenter Phuong T. Nguyen (University of L'Aquila).",
    cite: "How to cite",
    copyBibtex: "Copy BibTeX",
    copied: "Copied!",
    license:
      "© Lukas Mehl. Published by Schloss Dagstuhl in LIPIcs under a Creative Commons Attribution 4.0 (CC BY 4.0) license.",
    previewAlt: "First page of the paper",
    otherTitle: "Posters & competitions",
    otherItems: [
      {
        date: "2026",
        title: "CCSC Central Plains",
        text: "Research poster on PQCScanner at the Consortium for Computing Sciences in Colleges, Central Plains region. Programming contest: 2nd place overall with Sapnish Sharma and Ujjwal Sitaula.",
      },
    ],
    cvLink: "Full CV",
  },
  certifications: {
    title: "Certifications & Awards",
    items: [
      "Dean's Scholarship Award (Dixie Donnelly Wantoch Scholarship), Washburn CIS Department, Apr 2026",
      "8th place nationwide, German Startup Award for Students (Deutscher Gründerpreis für Schüler:innen), May 2022",
      "Existenzia für Schüler: Wie erstelle ich einen Geschäftsplan? (GründerRegion Aachen), Mar 2021",
      "Sports Medal of the City of Würselen (Jan 2024), awarded for achievements in long-distance running at the Würselen Sports Matinee.",
    ],
  },
  skills: {
    title: "Skills",
    categoryFrontend: "Frontend",
    categoryLanguages: "Languages",
    categoryTesting: "Testing",
    categoryTools: "Tools & infra",
    categoryPlatforms: "Platforms",
    list: "Agile, SCRUM, MS Office, Adobe.",
  },
  languages: {
    title: "Languages",
    list: "German (native), English (fluent), Latin (elementary).",
  },
  footer: {
    findMe: "Find me",
    linkedIn: "LinkedIn",
    instagram: "Instagram",
  },
  nav: {
    home: "Home",
    cv: "CV",
    projects: "Projects",
    publications: "Publications",
    sports: "Sports",
    stats: "Stats",
  },
  home: {
    tagline: "CIS student, web developer & post-quantum crypto researcher. Student-athlete.",
    photoAlt: "Portrait",
    rightNow: "Right now",
    roleShort:
      "Web dev @ Pentos · ESEM 2026 paper (PQCScanner) · B.Sc. CIS @ Washburn",
    explore: "Explore",
    cvTeaser: "Experience, education & about",
    projectsTeaser: "PQCScanner, PicTur, RunSync & more",
    publicationsTeaser: "ESEM 2026 paper on post-quantum readiness, PDF and BibTeX",
    sportsTeaser: "Track & Field, results",
    statsTeaser: "Coding hours & GitHub",
  },
  sports: {
    title: "Competitive sports",
    storyLead:
      "Progress comes from deliberate practice. Here's where running fits in, and a few numbers that matter to me.",
    intro:
      "I run Track and Field and Cross Country at Washburn University (previously Park University). Focus: middle- and long-distance, 3,000 m up to 10,000 m and cross country (6k, 8k, 10k). I share training and race reflections on Instagram and Strava.",
    linksHeading: "Results & training",
    tfrrsLabel: "TFRRS: full results and progression",
    ladvLabel: "LADV: German pre-college results",
    stravaLabel: "Strava: training and activities",
    personalBestsHeading: "Personal bests",
    personalBestsTrack: "Track",
    personalBestsXC: "Cross country",
    progressionHeading: "Progression",
    progressionSub: "Season bests by year",
    progression10kTitle: "10,000 m / 10 km",
    progression10kSub: "Track & road",
    recentResultsHeading: "Recent results",
    recentResultsSub: "Chronological, newest first",
    championshipHeading: "Championship results",
    championshipSub:
      "Placements at conference, regional, and national-level meets, where the result is the place, not just the time.",
    teamsHeading: "Teams",
    teamsSub: "Clubs and universities I've run for.",
    preCollegeHeading: "Pre-college (Germany)",
    preCollegeIntro:
      "Selected results from LADV (DJK Armada Euchen-Würselen, Nordrhein) before college in the US.",
    yearlyDistanceHeading: "Yearly distance",
    yearlyDistanceSub: "Total running distance per year (training + races).",
    lifetimeLabel: "Lifetime total",
    timeEstimateLabel: "Rough time at ~4:30/km:",
    hours: "hours",
    days: "days",
    recentHeading: "2025–2026 highlights",
    recent: [
      "Augustana Invitational (Sep 2026): 10th in an 8k XC PR of 24:42.4; Washburn won the team title (1st of 19 teams).",
      "MIAA Outdoor Championships 2026: 5th in the 10,000 m in a PR of 30:37.62; 1,500 m PR 4:08.98 at UCM Mule Relays (Apr 2026).",
      "Washburn Open indoor 5k 14:54 (Jan 2026); Washburn Rust Buster 3k 8:43.56 (Jan 2026).",
      "NCAA DII Cross Country Nationals 2025 (10k); Central Region 41st, team qualified; MIAA XC 32nd.",
      "First sub-25 8k XC at DBU Old Glory Gallop (24:49). Gans Creek 8k 25:03, course PR and 8k XC PR at season opener.",
      "Heart of America Conference: 1st 10,000 m (2025, 2024), 1st 5000 m indoor (2025); Iowa State Holiday 3000 m 1st.",
      "New Year's Eve Aachen: 3rd 4.5 km, 1st 9 km. 1st Kraremanns Lauf Simmerath 4 km.",
    ],
    highlights: "Awards & championships",
    awards: [
      "Sports Medal of the City of Würselen (Jan 2024), awarded for achievements in long-distance running at the Würselen Sports Matinee.",
    ],
    photoAlt: "Sports",
    photosNote: "Photos to come.",
    indoor: "i",
    place: "Place",
    youth: "Youth",
    teams: {
      "djk-armada": { name: "DJK Armada Euchen-Würselen", period: "Germany" },
      park: { name: "Park University", period: "2023–2025" },
      washburn: { name: "Washburn University", period: "2025–" },
    },
    meets: {
      "DM Jugend U20/U18": "German Youth Champs (U20/U18)",
      "NRW Langstreckenmeisterschaften":
        "North Rhine-Westphalia Long-Distance Champs",
      "Nordrhein Crossmeisterschaften": "North Rhine Cross Country Champs",
      "NRW 10-km-Straßenlaufmeisterschaften": "NRW 10k Road Racing Champs",
      "DM 10 km Straße": "German National 10k Road",
      "MIAA Indoor Track & Field Championships":
        "MIAA Indoor Track & Field Championships",
      "2026 MIAA Indoor Track & Field Championships":
        "MIAA Indoor Track & Field Championships",
      "MIAA Outdoor Track & Field Championships":
        "MIAA Outdoor Track & Field Championships",
      "NCAA DII Cross Country Championships":
        "NCAA DII Cross Country Championships",
      "NCAA DII XC Championships": "NCAA DII Cross Country Championships",
      "NCAA DII Central Region": "NCAA DII Central Region",
      "MIAA Cross Country Championships": "MIAA Cross Country Championships",
      "Heart of America Outdoor Championships":
        "Heart of America Outdoor Championships",
      "Heart of America Indoor Championships":
        "Heart of America Indoor Championships",
      "Heart of America XC Championships":
        "Heart of America XC Championships",
      "NAIA Cross Country Championships": "NAIA Cross Country Championships",
    },
    events: {
      "10 km Straße": "10k Road",
      "9 km Straße": "9k Road",
      "5 km Straße": "5k Road",
      "4.5 km Straße": "4.5k Road",
      "Cross Sprint": "Cross Sprint",
      "Crosslauf kurz": "Short cross country",
      "3×1,000 m Staffel": "3×1,000 m Relay",
      "10k (XC)": "10k (XC)",
      "8k (XC)": "8k (XC)",
      "6k (XC)": "6k (XC)",
    },
  },
  stats: {
    title: "Stats",
    codingHours: "Coding hours tracked",
    codingGoal: "Goal: 10,000 hours",
    githubContributions: "GitHub contributions",
    githubPlaceholder:
      "Set GITHUB_USERNAME in config.ts to show your contribution chart.",
    gladwellHeadline: "The 10,000 Hour Rule",
    gladwellIntro:
      "In Outliers, Malcolm Gladwell popularized the idea that it takes roughly 10,000 hours of deliberate practice to reach world-class mastery in a field, a notion rooted in Anders Ericsson's research on expert performance. I track my coding hours as a rough proxy for that kind of deliberate practice.",
    myJourney: "My coding journey",
    hoursToGo: "hours to go",
    milestoneLabel: "milestone",
    whatCounts: "What I count",
    whatCountsText:
      "Focused coding: building, debugging, learning from docs and code. Not passive consumption. Same idea as in sports: deliberate practice, not just volume.",
    githubAsTrace: "One visible trace",
    githubAsTraceText:
      "GitHub is one footprint of that practice. Here's the contribution graph.",
  },
};
