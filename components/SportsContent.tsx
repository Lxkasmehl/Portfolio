"use client";

import { Text, SimpleGrid, Box, Anchor } from "@mantine/core";
import { copy } from "@/content/copy";
import { useLang } from "@/components/LangContext";

const SPORTS_IMAGE_SLOTS = ["/sports/1.jpg", "/sports/2.jpg", "/sports/3.jpg"];

export function SportsContent() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <div>
      <h1
        className="font-display text-2xl sm:text-3xl font-bold mb-4"
        style={{ color: "var(--color-accent-3)" }}
      >
        {c.sports.title}
      </h1>
      <p
        className="text-base sm:text-lg max-w-2xl leading-relaxed mb-6"
        style={{ color: "var(--color-text)", fontFamily: "var(--font-serif)" }}
      >
        {c.sports.storyLead}
      </p>
      <Text size="sm" className="mb-8 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        {c.sports.intro}
      </Text>

      <Anchor
        href={c.sports.tfrrsUrl}
        target="_blank"
        rel="noopener noreferrer"
        size="sm"
        className="link-accent mb-8 inline-block"
      >
        {c.sports.tfrrsLabel} →
      </Anchor>

      <h2
        className="font-display text-lg font-bold mb-3"
        style={{ color: "var(--color-accent-3)" }}
      >
        {c.sports.collegeBests}
      </h2>
      <ul className="list-none space-y-1 text-sm mb-8" style={{ color: "var(--color-text)" }}>
        {c.sports.bests.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      <h2
        className="font-display text-lg font-bold mb-3"
        style={{ color: "var(--color-accent-3)" }}
      >
        {c.sports.recentHeading}
      </h2>
      <ul className="list-none space-y-2 text-sm mb-8" style={{ color: "var(--color-text)" }}>
        {c.sports.recent.map((item, i) => (
          <li key={i} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>

      <h2
        className="font-display text-lg font-bold mb-3"
        style={{ color: "var(--color-accent-3)" }}
      >
        {c.sports.highlights}
      </h2>
      <ul className="list-none space-y-1.5 text-sm mb-8" style={{ color: "var(--color-text)" }}>
        {c.certifications.items.slice(2, 6).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2
        className="font-display text-lg font-bold mb-3"
        style={{ color: "var(--color-accent-3)" }}
      >
        {c.sports.photoAlt}
      </h2>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" className="mb-4">
        {SPORTS_IMAGE_SLOTS.map((src, i) => (
          <Box
            key={src}
            className="aspect-[4/3] rounded-3xl overflow-hidden border-2"
            style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${c.sports.photoAlt} ${i + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector(".sports-placeholder")) {
                  const el = document.createElement("div");
                  el.className =
                    "sports-placeholder w-full h-full flex items-center justify-center text-xs";
                  el.style.color = "var(--color-text-muted)";
                  el.textContent = "—";
                  parent.appendChild(el);
                }
              }}
            />
          </Box>
        ))}
      </SimpleGrid>
      <Text size="xs" style={{ color: "var(--color-text-muted)" }}>
        {c.sports.photosNote}
      </Text>
    </div>
  );
}
