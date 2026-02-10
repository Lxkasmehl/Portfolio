"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy } from "@/content/copy";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLang } from "@/components/LangContext";

const NAV_LINKS: { href: string; key: keyof typeof copy.en.nav }[] = [
  { href: "/", key: "home" },
  { href: "/cv", key: "cv" },
  { href: "/projects", key: "projects" },
  { href: "/sports", key: "sports" },
  { href: "/stats", key: "stats" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const c = copy[lang];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-bg)" }}>
      {/* Sticky header – verspielt mit Pills */}
      <header
        className="sticky top-0 z-50 border-b-2"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display text-xl sm:text-2xl font-bold no-underline"
            style={{ color: "var(--color-text)" }}
          >
            Lukas
          </Link>
          <nav className="flex items-center gap-2 flex-wrap">
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
                  {c.nav[key]}
                </Link>
              );
            })}
            <span className="inline-flex items-center gap-2 ml-2 pl-2 border-l-2" style={{ borderColor: "var(--color-border)" }}>
              <LanguageToggle lang={lang} setLang={setLang} />
              <ThemeToggle />
            </span>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {children}
      </main>
    </div>
  );
}
