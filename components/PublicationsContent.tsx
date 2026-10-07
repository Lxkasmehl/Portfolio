"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/components/LangContext";
import { PUBLICATIONS, type Publication } from "@/content/publicationsData";

function Badge({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
      style={{ color, border: `2px solid ${color}`, backgroundColor: "var(--color-surface-elevated)" }}
    >
      {children}
    </span>
  );
}

function ActionLink({
  href,
  children,
  primary,
  download,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      download={download || undefined}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-semibold no-underline transition-transform hover:-translate-y-0.5"
      style={
        primary
          ? { backgroundColor: "var(--color-accent-2)", color: "#fff", border: "2px solid var(--color-accent-2)" }
          : {
              backgroundColor: "var(--color-surface-elevated)",
              color: "var(--color-text)",
              border: "2px solid var(--color-border-strong)",
            }
      }
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="font-display text-lg font-bold mb-3"
      style={{ color: "var(--color-accent-2)" }}
    >
      {children}
    </h3>
  );
}

function PaperCard({ pub }: { pub: Publication }) {
  const { t } = useLang();
  const c = t.publicationsPage;
  const [copied, setCopied] = useState(false);

  const copyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available; the BibTeX stays selectable in the block below.
    }
  };

  return (
    <article
      className="card-playful card-accent-2 p-6 sm:p-8"
      style={{ backgroundColor: "var(--color-surface-elevated)" }}
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* First page preview, links to the PDF */}
        <a
          href={pub.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 self-center md:self-start block w-48 sm:w-56 rounded-xl overflow-hidden border-2 shadow-lg transition-transform hover:-translate-y-1 hover:rotate-[-1deg]"
          style={{ borderColor: "var(--color-border)" }}
        >
          <img src={pub.preview} alt={c.previewAlt} className="w-full h-auto block" />
        </a>

        <div className="min-w-0">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge color="var(--color-accent-2)">{pub.venueShort}</Badge>
            <Badge color="var(--color-accent-3)">{c.peerReviewed}</Badge>
            <Badge color="var(--color-accent)">{c.paperBadge}</Badge>
          </div>

          <h2
            className="font-display text-2xl sm:text-3xl font-bold leading-tight m-0"
            style={{ color: "var(--color-text)" }}
          >
            {pub.title}
          </h2>
          <p className="mt-2 text-base font-semibold" style={{ color: "var(--color-text)" }}>
            {pub.authors.join(", ")}
            <span className="font-normal" style={{ color: "var(--color-text-muted)" }}>
              {" "}· {c.soleAuthor}
            </span>
          </p>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            {pub.venueLong}, {pub.track}. {pub.series}, Vol. {pub.volume}, pp. {pub.pages}. {c.publishedOn}.
          </p>

          <div className="flex flex-wrap gap-3 mt-5">
            <ActionLink href={pub.pdf} primary download>
              {c.downloadPdf}
            </ActionLink>
            <ActionLink href={`https://doi.org/${pub.doi}`}>{c.doi}</ActionLink>
            {pub.code && <ActionLink href={pub.code}>{c.code}</ActionLink>}
            {pub.artifact && <ActionLink href={pub.artifact}>{c.artifact}</ActionLink>}
          </div>
        </div>
      </div>

      {/* Key numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        {c.facts.map((f) => (
          <div
            key={f.label}
            className="rounded-2xl p-4"
            style={{ backgroundColor: "var(--color-bg-subtle)" }}
          >
            <div className="font-display text-3xl font-bold" style={{ color: "var(--color-accent-2)" }}>
              {f.value}
            </div>
            <div className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
              {f.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <SectionLabel>
          {c.abstract}
          {c.abstractNote && (
            <span className="ml-2 text-xs font-normal font-sans" style={{ color: "var(--color-text-muted)" }}>
              ({c.abstractNote})
            </span>
          )}
        </SectionLabel>
        <div className="prose-custom text-sm" style={{ color: "var(--color-text)" }} lang="en">
          {pub.abstract.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <SectionLabel>{c.keywords}</SectionLabel>
        <div className="flex flex-wrap gap-2" lang="en">
          {pub.keywords.map((k) => (
            <span
              key={k}
              className="px-3 py-1 rounded-full text-xs"
              style={{ backgroundColor: "var(--color-bg-subtle)", color: "var(--color-text)" }}
            >
              {k}
            </span>
          ))}
        </div>
      </div>

      <p
        className="mt-6 text-sm rounded-2xl px-4 py-3"
        style={{ border: "2px dashed var(--color-accent-3)", color: "var(--color-text)" }}
      >
        {c.presentation}
      </p>

      <div className="mt-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <SectionLabel>{c.cite}</SectionLabel>
          <button
            type="button"
            onClick={copyBibtex}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer"
            style={{
              backgroundColor: copied ? "var(--color-accent-3)" : "var(--color-surface-elevated)",
              color: copied ? "#fff" : "var(--color-text)",
              border: "2px solid var(--color-border-strong)",
            }}
          >
            {copied ? c.copied : c.copyBibtex}
          </button>
        </div>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--color-text)" }} lang="en">
          {pub.citation}
        </p>
        <pre
          className="text-xs p-4 rounded-2xl overflow-x-auto"
          style={{ backgroundColor: "var(--color-bg-subtle)", color: "var(--color-text)" }}
        >
          {pub.bibtex}
        </pre>
      </div>

      <p className="mt-6 text-xs" style={{ color: "var(--color-text-muted)" }}>
        {c.license}
      </p>
    </article>
  );
}

export function PublicationsContent() {
  const { t } = useLang();
  const c = t.publicationsPage;

  return (
    <div>
      <h1
        className="font-display text-2xl sm:text-3xl font-bold mb-2"
        style={{ color: "var(--color-accent-2)" }}
      >
        {c.title}
      </h1>
      <p className="text-base mb-8" style={{ color: "var(--color-text-muted)" }}>
        {c.lead}
      </p>

      <div className="space-y-8">
        {PUBLICATIONS.map((pub) => (
          <PaperCard key={pub.id} pub={pub} />
        ))}
      </div>

      <section className="mt-12">
        <h2 className="font-display text-xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
          {c.otherTitle}
        </h2>
        <ul className="list-none space-y-4 p-0">
          {c.otherItems.map((item) => (
            <li
              key={item.title}
              className="card-playful card-accent-3 p-5"
              style={{ backgroundColor: "var(--color-surface-elevated)" }}
            >
              <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                {item.title}
              </span>
              <span style={{ color: "var(--color-text-muted)" }}> · {item.date}</span>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-sm">
        <Link href="/cv" className="link-accent">
          {c.cvLink} →
        </Link>
      </p>
    </div>
  );
}
