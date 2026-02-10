"use client";

import { Title, Text, Progress, Stack, Box } from "@mantine/core";
import { copy } from "@/content/copy";
import { useLang } from "@/components/LangContext";
import { GITHUB_USERNAME, CODING_HOURS_CURRENT, CODING_HOURS_GOAL } from "@/config";

const GITHUB_PLACEHOLDER = "YOUR_GITHUB_USERNAME";
const GITHUB_CHART_URL = `https://ghchart.rshah.org/${GITHUB_USERNAME}`;

export function StatsContent() {
  const { lang } = useLang();
  const c = copy[lang];
  const progress = Math.min(100, (CODING_HOURS_CURRENT / CODING_HOURS_GOAL) * 100);

  return (
    <div>
      <Title
        order={1}
        className="text-xl font-bold mb-8"
        style={{ color: "var(--color-text)" }}
      >
        {c.stats.title}
      </Title>

      <Stack gap="xl">
        <Box>
          <Text size="sm" fw={500} mb="xs" style={{ color: "var(--color-text)" }}>
            {c.stats.codingHours}
          </Text>
          <Text size="xl" fw={600} style={{ color: "var(--color-text)" }}>
            {CODING_HOURS_CURRENT.toLocaleString()} / {CODING_HOURS_GOAL.toLocaleString()}
          </Text>
          <Text size="sm" mt={4} style={{ color: "var(--color-text-muted)" }}>
            {c.stats.codingGoal}
          </Text>
          <Progress
            value={progress}
            size="md"
            mt="sm"
            color="teal"
            style={{ backgroundColor: "var(--color-border)" }}
          />
        </Box>

        <Box>
          <Text size="sm" fw={500} mb="xs" style={{ color: "var(--color-text)" }}>
            {c.stats.githubContributions}
          </Text>
          {GITHUB_USERNAME === GITHUB_PLACEHOLDER ? (
            <Text size="sm" style={{ color: "var(--color-text-muted)" }}>
              {c.stats.githubPlaceholder}
            </Text>
          ) : (
            <Box
              className="rounded-xl overflow-hidden p-2"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GITHUB_CHART_URL}
                alt="GitHub contribution chart"
                className="w-full h-auto"
              />
            </Box>
          )}
        </Box>
      </Stack>
    </div>
  );
}
