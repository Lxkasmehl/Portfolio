/**
 * Portfolio copy — from LinkedIn. EN and DE.
 */
export type Lang = "en" | "de";

export const copy = {
  en: {
    meta: {
      title: "Lukas Mehl",
      description: "CIS Student @ Washburn · Research Assistant (K-INBRE, SCWTE) · Working Student Web Dev @ Pentos",
    },
    intro: {
      name: "Lukas Mehl",
      headline:
        "CIS Student @ Washburn University · Undergraduate Research Assistant (K-INBRE, SCWTE) · Working Student – Web Application Development @ Pentos",
      location: "Topeka Metropolitan Area",
    },
    about: {
      title: "About",
      paragraphs: [
        "I completed the first half of my bachelor's studies in Cybersecurity and Information and Computer Science (Computer Science concentration) at Park University and am now continuing my degree at Washburn University, majoring in Computer and Information Science.",
        "With a strong background in IT, programming, and software development, I currently work as a Working Student in Web Application Development at Pentos, gaining hands-on experience in building and optimizing web applications.",
        "I am passionate about cybersecurity and software engineering, with a focus on frontend development using React, TypeScript, JavaScript, and HTML/CSS. I also have experience with backend technologies such as Python, Java, and Kotlin, as well as automated testing with Playwright and Selenium. I enjoy developing secure, efficient, and user-friendly applications.",
        "Beyond my studies, I am a dedicated student-athlete with a proven ability to work in teams and execute projects effectively. I am fluent in both German and English and proficient in MS Office and Adobe software. As a competitive middle- and long-distance runner, I have achieved top-10 placements at the German Championships and earned multiple conference wins; I also previously held a school record before transferring. These experiences have helped me develop discipline, resilience, and a strong work ethic. I am also actively involved in community initiatives.",
        "I am always eager to apply my knowledge in practical settings, take on new challenges, and continuously expand my skill set in the IT and cybersecurity fields.",
      ],
    },
    experience: {
      title: "Experience",
      washburn: {
        role: "Undergraduate Research Assistant (K-INBRE, SCWTE)",
        company: "Washburn University",
        period: "Jan 2026 – Present",
        location: "Topeka, Kansas, US · Hybrid",
        description:
          "Working on TurtleTracker, a research web application for the fully automated identification of Ornate Box Turtles based on photos of their plastron. The goal is to reliably identify individual turtles from images and store them in a database for long-term population monitoring and biological research. Developed collaboratively with Garrett King-Cody (backend and server infrastructure); I focus on frontend development and overall system integration.",
        responsibilities: [
          "Designing and implementing the frontend architecture using React and TypeScript",
          "Building user workflows for image upload, validation, and result visualization",
          "Developing researcher-facing dashboards for interacting with identified individuals and metadata",
          "Collaborating closely with backend systems for image-based identification and database ingestion",
          "Contributing to end-to-end reliability, testing, and deployment",
        ],
        note: "First project followed from an empty repository to a fully deployed application on a self-configured server. Conducted under the mentorship of Dr. Benjamin Reed.",
      },
      pentos: {
        role: "Working Student in Web Application Development",
        company: "Pentos",
        period: "Dec 2024 – Present",
        location: "Kissimmee, Florida, US · Remote",
        description:
          "Independently designing and developing a web application in the SAP SuccessFactors environment using JavaScript and React. Transforming a high-level product idea into a user-friendly, intuitive interface and implementing the complete frontend. Close collaboration with project leadership: regular check-ins, presenting updates, and continuous refinement of the application.",
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
        degree: "Bachelor of Science – Computer Information Science (continued)",
        school: "Washburn University",
        period: "Aug 2025 – May 2027",
        location: "Topeka, Kansas, US",
        note: "Continuing B.Sc. after transferring from Park University. Activities: Track and Field & Cross Country.",
      },
      park: {
        degree: "Bachelor of Science – Cybersecurity & Information and Computer Science (started)",
        school: "Park University",
        period: "Aug 2023 – May 2025",
        location: "Parkville, Missouri, US",
        note: "Started B.Sc. in Cybersecurity & Information and Computer Science; transferred to Washburn University in Summer 2025. Activities: Track and Field & Cross Country.",
      },
    },
    projects: {
      title: "Projects",
      turtletracker: {
        name: "TurtleTracker – Automated Wildlife Monitoring Platform",
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
      },
      heiligtumsfahrt: {
        name: "Heiligtumsfahrtquiz",
        period: "Mar 2020 – Mar 2021",
        description:
          "Development and programming of a digital quiz for children for the Heiligtumsfahrt 2023 in Aachen, implemented as a website and app.",
        link: "https://quiz.heiligtumsfahrt-aachen.de/",
        linkLabel: "Project link",
      },
    },
    certifications: {
      title: "Certifications & Awards",
      items: [
        "8th place nationwide, German Startup Award for Students (Deutscher Gründerpreis für Schüler:innen), May 2022",
        "Existenzia für Schüler – Wie erstelle ich einen Geschäftsplan? (GründerRegion Aachen), Mar 2021",
        "Sports Medal of the City of Würselen (Jan 2024) — Awarded for achievements in long-distance running at the Würselen Sports Matinee.",
        "1st Place Heart of America Outdoor Conference Championships 10,000 m (May 2025, May 2024)",
        "1st Place Heart of America Indoor Conference Championships 5,000 m (Feb 2025)",
        "8th Place German Championships 10 km Road Racing U18 (DLV, Sep 2022)",
      ],
    },
    skills: {
      title: "Skills",
      list: "JavaScript, React, TypeScript, Java, Python, HTML/CSS, SAP SuccessFactors, Kotlin, Playwright, Selenium, Agile, SCRUM, MS Office, Adobe.",
    },
    languages: {
      title: "Languages",
      list: "German (native), English (fluent), Latin (elementary).",
    },
    footer: {
      linkedIn: "LinkedIn",
      instagram: "Instagram",
    },
    nav: {
      home: "Home",
      cv: "CV",
      projects: "Projects",
      sports: "Sports",
      stats: "Stats",
    },
    home: {
      tagline: "CIS student, research assistant & web developer. Student-athlete.",
      photoAlt: "Portrait",
      rightNow: "Right now",
      roleShort: "Research @ Washburn (TurtleTracker) · Web dev @ Pentos · B.Sc. CIS @ Washburn",
      explore: "Explore",
      cvTeaser: "Experience, education & about",
      projectsTeaser: "TurtleTracker, RunSync & more",
      sportsTeaser: "Track & Field, results",
      statsTeaser: "Coding hours & GitHub",
    },
    sports: {
      title: "Competitive sports",
      intro:
        "I run Track and Field and Cross Country at Washburn University. Focus: middle- and long-distance (5,000 m, 10,000 m, cross country). Top-10 at German Championships, multiple conference wins, former school record before transferring.",
      highlights: "Selected results",
      photoAlt: "Sports",
    },
    stats: {
      title: "Stats",
      codingHours: "Coding hours tracked",
      codingGoal: "Goal: 10,000 hours",
      githubContributions: "GitHub contributions",
      githubPlaceholder: "Set GITHUB_USERNAME in config.ts to show your contribution chart.",
    },
  },
  de: {
    meta: {
      title: "Lukas Mehl",
      description: "CIS-Student Washburn · Forschungsassistent (K-INBRE, SCWTE) · Werkstudent Web-Entwicklung @ Pentos",
    },
    intro: {
      name: "Lukas Mehl",
      headline:
        "CIS-Student @ Washburn University · Undergraduate Research Assistant (K-INBRE, SCWTE) · Werkstudent Web Application Development @ Pentos",
      location: "Großraum Topeka",
    },
    about: {
      title: "Über mich",
      paragraphs: [
        "Ich habe die erste Hälfte meines Bachelor-Studiums in Cybersecurity und Information and Computer Science (Schwerpunkt Computer Science) an der Park University abgeschlossen und setze das Studium an der Washburn University mit Hauptfach Computer and Information Science fort.",
        "Mit Hintergrund in IT, Programmierung und Softwareentwicklung arbeite ich als Werkstudent in Web Application Development bei Pentos und sammle praktische Erfahrung im Aufbau und in der Optimierung von Webanwendungen.",
        "Meine Schwerpunkte sind Cybersecurity und Software Engineering, vor allem Frontend-Entwicklung mit React, TypeScript, JavaScript und HTML/CSS. Außerdem habe ich Erfahrung mit Backend-Technologien wie Python, Java und Kotlin sowie mit automatisierten Tests (Playwright, Selenium). Ich entwickle gerne sichere, effiziente und nutzerfreundliche Anwendungen.",
        "Neben dem Studium bin ich Student-Athlete mit Erfahrung in Teamarbeit und Projektumsetzung. Ich spreche Deutsch und Englisch fließend und bin mit MS Office und Adobe vertraut. Als Wettkampfläufer über Mittel- und Langstrecke habe ich Top-10-Platzierungen bei Deutschen Meisterschaften und mehrere Conference-Siege erzielt; vor meinem Wechsel hatte ich einen Schulrekord inne. Diese Erfahrungen haben mir Disziplin, Resilienz und eine starke Arbeitsethik vermittelt. Ich engagiere mich auch in gemeinnützigen Initiativen.",
        "Ich bin stets daran interessiert, mein Wissen praktisch einzusetzen, neue Herausforderungen anzunehmen und mich in IT und Cybersecurity weiterzuentwickeln.",
      ],
    },
    experience: {
      title: "Berufserfahrung",
      washburn: {
        role: "Undergraduate Research Assistant (K-INBRE, SCWTE)",
        company: "Washburn University",
        period: "Jan 2026 – heute",
        location: "Topeka, Kansas, USA · Hybrid",
        description:
          "Entwicklung von TurtleTracker, einer Forschungs-Webanwendung zur automatisierten Identifikation von Ornate Box Turtles anhand von Fotos des Plastrons. Ziele: zuverlässige Identifikation einzelner Tiere und Speicherung in einer Datenbank für Langzeit-Monitoring und biologische Forschung. Gemeinsame Entwicklung mit Garrett King-Cody (Backend und Server-Infrastruktur); mein Fokus: Frontend und Systemintegration.",
        responsibilities: [
          "Konzeption und Implementierung der Frontend-Architektur mit React und TypeScript",
          "User Workflows für Bild-Upload, Validierung und Ergebnisvisualisierung",
          "Researcher-Dashboards für identifizierte Individuen und Metadaten",
          "Abstimmung mit Backend-Systemen für bildbasierte Identifikation und Datenbank-Anbindung",
          "Mitwirkung bei Zuverlässigkeit, Tests und Deployment",
        ],
        note: "Erstes Projekt von leerem Repository bis zur deployten Anwendung auf selbst konfiguriertem Server. Unter der Betreuung von Dr. Benjamin Reed.",
      },
      pentos: {
        role: "Werkstudent Web Application Development",
        company: "Pentos",
        period: "Dez 2024 – heute",
        location: "Kissimmee, Florida, USA · Remote",
        description:
          "Eigenständige Konzeption und Entwicklung einer Webanwendung im SAP SuccessFactors-Umfeld mit JavaScript und React. Umsetzung einer Produktidee in eine nutzerfreundliche Oberfläche und Implementierung des kompletten Frontends. Enge Abstimmung mit der Projektleitung.",
      },
      soptim: {
        role: "Software Development Intern",
        company: "SOPTIM AG",
        period: "Jun 2024 – Jul 2024",
        location: "Aachen, Deutschland · Hybrid",
        description:
          "Entwicklung und Wartung von Software zur Verarbeitung von Zeitreihen im Agile-Team. SCRUM (Daily, Refinement, Retrospective). Tasks, Bugs, User Stories, Merge-Request-Reviews. Technologien: React, TypeScript, Java, CSS, Selenium, Kotlin.",
      },
    },
    education: {
      title: "Ausbildung",
      washburn: {
        degree: "Bachelor of Science – Computer Information Science (Fortsetzung)",
        school: "Washburn University",
        period: "Aug 2025 – Mai 2027",
        location: "Topeka, Kansas, USA",
        note: "Fortsetzung des B.Sc. nach Wechsel von der Park University. Aktivitäten: Leichtathletik & Cross Country.",
      },
      park: {
        degree: "Bachelor of Science – Cybersecurity & Information and Computer Science (begonnen)",
        school: "Park University",
        period: "Aug 2023 – Mai 2025",
        location: "Parkville, Missouri, USA",
        note: "Beginn des B.Sc. an der Park University; Wechsel an die Washburn University im Sommer 2025. Aktivitäten: Leichtathletik & Cross Country.",
      },
    },
    projects: {
      title: "Projekte",
      turtletracker: {
        name: "TurtleTracker – Automated Wildlife Monitoring Platform",
        period: "Okt 2025 – heute",
        org: "Washburn University",
        description:
          "Forschungs-Webplattform zur automatisierten Identifikation von Ornate Box Turtles anhand von Plastron-Fotos. Ergebnisse werden in einer Datenbank für Längsschnittanalysen und ökologische Forschung gespeichert. Gemeinsame Entwicklung mit Garrett King-Cody (Backend und Server); ich verantworte Frontend und UX. Vollständiger Lebenszyklus von der Idee bis zum Live-Betrieb.",
        aspects: [
          "Automatisierter Workflow zur bildbasierten Identifikation",
          "Web-Oberfläche für Uploads, Ergebnisse und Datenexploration",
          "Frontend und UX (mein Fokus); Backend und Server (Garrett King-Cody)",
        ],
      },
      runsync: {
        name: "RunSync: Automatisierte Fitness-Datensynchronisation",
        period: "Sep 2024 – Okt 2025",
        description:
          "Python-Automatisierung zur Synchronisation von Fitnessdaten zwischen Strava, Google Sheets und Garmin Connect. Automatisierter Abgleich, Google-Sheets-Anbindung, GitHub Actions. Stack: Python, Strava API, Google Sheets API, Selenium, OAuth2. Impact: Reduzierung des Datenaufwands von Stunden auf Minuten.",
      },
      heiligtumsfahrt: {
        name: "Heiligtumsfahrtquiz",
        period: "Mär 2020 – Mär 2021",
        description:
          "Entwicklung und Programmierung eines digitalen Quiz für Kinder zur Heiligtumsfahrt 2023 in Aachen, als Website und App.",
        link: "https://quiz.heiligtumsfahrt-aachen.de/",
        linkLabel: "Projektlink",
      },
    },
    certifications: {
      title: "Zertifikate & Auszeichnungen",
      items: [
        "8. Platz bundesweit, Deutscher Gründerpreis für Schüler:innen, Mai 2022",
        "Existenzia für Schüler – Wie erstelle ich einen Geschäftsplan? (GründerRegion Aachen), Mär 2021",
        "Sportmedaille der Stadt Würselen (Jan 2024) — Verliehen für Langstreckenlauf bei der Würselener Sportmatinée.",
        "1. Platz Heart of America Outdoor Conference Championships 10.000 m (Mai 2025, Mai 2024)",
        "1. Platz Heart of America Indoor Conference Championships 5.000 m (Feb 2025)",
        "8. Platz Deutsche Meisterschaft 10 km Straßenlauf U18 (DLV, Sep 2022)",
      ],
    },
    skills: {
      title: "Kenntnisse",
      list: "JavaScript, React, TypeScript, Java, Python, HTML/CSS, SAP SuccessFactors, Kotlin, Playwright, Selenium, Agile, SCRUM, MS Office, Adobe.",
    },
    languages: {
      title: "Sprachen",
      list: "Deutsch (Muttersprache), Englisch (fließend), Latein (Grundkenntnisse).",
    },
    footer: {
      linkedIn: "LinkedIn",
      instagram: "Instagram",
    },
    nav: {
      home: "Start",
      cv: "Lebenslauf",
      projects: "Projekte",
      sports: "Sport",
      stats: "Stats",
    },
    home: {
      tagline: "CIS-Student, Forschungsassistent & Web-Entwickler. Student-Athlete.",
      photoAlt: "Porträt",
      rightNow: "Aktuell",
      roleShort: "Forschung @ Washburn (TurtleTracker) · Web-Entwicklung @ Pentos · B.Sc. CIS @ Washburn",
      explore: "Entdecken",
      cvTeaser: "Erfahrung, Ausbildung & Über mich",
      projectsTeaser: "TurtleTracker, RunSync & mehr",
      sportsTeaser: "Leichtathletik, Ergebnisse",
      statsTeaser: "Coding-Stunden & GitHub",
    },
    sports: {
      title: "Leistungssport",
      intro:
        "Ich laufe Leichtathletik und Cross Country an der Washburn University. Schwerpunkt: Mittel- und Langstrecke (5.000 m, 10.000 m, Cross Country). Top-10 bei Deutschen Meisterschaften, mehrere Conference-Siege, ehemaliger Schulrekord vor dem Wechsel.",
      highlights: "Ausgewählte Ergebnisse",
      photoAlt: "Sport",
    },
    stats: {
      title: "Stats",
      codingHours: "Erfasste Coding-Stunden",
      codingGoal: "Ziel: 10.000 Stunden",
      githubContributions: "GitHub-Contributions",
      githubPlaceholder: "GITHUB_USERNAME in config.ts eintragen.",
    },
  },
} as const;
