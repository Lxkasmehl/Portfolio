import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "./globals.css";
import { copy } from "@/content/copy";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import { AppShell } from "@/components/AppShell";
import { LangProvider } from "@/components/LangContext";

export const metadata: Metadata = {
  title: copy.en.meta.title,
  description: copy.en.meta.description,
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
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet" />
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light">
          <LangProvider>
            <AppShell>{children}</AppShell>
          </LangProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
