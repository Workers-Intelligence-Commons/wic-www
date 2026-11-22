import type { Localized } from "../i18n/locales.ts";
import { site } from "../data/site.ts";

export const legal: Localized<{ title: string; description: string; blocks: { heading: string; paragraphs: string[] }[] }> = {
  en: {
    title: "Legal notice",
    description: "Legal notice of the Workers' Intelligence Commons site: publisher, host, personal data and licenses.",
    blocks: [
      {
        heading: "Publisher",
        paragraphs: [
          "This site presents Workers' Intelligence Commons, a non-profit association being founded under French law. Until it is declared, the site is published by a private individual acting as a non-professional publisher. As French law allows, their identity has been given to the host and is not published here.",
          `Contact: <a href="mailto:${site.contact}">${site.contact}</a>.`,
        ],
      },
      {
        heading: "Host",
        paragraphs: ["Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, United States. Telephone: +1 650 319 8930."],
      },
      {
        heading: "Personal data",
        paragraphs: [
          "This site runs no script in your browser and uses no analytics or tracking. It sets a single cookie, <code>lang</code>, only when you pick a language in the menu, so that the site remembers it; it holds nothing else and lasts one year. It collects no personal data.",
          "To deliver the pages and protect them from attacks, the host processes technical data such as IP addresses, under its own privacy policy. If you write by email, your message is kept only to answer it.",
        ],
      },
      {
        heading: "Licenses",
        paragraphs: [
          `The code of this site is free software under <code>${site.codeLicense}</code>, and its source is <a href="${site.repositories.www}">public</a>. Its text is under <code>CC BY-SA 4.0</code>. The fonts are under <code>OFL-1.1</code>. The WPT, WIC and hub monograms are not licensed: all rights reserved.`,
        ],
      },
    ],
  },
  fr: {
    title: "Mentions légales",
    description: "Mentions légales du site de Workers' Intelligence Commons : éditeur, hébergeur, données personnelles et licences.",
    blocks: [
      {
        heading: "Éditeur",
        paragraphs: [
          "Ce site présente Workers' Intelligence Commons, une association à but non lucratif de loi 1901 en cours de création. Tant qu'elle n'est pas déclarée, le site est édité par une personne physique à titre non professionnel. Comme la loi le permet, son identité a été communiquée à l'hébergeur et n'est pas publiée ici.",
          `Contact : <a href="mailto:${site.contact}">${site.contact}</a>.`,
        ],
      },
      {
        heading: "Hébergeur",
        paragraphs: ["Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis. Téléphone : +1 650 319 8930."],
      },
      {
        heading: "Données personnelles",
        paragraphs: [
          "Ce site n'exécute aucun script dans votre navigateur et n'utilise aucun outil de mesure d'audience ni de pistage. Il dépose un seul cookie, <code>lang</code>, uniquement quand vous choisissez une langue dans le menu, pour s'en souvenir ; il ne contient rien d'autre et dure un an. Il ne collecte aucune donnée personnelle.",
          "Pour servir les pages et les protéger des attaques, l'hébergeur traite des données techniques comme les adresses IP, selon sa propre politique de confidentialité. Si vous écrivez par e-mail, votre message n'est gardé que pour y répondre.",
        ],
      },
      {
        heading: "Licences",
        paragraphs: [
          `Le code de ce site est un logiciel libre sous <code>${site.codeLicense}</code>, et sa source est <a href="${site.repositories.www}">publique</a>. Ses textes sont sous <code>CC BY-SA 4.0</code>. Les polices sont sous <code>OFL-1.1</code>. Les monogrammes WPT, WIC et hub ne sont pas sous licence : tous droits réservés.`,
        ],
      },
    ],
  },
};
