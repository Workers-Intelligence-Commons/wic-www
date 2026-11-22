import type { Localized } from "../i18n/locales.ts";
import { site } from "../data/site.ts";

const mail = `<a href="mailto:${site.contact}">${site.contact}</a>`;

export const contact: Localized<{ title: string; description: string; kicker: string; lead: string; rows: { label: string; value: string }[]; note: string }> = {
  en: {
    title: "Contact",
    description: "How to reach Workers' Intelligence Commons: by email, or through the issues of its public repositories.",
    kicker: "write",
    lead: "One address for everything: support, compute, licenses, press, erasure requests and security reports.",
    rows: [
      { label: "email", value: mail },
      { label: "about the code", value: `an issue on the repository concerned, on <a href="${site.github}">GitHub</a>` },
      { label: "about this site", value: `<a href="${site.repositories.www}/issues">the issues of wic-www</a>` },
    ],
    note: "For a security flaw, write by email rather than in a public issue, and say so in the subject.",
  },
  fr: {
    title: "Contact",
    description: "Comment joindre Workers' Intelligence Commons : par e-mail, ou par les issues de ses dépôts publics.",
    kicker: "écrire",
    lead: "Une seule adresse pour tout : soutien, calcul, licences, presse, demandes d'effacement et signalements de sécurité.",
    rows: [
      { label: "e-mail", value: mail },
      { label: "sur le code", value: `une issue sur le dépôt concerné, sur <a href="${site.github}">GitHub</a>` },
      { label: "sur ce site", value: `<a href="${site.repositories.www}/issues">les issues de wic-www</a>` },
    ],
    note: "Pour une faille de sécurité, écrivez par e-mail plutôt que dans une issue publique, et dites-le dans l'objet.",
  },
};
