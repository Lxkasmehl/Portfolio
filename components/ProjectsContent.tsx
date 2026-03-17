"use client";

import { Text, Anchor, List, Box, Group } from "@mantine/core";
import { copy } from "@/content/copy";
import { useLang } from "@/components/LangContext";
import { Section } from "@/components/Section";

/** GitHub Open Graph image: https://opengraph.githubassets.com/<hash>/<owner>/<repo> */
function githubOgImageUrl(githubUrl: string): string | null {
  try {
    const m = githubUrl.match(/github\.com\/([^/]+)\/([^/]+?)(?:\/|$)/);
    if (!m) return null;
    const [, owner, repo] = m;
    return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
  } catch {
    return null;
  }
}

function ProjectLinks({
  liveUrl,
  githubUrl,
  githubLinks,
  linkLiveLabel,
  linkGithubLabel,
}: {
  liveUrl?: string;
  githubUrl?: string;
  githubLinks?: { label: string; url: string }[];
  linkLiveLabel: string;
  linkGithubLabel: string;
}) {
  const hasGithub = githubUrl || (githubLinks && githubLinks.length > 0);
  if (!liveUrl && !hasGithub) return null;
  return (
    <Group gap="sm" mt="md" wrap="wrap">
      {liveUrl && (
        <Anchor
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          className="link-accent"
        >
          {linkLiveLabel} →
        </Anchor>
      )}
      {githubUrl && (
        <Anchor
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          className="link-accent"
        >
          {linkGithubLabel} →
        </Anchor>
      )}
      {githubLinks?.map(({ label, url }) =>
        url ? (
          <Anchor
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="link-accent"
          >
            {label} →
          </Anchor>
        ) : null
      )}
    </Group>
  );
}

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
            {c.projects.turtletracker.github && githubOgImageUrl(c.projects.turtletracker.github) && (
              <a
                href={c.projects.turtletracker.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-[280px] rounded-xl overflow-hidden border mb-4"
                style={{ borderColor: "var(--color-border)" }}
              >
                <img
                  src={githubOgImageUrl(c.projects.turtletracker.github)!}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </a>
            )}
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
            <ProjectLinks
              githubUrl={c.projects.turtletracker.github || undefined}
              linkLiveLabel={c.projects.linkLive}
              linkGithubLabel={c.projects.linkGithub}
            />
          </Box>
        </Section>

        {/* RunSync */}
        <Section title="">
          <Box
            className="rounded-3xl p-6 border-2 card-playful"
            style={{ borderColor: "var(--color-accent-2)", backgroundColor: "var(--color-surface-elevated)" }}
          >
            {c.projects.runsync.github && githubOgImageUrl(c.projects.runsync.github) && (
              <a
                href={c.projects.runsync.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-[280px] rounded-xl overflow-hidden border mb-4"
                style={{ borderColor: "var(--color-border)" }}
              >
                <img
                  src={githubOgImageUrl(c.projects.runsync.github)!}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </a>
            )}
            <Text fw={600} size="md" style={{ color: "var(--color-text)" }}>
              {c.projects.runsync.name}
            </Text>
            <Text size="sm" mt={4} style={{ color: "var(--color-text-muted)" }}>
              {c.projects.runsync.period}
            </Text>
            <Text size="sm" mt="sm" className="leading-relaxed" style={{ color: "var(--color-text)" }}>
              {c.projects.runsync.description}
            </Text>
            <ProjectLinks
              githubUrl={c.projects.runsync.github || undefined}
              linkLiveLabel={c.projects.linkLive}
              linkGithubLabel={c.projects.linkGithub}
            />
          </Box>
        </Section>

        {/* Heiligtumsfahrtquiz */}
        <Section title="">
          <Box
            className="rounded-3xl p-6 border-2 card-playful"
            style={{ borderColor: "var(--color-accent-2)", backgroundColor: "var(--color-surface-elevated)" }}
          >
            {"githubWeb" in c.projects.heiligtumsfahrt &&
              c.projects.heiligtumsfahrt.githubWeb &&
              githubOgImageUrl(c.projects.heiligtumsfahrt.githubWeb) && (
                <a
                  href={c.projects.heiligtumsfahrt.githubWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-[280px] rounded-xl overflow-hidden border mb-4"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <img
                    src={githubOgImageUrl(c.projects.heiligtumsfahrt.githubWeb)!}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </a>
              )}
            <Text fw={600} size="md" style={{ color: "var(--color-text)" }}>
              {c.projects.heiligtumsfahrt.name}
            </Text>
            <Text size="sm" mt={4} style={{ color: "var(--color-text-muted)" }}>
              {c.projects.heiligtumsfahrt.period}
            </Text>
            <Text size="sm" mt="sm" className="leading-relaxed" style={{ color: "var(--color-text)" }}>
              {c.projects.heiligtumsfahrt.description}
            </Text>
            <ProjectLinks
              liveUrl={c.projects.heiligtumsfahrt.link || undefined}
              githubLinks={[
                ...(c.projects.heiligtumsfahrt.githubWeb
                  ? [{ label: c.projects.linkGithubWeb, url: c.projects.heiligtumsfahrt.githubWeb }]
                  : []),
                ...(c.projects.heiligtumsfahrt.githubAndroid
                  ? [{ label: c.projects.linkGithubAndroid, url: c.projects.heiligtumsfahrt.githubAndroid }]
                  : []),
              ]}
              linkLiveLabel={c.projects.linkLive}
              linkGithubLabel={c.projects.linkGithub}
            />
          </Box>
        </Section>
      </div>
    </div>
  );
}
