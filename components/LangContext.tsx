"use client";

import { createContext, useContext, useState, useCallback, useMemo } from "react";
import type { Lang } from "@/lib/i18n";
import { getMessages } from "@/content/translations";
import type { Messages } from "@/content/translations";

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Messages;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const setLangStable = useCallback((l: Lang) => setLang(l), []);
  const t = useMemo(() => getMessages(lang), [lang]);
  const value = useMemo(
    () => ({ lang, setLang: setLangStable, t }),
    [lang, setLangStable, t]
  );
  return (
    <LangContext.Provider value={value}>{children}</LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
