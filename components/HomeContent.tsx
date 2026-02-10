"use client";

import Link from "next/link";
import { Title, Text, Box, Stack, SimpleGrid } from "@mantine/core";
import { copy } from "@/content/copy";
import { useLang } from "@/components/LangContext";
import { PortraitImage } from "@/components/PortraitImage";

const LINKS: {
  href: string;
  key: "cv" | "projects" | "sports" | "stats";
  teaserKey: "cvTeaser" | "projectsTeaser" | "sportsTeaser" | "statsTeaser";
}[] = [
  { href: "/cv", key: "cv", teaserKey: "cvTeaser" },
  { href: "/projects", key: "projects", teaserKey: "projectsTeaser" },
  { href: "/sports", key: "sports", teaserKey: "sportsTeaser" },
  { href: "/stats", key: "stats", teaserKey: "statsTeaser" },
];

export function HomeContent() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <Stack gap="xl">
      <Box className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
        <Box
          className="shrink-0 w-24 sm:w-28 rounded-2xl overflow-hidden animate-in"
          style={{
            aspectRatio: "1/1",
            backgroundColor: "var(--color-border)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}
        >
          <PortraitImage alt={c.home.photoAlt} />
        </Box>
        <Stack gap="xs" className="animate-in animate-in-delay-1">
          <Title
            order={1}
            className="text-2xl sm:text-3xl font-bold tracking-tight"
            style={{ color: "var(--color-text)" }}
          >
            {c.intro.name}
          </Title>
          <Text size="md" style={{ color: "var(--color-text-muted)" }}>
            {c.home.tagline}
          </Text>
          <Text size="sm" style={{ color: "var(--color-text-muted)" }}>
            {c.intro.location}
          </Text>
        </Stack>
      </Box>

      <Box
        className="rounded-xl px-5 py-4 animate-in animate-in-delay-2"
        style={{
          backgroundColor: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        <Text size="xs" fw={600} tt="uppercase" mb="xs" style={{ color: "var(--color-text-muted)" }}>
          {c.home.rightNow}
        </Text>
        <Text size="sm" style={{ color: "var(--color-text)" }}>
          {c.home.roleShort}
        </Text>
      </Box>

      <Box>
        <Text
          size="xs"
          fw={600}
          tt="uppercase"
          mb="md"
          className="animate-in animate-in-delay-3"
          style={{ color: "var(--color-text-muted)" }}
        >
          {c.home.explore}
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          {LINKS.map(({ href, key, teaserKey }, i) => (
            <Link
              key={href}
              href={href}
              className="block rounded-xl p-4 no-underline card-hover animate-in animate-in-delay-4"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "inherit",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <Text fw={600} size="sm" style={{ color: "var(--color-text)" }}>
                {c.nav[key]}
              </Text>
              <Text size="xs" mt={4} style={{ color: "var(--color-text-muted)" }}>
                {c.home[teaserKey]}
              </Text>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  );
}
