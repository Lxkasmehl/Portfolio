"use client";

import { Title, Text, Progress, Stack, Box } from "@mantine/core";
import { copy } from "@/content/copy";
import { useLang } from "@/components/LangContext";
import { GITHUB_USERNAME, CODING_HOURS_CURRENT, CODING_HOURS_GOAL } from "@/config";

const GITHUB_PLACEHOLDER = "YOUR_GITHUB_USERNAME";
const GITHUB_CHART_URL = `https://ghchart.rshah.org/${GITHUB_USERNAME}`;

const MILESTONES = [2_500, 5_000, 7_500, 10_000] as const;

export function StatsContent() {
  const { lang } = useLang();
  const c = copy[lang];
  const progress = Math.min(100, (CODING_HOURS_CURRENT / CODING_HOURS_GOAL) * 100);
  const hoursToGo = Math.max(0, CODING_HOURS_GOAL - CODING_HOURS_CURRENT);

  return (
    <div className="max-w-content mx-auto">
      {/* Hero: Gladwell narrative */}
      <Box className="mb-14 animate-in">
        <h2
          className="font-display text-xl sm:text-2xl font-bold mb-4"
          style={{ color: "var(--color-accent)" }}
        >
          {c.stats.gladwellHeadline}
        </h2>
        <p
          className="text-base sm:text-lg max-w-2xl leading-relaxed m-0"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-serif)" }}
        >
          {c.stats.gladwellIntro}
        </p>
      </Box>

      {/* Your journey: big progress + milestones */}
      <Box className="mb-14 animate-in animate-in-delay-1">
        <Text
          size="xs"
          fw={600}
          tt="uppercase"
          mb="sm"
          style={{ color: "var(--color-text-muted)", letterSpacing: "0.08em" }}
        >
          {c.stats.myJourney}
        </Text>
        <Box className="flex items-baseline gap-3 flex-wrap mb-2">
          <span
            className="text-3xl sm:text-4xl font-bold tabular-nums"
            style={{ color: "var(--color-accent)" }}
          >
            {CODING_HOURS_CURRENT.toLocaleString()}
          </span>
          <span style={{ color: "var(--color-text-muted)" }}>/ {CODING_HOURS_GOAL.toLocaleString()} h</span>
        </Box>
        <Text size="sm" mb="lg" style={{ color: "var(--color-text-muted)" }}>
          {hoursToGo > 0
            ? `${hoursToGo.toLocaleString()} ${c.stats.hoursToGo}`
            : c.stats.codingGoal}
        </Text>

        {/* Milestone track */}
        <Box className="relative pt-2 pb-4">
          <Progress
            value={progress}
            size="lg"
            radius="xl"
            color="orange"
            style={{
              backgroundColor: "var(--color-border)",
              marginBottom: "2rem",
            }}
          />
          <Box className="flex justify-between relative -mt-8">
            {MILESTONES.map((m) => {
              const reached = CODING_HOURS_CURRENT >= m;
              const pct = (m / CODING_HOURS_GOAL) * 100;
              return (
                <Box
                  key={m}
                  className="flex flex-col items-center absolute transform -translate-x-1/2"
                  style={{ left: `${pct}%` }}
                >
                  <div
                    className={`milestone-dot ${reached ? "reached" : ""}`}
                    title={`${m.toLocaleString()} h - ${c.stats.milestoneLabel}`}
                  />
                  <Text
                    size="xs"
                    mt="xs"
                    style={{
                      color: reached ? "var(--color-accent)" : "var(--color-text-muted)",
                      fontWeight: reached ? 600 : 400,
                    }}
                  >
                    {m >= 1000 ? `${m / 1000}k` : m}
                  </Text>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* What counts as practice */}
      <Box
        className="rounded-3xl p-6 mb-14 animate-in animate-in-delay-2 border-2 border-dashed"
        style={{
          backgroundColor: "var(--color-surface-elevated)",
          borderColor: "var(--color-accent-3)",
        }}
      >
        <Text size="xs" fw={600} tt="uppercase" mb="xs" style={{ color: "var(--color-text-muted)" }}>
          {c.stats.whatCounts}
        </Text>
        <p
          className="text-sm leading-relaxed m-0"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-serif)" }}
        >
          {c.stats.whatCountsText}
        </p>
      </Box>

      {/* GitHub as one trace */}
      <Box className="animate-in animate-in-delay-3">
        <Text size="xs" fw={600} tt="uppercase" mb="xs" style={{ color: "var(--color-text-muted)" }}>
          {c.stats.githubAsTrace}
        </Text>
        <Text size="sm" mb="md" style={{ color: "var(--color-text-muted)" }}>
          {c.stats.githubAsTraceText}
        </Text>
        {GITHUB_USERNAME === GITHUB_PLACEHOLDER ? (
          <Text size="sm" style={{ color: "var(--color-text-muted)" }}>
            {c.stats.githubPlaceholder}
          </Text>
        ) : (
          <Box
            className="rounded-3xl overflow-hidden p-3 border-2"
            style={{
              backgroundColor: "var(--color-surface-elevated)",
              borderColor: "var(--color-border)",
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
    </div>
  );
}
