"use client";

import { Text, Anchor, List, Box } from "@mantine/core";
import { copy } from "@/content/copy";
import { useLang } from "@/components/LangContext";
import { Section } from "@/components/Section";

export function ProjectsContent() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <div>
      <h1
        className="font-display text-2xl sm:text-3xl font-bold mb-8"
        style={{ color: "var(--color-accent-2)" }}
      >
        {c.projects.title}
      </h1>

      <div className="space-y-8">
        {/* TurtleTracker */}
        <Section title="">
          <Box
            className="rounded-3xl p-6 border-2 card-playful"
            style={{ borderColor: "var(--color-accent-2)", backgroundColor: "var(--color-surface-elevated)" }}
          >
            <Text fw={600} size="md" style={{ color: "var(--color-text)" }}>
              {c.projects.turtletracker.name}
            </Text>
            <Text size="sm" mt={4} style={{ color: "var(--color-text-muted)" }}>
              {c.projects.turtletracker.period}
              {c.projects.turtletracker.org && ` · ${c.projects.turtletracker.org}`}
            </Text>
            <Text size="sm" mt="sm" className="leading-relaxed" style={{ color: "var(--color-text)" }}>
              {c.projects.turtletracker.description}
            </Text>
            <List size="sm" mt="xs" spacing="xs" className="list-disc pl-5">
              {c.projects.turtletracker.aspects.map((item, i) => (
                <List.Item key={i}>{item}</List.Item>
              ))}
            </List>
          </Box>
        </Section>

        {/* RunSync */}
        <Section title="">
          <Box
            className="rounded-3xl p-6 border-2 card-playful"
            style={{ borderColor: "var(--color-accent-2)", backgroundColor: "var(--color-surface-elevated)" }}
          >
            <Text fw={600} size="md" style={{ color: "var(--color-text)" }}>
              {c.projects.runsync.name}
            </Text>
            <Text size="sm" mt={4} style={{ color: "var(--color-text-muted)" }}>
              {c.projects.runsync.period}
            </Text>
            <Text size="sm" mt="sm" className="leading-relaxed" style={{ color: "var(--color-text)" }}>
              {c.projects.runsync.description}
            </Text>
          </Box>
        </Section>

        {/* Heiligtumsfahrtquiz */}
        <Section title="">
          <Box
            className="rounded-3xl p-6 border-2 card-playful"
            style={{ borderColor: "var(--color-accent-2)", backgroundColor: "var(--color-surface-elevated)" }}
          >
            <Text fw={600} size="md" style={{ color: "var(--color-text)" }}>
              {c.projects.heiligtumsfahrt.name}
            </Text>
            <Text size="sm" mt={4} style={{ color: "var(--color-text-muted)" }}>
              {c.projects.heiligtumsfahrt.period}
            </Text>
            <Text size="sm" mt="sm" className="leading-relaxed" style={{ color: "var(--color-text)" }}>
              {c.projects.heiligtumsfahrt.description}
            </Text>
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
          </Box>
        </Section>
      </div>
    </div>
  );
}
