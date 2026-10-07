'use client';

import Image from 'next/image';
import { Text, SimpleGrid, Box, Anchor, Stack } from '@mantine/core';
import { useLang } from '@/components/LangContext';
import {
  SPORTS_LINKS,
  TEAMS,
  SPORTS_HERO_IMAGE,
  SPORTS_GALLERY,
  PERSONAL_BESTS,
  getMergedResults,
  getChampionshipHighlights,
  YEARLY_RUNNING_KM,
  ROUGH_AVERAGE_PACE_MIN_PER_KM,
  PROGRESSION_3000,
  PROGRESSION_5000,
  PROGRESSION_10000,
  PROGRESSION_8K_XC,
  type ProgressionPoint,
  type ChampionshipHighlight,
  type ResultEntry,
} from '@/content/sportsData';
import { SOCIAL_LINKS } from '@/config';

function formatDate(dateStr: string, lang: 'en' | 'de'): string {
  const [y, m, d] = dateStr.split('-');
  const month = new Date(2000, parseInt(m || '1', 10) - 1).toLocaleString(
    lang === 'de' ? 'de-DE' : 'en-US',
    { month: 'short' },
  );
  if (d) return `${month} ${d}, ${y}`;
  return `${month} ${y}`;
}

/** Sort championship highlights: 1st first, then 2nd, 3rd, 4th… then "-". Within same place, newest first. */
function sortChampionshipsByPlace(
  highlights: ChampionshipHighlight[],
): ChampionshipHighlight[] {
  const placeRank = (place: string): number => {
    if (place === '-' || place === '–') return 9999;
    const n = parseInt(place.replace(/\D/g, ''), 10);
    return Number.isNaN(n) ? 9998 : n;
  };
  return [...highlights].sort((a, b) => {
    const ra = placeRank(a.place);
    const rb = placeRank(b.place);
    if (ra !== rb) return ra - rb;
    return b.date.localeCompare(a.date);
  });
}

const MEDAL_STYLES = {
  '1st': { bg: '#d4a017', color: '#1a1a1a', border: '#b8860b' },
  '2nd': { bg: '#c0c0c0', color: '#1a1a1a', border: '#a0a0a0' },
  '3rd': { bg: '#cd7f32', color: '#1a1a1a', border: '#a66b2a' },
} as const;

/** Format seconds as m:ss or mm:ss for axis labels. */
function formatTimeAxis(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return s < 10 ? `${m}:0${s}` : `${m}:${s}`;
}

/** Line chart: year (x) vs season best time (y). Lower/faster = higher on chart. */
function ProgressionLineChart({
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
  const withSeconds = data.filter((p) => p.timeSeconds != null) as (ProgressionPoint & {
    timeSeconds: number;
  })[];
  if (withSeconds.length === 0) return null;

  const years = withSeconds.map((p) => p.year);
  const times = withSeconds.map((p) => p.timeSeconds);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);
  const minSec = Math.min(...times);
  const maxSec = Math.max(...times);
  const yearRange = maxYear - minYear || 1;
  const secRange = maxSec - minSec || 1;
  const secPadding = secRange * 0.08;
  const secMin = minSec - secPadding;
  const secMax = maxSec + secPadding;

  const w = 280;
  const h = 180;
  const padLeft = 44;
  const padRight = 8;
  const padTop = 8;
  const padBottom = 28;
  const plotW = w - padLeft - padRight;
  const plotH = h - padTop - padBottom;

  const x = (year: number) => padLeft + ((year - minYear) / yearRange) * plotW;
  const y = (sec: number) =>
    padTop + plotH - ((sec - secMin) / (secMax - secMin)) * plotH;

  const pathD = withSeconds
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${x(p.year)} ${y(p.timeSeconds)}`)
    .join(' ');

  const yTicks = [secMin, secMin + (secMax - secMin) * 0.5, secMax].filter(
    (t, i, a) => a.indexOf(t) === i,
  );

  return (
    <Box
      className='rounded-2xl p-4 border-2'
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-surface-elevated)',
      }}
    >
      <Text
        size='sm'
        fw={600}
        style={{ color: 'var(--color-accent-3)' }}
        className='mb-0.5'
      >
        {title}
      </Text>
      <Text size='xs' style={{ color: 'var(--color-text-muted)' }} className='mb-3'>
        {sub}
      </Text>
      <Box style={{ width: '100%', maxWidth: w, margin: '0 auto' }}>
        <svg
          width='100%'
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          preserveAspectRatio='xMidYMid meet'
          className='overflow-visible'
        >
          {/* Y-axis labels */}
          {yTicks.map((t) => (
            <g key={t}>
              <line
                x1={padLeft}
                y1={y(t)}
                x2={padLeft - 6}
                y2={y(t)}
                stroke='var(--color-border)'
                strokeWidth={1}
              />
              <text
                x={padLeft - 8}
                y={y(t)}
                textAnchor='end'
                dominantBaseline='middle'
                style={{
                  fontSize: 10,
                  fontVariantNumeric: 'tabular-nums',
                  fill: 'var(--color-text-muted)',
                }}
              >
                {formatTimeAxis(t)}
              </text>
            </g>
          ))}
          {/* X-axis labels */}
          {withSeconds.map((p) => (
            <text
              key={p.year}
              x={x(p.year)}
              y={h - 6}
              textAnchor='middle'
              style={{
                fontSize: 10,
                fontVariantNumeric: 'tabular-nums',
                fill: 'var(--color-text-muted)',
              }}
            >
              {p.year}
              {p.note ? '*' : ''}
            </text>
          ))}
          {/* Line */}
          <path
            d={pathD}
            fill='none'
            stroke={accentColor}
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          {/* Points */}
          {withSeconds.map((p) => (
            <g key={p.year}>
              <circle
                cx={x(p.year)}
                cy={y(p.timeSeconds)}
                r={5}
                fill='var(--color-bg)'
                stroke={accentColor}
                strokeWidth={2}
              />
              <title>
                {[
                  p.time,
                  p.indoor ? ' (i)' : '',
                  ' · ',
                  p.meet ?? p.year,
                  p.note ? ` (${p.note})` : '',
                ].join('')}
              </title>
            </g>
          ))}
        </svg>
      </Box>
    </Box>
  );
}

export function SportsContent() {
  const { lang, t } = useLang();
  const c = t.sports;
  const meetLabel = (meet: string) => c.meets[meet] ?? meet;
  const eventLabel = (event: string) => c.events[event] ?? event;
  const trackPBs = PERSONAL_BESTS.filter((p) => !p.xc);
  const xcPBs = PERSONAL_BESTS.filter((p) => p.xc);

  return (
    <div className='overflow-x-hidden'>
      {/* Hero full-width (breaks out of content container) */}
      <Box
        className='w-screen relative left-1/2 -translate-x-1/2 mb-8 aspect-[16/9] max-h-[320px] overflow-hidden bg-[var(--color-surface)]'
        style={{ borderColor: 'var(--color-border)', borderWidth: '2px 0' }}
      >
        <Image
          src={SPORTS_HERO_IMAGE}
          alt=''
          fill
          className='object-cover'
          sizes='100vw'
          priority
        />
      </Box>

      <div className='max-w-content mx-auto'>
        <h1
          className='font-display text-2xl sm:text-3xl font-bold mb-4'
          style={{ color: 'var(--color-accent-3)' }}
        >
          {c.title}
        </h1>
        <p
          className='text-base sm:text-lg max-w-2xl leading-relaxed mb-6'
          style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}
        >
          {c.storyLead}
        </p>
        <Text
          size='sm'
          className='mb-0 leading-relaxed'
          style={{ color: 'var(--color-text-muted)' }}
        >
          {c.intro}
        </Text>

        {/* Teams / clubs & universities — wrapper ensures gap (padding not affected by margin collapse) */}
        <Box className='pt-10'>
          <Text
            size='xs'
            fw={600}
            tt='uppercase'
            className='mb-3'
            style={{ color: 'var(--color-text-muted)', letterSpacing: '0.06em' }}
          >
            {c.teamsHeading}
          </Text>
          <Text size='xs' className='mb-6' style={{ color: 'var(--color-text-muted)' }}>
            {c.teamsSub}
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing='lg' className='mb-10'>
          {TEAMS.map((team) => (
            <Box
              key={team.id}
              className='rounded-2xl p-4 sm:p-5 border-2 flex flex-col items-center text-center'
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-surface-elevated)',
              }}
            >
              {team.logoPath && (
                <Box className='w-20 h-20 sm:w-24 sm:h-24 mb-3 flex items-center justify-center flex-shrink-0'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={team.logoPath}
                    alt=''
                    className='max-w-full max-h-full object-contain'
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </Box>
              )}
              <Text size='sm' fw={600} style={{ color: 'var(--color-text)' }}>
                {c.teams[team.id]?.name ?? team.id}
              </Text>
              <Text size='xs' style={{ color: 'var(--color-text-muted)' }}>
                {c.teams[team.id]?.period ?? ''}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
        </Box>

        {/* Sports photos – place 1.jpg, 2.jpg, 3.jpg in public/sports/ */}
        <h2
          className='font-display text-lg font-bold mb-3'
          style={{ color: 'var(--color-accent-3)' }}
        >
          {c.photoAlt}
        </h2>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing='md' className='mb-10'>
          {SPORTS_GALLERY.map((src, i) => (
            <Box
              key={src}
              className='aspect-[4/3] rounded-3xl overflow-hidden border-2'
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={encodeURI(src)}
                alt={`${c.photoAlt} ${i + 1}`}
                className='w-full h-full object-cover'
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.sports-placeholder')) {
                    const el = document.createElement('div');
                    el.className =
                      'sports-placeholder w-full h-full flex items-center justify-center text-xs';
                    el.style.color = 'var(--color-text-muted)';
                    el.textContent = '–';
                    parent.appendChild(el);
                  }
                }}
              />
            </Box>
          ))}
        </SimpleGrid>
        {/* Links */}
        <Text
          size='xs'
          fw={600}
          tt='uppercase'
          mb='xs'
          style={{ color: 'var(--color-text-muted)', letterSpacing: '0.06em' }}
        >
          {c.linksHeading}
        </Text>
        <Stack gap='xs' className='mb-10'>
          <Anchor
            href={SPORTS_LINKS.tfrrs}
            target='_blank'
            rel='noopener noreferrer'
            size='sm'
            className='link-accent'
          >
            {c.tfrrsLabel} →
          </Anchor>
          <Anchor
            href={SPORTS_LINKS.ladv}
            target='_blank'
            rel='noopener noreferrer'
            size='sm'
            className='link-accent'
          >
            {c.ladvLabel} →
          </Anchor>
          <Anchor
            href={SOCIAL_LINKS.strava}
            target='_blank'
            rel='noopener noreferrer'
            size='sm'
            className='link-accent'
          >
            {c.stravaLabel} →
          </Anchor>
        </Stack>

        {/* Personal bests */}
        <h2
          className='font-display text-lg font-bold mb-3'
          style={{ color: 'var(--color-accent-3)' }}
        >
          {c.personalBestsHeading}
        </h2>
        <Text size='xs' style={{ color: 'var(--color-text-muted)' }} className='mb-2'>
          {c.personalBestsTrack}
        </Text>
        <ul
          className='list-none space-y-1 text-sm mb-4'
          style={{ color: 'var(--color-text)' }}
        >
          {trackPBs.map((pb, i) => (
            <li key={i}>
              <span className='font-medium'>{pb.event}</span>
              {pb.indoor && (
                <span
                  className='text-xs ml-1'
                  style={{ color: 'var(--color-text-muted)' }}
                  title='Indoor'
                >
                  ({c.indoor})
                </span>
              )}{' '}
              <span className='tabular-nums'>{pb.time}</span>
              {pb.meet && (
                <span
                  className='text-xs ml-1'
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  · {pb.meet}
                </span>
              )}
            </li>
          ))}
        </ul>
        <Text size='xs' style={{ color: 'var(--color-text-muted)' }} className='mb-2'>
          {c.personalBestsXC}
        </Text>
        <ul
          className='list-none space-y-1 text-sm mb-10'
          style={{ color: 'var(--color-text)' }}
        >
          {xcPBs.map((pb, i) => (
            <li key={i}>
              <span className='font-medium'>{pb.event}</span>{' '}
              <span className='tabular-nums'>{pb.time}</span>
              {pb.meet && (
                <span
                  className='text-xs ml-1'
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  · {pb.meet}
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Progression charts */}
        <h2
          className='font-display text-lg font-bold mb-2'
          style={{ color: 'var(--color-accent-3)' }}
        >
          {c.progressionHeading}
        </h2>
        <Text size='sm' className='mb-4' style={{ color: 'var(--color-text-muted)' }}>
          {c.progressionSub}
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing='md' className='mb-10'>
          <ProgressionLineChart
            data={PROGRESSION_3000}
            title='3,000 m'
            sub='Season bests by year'
            accentColor='var(--color-accent-3)'
          />
          <ProgressionLineChart
            data={PROGRESSION_5000}
            title='5,000 m'
            sub='Indoor / outdoor'
            accentColor='var(--color-accent)'
          />
          <ProgressionLineChart
            data={PROGRESSION_10000}
            title={c.progression10kTitle}
            sub={c.progression10kSub}
            accentColor='var(--color-accent-4)'
          />
          <ProgressionLineChart
            data={PROGRESSION_8K_XC}
            title='8k (XC)'
            sub='Cross country'
            accentColor='var(--color-accent-2)'
          />
        </SimpleGrid>

        {/* Championship results (place over time) */}
        <h2
          className='font-display text-lg font-bold mb-2'
          style={{ color: 'var(--color-accent-3)' }}
        >
          {c.championshipHeading}
        </h2>
        <Text size='sm' className='mb-4' style={{ color: 'var(--color-text-muted)' }}>
          {c.championshipSub}
        </Text>
        <ul className='list-none space-y-3 mb-10' style={{ color: 'var(--color-text)' }}>
          {sortChampionshipsByPlace(getChampionshipHighlights()).map((h, i) => (
            <li key={i} className='flex flex-wrap items-baseline gap-x-2 gap-y-1'>
              {h.place !== '-' && h.place !== '–' ? (
                <span
                  className='shrink-0 inline-flex items-center justify-center min-w-[2.5rem] px-2 py-0.5 rounded-md text-xs font-bold tabular-nums'
                  style={
                    h.place === '1st' || h.place === '2nd' || h.place === '3rd'
                      ? {
                          backgroundColor: MEDAL_STYLES[h.place].bg,
                          color: MEDAL_STYLES[h.place].color,
                          border: `1px solid ${MEDAL_STYLES[h.place].border}`,
                        }
                      : {
                          backgroundColor: 'var(--color-surface-elevated)',
                          color: 'var(--color-text)',
                          border: '1px solid var(--color-border)',
                        }
                  }
                >
                  {h.place}
                </span>
              ) : (
                <span
                  className='text-xs shrink-0 font-medium'
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {h.level === 'youth' ? c.youth : ''}
                </span>
              )}
              <span className='font-medium'>{meetLabel(h.meet)}</span>
              {h.location && (
                <span className='text-sm' style={{ color: 'var(--color-text-muted)' }}>
                  ({h.location})
                </span>
              )}
              <span>{eventLabel(h.event)}</span>
              {h.ageGroup && (
                <span
                  className='text-xs px-1.5 py-0.5 rounded'
                  style={{ backgroundColor: 'var(--color-surface-elevated)', color: 'var(--color-text-muted)' }}
                >
                  {h.ageGroup}
                </span>
              )}
              {h.time && (
                <span
                  className='tabular-nums text-sm'
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {h.time}
                </span>
              )}
              <span
                className='text-xs tabular-nums shrink-0'
                style={{ color: 'var(--color-text-muted)' }}
              >
                {formatDate(h.date, lang)}
              </span>
              {h.note && (
                <span
                  className='text-xs italic w-full sm:w-auto'
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  · {h.note}
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* All results timeline (college + pre-college), grouped by year */}
        <h2
          className='font-display text-lg font-bold mb-2'
          style={{ color: 'var(--color-accent-3)' }}
        >
          {c.recentResultsHeading}
        </h2>
        <Text size='sm' className='mb-4' style={{ color: 'var(--color-text-muted)' }}>
          {c.recentResultsSub}
        </Text>
        {(() => {
          const merged = getMergedResults();
          const byYear: Record<string, ResultEntry[]> = {};
          for (const r of merged) {
            const y = r.date.slice(0, 4);
            if (!byYear[y]) byYear[y] = [];
            byYear[y].push(r);
          }
          const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));
          return (
            <div className='space-y-6 mb-10'>
              {years.map((year) => (
                <div key={year}>
                  <h3
                    className='font-display text-sm font-semibold mb-2 sticky top-0 z-10 py-1'
                    style={{
                      color: 'var(--color-accent-3)',
                      backgroundColor: 'var(--color-bg)',
                    }}
                  >
                    {year}
                  </h3>
                  <ul
                    className='list-none space-y-2 text-sm'
                    style={{ color: 'var(--color-text)' }}
                  >
                    {byYear[year].map((r, i) => {
                      const team = r.teamId ? TEAMS.find((t) => t.id === r.teamId) : null;
                      return (
                        <li
                          key={`${year}-${i}`}
                          className='flex flex-wrap items-center gap-x-2 gap-y-0.5'
                        >
                          {team?.logoPath ? (
                            <span className='shrink-0 w-6 h-6 relative rounded overflow-hidden flex items-center justify-center bg-[var(--color-surface-elevated)]'>
                              <Image
                                src={team.logoPath}
                                alt=''
                                width={24}
                                height={24}
                                className='object-contain'
                              />
                            </span>
                          ) : null}
                          <span
                            className='text-xs tabular-nums shrink-0'
                            style={{ color: 'var(--color-text-muted)' }}
                          >
                            {formatDate(r.date, lang)}
                          </span>
                          <span className='font-medium'>{meetLabel(r.meet)}</span>
                          {r.location && (
                            <span className='text-xs' style={{ color: 'var(--color-text-muted)' }}>
                              ({r.location})
                            </span>
                          )}
                          <span>{eventLabel(r.event)}</span>
                          <span className='tabular-nums'>{r.time}</span>
                          {r.place && (
                            <span
                              className='text-xs'
                              style={{ color: 'var(--color-text-muted)' }}
                            >
                              ({c.place} {r.place})
                            </span>
                          )}
                          {r.ageGroup && (
                            <span
                              className='text-xs px-1 rounded'
                              style={{
                                backgroundColor: 'var(--color-surface-elevated)',
                                color: 'var(--color-text-muted)',
                              }}
                            >
                              {r.ageGroup}
                            </span>
                          )}
                          {r.note && (
                            <span
                              className='text-xs italic w-full sm:w-auto'
                              style={{ color: 'var(--color-text-muted)' }}
                            >
                              · {r.note}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          );
        })()}

        {/* Yearly running distance (km / mi) */}
        <h2
          className='font-display text-lg font-bold mb-2'
          style={{ color: 'var(--color-accent-3)' }}
        >
          {c.yearlyDistanceHeading}
        </h2>
        <Text size='sm' className='mb-4' style={{ color: 'var(--color-text-muted)' }}>
          {c.yearlyDistanceSub}
        </Text>
        {/* Lifetime total + rough time estimate */}
        {(() => {
          const totalKm = YEARLY_RUNNING_KM.reduce((sum, y) => sum + y.km, 0);
          const totalMinutes = totalKm * ROUGH_AVERAGE_PACE_MIN_PER_KM;
          const totalHours = Math.round(totalMinutes / 60);
          const totalDays = Math.round(totalHours / 24);
          const locale = lang === 'de' ? 'de-DE' : 'en-US';
          return (
            <Box
              className='rounded-2xl p-4 sm:p-5 border-2 mb-6'
              style={{
                borderColor: 'var(--color-accent-3)',
                backgroundColor: 'var(--color-surface-elevated)',
              }}
            >
              <Text
                size='xs'
                fw={600}
                tt='uppercase'
                className='mb-1'
                style={{ color: 'var(--color-text-muted)', letterSpacing: '0.06em' }}
              >
                {c.lifetimeLabel}
              </Text>
              <Text
                size='xl'
                fw={700}
                className='tabular-nums mb-0.5'
                style={{ color: 'var(--color-accent-3)' }}
              >
                {totalKm.toLocaleString(locale)} km
              </Text>
              <Text
                size='sm'
                className='tabular-nums mb-2'
                style={{ color: 'var(--color-text-muted)' }}
              >
                ≈{' '}
                {(totalKm * 0.621371).toLocaleString(locale, {
                  maximumFractionDigits: 0,
                })}{' '}
                mi
              </Text>
              <Text size='xs' style={{ color: 'var(--color-text-muted)' }}>
                {c.timeEstimateLabel}{' '}
                <span
                  className='tabular-nums font-medium'
                  style={{ color: 'var(--color-text)' }}
                >
                  ~{totalHours.toLocaleString(locale)} {c.hours} (~{totalDays}{' '}
                  {c.days})
                </span>
              </Text>
            </Box>
          );
        })()}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing='md' className='mb-10'>
          {YEARLY_RUNNING_KM.map((y) => (
            <Box
              key={y.year}
              className='rounded-2xl p-4 border-2'
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-surface-elevated)',
              }}
            >
              <Text
                size='xs'
                className='mb-0.5 tabular-nums'
                style={{ color: 'var(--color-text-muted)' }}
              >
                {y.year}
              </Text>
              <Text
                size='lg'
                fw={700}
                className='tabular-nums'
                style={{ color: 'var(--color-accent-3)' }}
              >
                {y.km.toLocaleString(lang === 'de' ? 'de-DE' : 'en-US')} km
              </Text>
              <Text
                size='xs'
                className='tabular-nums'
                style={{ color: 'var(--color-text-muted)' }}
              >
                ≈{' '}
                {(y.km * 0.621371).toLocaleString(lang === 'de' ? 'de-DE' : 'en-US', {
                  maximumFractionDigits: 0,
                })}{' '}
                mi
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* Awards */}
        <h2
          className='font-display text-lg font-bold mb-3'
          style={{ color: 'var(--color-accent-3)' }}
        >
          {c.highlights}
        </h2>
        <ul
          className='list-none space-y-1.5 text-sm mb-10'
          style={{ color: 'var(--color-text)' }}
        >
          {c.awards.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
