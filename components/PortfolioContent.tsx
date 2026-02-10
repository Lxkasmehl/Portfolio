"use client";

import { copy } from "@/content/copy";
import { useLang } from "@/components/LangContext";
import { Section } from "@/components/Section";
import { PortraitImage } from "@/components/PortraitImage";
import { TechStack } from "@/components/TechStack";
import { SocialLinks } from "@/components/SocialLinks";
import { Text, List, Anchor } from "@mantine/core";

export function PortfolioContent() {
  const { lang } = useLang();
  const c = copy[lang];

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
            <PortraitImage alt={c.home.photoAlt} />
          </div>
          <div>
            <h1
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight m-0"
              style={{ color: "var(--color-text)" }}
            >
              {c.intro.name}
            </h1>
            <p className="mt-2 text-sm max-w-xl" style={{ color: "var(--color-text-muted)" }}>
              {c.intro.headline}
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>
              {c.intro.location}
            </p>
          </div>
        </div>
      </header>

      <main>
        <Section title={c.about.title}>
          <div className="prose-custom text-sm" style={{ color: "var(--color-text)" }}>
            {c.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        <Section title={c.experience.title}>
          <div className="space-y-10">
            {/* Washburn Research */}
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                  {c.experience.washburn.role}
                </span>
                <span style={{ color: "var(--color-text-muted)" }}>·</span>
                <span style={{ color: "var(--color-text-muted)" }}>
                  {c.experience.washburn.company}
                </span>
              </div>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                {c.experience.washburn.period}
                {c.experience.washburn.location && ` · ${c.experience.washburn.location}`}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                {c.experience.washburn.description}
              </p>
              <List size="sm" mt="xs" spacing="xs" className="list-disc pl-5">
                {c.experience.washburn.responsibilities.map((item, i) => (
                  <List.Item key={i}>{item}</List.Item>
                ))}
              </List>
              <p className="mt-2 text-sm italic" style={{ color: "var(--color-text-muted)" }}>
                {c.experience.washburn.note}
              </p>
            </div>

            {/* Pentos */}
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                  {c.experience.pentos.role}
                </span>
                <span style={{ color: "var(--color-text-muted)" }}>·</span>
                <span style={{ color: "var(--color-text-muted)" }}>
                  {c.experience.pentos.company}
                </span>
              </div>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                {c.experience.pentos.period}
                {c.experience.pentos.location && ` · ${c.experience.pentos.location}`}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                {c.experience.pentos.description}
              </p>
            </div>

            {/* SOPTIM */}
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                  {c.experience.soptim.role}
                </span>
                <span style={{ color: "var(--color-text-muted)" }}>·</span>
                <span style={{ color: "var(--color-text-muted)" }}>
                  {c.experience.soptim.company}
                </span>
              </div>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                {c.experience.soptim.period}
                {c.experience.soptim.location && ` · ${c.experience.soptim.location}`}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                {c.experience.soptim.description}
              </p>
            </div>
          </div>
        </Section>

        <Section title={c.education.title}>
          <div className="space-y-8">
            <div>
              <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                {c.education.washburn.degree}
              </p>
              <p style={{ color: "var(--color-text-muted)" }}>{c.education.washburn.school}</p>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                {c.education.washburn.period} · {c.education.washburn.location}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                {c.education.washburn.note}
              </p>
            </div>
            <div>
              <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                {c.education.park.degree}
              </p>
              <p style={{ color: "var(--color-text-muted)" }}>{c.education.park.school}</p>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                {c.education.park.period} · {c.education.park.location}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                {c.education.park.note}
              </p>
            </div>
          </div>
        </Section>

        <Section title={c.projects.title}>
          <div className="space-y-6">
            <div>
              <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                {c.projects.turtletracker.name}
              </p>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                {c.projects.turtletracker.period}
                {c.projects.turtletracker.org && ` · ${c.projects.turtletracker.org}`}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                {c.projects.turtletracker.description}
              </p>
              <List size="sm" mt="xs" spacing="xs" className="list-disc pl-5">
                {c.projects.turtletracker.aspects.map((item, i) => (
                  <List.Item key={i}>{item}</List.Item>
                ))}
              </List>
            </div>
            <div>
              <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                {c.projects.runsync.name}
              </p>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                {c.projects.runsync.period}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                {c.projects.runsync.description}
              </p>
            </div>
            <div>
              <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                {c.projects.heiligtumsfahrt.name}
              </p>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                {c.projects.heiligtumsfahrt.period}
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                {c.projects.heiligtumsfahrt.description}
              </p>
              <Anchor
                href={c.projects.heiligtumsfahrt.link}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                mt="xs"
                className="link-accent"
              >
                {c.projects.heiligtumsfahrt.linkLabel} →
              </Anchor>
            </div>
          </div>
        </Section>

        <Section title={c.certifications.title}>
          <ul className="list-none space-y-1.5 text-sm">
            {c.certifications.items.map((item, i) => (
              <li key={i} style={{ color: "var(--color-text)" }}>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={c.skills.title}>
          <div className="space-y-4">
            <TechStack />
            <p className="text-sm leading-relaxed pt-2" style={{ color: "var(--color-text-muted)" }}>
              {c.skills.list}
            </p>
          </div>
        </Section>

        <Section title={c.languages.title}>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
            {c.languages.list}
          </p>
        </Section>
      </main>

      <footer
        className="mt-16 pt-10 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <p className="text-sm font-display font-bold mb-3" style={{ color: "var(--color-text-muted)" }}>
          {c.footer.findMe}
        </p>
        <SocialLinks size="md" />
      </footer>
    </div>
  );
}
