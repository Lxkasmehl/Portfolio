/**
 * German UI strings. Structure must match en.ts.
 */
import type { Messages } from "@/content/translations/types";

export const de: Messages = {
  meta: {
    title: "Lukas Mehl",
    description:
      "CIS-Student Washburn · Werkstudent Web-Entwicklung @ Pentos · ESEM-2026-Paper zur Post-Quanten-Migrationsbereitschaft (PQCScanner)",
  },
  intro: {
    name: "Lukas Mehl",
    headline:
      "CIS-Student @ Washburn University · Werkstudent Web Application Development @ Pentos · Autor ESEM 2026 (PQCScanner, Post-Quanten-Kryptografie)",
    location: "Topeka, KS | Würselen, DE",
  },
  about: {
    title: "Über mich",
    paragraphs: [
      "Ich habe die erste Hälfte meines Bachelor-Studiums in Cybersecurity und Information and Computer Science (Schwerpunkt Computer Science) an der Park University abgeschlossen und setze das Studium an der Washburn University mit Hauptfach Computer and Information Science fort.",
      "Ich arbeite als Werkstudent in Web Application Development bei Pentos und entwickle und optimiere dort Webanwendungen. Von Januar bis Mai 2026 war ich Undergraduate Research Assistant (K-INBRE, SCWTE) an der Washburn University und habe das Frontend von PicTur gebaut — einer Forschungs-Webanwendung zur automatisierten Tiererkennung, die ich weiterentwickle.",
      "In meiner eigenen Forschung beschäftige ich mich mit Post-Quanten-Kryptografie: PQCScanner, ein Tool zur statischen Analyse kryptografischer API-Nutzung in Python, Java und Go, misst, wie gut Open-Source-Software auf die Migration zu Post-Quanten-Kryptografie vorbereitet ist. Mein Paper dazu (alleiniger Autor) wurde bei der ESEM 2026 (International Symposium on Empirical Software Engineering and Measurement) angenommen; außerdem habe ich es als Poster bei der CCSC Central Plains 2026 vorgestellt.",
      "Meine Schwerpunkte sind Cybersecurity, quantensichere Kryptografie und Software Engineering, vor allem Frontend-Entwicklung mit React, TypeScript, JavaScript und HTML/CSS. Außerdem habe ich Erfahrung mit Backend-Technologien wie Python, Java und Kotlin sowie mit automatisierten Tests (Playwright, Selenium). Ich entwickle gerne sichere, effiziente und nutzerfreundliche Anwendungen.",
      "Neben dem Studium bin ich Student-Athlete mit Erfahrung in Teamarbeit und Projektumsetzung. Ich spreche Deutsch und Englisch fließend und bin mit MS Office und Adobe vertraut. Als Wettkampfläufer über Mittel- und Langstrecke habe ich Top-10-Platzierungen bei Deutschen Meisterschaften und mehrere Conference-Siege erzielt; vor meinem Wechsel hatte ich einen Schulrekord inne. Diese Erfahrungen haben mir Disziplin, Resilienz und eine starke Arbeitsethik vermittelt. Ich engagiere mich auch in gemeinnützigen Initiativen.",
      "Ich bin stets daran interessiert, mein Wissen praktisch einzusetzen, neue Herausforderungen anzunehmen und mich in IT und Cybersecurity weiterzuentwickeln.",
    ],
  },
  experience: {
    title: "Berufserfahrung",
    washburn: {
      role: "Undergraduate Research Assistant (K-INBRE, SCWTE)",
      company: "Washburn University",
      period: "Jan 2026 – Mai 2026",
      location: "Topeka, Kansas, USA · Hybrid",
      description:
        "Entwicklung von PicTur, einer Forschungs-Webanwendung zur automatisierten Identifikation von Ornate Box Turtles anhand von Fotos des Plastrons. Ziele: zuverlässige Identifikation einzelner Tiere und Speicherung in einer Datenbank für Langzeit-Monitoring und biologische Forschung. Gemeinsame Entwicklung mit Garrett King-Cody (Backend und Server-Infrastruktur); mein Fokus: Frontend und Systemintegration.",
      responsibilities: [
        "Konzeption und Implementierung der Frontend-Architektur mit React und TypeScript",
        "User Workflows für Bild-Upload, Validierung und Ergebnisvisualisierung",
        "Researcher-Dashboards für identifizierte Individuen und Metadaten",
        "Abstimmung mit Backend-Systemen für bildbasierte Identifikation und Datenbank-Anbindung",
        "Mitwirkung bei Zuverlässigkeit, Tests und Deployment",
      ],
      note: "Erstes Projekt von leerem Repository bis zur deployten Anwendung auf selbst konfiguriertem Server. Unter der Betreuung von Dr. Benjamin Reed. Die Weiterentwicklung von PicTur läuft über die Anstellung hinaus.",
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
      highlights: [
        "Minor Mathematik; Undergraduate Certificates in Cybersecurity und Artificial Intelligence",
        "Dean's Scholarship Award (Dixie Donnelly Wantoch Scholarship) für das akademische Jahr 2026–2027, Washburn CIS Department (Apr 2026)",
      ],
    },
    park: {
      degree: "Bachelor of Science – Cybersecurity & Information and Computer Science (begonnen)",
      school: "Park University",
      period: "Aug 2023 – Mai 2025",
      location: "Parkville, Missouri, USA",
      note: "Beginn des B.Sc. an der Park University; Wechsel an die Washburn University im Sommer 2025. Aktivitäten: Leichtathletik & Cross Country.",
    },
    highSchool: {
      degree: "Abitur / High School",
      school: "Heilig-Geist-Gymnasium",
      period: "2015 - 2023",
      location: "Würselen, Deutschland",
      note: "Schülersprecher im Schuljahr 21/22",
    },
  },
  projects: {
    title: "Projekte",
    teaser:
      "PQCScanner, PicTur, RunSync, Heiligtumsfahrtquiz und mehr—mit Beschreibung, Zeitraum und Links zu Code oder Live-Demo.",
    viewAll: "Alle Projekte anzeigen",
    linkLive: "Live / Demo",
    linkGithub: "Auf GitHub ansehen",
    linkGithubWeb: "Web (GitHub)",
    linkGithubAndroid: "Android (GitHub)",
    pqcscanner: {
      name: "PQCScanner – Post-Quanten-Migrationsbereitschaft von Open-Source-Software",
      period: "Mär 2026 – heute",
      description:
        "Forschungsprototyp für eine empirische Studie zur Verbreitung von Post-Quanten-Kryptografie (PQC) in Open-Source-Software. Der Scanner analysiert Quellcode-Repositories, erkennt die Nutzung kryptografischer Primitive und stuft jeden Fund als post-quanten-verwundbar (z. B. RSA, ECDSA, ECDH), quantensicher oder PQC-ready (z. B. Kyber, Dilithium) ein. Paper (alleiniger Autor) angenommen bei der ESEM 2026; Poster bei der CCSC Central Plains 2026.",
      aspects: [
        "Mehrsprachige, AST-basierte Erkennung: Python über ast, Java und Go über tree-sitter",
        "Konfidenzstufen vom direkten API-Aufruf bis zum String-Match",
        "GitHub-Mining im großen Maßstab: Search API, Shallow Clones, Rate Limiting, fortsetzbarer Zustand in SQLite",
        "Ausgabe als JSON pro Repository, aggregiertes CSV und CLI-Report",
      ],
    },
    pictur: {
      name: "PicTur – Automated Wildlife Monitoring Platform",
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
      aspects: [],
    },
    heiligtumsfahrt: {
      name: "Heiligtumsfahrtquiz",
      period: "Mär 2020 – Mär 2021",
      description:
        "Entwicklung und Programmierung eines digitalen Quiz für Kinder zur Heiligtumsfahrt 2023 in Aachen, als Website und App.",
      linkLabel: "Live / Demo",
      aspects: [],
    },
  },
  publications: {
    title: "Konferenz, Publikationen & Wettbewerbe",
    items: [
      {
        date: "Okt 2026",
        text: "Paper (alleiniger Autor) zu PQCScanner – statische Analyse kryptografischer API-Nutzung in Python, Java und Go zur Einschätzung der Post-Quanten-Migrationsbereitschaft – angenommen bei der ESEM 2026 (International Symposium on Empirical Software Engineering and Measurement), Track Emerging Results, Vision, and Reflection Papers. Peer-reviewed; Veröffentlichung und Präsentation auf der Konferenz.",
      },
      {
        date: "2026",
        text: "CCSC Central Plains (Consortium for Computing Sciences in Colleges): Forschungsposter zu PQCScanner; Programmierwettbewerb, Gesamt-2. Platz (mit Sapnish Sharma und Ujjwal Sitaula).",
      },
    ],
  },
  certifications: {
    title: "Zertifikate & Auszeichnungen",
    items: [
      "Dean's Scholarship Award (Dixie Donnelly Wantoch Scholarship), Washburn CIS Department, Apr 2026",
      "8. Platz bundesweit, Deutscher Gründerpreis für Schüler:innen, Mai 2022",
      "Existenzia für Schüler – Wie erstelle ich einen Geschäftsplan? (GründerRegion Aachen), Mär 2021",
      "Sportmedaille der Stadt Würselen (Jan 2024) - Verliehen für Langstreckenlauf bei der Würselener Sportmatinée.",
    ],
  },
  skills: {
    title: "Kenntnisse",
    categoryFrontend: "Frontend",
    categoryLanguages: "Sprachen",
    categoryTesting: "Testing",
    categoryTools: "Tools & Infra",
    categoryPlatforms: "Plattformen",
    list: "Agile, SCRUM, MS Office, Adobe.",
  },
  languages: {
    title: "Sprachen",
    list: "Deutsch (Muttersprache), Englisch (fließend), Latein (Grundkenntnisse).",
  },
  footer: {
    findMe: "Finde mich",
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
    tagline: "CIS-Student, Web-Entwickler & Forschung zu Post-Quanten-Kryptografie. Student-Athlete.",
    photoAlt: "Porträt",
    rightNow: "Aktuell",
    roleShort:
      "Web-Entwicklung @ Pentos · ESEM-2026-Paper (PQCScanner) · B.Sc. CIS @ Washburn",
    explore: "Entdecken",
    cvTeaser: "Erfahrung, Ausbildung & Über mich",
    projectsTeaser: "PQCScanner, PicTur, RunSync & mehr",
    sportsTeaser: "Leichtathletik, Ergebnisse",
    statsTeaser: "Coding-Stunden & GitHub",
  },
  sports: {
    title: "Leistungssport",
    storyLead:
      "Fortschritt entsteht durch gezieltes Training. Hier ist der Platz des Laufens, und ein paar Zahlen, die mir etwas sagen.",
    intro:
      "Ich laufe Leichtathletik und Cross Country an der Washburn University (zuvor Park University). Schwerpunkt: Mittel- und Langstrecke von 3,000 m bis 10.000 m sowie Cross Country (6k, 8k, 10k). Training und Rennen reflektiere ich auf Instagram und Strava.",
    linksHeading: "Ergebnisse & Training",
    tfrrsLabel: "TFRRS - alle Zeiten & Verlauf",
    ladvLabel: "LADV - deutsche Ergebnisse vor College",
    stravaLabel: "Strava - Training & Aktivitäten",
    personalBestsHeading: "Persönliche Bestzeiten",
    personalBestsTrack: "Bahn",
    personalBestsXC: "Cross",
    progressionHeading: "Verlauf",
    progressionSub: "Saisonbesten nach Jahr",
    progression10kTitle: "10.000 m / 10 km",
    progression10kSub: "Bahn & Straße",
    recentResultsHeading: "Letzte Ergebnisse",
    recentResultsSub: "Chronologisch, neueste zuerst",
    championshipHeading: "Meisterschaftserfolge",
    championshipSub:
      "Platzierungen bei Conference-, Regional- und nationalen Meisterschaften, wo das Ergebnis der Platz ist, nicht nur die Zeit.",
    teamsHeading: "Vereine & Unis",
    teamsSub: "Vereine und Unis, für die ich bisher gelaufen bin.",
    preCollegeHeading: "Vor dem College (Deutschland)",
    preCollegeIntro:
      "Ausgewählte Ergebnisse aus der LADV (DJK Armada Euchen-Würselen, Nordrhein) vor dem Studium in den USA.",
    yearlyDistanceHeading: "Jahreskilometer",
    yearlyDistanceSub: "Gelaufene Kilometer pro Jahr (Training + Wettkämpfe).",
    lifetimeLabel: "Gesamt (alle Jahre)",
    timeEstimateLabel: "Grobe Laufzeit bei ~4:30/km:",
    hours: "Stunden",
    days: "Tage",
    recentHeading: "Highlights 2025–2026",
    recent: [
      "Augustana Invitational (Sep 2026): Platz 10 in 8-km-Cross-Bestzeit (24:42.4); Washburn gewinnt die Teamwertung (1. von 19 Teams).",
      "MIAA-Freiluftmeisterschaften 2026: 5. Platz über 10.000 m in Bestzeit (30:37.62); 1.500 m Bestzeit 4:08.98 bei den UCM Mule Relays (Apr 2026).",
      "Washburn Open Halle 5.000 m 14:54 (Jan 2026); Washburn Rust Buster 3.000 m 8:43.56 (Jan 2026).",
      "NCAA-DII-Cross-Country-Meisterschaften 2025 (10 km); Central Region Platz 41, Team qualifiziert; MIAA Cross Platz 32.",
      "Erstmals unter 25 Minuten über 8 km Cross beim DBU Old Glory Gallop (24:49). Gans Creek 8 km in 25:03, Streckenbestzeit und 8-km-Cross-Bestzeit zum Saisonauftakt.",
      "Heart of America Conference: Sieg über 10.000 m (2025, 2024), Sieg über 5.000 m Halle (2025); Iowa State Holiday 3.000 m Sieg.",
      "Silvesterlauf Aachen: 3. über 4,5 km, Sieg über 9 km. Sieg beim Kraremanns Lauf Simmerath über 4 km.",
    ],
    highlights: "Auszeichnungen & Meisterschaften",
    photoAlt: "Sport",
    photosNote: "Fotos folgen.",
    indoor: "H",
    place: "Platz",
    youth: "Jugend",
    teams: {
      "djk-armada": { name: "DJK Armada Euchen-Würselen", period: "Deutschland" },
      park: { name: "Park University", period: "2023–2025" },
      washburn: { name: "Washburn University", period: "2025–" },
    },
    meets: {
      "DM Jugend U20/U18": "DM Jugend U20/U18",
      "NRW Langstreckenmeisterschaften": "NRW Langstreckenmeisterschaften",
      "Nordrhein Crossmeisterschaften": "Nordrhein Crossmeisterschaften",
      "NRW 10-km-Straßenlaufmeisterschaften":
        "NRW 10-km-Straßenlaufmeisterschaften",
      "DM 10 km Straße": "DM 10 km Straße",
      "MIAA Indoor Track & Field Championships":
        "MIAA Hallen-Leichtathletik-Meisterschaften",
      "2026 MIAA Indoor Track & Field Championships":
        "MIAA Hallen-Leichtathletik-Meisterschaften",
      "MIAA Outdoor Track & Field Championships":
        "MIAA Freiluft-Leichtathletik-Meisterschaften",
      "NCAA DII Cross Country Championships":
        "NCAA DII Cross-Country-Meisterschaften",
      "NCAA DII XC Championships": "NCAA DII Cross-Country-Meisterschaften",
      "NCAA DII Central Region": "NCAA DII Region Mitte",
      "MIAA Cross Country Championships": "MIAA Cross-Country-Meisterschaften",
      "Heart of America Outdoor Championships":
        "Heart of America Freiluft-Meisterschaften",
      "Heart of America Indoor Championships":
        "Heart of America Hallen-Meisterschaften",
      "Heart of America XC Championships":
        "Heart of America Cross-Country-Meisterschaften",
      "NAIA Cross Country Championships": "NAIA Cross-Country-Meisterschaften",
    },
    events: {
      "10 km Straße": "10 km Straße",
      "9 km Straße": "9 km Straße",
      "5 km Straße": "5 km Straße",
      "4.5 km Straße": "4.5 km Straße",
      "Cross Sprint": "Cross Sprint",
      "Crosslauf kurz": "Crosslauf kurz",
      "3×1,000 m Staffel": "3×1,000 m Staffel",
      "10k (XC)": "10 km (Cross)",
      "8k (XC)": "8 km (Cross)",
      "6k (XC)": "6 km (Cross)",
    },
  },
  stats: {
    title: "Stats",
    codingHours: "Erfasste Coding-Stunden",
    codingGoal: "Ziel: 10.000 Stunden",
    githubContributions: "GitHub-Contributions",
    githubPlaceholder: "GITHUB_USERNAME in config.ts eintragen.",
    gladwellHeadline: "Die 10.000-Stunden-Regel",
    gladwellIntro:
      "In Outliers hat Malcolm Gladwell die Idee bekannt gemacht: Etwa 10.000 Stunden gezielte Übung braucht es, um in einem Bereich Weltklasse zu erreichen—eine Idee aus der Expertise-Forschung von Anders Ericsson. Meine Coding-Stunden tracke ich als groben Indikator für genau diese Art gezielter Übung.",
    myJourney: "Mein Coding-Weg",
    hoursToGo: "Stunden noch",
    milestoneLabel: "Meilenstein",
    whatCounts: "Was ich zähle",
    whatCountsText:
      "Fokussiertes Coding: bauen, debuggen, aus Doku und Code lernen. Kein passives Konsumieren. Wie im Sport: deliberate practice, nicht nur Masse.",
    githubAsTrace: "Eine sichtbare Spur",
    githubAsTraceText:
      "GitHub ist ein Abdruck davon. Hier der Contribution-Graph.",
  },
};
