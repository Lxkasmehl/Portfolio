"use client";

import { Text, Anchor, List, Box, Group } from "@mantine/core";
import { useLang } from "@/components/LangContext";
import { Section } from "@/components/Section";
import { PROJECTS } from "@/content/projectsData";

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
  const { t } = useLang();
  const p = t.projects;

  const pqcscannerData = PROJECTS.find((x) => x.id === "pqcscanner");
  const picturData = PROJECTS.find((x) => x.id === "pictur");
  const lactateData = PROJECTS.find((x) => x.id === "lactate");
  const runsyncData = PROJECTS.find((x) => x.id === "runsync");
  const heiligtumsfahrtData = PROJECTS.find((x) => x.id === "heiligtumsfahrt");

  return (
    <div>
      <h1
        className="font-display text-2xl sm:text-3xl font-bold mb-8"
        style={{ color: "var(--color-accent-2)" }}
      >
        {p.title}
      </h1>

      <div className="space-y-8">
        {/* Self-hosted automation platform (private code, no links) */}
        <Section title="">
          <Box
            className="rounded-3xl p-6 border-2 card-playful"
            style={{ borderColor: "var(--color-accent-2)", backgroundColor: "var(--color-surface-elevated)" }}
          >
            <Text fw={600} size="md" style={{ color: "var(--color-text)" }}>
              {p.platform.name}
            </Text>
            <Text size="sm" mt={4} style={{ color: "var(--color-text-muted)" }}>
              {p.platform.period}
            </Text>
            <Text size="sm" mt="sm" className="leading-relaxed" style={{ color: "var(--color-text)" }}>
              {p.platform.description}
            </Text>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {p.platform.parts.map((part) => (
                <div
                  key={part.title}
                  className="rounded-2xl p-4 border"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <Text fw={600} size="sm" style={{ color: "var(--color-accent-2)" }}>
                    {part.title}
                  </Text>
                  <Text size="sm" mt={4} className="leading-relaxed" style={{ color: "var(--color-text)" }}>
                    {part.text}
                  </Text>
                </div>
              ))}
            </div>
            <Text size="sm" mt="md" style={{ color: "var(--color-text-muted)" }}>
              <strong>{p.platform.stackLabel}:</strong> {p.platform.stack}
            </Text>
            <Text size="xs" mt={4} fs="italic" style={{ color: "var(--color-text-muted)" }}>
              {p.privateCode}
            </Text>
          </Box>
        </Section>

        {/* PQCScanner */}
        {pqcscannerData && "github" in pqcscannerData && (
          <Section title="">
            <Box
              className="rounded-3xl p-6 border-2 card-playful"
              style={{ borderColor: "var(--color-accent-2)", backgroundColor: "var(--color-surface-elevated)" }}
            >
              {pqcscannerData.github && githubOgImageUrl(pqcscannerData.github) && (
                <a
                  href={pqcscannerData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-[280px] rounded-xl overflow-hidden border mb-4"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <img
                    src={githubOgImageUrl(pqcscannerData.github)!}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </a>
              )}
              <Text fw={600} size="md" style={{ color: "var(--color-text)" }}>
                {p.pqcscanner.name}
              </Text>
              <Text size="sm" mt={4} style={{ color: "var(--color-text-muted)" }}>
                {p.pqcscanner.period}
              </Text>
              <Text size="sm" mt="sm" className="leading-relaxed" style={{ color: "var(--color-text)" }}>
                {p.pqcscanner.description}
              </Text>
              <List size="sm" mt="xs" spacing="xs" className="list-disc pl-5">
                {p.pqcscanner.aspects.map((item, i) => (
                  <List.Item key={i}>{item}</List.Item>
                ))}
              </List>
              <ProjectLinks
                githubUrl={pqcscannerData.github || undefined}
                githubLinks={[{ label: p.linkPaper, url: "/publications" }]}
                linkLiveLabel={p.linkLive}
                linkGithubLabel={p.linkGithub}
              />
            </Box>
          </Section>
        )}

        {/* PicTur */}
        {picturData && "link" in picturData && (
          <Section title="">
            <Box
              className="rounded-3xl p-6 border-2 card-playful"
              style={{ borderColor: "var(--color-accent-2)", backgroundColor: "var(--color-surface-elevated)" }}
            >
              <Text fw={600} size="md" style={{ color: "var(--color-text)" }}>
                {p.pictur.name}
              </Text>
              <Text size="sm" mt={4} style={{ color: "var(--color-text-muted)" }}>
                {p.pictur.period}
                {p.pictur.org && ` · ${p.pictur.org}`}
              </Text>
              <Text size="sm" mt="sm" className="leading-relaxed" style={{ color: "var(--color-text)" }}>
                {p.pictur.description}
              </Text>
              <List size="sm" mt="xs" spacing="xs" className="list-disc pl-5">
                {p.pictur.aspects.map((item, i) => (
                  <List.Item key={i}>{item}</List.Item>
                ))}
              </List>
              <ProjectLinks
                liveUrl={picturData.link}
                linkLiveLabel={p.linkLive}
                linkGithubLabel={p.linkGithub}
              />
            </Box>
          </Section>
        )}

        {/* Lactate Analysis */}
        {lactateData && "github" in lactateData && (
          <Section title="">
            <Box
              className="rounded-3xl p-6 border-2 card-playful"
              style={{ borderColor: "var(--color-accent-2)", backgroundColor: "var(--color-surface-elevated)" }}
            >
              {lactateData.github && githubOgImageUrl(lactateData.github) && (
                <a
                  href={lactateData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-[280px] rounded-xl overflow-hidden border mb-4"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <img
                    src={githubOgImageUrl(lactateData.github)!}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </a>
              )}
              <Text fw={600} size="md" style={{ color: "var(--color-text)" }}>
                {p.lactate.name}
              </Text>
              <Text size="sm" mt={4} style={{ color: "var(--color-text-muted)" }}>
                {p.lactate.period}
              </Text>
              <Text size="sm" mt="sm" className="leading-relaxed" style={{ color: "var(--color-text)" }}>
                {p.lactate.description}
              </Text>
              <ProjectLinks
                liveUrl={"link" in lactateData ? lactateData.link : undefined}
                githubUrl={lactateData.github || undefined}
                linkLiveLabel={p.linkReport}
                linkGithubLabel={p.linkGithub}
              />
            </Box>
          </Section>
        )}

        {/* RunSync */}
        {runsyncData && "github" in runsyncData && (
          <Section title="">
            <Box
              className="rounded-3xl p-6 border-2 card-playful"
              style={{ borderColor: "var(--color-accent-2)", backgroundColor: "var(--color-surface-elevated)" }}
            >
              {runsyncData.github && githubOgImageUrl(runsyncData.github) && (
                <a
                  href={runsyncData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-[280px] rounded-xl overflow-hidden border mb-4"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <img
                    src={githubOgImageUrl(runsyncData.github)!}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </a>
              )}
              <Text fw={600} size="md" style={{ color: "var(--color-text)" }}>
                {p.runsync.name}
              </Text>
              <Text size="sm" mt={4} style={{ color: "var(--color-text-muted)" }}>
                {p.runsync.period}
              </Text>
              <Text size="sm" mt="sm" className="leading-relaxed" style={{ color: "var(--color-text)" }}>
                {p.runsync.description}
              </Text>
              {p.runsync.aspects.length > 0 && (
                <List size="sm" mt="xs" spacing="xs" className="list-disc pl-5">
                  {p.runsync.aspects.map((item, i) => (
                    <List.Item key={i}>{item}</List.Item>
                  ))}
                </List>
              )}
              <ProjectLinks
                githubUrl={runsyncData.github || undefined}
                linkLiveLabel={p.linkLive}
                linkGithubLabel={p.linkGithub}
              />
            </Box>
          </Section>
        )}

        {/* Heiligtumsfahrtquiz */}
        {heiligtumsfahrtData && "link" in heiligtumsfahrtData && (
          <Section title="">
            <Box
              className="rounded-3xl p-6 border-2 card-playful"
              style={{ borderColor: "var(--color-accent-2)", backgroundColor: "var(--color-surface-elevated)" }}
            >
              {heiligtumsfahrtData.githubWeb && githubOgImageUrl(heiligtumsfahrtData.githubWeb) && (
                <a
                  href={heiligtumsfahrtData.githubWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-[280px] rounded-xl overflow-hidden border mb-4"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <img
                    src={githubOgImageUrl(heiligtumsfahrtData.githubWeb)!}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </a>
              )}
              <Text fw={600} size="md" style={{ color: "var(--color-text)" }}>
                {p.heiligtumsfahrt.name}
              </Text>
              <Text size="sm" mt={4} style={{ color: "var(--color-text-muted)" }}>
                {p.heiligtumsfahrt.period}
              </Text>
              <Text size="sm" mt="sm" className="leading-relaxed" style={{ color: "var(--color-text)" }}>
                {p.heiligtumsfahrt.description}
              </Text>
              <ProjectLinks
                liveUrl={heiligtumsfahrtData.link || undefined}
                githubLinks={[
                  ...(heiligtumsfahrtData.githubWeb
                    ? [{ label: p.linkGithubWeb, url: heiligtumsfahrtData.githubWeb }]
                    : []),
                  ...(heiligtumsfahrtData.githubAndroid
                    ? [{ label: p.linkGithubAndroid, url: heiligtumsfahrtData.githubAndroid }]
                    : []),
                ]}
                linkLiveLabel={p.linkLive}
                linkGithubLabel={p.linkGithub}
              />
            </Box>
          </Section>
        )}
      </div>
    </div>
  );
}
