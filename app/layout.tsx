import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "./globals.css";
import { getMessages } from "@/content/translations";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import { AppShell } from "@/components/AppShell";
import { LangProvider } from "@/components/LangContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"

const defaultMeta = getMessages("en").meta;
export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light">
          <LangProvider>
            <AppShell>{children}</AppShell>
          </LangProvider>
        </MantineProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
