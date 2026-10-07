/**
 * Publications: bibliographic data (language-independent). UI labels live in content/translations (publicationsPage).
 * The paper PDF is CC BY 4.0 (LIPIcs), so it may be hosted here with attribution.
 */

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venueShort: string;
  venueLong: string;
  track: string;
  series: string;
  volume: number;
  pages: string;
  publisher: string;
  year: number;
  /** YYYY-MM-DD */
  published: string;
  doi: string;
  /** Path under public/ */
  pdf: string;
  /** Path under public/ */
  preview: string;
  code?: string;
  artifact?: string;
  license: string;
  keywords: string[];
  /** Original (English) abstract */
  abstract: string[];
  citation: string;
  bibtex: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    id: "esem2026",
    title: "PQC-Readiness of Open-Source Software: An Empirical Study",
    authors: ["Lukas Mehl"],
    venueShort: "ESEM 2026",
    venueLong:
      "20th International Symposium on Empirical Software Engineering and Measurement (ESEM 2026)",
    track: "Emerging Results, Vision & Reflection Track",
    series: "Leibniz International Proceedings in Informatics (LIPIcs)",
    volume: 394,
    pages: "53:1–53:14",
    publisher: "Schloss Dagstuhl, Leibniz-Zentrum für Informatik",
    year: 2026,
    published: "2026-10-05",
    doi: "10.4230/LIPIcs.ESEM.2026.53",
    pdf: "/publications/Mehl-ESEM2026-PQC-Readiness.pdf",
    preview: "/publications/esem2026-page1.png",
    code: "https://github.com/Lxkasmehl/pqc-scanner",
    artifact: "https://doi.org/10.5281/zenodo.19634475",
    license: "CC BY 4.0",
    keywords: [
      "post-quantum cryptography",
      "static analysis",
      "empirical study",
      "open-source software",
      "cryptographic primitives",
    ],
    abstract: [
      "Migrating open-source systems to post-quantum cryptography requires knowing where classical public-key primitives still appear in code, yet much empirical work has targeted dependency graphs or misuse of APIs rather than primitive-level, multi-language usage at scale. This paper describes a static analyzer that scans Python, Java, and Go repositories using syntax-aware parsing, classifies cryptographic calls and imports as post-quantum-vulnerable, quantum-safe, or PQC-ready, and aggregates findings for ecosystem-level measurement.",
      "Applied to a stratified sample of about fourteen and a half thousand GitHub repositories, vulnerable primitives are found to be widespread at the level of explicit calls and imports, with strongly language-dependent rates shaped in part by how transport and certificate stacks are treated in static analysis. Evidence of PQC-ready APIs is exceedingly rare by comparison, underscoring a stark adoption gap relative to migration goals. Methodological limitations are stated so the baseline can be interpreted, reproduced, and extended.",
    ],
    citation:
      "Lukas Mehl. PQC-Readiness of Open-Source Software: An Empirical Study. In 20th International Symposium on Empirical Software Engineering and Measurement (ESEM 2026). Leibniz International Proceedings in Informatics (LIPIcs), Volume 394, pp. 53:1-53:14, Schloss Dagstuhl, Leibniz-Zentrum für Informatik (2026). https://doi.org/10.4230/LIPIcs.ESEM.2026.53",
    bibtex: `@InProceedings{mehl:LIPIcs.ESEM.2026.53,
  author =	{Mehl, Lukas},
  title =	{{PQC-Readiness of Open-Source Software: An Empirical Study}},
  booktitle =	{20th International Symposium on Empirical Software Engineering and Measurement (ESEM 2026)},
  pages =	{53:1--53:14},
  series =	{Leibniz International Proceedings in Informatics (LIPIcs)},
  ISBN =	{978-3-95977-450-5},
  ISSN =	{1868-8969},
  year =	{2026},
  volume =	{394},
  editor =	{Feldt, Robert and Paasivaara, Maria and Mendez, Daniel and Wagner, Stefan and Bar\\'{o}n, Marvin Mu\\~{n}oz},
  publisher =	{Schloss Dagstuhl -- Leibniz-Zentrum f{\\"u}r Informatik},
  address =	{Dagstuhl, Germany},
  URL =		{https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ESEM.2026.53},
  URN =		{urn:nbn:de:0030-drops-280211},
  doi =		{10.4230/LIPIcs.ESEM.2026.53},
  annote =	{Keywords: post-quantum cryptography, static analysis, empirical study, open-source software, cryptographic primitives}
}`,
  },
];
