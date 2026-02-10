"use client";

import type { Lang } from "@/content/copy";

type Props = { lang: Lang; setLang: (l: Lang) => void };

export function LanguageToggle({ lang, setLang }: Props) {
  return (
    <div className="flex gap-1.5 text-sm" style={{ color: "var(--color-text-muted)" }}>
      <button
        type="button"
        onClick={() => setLang("en")}
        style={{
          fontWeight: lang === "en" ? 600 : 400,
          color: lang === "en" ? "var(--color-accent)" : "inherit",
        }}
        className="hover:opacity-80"
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span aria-hidden className="opacity-50">|</span>
      <button
        type="button"
        onClick={() => setLang("de")}
        style={{
          fontWeight: lang === "de" ? 600 : 400,
          color: lang === "de" ? "var(--color-accent)" : "inherit",
        }}
        className="hover:opacity-80"
        aria-pressed={lang === "de"}
      >
        DE
      </button>
    </div>
  );
}
