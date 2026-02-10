/**
 * Sports data: PBs, progression, recent results, pre-college (LADV), yearly distance, links.
 * Sources: TFRRS, LADV, Strava (for yearly km). Update when new results are in.
 *
 * Auto-update from TFRRS/LADV: Neither site offers a public API. Options:
 * - Manual: keep this file in sync when new results appear on TFRRS/LADV.
 * - Scraping: e.g. GitHub Actions cron + script (cheerio/puppeteer) to scrape athlete
 *   pages and update RECENT_RESULTS / PERSONAL_BESTS. TFRRS HTML can change; check ToS.
 *   Community tools: e.g. github.com/mitchellggreenhalgh/mid-distance-webscrapers
 */

export const SPORTS_LINKS = {
  tfrrs: "https://www.tfrrs.org/athletes/8625664/Washburn/Lukas_Mehl.html",
  ladv: "https://ladv.de/leistungsdatenbank/athletenprofil/436700/Lukas-Mehl.htm",
  strava: "https://www.strava.com/athletes/68981361",
} as const;

/** Personal best per event. time in display format (e.g. "14:47.21"); date YYYY-MM or meet name. */
export interface PersonalBest {
  event: string;
  time: string;
  date: string;
  meet?: string;
  indoor?: boolean;
  xc?: boolean;
}

/** Season best or key result for progression chart. */
export interface ProgressionPoint {
  year: number;
  time: string; // display
  timeSeconds?: number; // for chart scaling
  meet?: string;
  indoor?: boolean;
  note?: string; // e.g. "U18", "U20" for pre-college
}

/** Single result in the timeline. */
export interface ResultEntry {
  date: string; // YYYY-MM-DD or YYYY-MM
  meet: string;
  event: string;
  time: string;
  place?: string;
  note?: string;
}

/** Pre-college / German result (LADV). */
export interface PreCollegeResult {
  event: string;
  time: string;
  date: string;
  location: string;
  ageGroup?: string;
  note?: string;
}

// —— Personal Bests (all-time, college + post-college) ——
export const PERSONAL_BESTS: PersonalBest[] = [
  { event: "800 m", time: "2:06.91", date: "2024-04", meet: "Kip Janvrin Open", indoor: false },
  { event: "1,000 m", time: "2:40.00", date: "2025-01", meet: "Coach Alsup Invite", indoor: true },
  { event: "1,500 m", time: "4:13.92", date: "2024-04", meet: "Kip Janvrin Open", indoor: false },
  { event: "Mile", time: "4:28.65", date: "2025-01", meet: "Coach Alsup Invite", indoor: true },
  { event: "3,000 m", time: "8:38.08", date: "2025-01", meet: "NAIA/Juco Challenge", indoor: true },
  { event: "5,000 m", time: "14:47.21", date: "2025-04", meet: "Bryan Clay Invitational", indoor: false },
  { event: "10,000 m", time: "31:14.41", date: "2025-04", meet: "Bryan Clay Invitational", indoor: false },
  { event: "6k (XC)", time: "19:37.0", date: "2023-09", meet: "Griffon Twilight", xc: true },
  { event: "8k (XC)", time: "24:49.1", date: "2025-10", meet: "DBU Old Glory Gallop", xc: true },
  { event: "10k (XC)", time: "31:57.1", date: "2025-11", meet: "NCAA DII Central Region", xc: true },
];

// —— Progression by event (year → best that season) for charts ——
// Includes LADV pre-college where applicable (e.g. 3k 2022, 2023 Rostock).
export const PROGRESSION_3000: ProgressionPoint[] = [
  { year: 2022, time: "9:05.05", timeSeconds: 545.05, meet: "Bergisch Gladbach", note: "U18" },
  { year: 2023, time: "8:54.86", timeSeconds: 534.86, meet: "DM Jugend Rostock", note: "U20" },
  { year: 2024, time: "8:45.80", timeSeconds: 525.80, meet: "Iowa State Holiday" },
  { year: 2025, time: "8:38.08", timeSeconds: 518.08, meet: "NAIA/Juco Challenge" },
  { year: 2026, time: "8:43.56", timeSeconds: 523.56, meet: "Washburn Rust Buster" },
];

export const PROGRESSION_5000: ProgressionPoint[] = [
  { year: 2023, time: "15:28.01", timeSeconds: 928.01, meet: "Crimson & Gold" },
  { year: 2024, time: "14:59.81", timeSeconds: 899.81, meet: "Mel Tjeerdsma Classic" },
  { year: 2025, time: "14:47.21", timeSeconds: 887.21, meet: "Bryan Clay Invitational" },
  { year: 2026, time: "14:54.09", timeSeconds: 894.09, meet: "Washburn Open (indoor)", indoor: true },
];

// 10,000 m (Bahn) + 10 km Straße zusammengefasst
export const PROGRESSION_10000: ProgressionPoint[] = [
  { year: 2022, time: "32:51", timeSeconds: 1971, meet: "Bonn (10 km Straße)", note: "U18" },
  { year: 2024, time: "32:16.18", timeSeconds: 1936.18, meet: "Kansas Relays" },
  { year: 2025, time: "31:14.41", timeSeconds: 1874.41, meet: "Bryan Clay Invitational" },
];

export const PROGRESSION_8K_XC: ProgressionPoint[] = [
  { year: 2023, time: "25:16.8", timeSeconds: 1516.8, meet: "Heart of America Conf." },
  { year: 2024, time: "25:05.4", timeSeconds: 1505.4, meet: "Heart of America Conf." },
  { year: 2025, time: "24:49.1", timeSeconds: 1489.1, meet: "DBU Old Glory Gallop" },
];

// —— Recent results timeline (chronological: newest first) ——
export const RECENT_RESULTS: ResultEntry[] = [
  { date: "2026-01-30", meet: "Washburn Open", event: "5,000 m", time: "14:54.09", place: "22nd" },
  { date: "2026-01-16", meet: "Washburn Rust Buster", event: "3,000 m", time: "8:43.56", place: "13th" },
  { date: "2025-11-22", meet: "NCAA DII XC Championships", event: "10k", time: "32:28.2", place: "177th" },
  { date: "2025-11-08", meet: "NCAA DII Central Region", event: "10k", time: "31:57.1", place: "41st", note: "Team qualified for Nationals" },
  { date: "2025-10-25", meet: "MIAA XC Championships", event: "8k", time: "25:59.4", place: "32nd" },
  { date: "2025-10-11", meet: "DBU Old Glory Gallop", event: "8k", time: "24:49.1", place: "33rd", note: "8k XC PR" },
  { date: "2025-09-26", meet: "Gans Creek Classic", event: "8k", time: "25:03.9", place: "139th" },
  { date: "2025-09-06", meet: "Wichita State JK Gold Classic", event: "6k", time: "19:38.8", place: "23rd" },
  { date: "2025-05-02", meet: "Heart of America TF Championships", event: "5,000 m", time: "15:10.62", place: "4th" },
  { date: "2025-05-02", meet: "Heart of America TF Championships", event: "10,000 m", time: "31:52.23", place: "1st" },
  { date: "2025-04-16", meet: "Bryan Clay Invitational", event: "5,000 m", time: "14:47.21", place: "46th" },
  { date: "2025-04-16", meet: "Bryan Clay Invitational", event: "10,000 m", time: "31:14.41", place: "37th" },
  { date: "2025-03-27", meet: "WashU Distance Carnival", event: "10,000 m", time: "31:25.13", place: "71st" },
  { date: "2025-03-21", meet: "Spire Distance Carnival", event: "5,000 m", time: "14:55.00", place: "8th" },
  { date: "2025-02-14", meet: "Heart of America Indoor Championships", event: "3,000 m", time: "8:45.51", place: "3rd" },
  { date: "2025-02-14", meet: "Heart of America Indoor Championships", event: "5,000 m", time: "14:54.05", place: "1st" },
  { date: "2025-01-25", meet: "NAIA / Juco Challenge", event: "3,000 m", time: "8:38.08", place: "6th" },
  { date: "2025-01-18", meet: "Coach Alsup Invite", event: "Mile", time: "4:28.65", place: "17th" },
  { date: "2024-12-13", meet: "Iowa State Holiday Invitational", event: "3,000 m", time: "8:45.80", place: "1st" },
  { date: "2024-12-07", meet: "Mel Tjeerdsma Classic", event: "5,000 m", time: "14:59.81", place: "2nd" },
];

// —— Pre-college / LADV (Germany) — all results from LADV database ——
// Source: https://ladv.de/leistungsdatenbank/athletenprofil/436700/Lukas-Mehl.htm
// Sorted by date descending (newest first).
export const PRE_COLLEGE_HIGHLIGHTS: PreCollegeResult[] = [
  { event: "3,000 m", time: "8:54.86", date: "2023-07", location: "Rostock", ageGroup: "U20", note: "DM Jugend U20/U18" },
  { event: "3,000 m", time: "8:56.20", date: "2023-06", location: "Dortmund", ageGroup: "U20", note: "Jump'n'Run Meeting" },
  { event: "1,500 m", time: "4:17.59", date: "2023-05", location: "Aachen", ageGroup: "U20", note: "Regionsmeisterschaften" },
  { event: "3,000 m", time: "9:03.36", date: "2023-05", location: "Siegburg", ageGroup: "U20", note: "Siegburger Pfingstsportfest / NRW Hindernismeisterschaft" },
  { event: "5,000 m", time: "16:14.71", date: "2023-04", location: "Dortmund", ageGroup: "U20", note: "NRW Langstreckenmeisterschaften Rahmenprogramm" },
  { event: "5 km Straße", time: "15:48", date: "2023-03", location: "Leverkusen", ageGroup: "U20" },
  { event: "3,000 m", time: "9:21.74", date: "2023-02", location: "Düsseldorf", ageGroup: "U20", note: "NRW Hallenmeisterschaften" },
  { event: "10 km Straße", time: "32:51", date: "2022-12", location: "Bonn", ageGroup: "U18" },
  { event: "Cross Sprint", time: "10:09", date: "2022-11", location: "Neunkirchen-Seelscheid", ageGroup: "U18", note: "NRW Crossmeisterschaften" },
  { event: "10 km Straße", time: "33:20", date: "2022-09", location: "Saarbrücken", ageGroup: "U18" },
  { event: "3,000 m", time: "9:05.05", date: "2022-08", location: "Bergisch Gladbach", ageGroup: "U18", note: "Bahnlaufserie" },
  { event: "3,000 m", time: "9:13.95", date: "2022-07", location: "Ulm", ageGroup: "U18", note: "DM Jugend U20/U18" },
  { event: "3×1,000 m Staffel", time: "8:38.60", date: "2022-05", location: "Aachen", ageGroup: "U20", note: "NRW Langstaffelmeisterschaften" },
  { event: "3,000 m", time: "9:10.02", date: "2022-05", location: "Köln", ageGroup: "U18", note: "Christi-Himmelfahrt-Sportfest TuS Köln" },
  { event: "3,000 m", time: "9:15.54", date: "2022-04", location: "Rheine", ageGroup: "U18", note: "NRW Langstreckenmeisterschaften" },
  { event: "10 km Straße", time: "33:43", date: "2022-03", location: "Münster", ageGroup: "U18", note: "NRW 10-km-Straßenlaufmeisterschaften" },
  { event: "Cross Sprint", time: "13:02", date: "2021-11", location: "Neunkirchen-Seelscheid", ageGroup: "U18", note: "NRW Crossmeisterschaften" },
  { event: "800 m", time: "2:23.20", date: "2020-01", location: "Leverkusen", ageGroup: "M15", note: "Jugend-Hallensportfest U14/U16 (Halle)" },
];

/** Yearly running distance in km (training + races). Update from Strava/yearly totals. */
export interface YearlyDistance {
  year: number;
  km: number;
}

/** Average pace (min per km) for rough time estimate. e.g. 4.5 = 4:30/km. */
export const ROUGH_AVERAGE_PACE_MIN_PER_KM = 4.5;

// —— Yearly running distance (km). Source: Strava / training log. Newest first. ——
export const YEARLY_RUNNING_KM: YearlyDistance[] = [
  { year: 2025, km: 5951 },
  { year: 2024, km: 5428 },
  { year: 2023, km: 4418 },
  { year: 2022, km: 2810 },
  { year: 2021, km: 2257 },
].sort((a, b) => b.year - a.year);
