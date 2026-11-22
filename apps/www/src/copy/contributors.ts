import type { Localized } from "../i18n/locales.ts";
import { site } from "../data/site.ts";

export const contributorsPage: Localized<{
  title: string;
  description: string;
  lead: string;
  listKicker: string;
  listHeading: string;
  empty: string;
  join: { heading: string; paragraphs: string[] };
}> = {
  en: {
    title: "Contributors",
    description:
      "The people who give their work, compute or money to Workers' Intelligence Commons, thanked by name when they agree to it.",
    lead: "Contributors are thanked by name, with their agreement, or stay anonymous if they ask. Nobody is listed here without having said yes.",
    listKicker: "in the order they joined",
    listHeading: "Thanks to",
    empty: "Nobody is listed yet.",
    join: {
      heading: "Being listed, or not",
      paragraphs: [
        `If you contributed code, research, review, compute or anything else and want to be thanked here, write to <a href="mailto:${site.contact}">${site.contact}</a> or open an issue on <a href="${site.repositories.www}/issues">this site's repository</a>, with the name you want shown.`,
        "You can ask to be removed at any time, and you will be.",
        `Code contributions are also visible in each repository's history on <a href="${site.github}">GitHub</a>.`,
      ],
    },
  },
  fr: {
    title: "Contributeurs",
    description:
      "Les personnes qui donnent leur travail, du calcul ou de l'argent à Workers' Intelligence Commons, remerciées par leur nom quand elles l'acceptent.",
    lead: "Les contributeurs sont remerciés par leur nom, avec leur accord, ou restent anonymes s'ils le demandent. Personne n'apparaît ici sans avoir dit oui.",
    listKicker: "dans l'ordre d'arrivée",
    listHeading: "Merci à",
    empty: "Personne n'est encore listé.",
    join: {
      heading: "Être listé, ou pas",
      paragraphs: [
        `Si vous avez contribué du code, de la recherche, de la relecture, du calcul ou autre chose et voulez être remercié ici, écrivez à <a href="mailto:${site.contact}">${site.contact}</a> ou ouvrez une issue sur <a href="${site.repositories.www}/issues">le dépôt de ce site</a>, avec le nom que vous voulez voir affiché.`,
        "Vous pouvez demander à être retiré à tout moment, et vous le serez.",
        `Les contributions au code se voient aussi dans l'historique de chaque dépôt sur <a href="${site.github}">GitHub</a>.`,
      ],
    },
  },
};
