/**
 * Central i18n: all UI strings per locale. Data (URLs, IDs) lives in content/*Data.ts.
 */
import type { Lang } from "@/lib/i18n";
import type { Messages } from "@/content/translations/types";
import { en } from "./en";
import { de } from "./de";

export type { Messages } from "@/content/translations/types";

export const messages: Record<Lang, Messages> = { en, de };

export function getMessages(lang: Lang): Messages {
  return messages[lang];
}
