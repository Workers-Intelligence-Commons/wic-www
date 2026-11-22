import type { Localized } from "../i18n/locales.ts";

export const news: Localized<{ title: string; description: string; lead: string; empty: string; rss: string; back: string; dateFormat: Intl.DateTimeFormatOptions }> = {
  en: {
    title: "News",
    description: "News from Workers' Intelligence Commons: the association, WPT and its applications.",
    lead: "What changed, what was decided, what is still missing.",
    empty: "No news yet.",
    rss: "RSS feed",
    back: "All news",
    dateFormat: { day: "numeric", month: "long", year: "numeric" },
  },
  fr: {
    title: "Actualités",
    description: "Les actualités de Workers' Intelligence Commons : l'association, WPT et ses applications.",
    lead: "Ce qui a changé, ce qui a été décidé, ce qui manque encore.",
    empty: "Pas encore d'actualité.",
    rss: "Flux RSS",
    back: "Toutes les actualités",
    dateFormat: { day: "numeric", month: "long", year: "numeric" },
  },
};
