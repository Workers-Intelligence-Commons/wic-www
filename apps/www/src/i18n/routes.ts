// Builds locale-aware paths. Pages are written once under src/pages/[...locale]/ and get one static
// route per locale: the default locale has no prefix, the others are prefixed.
import { defaultLocale, type Locale, locales } from "./locales.ts";

/** The `locale` route parameter for each locale: undefined for the default one, so its pages sit at the root. */
export function localeParam(locale: Locale): string | undefined {
  return locale === defaultLocale ? undefined : locale;
}

/** getStaticPaths for a page that exists once per locale. */
export function localePaths() {
  return locales.map((locale) => ({ params: { locale: localeParam(locale) }, props: { locale } }));
}

/** The path of a page in a locale. `page` has no leading or trailing slash; "" is the home page. */
export function pathFor(locale: Locale, page = ""): string {
  const parts = [localeParam(locale), page].filter(Boolean);
  return parts.length ? `/${parts.join("/")}/` : "/";
}
