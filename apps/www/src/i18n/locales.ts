// The site's languages. English is served at the root, every other locale under /<locale>/.
export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Text in every locale; the type makes a missing translation a type error. */
export type Localized<T> = Record<Locale, T>;

export const localeNames: Localized<string> = { en: "English", fr: "Français" };
/** BCP 47 tags for <html lang>, hreflang and og:locale. */
export const localeTags: Localized<{ lang: string; og: string }> = {
  en: { lang: "en", og: "en_GB" },
  fr: { lang: "fr", og: "fr_FR" },
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
