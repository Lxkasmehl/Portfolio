import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      colors: {
        brand: {
          bg: "var(--color-bg)",
          surface: "var(--color-surface)",
          text: "var(--color-text)",
          muted: "var(--color-text-muted)",
          accent: "var(--color-accent)",
          border: "var(--color-border)",
        },
      },
      maxWidth: {
        content: "42rem",
        wide: "52rem",
      },
    },
  },
  plugins: [],
};
export default config;
