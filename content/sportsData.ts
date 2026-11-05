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
  tfrrs: 'https://www.tfrrs.org/athletes/8625664/Washburn/Lukas_Mehl.html',
  ladv: 'https://ladv.de/leistungsdatenbank/athletenprofil/436700/Lukas-Mehl.htm',
  strava: 'https://www.strava.com/athletes/68981361',
} as const;

/** Club or university team; name/period come from content/translations (sports.teams[id]). */
export interface Team {
  id: string;
  logoPath: string | null;
}

/** Teams I've run for, chronological: Germany → Park → Washburn. */
export const TEAMS: Team[] = [
  { id: 'djk-armada', logoPath: '/sports/logos/Logo-Armada-2025.jpg' },
  { id: 'park', logoPath: '/sports/logos/park-pirates-logo-color.avif' },
  { id: 'washburn', logoPath: '/sports/logos/Washburn_Ichabods_logo.svg' },
];

/** Hero image (big banner on Sports page). File in public/sports/. */
export const SPORTS_HERO_IMAGE = '/sports/7A1A8471.jpg';

/** Gallery images (grid on Sports page). Files in public/sports/. */
export const SPORTS_GALLERY = [
  '/sports/DSC_3946.jpg',
  '/sports/DSC_6452.jpg',
  '/sports/DSC_5932.jpg',
  '/sports/PXL_20240504_010836955.jpg',
  '/sports/Photo Jan 30 2026, 6 28 50 PM (1).jpg',
  '/sports/Photo Jan 30 2026, 6 37 08 PM.jpg',
];

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

/** Which team/kit the result was run in. Used for logo/flag in timeline. */
export type TeamId = 'djk-armada' | 'park' | 'washburn';

/** Single result in the timeline (college + pre-college merged). */
export interface ResultEntry {
  date: string; // YYYY-MM-DD or YYYY-MM
  meet: string;
  event: string;
  time: string;
  place?: string;
  note?: string;
  /** Which team/jersey (edit per entry if you ran in a different kit, e.g. Armada during semester break). */
  teamId: TeamId;
  /** City/venue (mainly pre-college). */
  location?: string;
  /** Age group e.g. U18, U20 (pre-college); shown separately from note. */
  ageGroup?: string;
  /** If set, this result is shown in the championship section. */
  championshipLevel?: 'conference' | 'regional' | 'national' | 'state' | 'youth';
  /** Optional note shown only in the championship list (e.g. "Team qualified for Nationals"). */
  championshipNote?: string;
}

/** Pre-college / German result (LADV). Has meet for merging into unified timeline. */
export interface PreCollegeResult {
  meet: string;
  /** Which team/jersey (edit if you ran in a different kit). */
  teamId: TeamId;
  event: string;
  time: string;
  date: string;
  location: string;
  ageGroup?: string;
  note?: string;
  place?: string;
  /** national (DM), state (NRW), regional (Nordrhein) – not "youth". */
  championshipLevel?: 'national' | 'state' | 'regional';
}

/** Championship or high-stakes meet where placement matters (not just time). */
export interface ChampionshipHighlight {
  meet: string;
  event: string;
  place: string;
  date: string;
  time?: string;
  location?: string;
  /** Age group e.g. U18, U20 – separate from note. */
  ageGroup?: string;
  note?: string;
  level?: 'conference' | 'regional' | 'national' | 'state' | 'youth';
}

// Meet/event labels: use getMessages(lang).sports.meets[meet] / .sports.events[event] (content/translations).

// -- Personal Bests (all-time, college + post-college) --
export const PERSONAL_BESTS: PersonalBest[] = [
  {
    event: '800 m',
    time: '2:06.91',
    date: '2024-04',
    meet: 'Kip Janvrin Open',
    indoor: false,
  },
  {
    event: '1,000 m',
    time: '2:40.00',
    date: '2025-01',
    meet: 'Coach Alsup Invite',
    indoor: true,
  },
  {
    event: '1,500 m',
    time: '4:08.98',
    date: '2026-04',
    meet: 'UCM Mule Relays',
    indoor: false,
  },
  {
    event: 'Mile',
    time: '4:28.65',
    date: '2025-01',
    meet: 'Coach Alsup Invite',
    indoor: true,
  },
  {
    event: '3,000 m',
    time: '8:36.58',
    date: '2026-02',
    meet: 'Ichabod Invitational',
    indoor: true,
  },
  {
    event: '5,000 m',
    time: '14:47.21',
    date: '2025-04',
    meet: 'Bryan Clay Invitational',
    indoor: false,
  },
  {
    event: '10,000 m',
    time: '30:37.62',
    date: '2026-05',
    meet: 'MIAA Outdoor Track & Field Championships',
    indoor: false,
  },
  {
    event: '6k (XC)',
    time: '19:37.0',
    date: '2023-09',
    meet: 'Griffon Twilight',
    xc: true,
  },
  {
    event: '8k (XC)',
    time: '24:42.4',
    date: '2026-09',
    meet: 'Augustana Invitational',
    xc: true,
  },
  {
    event: '10k (XC)',
    time: '31:57.1',
    date: '2025-11',
    meet: 'NCAA DII Central Region',
    xc: true,
  },
];

// -- Progression by event (year -> best that season) for charts --
// Includes LADV pre-college where applicable (e.g. 3k 2022, 2023 Rostock).
export const PROGRESSION_3000: ProgressionPoint[] = [
  {
    year: 2019,
    time: '10:26.19',
    timeSeconds: 626.19,
    meet: 'Mittsommermeeting',
    note: 'U16',
  },
  {
    year: 2021,
    time: '9:36.58',
    timeSeconds: 576.58,
    meet: 'Zuiderpark Lopen',
    note: 'U18',
  },
  {
    year: 2022,
    time: '9:05.05',
    timeSeconds: 545.05,
    meet: 'Bergisch Gladbach',
    note: 'U18',
  },
  {
    year: 2023,
    time: '8:54.86',
    timeSeconds: 534.86,
    meet: 'DM Jugend Rostock',
    note: 'U20',
  },
  { year: 2024, time: '8:45.80', timeSeconds: 525.8, meet: 'Iowa State Holiday' },
  { year: 2025, time: '8:38.08', timeSeconds: 518.08, meet: 'NAIA/Juco Challenge' },
  { year: 2026, time: '8:36.58', timeSeconds: 516.58, meet: 'Ichabod Invitational' },
];

export const PROGRESSION_5000: ProgressionPoint[] = [
  {
    year: 2019,
    time: '18:39',
    timeSeconds: 1119,
    meet: 'Jedermannlauf 5km',
    note: 'U16',
  },
  { year: 2021, time: '16:47.80', timeSeconds: 1007.8, meet: 'Baaninstuif', note: 'U18' },
  { year: 2023, time: '15:28.01', timeSeconds: 928.01, meet: 'Crimson & Gold' },
  { year: 2024, time: '14:59.81', timeSeconds: 899.81, meet: 'Mel Tjeerdsma Classic' },
  { year: 2025, time: '14:47.21', timeSeconds: 887.21, meet: 'Bryan Clay Invitational' },
  {
    year: 2026,
    time: '14:54.09',
    timeSeconds: 894.09,
    meet: 'Washburn Open (indoor)',
    indoor: true,
  },
];

// 10,000 m (Bahn) + 10 km Straße zusammengefasst
export const PROGRESSION_10000: ProgressionPoint[] = [
  {
    year: 2022,
    time: '32:51',
    timeSeconds: 1971,
    meet: 'Bonn (10 km Straße)',
    note: 'U18',
  },
  { year: 2024, time: '32:16.18', timeSeconds: 1936.18, meet: 'Kansas Relays' },
  { year: 2025, time: '31:14.41', timeSeconds: 1874.41, meet: 'Bryan Clay Invitational' },
  {
    year: 2026,
    time: '30:37.62',
    timeSeconds: 1837.62,
    meet: 'MIAA Outdoor Championships',
  },
];

export const PROGRESSION_8K_XC: ProgressionPoint[] = [
  {
    year: 2023,
    time: '25:16.8',
    timeSeconds: 1516.8,
    meet: 'Heart of America XC Championships',
  },
  {
    year: 2024,
    time: '25:05.4',
    timeSeconds: 1505.4,
    meet: 'Heart of America XC Championships',
  },
  { year: 2025, time: '24:49.1', timeSeconds: 1489.1, meet: 'DBU Old Glory Gallop' },
  { year: 2026, time: '24:42.4', timeSeconds: 1482.4, meet: 'Augustana Invitational' },
];

// -- Recent results timeline (chronological: newest first). Source: TFRRS. --
export const RECENT_RESULTS: ResultEntry[] = [
  {
    date: '2026-10-11',
    teamId: 'washburn',
    meet: 'NCAA DII Pre-Nationals (Rimrock)',
    event: '8k',
    time: '24:52.7',
    place: '18th',
  },
  {
    date: '2026-09-25',
    teamId: 'washburn',
    meet: 'Augustana Invitational',
    event: '8k',
    time: '24:42.4',
    place: '10th',
    note: '8k XC PR · team won the meet',
  },
  {
    date: '2026-05-01',
    teamId: 'washburn',
    meet: 'MIAA Outdoor Track & Field Championships',
    event: '10,000 m',
    time: '30:37.62',
    place: '5th',
    note: '10,000 m PR',
    championshipLevel: 'conference',
  },
  {
    date: '2026-04-09',
    teamId: 'washburn',
    meet: 'UCM Mule Relays',
    event: '1,500 m',
    time: '4:08.98',
    place: '25th',
    note: '1,500 m PR',
  },
  {
    date: '2026-03-26',
    teamId: 'washburn',
    meet: 'WashU Distance Carnival',
    event: '5,000 m',
    time: '15:03.90',
    place: '93rd',
  },
  {
    date: '2026-02-27',
    teamId: 'washburn',
    meet: '2026 MIAA Indoor Track & Field Championships',
    event: '5,000 m',
    time: '15:15.22',
    place: '17th',
    championshipLevel: 'conference',
  },
  {
    date: '2026-02-14',
    teamId: 'washburn',
    meet: 'Ichabod Invitational',
    event: '3,000 m',
    time: '8:36.58',
    place: '20th',
  },
  {
    date: '2026-01-30',
    teamId: 'washburn',
    meet: 'Washburn Open',
    event: '5,000 m',
    time: '14:54.09',
    place: '22nd',
  },
  {
    date: '2026-01-16',
    teamId: 'washburn',
    meet: 'Washburn Rust Buster',
    event: '3,000 m',
    time: '8:43.56',
    place: '13th',
  },
  {
    date: '2025-12-31',
    teamId: 'djk-armada',
    meet: 'Silvesterlauf Aachen',
    event: '9 km Straße',
    time: '29:16.8',
    place: '1st',
  },
  {
    date: '2025-12-31',
    teamId: 'djk-armada',
    meet: 'Silvesterlauf Aachen',
    event: '4.5 km Straße',
    time: '13:40.2',
    place: '3rd',
  },
  {
    date: '2025-11-22',
    teamId: 'washburn',
    meet: 'NCAA DII XC Championships',
    event: '10k',
    time: '32:28.2',
    place: '177th',
    championshipLevel: 'national',
  },
  {
    date: '2025-11-08',
    teamId: 'washburn',
    meet: 'NCAA DII Central Region',
    event: '10k',
    time: '31:57.1',
    place: '41st',
    note: 'Team qualified for Nationals',
    championshipLevel: 'regional',
    championshipNote: 'Team qualified for Nationals',
  },
  {
    date: '2025-10-25',
    teamId: 'washburn',
    meet: 'MIAA XC Championships',
    event: '8k',
    time: '25:59.4',
    place: '32nd',
    championshipLevel: 'conference',
  },
  {
    date: '2025-10-11',
    teamId: 'washburn',
    meet: 'DBU Old Glory Gallop',
    event: '8k',
    time: '24:49.1',
    place: '33rd',
    note: '8k XC PR',
  },
  {
    date: '2025-09-26',
    teamId: 'washburn',
    meet: 'Gans Creek Classic',
    event: '8k',
    time: '25:03.9',
    place: '139th',
  },
  {
    date: '2025-09-06',
    teamId: 'washburn',
    meet: 'Wichita State JK Gold Classic',
    event: '6k',
    time: '19:38.8',
    place: '23rd',
  },
  {
    date: '2025-05-02',
    teamId: 'park',
    meet: 'Heart of America Outdoor Championships',
    event: '5,000 m',
    time: '15:10.62',
    place: '4th',
    championshipLevel: 'conference',
  },
  {
    date: '2025-05-02',
    teamId: 'park',
    meet: 'Heart of America Outdoor Championships',
    event: '10,000 m',
    time: '31:52.23',
    place: '1st',
    championshipLevel: 'conference',
  },
  {
    date: '2025-04-16',
    teamId: 'park',
    meet: 'Bryan Clay Invitational',
    event: '5,000 m',
    time: '14:47.21',
    place: '46th',
  },
  {
    date: '2025-04-16',
    teamId: 'park',
    meet: 'Bryan Clay Invitational',
    event: '10,000 m',
    time: '31:14.41',
    place: '37th',
  },
  {
    date: '2025-03-27',
    teamId: 'park',
    meet: 'WashU Distance Carnival',
    event: '10,000 m',
    time: '31:25.13',
    place: '71st',
  },
  {
    date: '2025-03-21',
    teamId: 'park',
    meet: 'Spire Distance Carnival',
    event: '5,000 m',
    time: '14:55.00',
    place: '8th',
  },
  {
    date: '2025-02-14',
    teamId: 'park',
    meet: 'Heart of America Indoor Championships',
    event: '3,000 m',
    time: '8:45.51',
    place: '3rd',
    championshipLevel: 'conference',
  },
  {
    date: '2025-02-14',
    teamId: 'park',
    meet: 'Heart of America Indoor Championships',
    event: '5,000 m',
    time: '14:54.05',
    place: '1st',
    championshipLevel: 'conference',
  },
  {
    date: '2025-01-31',
    teamId: 'park',
    meet: 'Washburn Open',
    event: '5,000 m',
    time: '14:58.09',
    place: '19th',
  },
  {
    date: '2025-01-25',
    teamId: 'park',
    meet: 'NAIA / Juco Challenge',
    event: '3,000 m',
    time: '8:38.08',
    place: '6th',
  },
  {
    date: '2025-01-18',
    teamId: 'park',
    meet: 'Coach Alsup Invite',
    event: '1,000 m',
    time: '2:40.00',
    place: '19th',
  },
  {
    date: '2025-01-18',
    teamId: 'park',
    meet: 'Coach Alsup Invite',
    event: 'Mile',
    time: '4:28.65',
    place: '17th',
  },
  {
    date: '2024-12-31',
    teamId: 'djk-armada',
    meet: 'Silvesterlauf Aachen',
    event: '9 km Straße',
    time: '28:09.9',
    place: '3rd',
  },
  {
    date: '2024-12-31',
    teamId: 'djk-armada',
    meet: 'Silvesterlauf Aachen',
    event: '4.5 km Straße',
    time: '13:37.4',
    place: '4th',
  },
  {
    date: '2024-12-13',
    teamId: 'park',
    meet: 'Iowa State Holiday Invitational',
    event: '3,000 m',
    time: '8:45.80',
    place: '1st',
  },
  {
    date: '2024-12-07',
    teamId: 'park',
    meet: 'Mel Tjeerdsma Classic',
    event: '800 m',
    time: '2:07.84',
    place: '18th',
  },
  {
    date: '2024-12-07',
    teamId: 'park',
    meet: 'Mel Tjeerdsma Classic',
    event: '5,000 m',
    time: '14:59.81',
    place: '2nd',
  },
  {
    date: '2024-11-22',
    teamId: 'park',
    meet: 'NAIA Cross Country Championships',
    event: '8k',
    time: '25:22.3',
    place: '134th',
    championshipLevel: 'national',
  },
  {
    date: '2024-11-09',
    teamId: 'park',
    meet: 'Heart of America XC Championships',
    event: '8k',
    time: '25:05.4',
    place: '5th',
    championshipLevel: 'conference',
    championshipNote: 'Individually qualified for Nationals'
  },
  {
    date: '2024-10-12',
    teamId: 'park',
    meet: 'Brian T. Simpson Invite',
    event: '8k',
    time: '25:29.6',
    place: '13th',
  },
  {
    date: '2024-09-28',
    teamId: 'park',
    meet: 'Chile Pepper XC Festival',
    event: '8k',
    time: '27:00.4',
    place: '165th',
  },
  {
    date: '2024-09-20',
    teamId: 'park',
    meet: 'Larry Young XC Invitational',
    event: '8k',
    time: '26:24.4',
    place: '17th',
  },
  {
    date: '2024-08-31',
    teamId: 'park',
    meet: 'Bob Timmons Rim Rock XC Classic',
    event: '6k',
    time: '19:56.0',
    place: '28th',
  },
  {
    date: '2024-08-03',
    teamId: 'djk-armada',
    meet: 'Die 10 km von Dürwiß',
    event: '10 km Straße',
    time: '32:41',
    place: '5th',
  },
  {
    date: '2024-05-03',
    teamId: 'park',
    meet: 'Heart of America Outdoor Championships',
    event: '5,000 m',
    time: '15:42.38',
    place: '4th',
    championshipLevel: 'conference',
  },
  {
    date: '2024-05-03',
    teamId: 'park',
    meet: 'Heart of America Outdoor Championships',
    event: '10,000 m',
    time: '32:41.86',
    place: '1st',
    championshipLevel: 'conference',
  },
  {
    date: '2024-04-25',
    teamId: 'park',
    meet: 'Kip Janvrin Open',
    event: '800 m',
    time: '2:06.91',
    place: '41st',
  },
  {
    date: '2024-04-25',
    teamId: 'park',
    meet: 'Kip Janvrin Open',
    event: '1,500 m',
    time: '4:13.92',
    place: '46th',
  },
  {
    date: '2024-04-18',
    teamId: 'park',
    meet: 'Kansas Relays',
    event: '10,000 m',
    time: '32:16.18',
    place: '12th',
  },
  {
    date: '2024-03-28',
    teamId: 'park',
    meet: 'Emporia State Relays',
    event: '10,000 m',
    time: '32:48.65',
    place: '2nd',
  },
  {
    date: '2024-03-15',
    teamId: 'park',
    meet: 'Spire Distance Carnival',
    event: '5,000 m',
    time: '15:20.64',
    place: '10th',
  },
  {
    date: '2024-02-16',
    teamId: 'park',
    meet: 'Heart of America Indoor Championships',
    event: '3,000 m',
    time: '8:55.98',
    place: '7th',
    championshipLevel: 'conference',
  },
  {
    date: '2024-02-16',
    teamId: 'park',
    meet: 'Heart of America Indoor Championships',
    event: '5,000 m',
    time: '15:25.97',
    place: '5th',
    championshipLevel: 'conference',
  },
  {
    date: '2024-02-09',
    teamId: 'park',
    meet: 'Ichabod Invitational',
    event: '3,000 m',
    time: '8:48.29',
    place: '31st',
  },
  {
    date: '2024-02-01',
    teamId: 'park',
    meet: 'Bearcat Invite',
    event: 'Mile',
    time: '4:33.28',
    place: '24th',
  },
  {
    date: '2024-02-01',
    teamId: 'park',
    meet: 'Bearcat Invite',
    event: '5,000 m',
    time: '15:36.41',
    place: '15th',
  },
  {
    date: '2024-01-20',
    teamId: 'park',
    meet: 'NAIA / Juco Challenge',
    event: '3,000 m',
    time: '8:56.54',
    place: '10th',
  },
  {
    date: '2024-01-12',
    teamId: 'park',
    meet: 'Graduate Classic',
    event: '3,000 m',
    time: '8:53.61',
    place: '12th',
  },
  {
    date: '2023-12-09',
    teamId: 'park',
    meet: 'Crimson & Gold Invitational',
    event: 'Mile',
    time: '4:39.38',
    place: '53rd',
  },
  {
    date: '2023-12-09',
    teamId: 'park',
    meet: 'Crimson & Gold Invitational',
    event: '5,000 m',
    time: '15:28.01',
    place: '35th',
  },
  {
    date: '2023-12-02',
    teamId: 'park',
    meet: 'Mel Tjeerdsma Classic',
    event: '3,000 m',
    time: '9:00.08',
    place: '10th',
  },
  {
    date: '2023-11-17',
    teamId: 'park',
    meet: 'NAIA Cross Country Championships',
    event: '8k',
    time: '26:56.0',
    place: '183rd',
    championshipLevel: 'national',
  },
  {
    date: '2023-11-04',
    teamId: 'park',
    meet: 'Heart of America XC Championships',
    event: '8k',
    time: '25:16.8',
    place: '4th',
    championshipLevel: 'conference',
    championshipNote: 'Individually qualified for Nationals'
  },
  {
    date: '2023-10-21',
    teamId: 'park',
    meet: 'Seminole Valley Stampede',
    event: '8k',
    time: '26:07.5',
    place: '7th',
  },
  {
    date: '2023-10-07',
    teamId: 'park',
    meet: 'Haskell Invite',
    event: '8k',
    time: '26:33.2',
    place: '6th',
  },
  {
    date: '2023-09-15',
    teamId: 'park',
    meet: 'Columbia College Larry Young XC Invite',
    event: '8k',
    time: '26:33.2',
    place: '15th',
  },
  {
    date: '2023-09-01',
    teamId: 'park',
    meet: 'Griffon Twilight',
    event: '6k',
    time: '19:37.0',
    place: '33rd',
  },
];

// -- Pre-college / LADV (Germany) - all results from LADV database --
// Source: https://ladv.de/leistungsdatenbank/athletenprofil/436700/Lukas-Mehl.htm
// Sorted by date descending (newest first). meet + championshipLevel/place where applicable.
export const PRE_COLLEGE_HIGHLIGHTS: PreCollegeResult[] = [
  {
    meet: 'DM Jugend U20/U18',
    teamId: 'djk-armada',
    event: '3,000 m',
    time: '8:54.86',
    date: '2023-07',
    location: 'Rostock',
    ageGroup: 'U20',
    place: '24th',
    championshipLevel: 'national',
  },
  {
    meet: "Jump'n'Run Meeting",
    teamId: 'djk-armada',
    event: '3,000 m',
    time: '8:56.20',
    date: '2023-06',
    location: 'Dortmund',
    ageGroup: 'U20',
  },
  {
    meet: 'Regionsmeisterschaften',
    teamId: 'djk-armada',
    event: '1,500 m',
    time: '4:17.59',
    date: '2023-05',
    location: 'Aachen',
    ageGroup: 'U20',
  },
  {
    meet: 'Siegburger Pfingstsportfest',
    teamId: 'djk-armada',
    event: '3,000 m',
    time: '9:03.36',
    date: '2023-05',
    location: 'Siegburg',
    ageGroup: 'U20',
    note: 'NRW Hindernismeisterschaft',
  },
  {
    meet: 'NRW Langstreckenmeisterschaften Rahmenprogramm',
    teamId: 'djk-armada',
    event: '5,000 m',
    time: '16:14.71',
    date: '2023-04',
    location: 'Dortmund',
    ageGroup: 'U20',
  },
  {
    meet: 'Leverkusen',
    teamId: 'djk-armada',
    event: '5 km Straße',
    time: '15:48',
    date: '2023-03',
    location: 'Leverkusen',
    ageGroup: 'U20',
  },
  {
    meet: 'NRW Hallenmeisterschaften',
    teamId: 'djk-armada',
    event: '3,000 m',
    time: '9:21.74',
    date: '2023-02',
    location: 'Düsseldorf',
    ageGroup: 'U20',
    place: '2nd',
    championshipLevel: 'state',
  },
  {
    meet: 'Silvesterlauf Aachen',
    teamId: 'djk-armada',
    event: '4.8 km Straße',
    time: '15:22',
    date: '2022-12-31',
    location: 'Aachen',
    ageGroup: 'U18',
    place: '5th',
  },
  {
    meet: 'Nikolauslauf',
    teamId: 'djk-armada',
    event: '10 km Straße',
    time: '32:51',
    date: '2022-12-11',
    location: 'Bonn',
    ageGroup: 'U18',
  },
  {
    meet: 'Deutsche Cross Meisterschaften',
    teamId: 'djk-armada',
    event: 'Crosslauf',
    time: '14:11',
    date: '2022-11-26',
    location: 'Löningen',
    ageGroup: 'U18',
    place: '18th',
    championshipLevel: 'national',
  },
  {
    meet: 'Nordrhein Crossmeisterschaften',
    teamId: 'djk-armada',
    event: 'Cross Sprint',
    time: '10:09',
    date: '2022-11',
    location: 'Neunkirchen-Seelscheid',
    ageGroup: 'U18',
    place: '1st',
    championshipLevel: 'regional',
  },
  {
    meet: 'DM 10 km Straße',
    teamId: 'djk-armada',
    event: '10 km Straße',
    time: '33:20',
    date: '2022-09',
    location: 'Saarbrücken',
    ageGroup: 'U18',
    place: '8th',
    championshipLevel: 'national',
  },
  {
    meet: 'DM 10 km Straße',
    teamId: 'djk-armada',
    event: '5 km Straße',
    time: '16:26',
    date: '2022-09',
    location: 'Saarbrücken',
    ageGroup: 'U18',
  },
  {
    meet: 'Bahnlaufserie Bergisch Gladbach Tag 3',
    teamId: 'djk-armada',
    event: '10,000 m',
    time: '33:17.12',
    date: '2022-09',
    location: 'Bergisch Gladbach',
    ageGroup: 'U18',
  },
  {
    meet: 'Bahnlaufserie Bergisch Gladbach Tag 1',
    teamId: 'djk-armada',
    event: '3,000 m',
    time: '9:05.05',
    date: '2022-08',
    location: 'Bergisch Gladbach',
    ageGroup: 'U18',
  },
  {
    meet: 'DM Jugend U20/U18',
    teamId: 'djk-armada',
    event: '3,000 m',
    time: '9:13.95',
    date: '2022-07',
    location: 'Ulm',
    ageGroup: 'U18',
    place: '14th',
    championshipLevel: 'national',
  },
  {
    meet: 'NRW Langstaffelmeisterschaften',
    teamId: 'djk-armada',
    event: '3×1,000 m Staffel',
    time: '8:38.60',
    date: '2022-05',
    location: 'Aachen',
    ageGroup: 'U20',
  },
  {
    meet: 'Christi-Himmelfahrt-Sportfest TuS Köln',
    teamId: 'djk-armada',
    event: '3,000 m',
    time: '9:10.02',
    date: '2022-05',
    location: 'Köln',
    ageGroup: 'U18',
  },
  {
    meet: 'NRW Langstreckenmeisterschaften',
    teamId: 'djk-armada',
    event: '3,000 m',
    time: '9:15.54',
    date: '2022-04',
    location: 'Rheine',
    ageGroup: 'U18',
    place: '2nd',
    championshipLevel: 'state',
  },
  {
    meet: 'NRW 10-km-Straßenlaufmeisterschaften',
    teamId: 'djk-armada',
    event: '10 km Straße',
    time: '33:43',
    date: '2022-03',
    location: 'Münster',
    ageGroup: 'U18',
    place: '1st',
    championshipLevel: 'state',
  },
  {
    meet: 'Deutsche Cross Meisterschaften',
    teamId: 'djk-armada',
    event: 'Crosslauf',
    time: '14:34',
    date: '2021-12-18',
    location: 'Sonsbeck',
    ageGroup: 'U18',
    place: '16th',
    championshipLevel: 'national',
  },
  {
    meet: 'Nordrhein Crossmeisterschaften',
    teamId: 'djk-armada',
    event: 'Cross Sprint',
    time: '13:02',
    date: '2021-11',
    location: 'Neunkirchen-Seelscheid',
    ageGroup: 'U18',
    place: '3rd',
    championshipLevel: 'regional',
  },
  {
    meet: 'Baaninstuif',
    teamId: 'djk-armada',
    event: '5,000 m',
    time: '16:47.80',
    date: '2021-09-02',
    location: 'Hengelo',
    ageGroup: 'U18',
    place: '2nd',
  },
  {
    meet: 'Zuiderpark Lopen',
    teamId: 'djk-armada',
    event: '3,000 m',
    time: '9:36.58',
    date: '2021-08-15',
    location: 'Den Haag',
    ageGroup: 'U18',
  },
  {
    meet: 'Jugend-Hallensportfest U14/U16',
    teamId: 'djk-armada',
    event: '800 m',
    time: '2:23.20',
    date: '2020-01',
    location: 'Leverkusen',
    ageGroup: 'M15',
  },
  {
    meet: 'Silvesterlauf Aachen',
    teamId: 'djk-armada',
    event: '4.8 km Straße',
    time: '17:08',
    date: '2019-12-31',
    location: 'Aachen',
    ageGroup: 'U16',
    place: '13th',
  },
  {
    meet: 'Nordrhein Crossmeisterschaften',
    teamId: 'djk-armada',
    event: 'Crosslauf kurz',
    time: '12:03',
    date: '2019-12-01',
    location: 'Sonsbeck',
    ageGroup: 'U16',
    place: '3rd',
    championshipLevel: 'regional',
  },
  {
    meet: 'Jedermannlauf 5km',
    teamId: 'djk-armada',
    event: '5 km Straße',
    time: '18:39',
    date: '2019-10-26',
    location: 'Herzogenrath',
    ageGroup: 'U16',
  },
  {
    meet: 'Abendsportfest',
    teamId: 'djk-armada',
    event: '2,000 m',
    time: '6:45.15',
    date: '2019-09-20',
    location: 'Erkelenz',
    ageGroup: 'U16',
  },
  {
    meet: 'Mittsommermeeting',
    teamId: 'djk-armada',
    event: '3,000 m',
    time: '10:26.19',
    date: '2019-06-28',
    location: 'Siegburg',
    ageGroup: 'U16',
  },
  {
    meet: '3. Dürener Staffellauf',
    teamId: 'djk-armada',
    event: '5 km Straße',
    time: '18:53',
    date: '2019-06-19',
    location: 'Düren',
    ageGroup: 'U16',
  },
  {
    meet: 'Mützenicher Vennlauf',
    teamId: 'djk-armada',
    event: '4.3 km Straße',
    time: '16:31',
    date: '2019-05-25',
    location: 'Mützenich',
    ageGroup: 'U16',
  },
  {
    meet: '16. Simmerather Mailauf',
    teamId: 'djk-armada',
    event: '4 km Straße',
    time: '14:59.1',
    date: '2019-05-05',
    location: 'Simmerath',
    ageGroup: 'U16',
  },
];

/** Single chronological list: college (RECENT_RESULTS) + pre-college (PRE_COLLEGE_HIGHLIGHTS), sorted newest first. Uses stored teamId on each entry so you can edit (e.g. Armada during semester break). */
export function getMergedResults(): ResultEntry[] {
  const college: ResultEntry[] = [...RECENT_RESULTS];
  const preCollege: ResultEntry[] = PRE_COLLEGE_HIGHLIGHTS.map((r) => ({
    date: r.date,
    meet: r.meet,
    event: r.event,
    time: r.time,
    place: r.place,
    note: r.note,
    teamId: r.teamId,
    location: r.location,
    ageGroup: r.ageGroup,
    championshipLevel: r.championshipLevel,
  }));
  return [...college, ...preCollege].sort((a, b) => b.date.localeCompare(a.date));
}

/** Championship list derived from merged results only (no separate pre-college list). */
export function getChampionshipHighlights(): ChampionshipHighlight[] {
  return getMergedResults()
    .filter((r) => r.championshipLevel != null)
    .map((r) => {
      const dateNorm = r.date.length >= 7 ? r.date.slice(0, 7) : r.date;
      return {
        meet: r.meet,
        event: r.event,
        place: r.place ?? '–',
        date: dateNorm,
        time: r.time,
        location: r.location,
        ageGroup: r.ageGroup,
        note: r.championshipNote ?? r.note,
        level: r.championshipLevel,
      };
    });
}

/** Yearly running distance in km (training + races). Update from Strava/yearly totals. */
export interface YearlyDistance {
  year: number;
  km: number;
}

/** Average pace (min per km) for rough time estimate. e.g. 4.5 = 4:30/km. */
export const ROUGH_AVERAGE_PACE_MIN_PER_KM = 4.5;

// -- Yearly running distance (km). Source: Strava / training log. Newest first. --
export const YEARLY_RUNNING_KM: YearlyDistance[] = [
  { year: 2025, km: 5951 },
  { year: 2024, km: 5428 },
  { year: 2023, km: 4418 },
  { year: 2022, km: 2810 },
  { year: 2021, km: 2257 },
].sort((a, b) => b.year - a.year);
