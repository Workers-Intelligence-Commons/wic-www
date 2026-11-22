// Text shared by every page: navigation, footer, accessibility labels.
import type { Localized } from "../i18n/locales.ts";

export interface NavItem {
  page: string;
  label: string;
}

/** A menu in the header that opens on a list of pages. */
export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const ui: Localized<{
  skip: string;
  /** Label of the notice that states the honest status of the project. */
  honestStatus: string;
  navLabel: string;
  home: string;
  nav: (NavItem | NavGroup)[];
  /** Label of the language menu. */
  language: string;
  footerNav: NavItem[];
  footerNote: string;
  repository: string;
  notFound: { title: string; description: string; heading: string; body: string; back: string };
}> = {
  en: {
    skip: "Skip to content",
    honestStatus: "honest status",
    navLabel: "Main",
    home: "Workers' Intelligence Commons, home",
    nav: [
      {
        label: "Mission",
        items: [
          { page: "mission", label: "Mission" },
          { page: "how-we-work", label: "How we work" },
        ],
      },
      { page: "criticism", label: "Criticism of AI" },
      { page: "projects", label: "Projects" },
      {
        label: "Governance",
        items: [
          { page: "governance", label: "How it is governed" },
          { page: "constitution", label: "Constitution" },
          { page: "charter", label: "Charter of intelligences" },
          { page: "transparency", label: "Transparency" },
        ],
      },
      { page: "support", label: "Support" },
      { page: "news", label: "News" },
    ],
    language: "Language",
    footerNav: [
      { page: "contributors", label: "Contributors" },
      { page: "contact", label: "Contact" },
      { page: "legal", label: "Legal notice" },
    ],
    footerNote: "Code under AGPL-3.0-or-later, text under CC BY-SA 4.0.",
    repository: "Source code",
    notFound: {
      title: "Page not found",
      description: "This page does not exist on the Workers' Intelligence Commons site.",
      heading: "This page does not exist",
      body: "The address may be mistyped, or the page may have moved.",
      back: "Back to the home page",
    },
  },
  fr: {
    skip: "Aller au contenu",
    honestStatus: "état réel",
    navLabel: "Principale",
    home: "Workers' Intelligence Commons, accueil",
    nav: [
      {
        label: "Mission",
        items: [
          { page: "mission", label: "Mission" },
          { page: "how-we-work", label: "Comment on travaille" },
        ],
      },
      { page: "criticism", label: "Les critiques de l'IA" },
      { page: "projects", label: "Projets" },
      {
        label: "Gouvernance",
        items: [
          { page: "governance", label: "Comment c'est gouverné" },
          { page: "constitution", label: "Constitution" },
          { page: "charter", label: "Charte des intelligences" },
          { page: "transparency", label: "Transparence" },
        ],
      },
      { page: "support", label: "Soutenir" },
      { page: "news", label: "Actualités" },
    ],
    language: "Langue",
    footerNav: [
      { page: "contributors", label: "Contributeur·ices" },
      { page: "contact", label: "Contact" },
      { page: "legal", label: "Mentions légales" },
    ],
    footerNote: "Code sous AGPL-3.0-or-later, textes sous CC BY-SA 4.0.",
    repository: "Code source",
    notFound: {
      title: "Page introuvable",
      description: "Cette page n'existe pas sur le site de Workers' Intelligence Commons.",
      heading: "Cette page n'existe pas",
      body: "L'adresse est peut-être mal tapée, ou la page a changé de place.",
      back: "Retour à l'accueil",
    },
  },
};
