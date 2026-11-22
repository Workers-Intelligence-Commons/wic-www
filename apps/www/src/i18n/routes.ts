// Builds locale-aware paths. Pages are written once under src/pages/[locale]/ and get one static
// route per locale, each under its own prefix: /en/, /fr/.
import { type Locale, locales } from "./locales.ts";

/** getStaticPaths for a page that exists once per locale. */
export function localePaths() {
  return locales.map((locale) => ({ params: { locale }, props: { locale } }));
}

/** The path of a page in a locale. `page` has no leading or trailing slash; "" is the home page. */
export function pathFor(locale: Locale, page = ""): string {
  return page ? `/${locale}/${page}/` : `/${locale}/`;
}
