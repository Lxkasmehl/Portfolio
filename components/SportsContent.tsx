"use client";

import { Title, Text, SimpleGrid, Box } from "@mantine/core";
import { copy } from "@/content/copy";
import { useLang } from "@/components/LangContext";

const SPORTS_IMAGE_SLOTS = ["/sports/1.jpg", "/sports/2.jpg", "/sports/3.jpg"];

export function SportsContent() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <div>
      <Title
        order={1}
        className="text-xl font-bold mb-8"
        style={{ color: "var(--color-text)" }}
      >
        {c.sports.title}
      </Title>
      <Text size="sm" className="mb-8 leading-relaxed" style={{ color: "var(--color-text)" }}>
        {c.sports.intro}
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" className="mb-10">
        {SPORTS_IMAGE_SLOTS.map((src, i) => (
          <Box
            key={src}
            className="aspect-[4/3] rounded-xl overflow-hidden"
            style={{ backgroundColor: "var(--color-border)" }}
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

      <Title
        order={2}
        className="text-xs font-semibold uppercase tracking-wider mb-4"
        style={{ color: "var(--color-text-muted)" }}
      >
        {c.sports.highlights}
      </Title>
      <ul className="list-none space-y-1.5 text-sm" style={{ color: "var(--color-text)" }}>
        {c.certifications.items.slice(2, 6).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
