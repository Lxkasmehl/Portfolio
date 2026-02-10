"use client";

import { copy } from "@/content/copy";
import { useLang } from "@/components/LangContext";
import { SOCIAL_LINKS } from "@/config";

/** jsDelivr – reliable for LinkedIn and all Simple Icons. */
const ICONS_CDN = "https://cdn.jsdelivr.net/npm/simple-icons@11/icons";

const SOCIALS: {
  key: keyof typeof SOCIAL_LINKS;
  icon: string;
  labelEn: string;
  labelDe: string;
}[] = [
  { key: "linkedin", icon: "linkedin", labelEn: "LinkedIn", labelDe: "LinkedIn" },
  { key: "instagram", icon: "instagram", labelDe: "Instagram", labelEn: "Instagram" },
  { key: "strava", icon: "strava", labelEn: "Strava", labelDe: "Strava" },
  { key: "github", icon: "github", labelEn: "GitHub", labelDe: "GitHub" },
];

export function SocialLinks({ size = "md" }: { size?: "sm" | "md" }) {
  const { lang } = useLang();
  const c = copy[lang];
  const iconSize = size === "sm" ? 24 : 32;

  return (
    <div className="flex flex-wrap items-center gap-4">
      {SOCIALS.map(({ key, icon, labelEn, labelDe }) => {
        const href = SOCIAL_LINKS[key];
        const label = lang === "de" ? labelDe : labelEn;
        if (!href || href.includes("your-id")) return null;
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl p-2 transition-transform hover:scale-110"
            style={{
              backgroundColor: "var(--color-surface-elevated)",
              border: "2px solid var(--color-border)",
            }}
            aria-label={label}
          >
            {/* Simple Icons (MIT) via jsDelivr */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ICONS_CDN}/${icon}.svg`}
              alt=""
              width={iconSize}
              height={iconSize}
            />
            {size === "md" && (
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                {label}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
