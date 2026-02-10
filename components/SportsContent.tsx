"use client";

import { Text, SimpleGrid, Box, Anchor, Stack } from "@mantine/core";
import { copy } from "@/content/copy";
import { useLang } from "@/components/LangContext";
import {
  SPORTS_LINKS,
  PERSONAL_BESTS,
  RECENT_RESULTS,
  PRE_COLLEGE_HIGHLIGHTS,
  YEARLY_RUNNING_KM,
  ROUGH_AVERAGE_PACE_MIN_PER_KM,
  PROGRESSION_3000,
  PROGRESSION_5000,
  PROGRESSION_10000,
  PROGRESSION_8K_XC,
  type ProgressionPoint,
} from "@/content/sportsData";
import { SOCIAL_LINKS } from "@/config";

const SPORTS_IMAGE_SLOTS = ["/sports/1.jpg", "/sports/2.jpg", "/sports/3.jpg"];

function formatDate(dateStr: string, lang: "en" | "de"): string {
  const [y, m, d] = dateStr.split("-");
  const month = new Date(2000, parseInt(m || "1", 10) - 1).toLocaleString(lang === "de" ? "de-DE" : "en-US", { month: "short" });
  if (d) return `${month} ${d}, ${y}`;
  return `${month} ${y}`;
}

/** Simple horizontal bar chart: best time = 100%, others relative. */
function ProgressionChart({
  data,
  title,
  sub,
  accentColor,
}: {
  data: ProgressionPoint[];
  title: string;
  sub: string;
  accentColor: string;
}) {
  const withSeconds = data.filter((p) => p.timeSeconds != null) as (ProgressionPoint & { timeSeconds: number })[];
  const bestSec = withSeconds.length ? Math.min(...withSeconds.map((p) => p.timeSeconds)) : 0;
  const worstSec = withSeconds.length ? Math.max(...withSeconds.map((p) => p.timeSeconds)) : 0;
  const range = worstSec - bestSec || 1;

  return (
    <Box className="rounded-2xl p-4 border-2" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface-elevated)" }}>
      <Text size="sm" fw={600} style={{ color: "var(--color-accent-3)" }} className="mb-0.5">
        {title}
      </Text>
      <Text size="xs" style={{ color: "var(--color-text-muted)" }} className="mb-3">
        {sub}
      </Text>
      <Stack gap="xs">
        {data.map((p) => {
          const sec = p.timeSeconds ?? 0;
          // Faster time = longer bar (best = 100%)
          const pct = range && sec > 0 ? Math.round(((worstSec - sec) / range) * 80) + 20 : 100;
          return (
            <Box key={p.year} className="flex items-center gap-3">
              <span className="text-xs font-medium tabular-nums shrink-0" style={{ color: "var(--color-text-muted)" }}>
                {p.year}
                {p.note ? ` (${p.note})` : ""}
              </span>
              <Box className="flex-1 min-w-0">
                <Box
                  className="h-6 rounded-md flex items-center justify-end pr-2"
                  style={{
                    width: `${Math.max(20, pct)}%`,
                    backgroundColor: accentColor,
                    opacity: 0.85,
                  }}
                >
                  <span className="text-xs font-semibold tabular-nums" style={{ color: "var(--color-bg)" }}>
                    {p.time}
                    {p.indoor ? " (i)" : ""}
                  </span>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}

export function SportsContent() {
  const { lang } = useLang();
  const c = copy[lang];
  const trackPBs = PERSONAL_BESTS.filter((p) => !p.xc);
  const xcPBs = PERSONAL_BESTS.filter((p) => p.xc);

  return (
    <div className="max-w-content mx-auto">
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

      {/* Links */}
      <Text size="xs" fw={600} tt="uppercase" mb="xs" style={{ color: "var(--color-text-muted)", letterSpacing: "0.06em" }}>
        {c.sports.linksHeading}
      </Text>
      <Stack gap="xs" className="mb-10">
        <Anchor href={SPORTS_LINKS.tfrrs} target="_blank" rel="noopener noreferrer" size="sm" className="link-accent">
          {c.sports.tfrrsLabel} →
        </Anchor>
        <Anchor href={SPORTS_LINKS.ladv} target="_blank" rel="noopener noreferrer" size="sm" className="link-accent">
          {c.sports.ladvLabel} →
        </Anchor>
        <Anchor href={SOCIAL_LINKS.strava} target="_blank" rel="noopener noreferrer" size="sm" className="link-accent">
          {c.sports.stravaLabel} →
        </Anchor>
      </Stack>

      {/* Personal bests */}
      <h2
        className="font-display text-lg font-bold mb-3"
        style={{ color: "var(--color-accent-3)" }}
      >
        {c.sports.personalBestsHeading}
      </h2>
      <Text size="xs" style={{ color: "var(--color-text-muted)" }} className="mb-2">
        {c.sports.personalBestsTrack}
      </Text>
      <ul className="list-none space-y-1 text-sm mb-4" style={{ color: "var(--color-text)" }}>
        {trackPBs.map((pb, i) => (
          <li key={i}>
            <span className="font-medium">{pb.event}</span>
            {pb.indoor && (
              <span className="text-xs ml-1" style={{ color: "var(--color-text-muted)" }} title="Indoor">
                ({c.sports.indoor})
              </span>
            )}
            {" "}
            <span className="tabular-nums">{pb.time}</span>
            {pb.meet && (
              <span className="text-xs ml-1" style={{ color: "var(--color-text-muted)" }}>
                — {pb.meet}
              </span>
            )}
          </li>
        ))}
      </ul>
      <Text size="xs" style={{ color: "var(--color-text-muted)" }} className="mb-2">
        {c.sports.personalBestsXC}
      </Text>
      <ul className="list-none space-y-1 text-sm mb-10" style={{ color: "var(--color-text)" }}>
        {xcPBs.map((pb, i) => (
          <li key={i}>
            <span className="font-medium">{pb.event}</span> <span className="tabular-nums">{pb.time}</span>
            {pb.meet && (
              <span className="text-xs ml-1" style={{ color: "var(--color-text-muted)" }}>
                — {pb.meet}
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Progression charts */}
      <h2
        className="font-display text-lg font-bold mb-2"
        style={{ color: "var(--color-accent-3)" }}
      >
        {c.sports.progressionHeading}
      </h2>
      <Text size="sm" className="mb-4" style={{ color: "var(--color-text-muted)" }}>
        {c.sports.progressionSub}
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" className="mb-10">
        <ProgressionChart
          data={PROGRESSION_3000}
          title="3,000 m"
          sub="Indoor season bests"
          accentColor="var(--color-accent-3)"
        />
        <ProgressionChart
          data={PROGRESSION_5000}
          title="5,000 m"
          sub="Indoor / outdoor"
          accentColor="var(--color-accent)"
        />
        <ProgressionChart
          data={PROGRESSION_10000}
          title={c.sports.progression10kTitle}
          sub={c.sports.progression10kSub}
          accentColor="var(--color-accent-4)"
        />
        <ProgressionChart
          data={PROGRESSION_8K_XC}
          title="8k (XC)"
          sub="Cross country"
          accentColor="var(--color-accent-2)"
        />
      </SimpleGrid>

      {/* Recent results timeline */}
      <h2
        className="font-display text-lg font-bold mb-2"
        style={{ color: "var(--color-accent-3)" }}
      >
        {c.sports.recentResultsHeading}
      </h2>
      <Text size="sm" className="mb-4" style={{ color: "var(--color-text-muted)" }}>
        {c.sports.recentResultsSub}
      </Text>
      <ul className="list-none space-y-2 text-sm mb-10" style={{ color: "var(--color-text)" }}>
        {RECENT_RESULTS.map((r, i) => (
          <li key={i} className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
            <span className="text-xs tabular-nums shrink-0" style={{ color: "var(--color-text-muted)" }}>
              {formatDate(r.date, lang)}
            </span>
            <span className="font-medium">{r.meet}</span>
            <span>{r.event}</span>
            <span className="tabular-nums">{r.time}</span>
            {r.place && (
              <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                ({c.sports.place} {r.place})
              </span>
            )}
            {r.note && (
              <span className="text-xs italic" style={{ color: "var(--color-text-muted)" }}>
                — {r.note}
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Pre-college (LADV) */}
      <h2
        className="font-display text-lg font-bold mb-2"
        style={{ color: "var(--color-accent-3)" }}
      >
        {c.sports.preCollegeHeading}
      </h2>
      <Text size="sm" className="mb-4" style={{ color: "var(--color-text-muted)" }}>
        {c.sports.preCollegeIntro}
      </Text>
      <ul className="list-none space-y-1.5 text-sm mb-10" style={{ color: "var(--color-text)" }}>
        {PRE_COLLEGE_HIGHLIGHTS.map((r, i) => (
          <li key={i}>
            <span className="font-medium">{r.event}</span> <span className="tabular-nums">{r.time}</span>
            <span className="text-xs ml-1" style={{ color: "var(--color-text-muted)" }}>
              — {r.location}, {formatDate(r.date, lang)}
              {r.ageGroup ? ` (${r.ageGroup})` : ""}
              {r.note ? ` · ${r.note}` : ""}
            </span>
          </li>
        ))}
      </ul>

      {/* Yearly running distance (km / mi) */}
      <h2
        className="font-display text-lg font-bold mb-2"
        style={{ color: "var(--color-accent-3)" }}
      >
        {c.sports.yearlyDistanceHeading}
      </h2>
      <Text size="sm" className="mb-4" style={{ color: "var(--color-text-muted)" }}>
        {c.sports.yearlyDistanceSub}
      </Text>
      {/* Lifetime total + rough time estimate */}
      {(() => {
        const totalKm = YEARLY_RUNNING_KM.reduce((sum, y) => sum + y.km, 0);
        const totalMinutes = totalKm * ROUGH_AVERAGE_PACE_MIN_PER_KM;
        const totalHours = Math.round(totalMinutes / 60);
        const totalDays = Math.round(totalHours / 24);
        const locale = lang === "de" ? "de-DE" : "en-US";
        return (
          <Box
            className="rounded-2xl p-4 sm:p-5 border-2 mb-6"
            style={{
              borderColor: "var(--color-accent-3)",
              backgroundColor: "var(--color-surface-elevated)",
            }}
          >
            <Text size="xs" fw={600} tt="uppercase" className="mb-1" style={{ color: "var(--color-text-muted)", letterSpacing: "0.06em" }}>
              {c.sports.lifetimeLabel}
            </Text>
            <Text size="xl" fw={700} className="tabular-nums mb-0.5" style={{ color: "var(--color-accent-3)" }}>
              {totalKm.toLocaleString(locale)} km
            </Text>
            <Text size="sm" className="tabular-nums mb-2" style={{ color: "var(--color-text-muted)" }}>
              ≈ {(totalKm * 0.621371).toLocaleString(locale, { maximumFractionDigits: 0 })} mi
            </Text>
            <Text size="xs" style={{ color: "var(--color-text-muted)" }}>
              {c.sports.timeEstimateLabel}{" "}
              <span className="tabular-nums font-medium" style={{ color: "var(--color-text)" }}>
                ~{totalHours.toLocaleString(locale)} {c.sports.hours} (~{totalDays} {c.sports.days})
              </span>
            </Text>
          </Box>
        );
      })()}
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md" className="mb-10">
        {YEARLY_RUNNING_KM.map((y) => (
          <Box
            key={y.year}
            className="rounded-2xl p-4 border-2"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-surface-elevated)",
            }}
          >
            <Text size="xs" className="mb-0.5 tabular-nums" style={{ color: "var(--color-text-muted)" }}>
              {y.year}
            </Text>
            <Text size="lg" fw={700} className="tabular-nums" style={{ color: "var(--color-accent-3)" }}>
              {y.km.toLocaleString(lang === "de" ? "de-DE" : "en-US")} km
            </Text>
            <Text size="xs" className="tabular-nums" style={{ color: "var(--color-text-muted)" }}>
              ≈ {(y.km * 0.621371).toLocaleString(lang === "de" ? "de-DE" : "en-US", { maximumFractionDigits: 0 })} mi
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Awards */}
      <h2
        className="font-display text-lg font-bold mb-3"
        style={{ color: "var(--color-accent-3)" }}
      >
        {c.sports.highlights}
      </h2>
      <ul className="list-none space-y-1.5 text-sm mb-10" style={{ color: "var(--color-text)" }}>
        {c.certifications.items.slice(2, 3).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Photos */}
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
