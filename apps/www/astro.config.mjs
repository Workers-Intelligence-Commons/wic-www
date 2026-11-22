// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { defaultLocale, locales } from "./src/i18n/locales.ts";

export default defineConfig({
  site: "https://workers-intelligence-commons.org",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(locales.map((l) => [l, l])),
      },
      filter: (page) => !page.endsWith("/404/"),
    }),
  ],
});
