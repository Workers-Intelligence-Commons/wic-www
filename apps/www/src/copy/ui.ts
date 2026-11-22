// Text shared by every page: navigation, footer, accessibility labels.
import type { Localized } from "../i18n/locales.ts";

export interface NavItem {
  page: string;
  label: string;
}

export const ui: Localized<{
  skip: string;
  /** Label of the notice that states the honest status of the project. */
  honestStatus: string;
  navLabel: string;
  home: string;
  nav: NavItem[];
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
      { page: "mission", label: "Mission" },
      { page: "projects", label: "Projects" },
      { page: "how-we-work", label: "How we work" },
      { page: "governance", label: "Governance" },
      { page: "transparency", label: "Transparency" },
      { page: "support", label: "Support" },
      { page: "news", label: "News" },
    ],
    language: "Language",
    footerNav: [
      { page: "constitution", label: "Constitution" },
      { page: "criticism", label: "Criticism of AI" },
      { page: "contributors", label: "Contributors" },
      { page: "contact", label: "Contact" },
      { page: "legal", label: "Legal notice" },
    ],
    footerNote: "Code under AGPL-3.0-or-later, text under CC BY-SA 4.0.",
    repository: "Source of this site",
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
      { page: "mission", label: "Mission" },
      { page: "projects", label: "Projets" },
      { page: "how-we-work", label: "Comment on travaille" },
      { page: "governance", label: "Gouvernance" },
      { page: "transparency", label: "Transparence" },
      { page: "support", label: "Soutenir" },
      { page: "news", label: "Actualités" },
    ],
    language: "Langue",
    footerNav: [
      { page: "constitution", label: "Constitution" },
      { page: "criticism", label: "Les critiques de l'IA" },
      { page: "contributors", label: "Contributeurs" },
      { page: "contact", label: "Contact" },
      { page: "legal", label: "Mentions légales" },
    ],
    footerNote: "Code sous AGPL-3.0-or-later, textes sous CC BY-SA 4.0.",
    repository: "Source de ce site",
    notFound: {
      title: "Page introuvable",
      description: "Cette page n'existe pas sur le site de Workers' Intelligence Commons.",
      heading: "Cette page n'existe pas",
      body: "L'adresse est peut-être mal tapée, ou la page a changé de place.",
      back: "Retour à l'accueil",
    },
  },
};
