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
}> = {
  en: {
    title: "Constitution",
    description:
      "The constitution of Workers' Intelligence Commons: the principles every decision of the association must respect, with their reasons. Openness, money, the limits of use, the model, data and work.",
    lead: "Every decision of the association, by the president or by the representatives, must respect this text. It gives its reasons, so that whoever reads it can judge the cases it did not foresee.",
    statusTitle: "draft",
    status:
      "This text is a draft. It still has to be checked against the law on associations and the legal rules it touches, and it will keep evolving, as a constitution does.",
    translation: "Translated from the French original, which is the text that counts.",
    contents: "on this page",
    article: "Article",
    back: "How the association is governed",
  },
  fr: {
    title: "Constitution",
    description:
      "La constitution de Workers' Intelligence Commons : les principes que toute décision de l'association doit respecter, avec leurs raisons. Ouverture, argent, limites d'usage, modèle, données et travail.",
    lead: "Toute décision de l'association, du président comme des représentants, doit respecter ce texte. Il donne ses raisons, pour que celles et ceux qui le lisent puissent juger les cas qu'il n'a pas prévus.",
    statusTitle: "brouillon",
    status:
      "Ce texte est un brouillon. Il doit encore être vérifié au regard du droit des associations et des règles de droit qu'il touche, et il continuera d'évoluer, comme toute constitution.",
    contents: "sur cette page",
    article: "Article",
    back: "Comment l'association est gouvernée",
  },
};
