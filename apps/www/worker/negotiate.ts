// Picks the locale for a visitor from their saved choice, then from the browser's Accept-Language.
import { defaultLocale, isLocale, type Locale, locales } from "../src/i18n/locales.ts";

export const LANG_COOKIE = "lang";

/** The locale saved in the `lang` cookie, if any. */
export function savedLocale(cookieHeader: string | null): Locale | null {
  for (const part of (cookieHeader ?? "").split(";")) {
    const [name, value] = part.trim().split("=");
    if (name === LANG_COOKIE && isLocale(value)) return value;
  }
  return null;
}

/** The supported locale the browser ranks highest, or the default locale. */
export function preferredLocale(acceptLanguage: string | null): Locale {
  const ranked = (acceptLanguage ?? "")
    .split(",")
    .map((entry, index) => {
      const [tag, ...params] = entry.trim().toLowerCase().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { base: tag.split("-")[0], q: q ? Number(q.slice(2)) : 1, index };
    })
    .filter((e) => e.base && e.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);
  for (const entry of ranked) {
    const match = locales.find((l) => l === entry.base);
    if (match) return match;
  }
  return defaultLocale;
}

/** A same-site path to send the visitor back to after a language choice; anything else becomes "/". */
export function safeReturnPath(value: string | null): string {
  return value && value.startsWith("/") && !value.startsWith("//") && !value.includes("\\") ? value : "/";
}
