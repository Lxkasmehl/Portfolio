"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Group, Anchor, Box, Container } from "@mantine/core";
import { copy } from "@/content/copy";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLang } from "@/components/LangContext";

const NAV_LINKS: { href: string; key: keyof typeof copy.en.nav }[] = [
  { href: "/", key: "home" },
  { href: "/cv", key: "cv" },
  { href: "/projects", key: "projects" },
  { href: "/sports", key: "sports" },
  { href: "/stats", key: "stats" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const c = copy[lang];

  return (
    <Box className="min-h-screen" style={{ backgroundColor: "var(--color-bg)" }}>
      <Container size="md" className="py-5">
        <Group justify="space-between" wrap="nowrap">
          <Group gap="xl" wrap="nowrap">
            {NAV_LINKS.map(({ href, key }) => {
              const active = pathname === href;
              return (
                <Anchor
                  key={href}
                  component={Link}
                  href={href}
                  size="sm"
                  fw={active ? 600 : 500}
                  style={{
                    color: active ? "var(--color-accent)" : "var(--color-text-muted)",
                    textDecoration: "none",
                  }}
                  className="hover:opacity-80"
                >
                  {c.nav[key]}
                </Anchor>
              );
            })}
          </Group>
          <LanguageToggle lang={lang} setLang={setLang} />
        </Group>
      </Container>
      <Box
        className="border-t min-h-[calc(100vh-56px)]"
        style={{ borderColor: "var(--color-border)" }}
      >
        <Box className="max-w-content mx-auto px-5 py-10 sm:py-14">{children}</Box>
      </Box>
    </Box>
  );
}
