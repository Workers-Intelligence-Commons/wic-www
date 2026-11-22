import type { Localized } from "../i18n/locales.ts";

export const constitution: Localized<{
  title: string;
  description: string;
  lead: string;
  statusTitle: string;
  status: string;
  translation?: string;
  contents: string;
  article: string;
  back: string;
  charterLink: string;
}> = {
  en: {
    title: "Constitution",
    description:
      "The constitution of Workers' Intelligence Commons: the principles every decision of the association must respect, with their reasons. Equality, openness, money, limits, the association's intelligences, data and work.",
    lead: "Every decision of the association, by the president or by the representatives, must respect this text. It sets out principles and their reasons rather than cases, so that whoever reads it can judge what it did not foresee. The statutes hold the governance and the figures, and the charter of intelligences holds the concrete cases.",
    statusTitle: "draft",
    status:
      "This text is a draft. It still has to be checked against the law on associations and the legal rules it touches, and it will keep evolving, as a constitution does.",
    translation: "Translated from the French original, which is the text that counts.",
    contents: "on this page",
    article: "Article",
    back: "How the association is governed",
    charterLink: "Read the charter of intelligences",
  },
  fr: {
    title: "Constitution",
    description:
      "La constitution de Workers' Intelligence Commons : les principes que toute décision de l'association doit respecter, avec leurs raisons. Égalité, ouverture, argent, limites, intelligences de l'association, données et travail.",
    lead: "Toute décision de l'association, du président comme des représentants, doit respecter ce texte. Il pose des principes et leurs raisons plutôt que des cas, pour que celles et ceux qui le lisent puissent juger ce qu'il n'a pas prévu. Les statuts portent la gouvernance et les chiffres, et la charte des intelligences porte les cas concrets.",
    statusTitle: "brouillon",
    status:
      "Ce texte est un brouillon. Il doit encore être vérifié au regard du droit des associations et des règles de droit qu'il touche, et il continuera d'évoluer, comme toute constitution.",
    contents: "sur cette page",
    article: "Article",
    back: "Comment l'association est gouvernée",
    charterLink: "Lire la charte des intelligences",
  },
};
