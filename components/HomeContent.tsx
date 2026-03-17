"use client";

import Link from "next/link";
import { useLang } from "@/components/LangContext";
import { PortraitImage } from "@/components/PortraitImage";
import { SocialLinks } from "@/components/SocialLinks";

const DELAY_CLASSES = ["animate-in-delay-1", "animate-in-delay-2", "animate-in-delay-3", "animate-in-delay-4"] as const;

const CARDS: {
  href: string;
  key: "cv" | "projects" | "sports" | "stats";
  teaserKey: "cvTeaser" | "projectsTeaser" | "sportsTeaser" | "statsTeaser";
  accent: 1 | 2 | 3 | 4;
  emoji: string;
}[] = [
  { href: "/cv", key: "cv", teaserKey: "cvTeaser", accent: 1, emoji: "📄" },
  { href: "/projects", key: "projects", teaserKey: "projectsTeaser", accent: 2, emoji: "🛠️" },
  { href: "/sports", key: "sports", teaserKey: "sportsTeaser", accent: 3, emoji: "🏃" },
  { href: "/stats", key: "stats", teaserKey: "statsTeaser", accent: 4, emoji: "📈" },
];

export function HomeContent() {
  const { t } = useLang();

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* Hero: Name + Portrait + Blob */}
      <section className="relative">
        <div
          className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{
            background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-2) 100%)",
            animation: "blob-float 8s ease-in-out infinite",
          }}
        />
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start relative">
          <div
            className="shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden shadow-xl border-4"
            style={{
              borderColor: "var(--color-accent)",
              boxShadow: "0 12px 40px -8px rgba(0,0,0,0.15)",
            }}
          >
            <PortraitImage alt={t.home.photoAlt} />
          </div>
          <div className="animate-in animate-in-delay-1">
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight m-0"
              style={{ color: "var(--color-text)" }}
            >
              {t.intro.name}
            </h1>
            <p
              className="mt-3 text-lg sm:text-xl max-w-xl"
              style={{ color: "var(--color-text-muted)" }}
            >
              {t.home.tagline}
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>
              {t.intro.location}
            </p>
            <div
              className="mt-6 inline-block px-4 py-2 rounded-2xl text-sm font-semibold"
              style={{
                backgroundColor: "var(--color-bg-subtle)",
                color: "var(--color-accent)",
                border: "2px dashed var(--color-accent)",
              }}
            >
              {t.home.rightNow}: {t.home.roleShort}
            </div>
          </div>
        </div>
      </section>

      {/* Bento: 4 große Karten mit Farbakzent */}
      <section>
        <h2
          className="font-display text-2xl sm:text-3xl font-bold mb-8"
          style={{ color: "var(--color-text)" }}
        >
          {t.home.explore} →
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CARDS.map(({ href, key, teaserKey, accent, emoji }, i) => (
            <Link
              key={href}
              href={href}
              className={`card-playful card-accent-${accent} block p-6 sm:p-8 no-underline text-left animate-in ${DELAY_CLASSES[i]}`}
            >
              <span className="text-3xl sm:text-4xl block mb-3" aria-hidden>
                {emoji}
              </span>
              <span
                className="font-display text-xl sm:text-2xl font-bold"
                style={{ color: "var(--color-text)" }}
              >
                {t.nav[key]}
              </span>
              <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--color-text-muted)" }}>
                {t.home[teaserKey]}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Socials */}
      <section className="animate-in animate-in-delay-4">
        <h2
          className="font-display text-xl font-bold mb-4"
          style={{ color: "var(--color-text-muted)" }}
        >
          {t.footer.findMe}
        </h2>
        <SocialLinks size="sm" />
      </section>
    </div>
  );
}
