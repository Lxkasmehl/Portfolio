"use client";

import { TECH_STACK_BY_CATEGORY } from "@/config";
import { useLang } from "@/components/LangContext";
import type { Messages } from "@/content/translations";

const ICONS_CDN = "https://cdn.jsdelivr.net/npm/simple-icons@11/icons";

const TECH_LABELS: Record<string, string> = {
  react: "React",
  typescript: "TypeScript",
  javascript: "JavaScript",
  python: "Python",
  java: "Java",
  openjdk: "Java",
  kotlin: "Kotlin",
  html5: "HTML5",
  css3: "CSS3",
  docker: "Docker",
  git: "Git",
  mysql: "MySQL",
  mui: "Material UI",
  redux: "Redux",
  vite: "Vite",
  playwright: "Playwright",
  selenium: "Selenium",
  sap: "SAP SuccessFactors",
  androidstudio: "Android Studio",
  c: "C",
};

const CATEGORY_COPY_KEYS: Record<keyof typeof TECH_STACK_BY_CATEGORY, keyof Messages["skills"]> = {
  frontend: "categoryFrontend",
  languages: "categoryLanguages",
  testing: "categoryTesting",
  tools: "categoryTools",
  platforms: "categoryPlatforms",
};

function TechCard({ slug }: { slug: string }) {
  return (
    <div
      className="flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all duration-200 hover:scale-105"
      style={{
        backgroundColor: "var(--color-surface-elevated)",
        borderColor: "var(--color-border)",
        minWidth: "5rem",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${ICONS_CDN}/${slug}.svg`}
        alt=""
        width={32}
        height={32}
        className="shrink-0"
      />
      <span
        className="text-xs font-semibold text-center"
        style={{ color: "var(--color-text)" }}
      >
        {TECH_LABELS[slug] ?? slug}
      </span>
    </div>
  );
}

export function TechStack() {
  const { t } = useLang();
  const c = t.skills;

  return (
    <div className="space-y-8">
      {(Object.keys(TECH_STACK_BY_CATEGORY) as Array<keyof typeof TECH_STACK_BY_CATEGORY>).map(
        (category) => {
          const slugs = TECH_STACK_BY_CATEGORY[category];
          const labelKey = CATEGORY_COPY_KEYS[category];
          const label = c[labelKey];
          return (
            <div key={category}>
              <h3
                className="font-display text-sm font-bold mb-3"
                style={{ color: "var(--color-text-muted)" }}
              >
                {label}
              </h3>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {slugs.map((slug) => (
                  <TechCard key={slug} slug={slug} />
                ))}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
