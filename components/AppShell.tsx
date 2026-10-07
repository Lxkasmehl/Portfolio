"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLang } from "@/components/LangContext";
import type { Messages } from "@/content/translations";

const NAV_LINKS: { href: string; key: keyof Messages["nav"] }[] = [
  { href: "/", key: "home" },
  { href: "/cv", key: "cv" },
  { href: "/projects", key: "projects" },
  { href: "/publications", key: "publications" },
  { href: "/sports", key: "sports" },
  { href: "/stats", key: "stats" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-bg)" }}>
      <header
        className="sticky top-0 z-50 border-b-2"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display text-xl sm:text-2xl font-bold no-underline shrink-0"
            style={{ color: "var(--color-text)" }}
          >
            Lukas
          </Link>

          {/* Desktop nav: pills + language */}
          <nav className="hidden md:flex items-center gap-2 flex-wrap">
            {NAV_LINKS.map(({ href, key }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`nav-pill ${active ? "active" : ""}`}
                  style={{
                    color: active ? undefined : "var(--color-text-muted)",
                    backgroundColor: active ? undefined : "transparent",
                    border: active ? undefined : "2px solid var(--color-border)",
                  }}
                >
                  {t.nav[key]}
                </Link>
              );
            })}
            <span
              className="inline-flex items-center gap-2 ml-2 pl-2 border-l-2"
              style={{ borderColor: "var(--color-border)" }}
            >
              <LanguageToggle lang={lang} setLang={setLang} />
            </span>
          </nav>

          {/* Mobile: hamburger + language inline */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle lang={lang} setLang={setLang} />
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="nav-mobile-trigger"
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={menuOpen}
            >
              <span className={menuOpen ? "nav-icon-open" : "nav-icon"} />
              <span className={menuOpen ? "nav-icon-open" : "nav-icon"} />
              <span className={menuOpen ? "nav-icon-open" : "nav-icon"} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${
            menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ borderColor: "var(--color-border)" }}
        >
          <nav
            className="flex flex-col gap-1 px-4 pb-4 pt-1 border-t-2"
            style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
          >
            {NAV_LINKS.map(({ href, key }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`nav-pill nav-pill-mobile ${active ? "active" : ""}`}
                  style={{
                    color: active ? undefined : "var(--color-text-muted)",
                    backgroundColor: active ? undefined : "transparent",
                    border: active ? undefined : "2px solid var(--color-border)",
                  }}
                >
                  {t.nav[key]}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {children}
      </main>
    </div>
  );
}
