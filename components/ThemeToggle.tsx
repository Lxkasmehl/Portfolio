"use client";

import { useTheme } from "@/components/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      title={theme === "light" ? "Dark mode" : "Light mode"}
    >
      {theme === "light" ? (
        <span className="text-lg" aria-hidden>🌙</span>
      ) : (
        <span className="text-lg" aria-hidden>☀️</span>
      )}
    </button>
  );
}
