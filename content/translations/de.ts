/**
 * German UI strings. Structure must match en.ts.
 */
import type { Messages } from "@/content/translations/types";

export const de: Messages = {
  meta: {
    title: "Lukas Mehl",
    description:
      "CIS-Student Washburn · Werkstudent Webentwicklung @ Pentos · ESEM-2026-Paper zur Post-Quanten-Migrationsbereitschaft (PQCScanner)",
  },
  intro: {
    name: "Lukas Mehl",
    headline:
      "CIS-Student @ Washburn University · Werkstudent in der Webentwicklung @ Pentos · Autor ESEM 2026 (PQCScanner, Post-Quanten-Kryptografie)",
    location: "Topeka, KS | Würselen, DE",
  },
  about: {
    title: "Über mich",
    paragraphs: [
      "Die erste Hälfte meines Bachelorstudiums in Cybersecurity und Information and Computer Science (Schwerpunkt Computer Science) habe ich an der Park University absolviert. Seitdem studiere ich an der Washburn University weiter, mit Hauptfach Computer Information Science.",
      "Bei Pentos arbeite ich als Werkstudent in der Webentwicklung und entwickle dort Webanwendungen weiter. Von Januar bis Mai 2026 war ich Undergraduate Research Assistant (K-INBRE, SCWTE) an der Washburn University. Dort habe ich das Frontend von PicTur gebaut, einer Forschungs-Webanwendung zur automatischen Erkennung einzelner Tiere, die ich bis heute weiterentwickle.",
      "In meiner eigenen Forschung geht es um Post-Quanten-Kryptografie. Mit PQCScanner, einem Tool zur statischen Analyse kryptografischer Programmierschnittstellen in Python, Java und Go, untersuche ich, wie gut Open-Source-Software auf den Umstieg auf quantensichere Verfahren vorbereitet ist. Mein Paper dazu, das ich allein verfasst habe, wurde für die ESEM 2026 (International Symposium on Empirical Software Engineering and Measurement) angenommen. Als Poster habe ich das Projekt außerdem bei der CCSC Central Plains 2026 vorgestellt.",
      "Mich interessieren vor allem Cybersecurity, quantensichere Kryptografie und Software Engineering. Am meisten Erfahrung habe ich im Frontend mit React, TypeScript, JavaScript und HTML/CSS. Dazu kommen Python, Java und Kotlin sowie automatisierte Tests mit Playwright und Selenium. Mein Ziel sind Anwendungen, die sicher, schnell und angenehm zu benutzen sind.",
      "Neben dem Studium laufe ich im College-Team Mittel- und Langstrecke. Dabei habe ich Top-10-Platzierungen bei Deutschen Meisterschaften und mehrere Conference-Siege erreicht und vor meinem Wechsel einen Schulrekord gehalten. Der Sport hat mir Disziplin, Durchhaltevermögen und Teamgeist beigebracht. Außerdem engagiere ich mich ehrenamtlich. Ich spreche fließend Deutsch und Englisch und arbeite sicher mit MS Office und Adobe.",
      "Am liebsten setze ich Gelerntes direkt in der Praxis um und suche dafür immer wieder neue Herausforderungen in IT und Cybersecurity.",
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
        "Entwicklung von PicTur, einer Forschungs-Webanwendung, die Schmuck-Dosenschildkröten (Ornate Box Turtles) anhand von Fotos ihres Bauchpanzers automatisch erkennt. Jedes Tier soll zuverlässig wiedererkannt und in einer Datenbank erfasst werden, als Grundlage für Langzeitbeobachtung und biologische Forschung. Garrett King-Cody verantwortet Backend und Server, ich das Frontend und das Zusammenspiel der Komponenten.",
      responsibilities: [
        "Konzeption und Umsetzung der Frontend-Architektur mit React und TypeScript",
        "Abläufe für Bild-Upload, Prüfung und Darstellung der Ergebnisse",
        "Dashboards, in denen Forschende erkannte Tiere und Metadaten einsehen",
        "Anbindung an das Backend für Bilderkennung und Datenbank",
        "Tests, Zuverlässigkeit und Deployment",
      ],
      note: "Mein erstes Projekt vom leeren Repository bis zur fertigen Anwendung auf einem selbst eingerichteten Server, betreut von Dr. Benjamin Reed. An PicTur arbeite ich auch nach dem Ende der Anstellung weiter.",
    },
    pentos: {
      role: "Werkstudent in der Webentwicklung",
      company: "Pentos",
      period: "Dez 2024 – heute",
      location: "Kissimmee, Florida, USA · Remote",
      description:
        "Eigenständige Konzeption und Entwicklung einer Webanwendung für SAP SuccessFactors mit JavaScript und React. Aus einer Produktidee entsteht eine leicht bedienbare Oberfläche, deren Frontend ich komplett umsetze. Dabei stimme ich mich regelmäßig mit der Projektleitung ab.",
    },
    soptim: {
      role: "Praktikum Softwareentwicklung",
      company: "SOPTIM AG",
      period: "Jun 2024 – Jul 2024",
      location: "Aachen, Deutschland · Hybrid",
      description:
        "Entwicklung und Pflege von Software zur Verarbeitung von Zeitreihen in einem agilen Team mit SCRUM (Daily, Refinement, Retrospektive). Aufgaben, Bugs und User Stories sowie Reviews von Merge Requests. Technologien: React, TypeScript, Java, CSS, Selenium, Kotlin.",
    },
  },
  education: {
    title: "Ausbildung",
    washburn: {
      degree: "Bachelor of Science in Computer Information Science (Fortsetzung)",
      school: "Washburn University",
      period: "Aug 2025 – Mai 2027",
      location: "Topeka, Kansas, USA",
      note: "Fortsetzung des Bachelorstudiums nach dem Wechsel von der Park University. Im Leichtathletik- und Cross-Country-Team.",
      highlights: [
        "Minor Mathematik; Undergraduate Certificates in Cybersecurity und Artificial Intelligence",
        "Dean's Scholarship Award (Dixie Donnelly Wantoch Scholarship) für das akademische Jahr 2026–2027, Washburn CIS Department (Apr 2026)",
      ],
    },
    park: {
      degree: "Bachelor of Science in Cybersecurity & Information and Computer Science (begonnen)",
      school: "Park University",
      period: "Aug 2023 – Mai 2025",
      location: "Parkville, Missouri, USA",
      note: "Beginn des Bachelorstudiums, im Sommer 2025 Wechsel an die Washburn University. Im Leichtathletik- und Cross-Country-Team.",
    },
    highSchool: {
      degree: "Abitur",
      school: "Heilig-Geist-Gymnasium",
      period: "Aug 2015 – Jun 2023",
      location: "Würselen, Deutschland",
      note: "Schülersprecher im Schuljahr 2021/22",
    },
  },
  projects: {
    title: "Projekte",
    teaser:
      "PQCScanner, PicTur, RunSync, Heiligtumsfahrtquiz und mehr, jeweils mit Beschreibung, Zeitraum und Links zu Code oder Live-Demo.",
    viewAll: "Alle Projekte anzeigen",
    linkLive: "Live / Demo",
    linkGithub: "Auf GitHub ansehen",
    linkGithubWeb: "Web (GitHub)",
    linkGithubAndroid: "Android (GitHub)",
    pqcscanner: {
      name: "PQCScanner: Wie bereit ist Open-Source-Software für Post-Quanten-Kryptografie?",
      period: "Mär 2026 – heute",
      description:
        "Forschungsprototyp für eine empirische Studie dazu, wie verbreitet Post-Quanten-Kryptografie (PQC) in Open-Source-Software ist. Der Scanner durchsucht Quellcode nach kryptografischen Verfahren und ordnet jeden Fund ein: durch Quantencomputer angreifbar (z. B. RSA, ECDSA, ECDH), quantensicher oder bereits PQC-fähig (z. B. Kyber, Dilithium). Das Paper dazu (alleiniger Autor) wurde für die ESEM 2026 angenommen, dazu kam ein Poster bei der CCSC Central Plains 2026.",
      aspects: [
        "Erkennung über den Syntaxbaum (AST) für Python (ast) sowie Java und Go (tree-sitter)",
        "Abgestufte Trefferqualität, vom direkten API-Aufruf bis zum reinen Textfund",
        "Analyse tausender GitHub-Repositories mit Search API, Shallow Clones, Rate Limiting und fortsetzbarem Fortschritt in SQLite",
        "Ergebnisse als JSON pro Repository, zusammengefasstes CSV und Bericht in der Kommandozeile",
      ],
    },
    pictur: {
      name: "PicTur: Plattform zur automatischen Wildtier-Erkennung",
      period: "Okt 2025 – heute",
      org: "Washburn University",
      description:
        "Forschungs-Webplattform, die Schmuck-Dosenschildkröten anhand von Fotos ihres Bauchpanzers automatisch wiedererkennt. Die Ergebnisse landen in einer Datenbank für Langzeitstudien in Ökologie und Artenschutz. Garrett King-Cody verantwortet Backend und Server, ich Frontend und UX. Das Projekt lief von der ersten Idee bis zum Live-Betrieb.",
      aspects: [
        "Automatische Erkennung einzelner Tiere anhand von Fotos",
        "Web-Oberfläche für Uploads, Ergebnisse und Datenauswertung",
        "Frontend und UX (mein Teil), Backend und Server (Garrett King-Cody)",
      ],
    },
    runsync: {
      name: "RunSync: Automatisierte Fitness-Datensynchronisation",
      period: "Sep 2024 – Okt 2025",
      description:
        "Python-Automatisierung, die meine Trainingsdaten zwischen Strava, Google Sheets und Garmin Connect abgleicht und automatisch über GitHub Actions läuft. Technik: Python, Strava API, Google Sheets API, Selenium, OAuth2. Ergebnis: Die Pflege meines Trainingstagebuchs dauert Minuten statt Stunden.",
      aspects: [],
    },
    heiligtumsfahrt: {
      name: "Heiligtumsfahrtquiz",
      period: "Mär 2020 – Mär 2021",
      description:
        "Konzept und Programmierung eines digitalen Kinderquiz zur Heiligtumsfahrt 2023 in Aachen, als Website und App.",
      linkLabel: "Live / Demo",
      aspects: [],
    },
  },
  publications: {
    title: "Konferenz, Publikationen & Wettbewerbe",
    items: [
      {
        date: "Okt 2026",
        text: "Paper zu PQCScanner (alleiniger Autor), einer statischen Analyse kryptografischer Programmierschnittstellen in Python, Java und Go, die zeigt, wie bereit Software für Post-Quanten-Kryptografie ist. Angenommen bei der ESEM 2026 (International Symposium on Empirical Software Engineering and Measurement) im Track Emerging Results, Vision, and Reflection Papers. Begutachtet (peer-reviewed), wird veröffentlicht und auf der Konferenz vorgestellt.",
      },
      {
        date: "2026",
        text: "CCSC Central Plains (Consortium for Computing Sciences in Colleges): Forschungsposter zu PQCScanner. Im Programmierwettbewerb 2. Platz gesamt, zusammen mit Sapnish Sharma und Ujjwal Sitaula.",
      },
    ],
  },
  certifications: {
    title: "Zertifikate & Auszeichnungen",
    items: [
      "Dean's Scholarship Award (Dixie Donnelly Wantoch Scholarship), Washburn CIS Department, Apr 2026",
      "8. Platz bundesweit, Deutscher Gründerpreis für Schüler:innen, Mai 2022",
      "Existenzia für Schüler: Wie erstelle ich einen Geschäftsplan? (GründerRegion Aachen), Mär 2021",
      "Sportmedaille der Stadt Würselen (Jan 2024) für Erfolge im Langstreckenlauf, verliehen bei der Würselener Sportmatinee.",
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
    tagline: "Informatikstudent, Webentwickler und Forscher zu Post-Quanten-Kryptografie. Läufer im College-Team.",
    photoAlt: "Porträt",
    rightNow: "Aktuell",
    roleShort:
      "Webentwicklung @ Pentos · ESEM-2026-Paper (PQCScanner) · B.Sc. CIS @ Washburn",
    explore: "Entdecken",
    cvTeaser: "Erfahrung, Ausbildung und mehr über mich",
    projectsTeaser: "PQCScanner, PicTur, RunSync & mehr",
    sportsTeaser: "Leichtathletik und Ergebnisse",
    statsTeaser: "Coding-Stunden & GitHub",
  },
  sports: {
    title: "Leistungssport",
    storyLead:
      "Fortschritt kommt durch gezieltes Training. Hier geht es ums Laufen und um ein paar Zahlen, die mir wichtig sind.",
    intro:
      "Ich laufe im Leichtathletik- und Cross-Country-Team der Washburn University, vorher an der Park University. Meine Strecken sind 3.000 m bis 10.000 m auf der Bahn und Crossläufe über 6, 8 und 10 km. Einblicke in Training und Wettkämpfe gibt es auf Instagram und Strava.",
    linksHeading: "Ergebnisse & Training",
    tfrrsLabel: "TFRRS: alle Ergebnisse und Entwicklung",
    ladvLabel: "LADV: Ergebnisse aus Deutschland vor dem Studium",
    stravaLabel: "Strava: Training und Aktivitäten",
    personalBestsHeading: "Persönliche Bestzeiten",
    personalBestsTrack: "Bahn",
    personalBestsXC: "Crosslauf",
    progressionHeading: "Verlauf",
    progressionSub: "Saisonbestleistung pro Jahr",
    progression10kTitle: "10.000 m / 10 km",
    progression10kSub: "Bahn & Straße",
    recentResultsHeading: "Letzte Ergebnisse",
    recentResultsSub: "Chronologisch, neueste zuerst",
    championshipHeading: "Meisterschaften",
    championshipSub:
      "Platzierungen bei Conference-, Regional- und nationalen Meisterschaften. Hier zählt der Platz, nicht nur die Zeit.",
    teamsHeading: "Vereine und Unis",
    teamsSub: "Für diese Vereine und Universitäten bin ich gelaufen.",
    preCollegeHeading: "Vor dem College (Deutschland)",
    preCollegeIntro:
      "Ausgewählte Ergebnisse aus der LADV-Datenbank für die DJK Armada Euchen-Würselen, bevor ich zum Studium in die USA gegangen bin.",
    yearlyDistanceHeading: "Jahreskilometer",
    yearlyDistanceSub: "Gelaufene Kilometer pro Jahr, Training und Wettkämpfe zusammen.",
    lifetimeLabel: "Insgesamt",
    timeEstimateLabel: "Bei etwa 4:30 min/km sind das ungefähr",
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
    awards: [
      "Sportmedaille der Stadt Würselen (Jan 2024) für Erfolge im Langstreckenlauf, verliehen bei der Würselener Sportmatinee.",
    ],
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
      "NCAA DII Central Region": "NCAA DII Central Region",
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
      "4.5 km Straße": "4,5 km Straße",
      "4.8 km Straße": "4,8 km Straße",
      "4.3 km Straße": "4,3 km Straße",
      "1,000 m": "1.000 m",
      "1,500 m": "1.500 m",
      "2,000 m": "2.000 m",
      "3,000 m": "3.000 m",
      "5,000 m": "5.000 m",
      "10,000 m": "10.000 m",
      Mile: "Meile",
      "10k": "10 km (Cross)",
      "8k": "8 km (Cross)",
      "6k": "6 km (Cross)",
      "Cross Sprint": "Cross Sprint",
      "Crosslauf kurz": "Crosslauf kurz",
      "3×1,000 m Staffel": "3×1.000 m Staffel",
      "10k (XC)": "10 km (Cross)",
      "8k (XC)": "8 km (Cross)",
      "6k (XC)": "6 km (Cross)",
    },
  },
  stats: {
    title: "Stats",
    codingHours: "Erfasste Programmierstunden",
    codingGoal: "Ziel: 10.000 Stunden",
    githubContributions: "GitHub-Contributions",
    githubPlaceholder: "GITHUB_USERNAME in config.ts eintragen.",
    gladwellHeadline: "Die 10.000-Stunden-Regel",
    gladwellIntro:
      "In seinem Buch Outliers hat Malcolm Gladwell die Idee bekannt gemacht, dass man rund 10.000 Stunden gezielte Übung braucht, um in einem Bereich Weltklasse zu erreichen. Sie geht auf die Expertiseforschung von Anders Ericsson zurück. Meine Programmierstunden zähle ich als groben Maßstab für genau diese Art von Übung.",
    myJourney: "Mein Weg beim Programmieren",
    hoursToGo: "Stunden fehlen noch",
    milestoneLabel: "Meilenstein",
    whatCounts: "Was ich zähle",
    whatCountsText:
      "Konzentriertes Programmieren: bauen, debuggen, aus Dokumentation und Code lernen. Kein bloßes Zuschauen. Wie im Sport zählt gezieltes Üben, nicht die reine Menge.",
    githubAsTrace: "Eine sichtbare Spur",
    githubAsTraceText:
      "GitHub zeigt einen Teil davon. Hier ist mein Contribution-Graph.",
  },
};
