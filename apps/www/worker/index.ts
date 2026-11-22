// Runs only for "/" and "/lang/*" (see run_worker_first in wrangler.jsonc); every other request is a
// static file served without this code.
//   "/"                 sends a visitor to their language's home page; every page has a locale prefix.
//   "/lang/<locale>/"   saves a language choice in a cookie, then returns to the "to" path.
import { isLocale } from "../src/i18n/locales.ts";
import { pathFor } from "../src/i18n/routes.ts";
import { LANG_COOKIE, preferredLocale, safeReturnPath, savedLocale } from "./negotiate.ts";

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

const ONE_YEAR = 60 * 60 * 24 * 365;

function redirect(location: string, extra: Record<string, string> = {}): Response {
  return new Response(null, { status: 302, headers: { Location: location, "Cache-Control": "private, no-store", ...extra } });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    const choice = url.pathname.match(/^\/lang\/([a-z]+)\/?$/);
    if (choice) {
      const locale = choice[1];
      if (!isLocale(locale)) return env.ASSETS.fetch(request);
      const cookie = `${LANG_COOKIE}=${locale}; Path=/; Max-Age=${ONE_YEAR}; SameSite=Lax; Secure`;
      return redirect(safeReturnPath(url.searchParams.get("to")), { "Set-Cookie": cookie });
    }

    if (url.pathname === "/") {
      const locale = savedLocale(request.headers.get("Cookie")) ?? preferredLocale(request.headers.get("Accept-Language"));
      return redirect(pathFor(locale), { Vary: "Accept-Language, Cookie" });
    }

    return env.ASSETS.fetch(request);
  },
};
