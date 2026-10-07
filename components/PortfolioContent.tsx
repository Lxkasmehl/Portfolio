"use client";

import { useLang } from "@/components/LangContext";
import { Section } from "@/components/Section";
import { PortraitImage } from "@/components/PortraitImage";
import { TechStack } from "@/components/TechStack";
import { SocialLinks } from "@/components/SocialLinks";
import { Text, List, Anchor } from "@mantine/core";

export function PortfolioContent() {
  const { t } = useLang();

  return (
    <div>
      <header className="mb-12">
        <div className="flex gap-6 items-start mb-6">
          <div
            className="shrink-0 w-24 rounded-3xl overflow-hidden border-2"
            style={{
              aspectRatio: "1/1",
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <PortraitImage alt={t.home.photoAlt} />
          </div>
          <div>
            <h1
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight m-0"
              style={{ color: "var(--color-text)" }}
            >
              {t.intro.name}
            </h1>
            <p className="mt-2 text-sm max-w-xl" style={{ color: "var(--color-text-muted)" }}>
              {t.intro.headline}
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>
              {t.intro.location}
            </p>
          </div>
        </div>
      </header>

      <main>
        <Section title={t.about.title}>
          <div className="prose-custom text-sm" style={{ color: "var(--color-text)" }}>
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        <Section title={t.experience.title}>
          <div className="space-y-10">
            {/* Pentos */}
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                  {t.experience.pentos.role}
                </span>
                <span style={{ color: "var(--color-text-muted)" }}>·</span>
                <span style={{ color: "var(--color-text-muted)" }}>
                  {t.experience.pentos.company}
                </span>
              </div>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                {t.experience.pentos.period}
                {t.experience.pentos.location && ` · ${t.experience.pentos.location}`}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                {t.experience.pentos.description}
              </p>
            </div>

            {/* Washburn Research */}
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                  {t.experience.washburn.role}
                </span>
                <span style={{ color: "var(--color-text-muted)" }}>·</span>
                <span style={{ color: "var(--color-text-muted)" }}>
                  {t.experience.washburn.company}
                </span>
              </div>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                {t.experience.washburn.period}
                {t.experience.washburn.location && ` · ${t.experience.washburn.location}`}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                {t.experience.washburn.description}
              </p>
              <List size="sm" mt="xs" spacing="xs" className="list-disc pl-5">
                {t.experience.washburn.responsibilities.map((item, i) => (
                  <List.Item key={i}>{item}</List.Item>
                ))}
              </List>
              <p className="mt-2 text-sm italic" style={{ color: "var(--color-text-muted)" }}>
                {t.experience.washburn.note}
              </p>
            </div>

            {/* SOPTIM */}
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                  {t.experience.soptim.role}
                </span>
                <span style={{ color: "var(--color-text-muted)" }}>·</span>
                <span style={{ color: "var(--color-text-muted)" }}>
                  {t.experience.soptim.company}
                </span>
              </div>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                {t.experience.soptim.period}
                {t.experience.soptim.location && ` · ${t.experience.soptim.location}`}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                {t.experience.soptim.description}
              </p>
            </div>
          </div>
        </Section>

        <Section title={t.education.title}>
          <div className="space-y-8">
            <div>
              <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                {t.education.washburn.degree}
              </p>
              <p style={{ color: "var(--color-text-muted)" }}>{t.education.washburn.school}</p>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                {t.education.washburn.period} · {t.education.washburn.location}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                {t.education.washburn.note}
              </p>
              <List size="sm" mt="xs" spacing="xs" className="list-disc pl-5">
                {t.education.washburn.highlights.map((item, i) => (
                  <List.Item key={i}>{item}</List.Item>
                ))}
              </List>
            </div>
            <div>
              <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                {t.education.park.degree}
              </p>
              <p style={{ color: "var(--color-text-muted)" }}>{t.education.park.school}</p>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                {t.education.park.period} · {t.education.park.location}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                {t.education.park.note}
              </p>
            </div>
            <div>
              <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                {t.education.highSchool.degree}
              </p>
              <p style={{ color: "var(--color-text-muted)" }}>{t.education.highSchool.school}</p>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                {t.education.highSchool.period} · {t.education.highSchool.location}
              </p>
              {t.education.highSchool.note && (
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                  {t.education.highSchool.note}
                </p>
              )}
            </div>
          </div>
        </Section>

        <Section title={t.publications.title}>
          <ul className="list-none space-y-3 text-sm">
            {t.publications.items.map((item, i) => (
              <li key={i} className="leading-relaxed" style={{ color: "var(--color-text)" }}>
                <span className="font-semibold">{item.date}</span>
                <span style={{ color: "var(--color-text-muted)" }}> · </span>
                {item.text}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={t.projects.title}>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--color-text)" }}>
            {t.projects.teaser}
          </p>
          <Anchor
            href="/projects"
            size="sm"
            className="link-accent"
          >
            {t.projects.viewAll} →
          </Anchor>
        </Section>

        <Section title={t.certifications.title}>
          <ul className="list-none space-y-1.5 text-sm">
            {t.certifications.items.map((item, i) => (
              <li key={i} style={{ color: "var(--color-text)" }}>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={t.skills.title}>
          <div className="space-y-4">
            <TechStack />
            <p className="text-sm leading-relaxed pt-2" style={{ color: "var(--color-text-muted)" }}>
              {t.skills.list}
            </p>
          </div>
        </Section>

        <Section title={t.languages.title}>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
            {t.languages.list}
          </p>
        </Section>
      </main>

      <footer
        className="mt-16 pt-10 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <p className="text-sm font-display font-bold mb-3" style={{ color: "var(--color-text-muted)" }}>
          {t.footer.findMe}
        </p>
        <SocialLinks size="md" />
      </footer>
    </div>
  );
}
