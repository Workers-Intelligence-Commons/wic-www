import type { Localized } from "../i18n/locales.ts";

export const transparency: Localized<{
  title: string;
  description: string;
  lead: string;
  status: string;
  money: { heading: string; rows: { label: string; value: string }[] };
  inKind: { kicker: string; heading: string; body: string; empty: string; columns: { date: string; giver: string; what: string; use: string }; anonymous: string };
  promises: { kicker: string; heading: string; items: string[] };
}> = {
  en: {
    title: "Transparency",
    description:
      "The open books of Workers' Intelligence Commons: money and compute received and spent, the register of gifts in kind, and what the association commits to publish.",
    lead: "The budget, the donations and the support in kind are public. This page is where they are kept.",
    status: "Nothing has been received yet, because no donation channel is open. The tables below start empty.",
    money: {
      heading: "Money",
      rows: [
        { label: "received", value: "0 €" },
        { label: "spent from donations", value: "0 €" },
        { label: "donation channel", value: "not open" },
      ],
    },
    inKind: {
      kicker: "hardware, hours, services",
      heading: "Register of gifts in kind",
      body: "Each gift is recorded the day it arrives, with what it is and what it is used for. The giver is named only if they agree.",
      empty: "No gift in kind has been received yet.",
      columns: { date: "date", giver: "giver", what: "gift", use: "used for" },
      anonymous: "anonymous",
    },
    promises: {
      kicker: "from the draft constitution",
      heading: "What the association will publish",
      items: [
        "An annual report: accounts, donations, spending, decisions, and the known limits of the model.",
        "The energy used by each training run.",
        "Every salary paid, once there are any.",
        "Serious incidents and errors, with what was done about them.",
      ],
    },
  },
  fr: {
    title: "Transparence",
    description:
      "Les comptes ouverts de Workers' Intelligence Commons : argent et calcul reçus et dépensés, registre des dons en nature, et ce que l'association s'engage à publier.",
    lead: "Le budget, les dons et les soutiens en nature sont publics. C'est sur cette page qu'ils sont tenus.",
    status: "Rien n'a encore été reçu, puisqu'aucun moyen de faire un don n'est ouvert. Les tableaux ci-dessous partent de zéro.",
    money: {
      heading: "Argent",
      rows: [
        { label: "reçu", value: "0 €" },
        { label: "dépensé sur les dons", value: "0 €" },
        { label: "moyen de don", value: "pas ouvert" },
      ],
    },
    inKind: {
      kicker: "matériel, heures, services",
      heading: "Registre des dons en nature",
      body: "Chaque don est noté le jour où il arrive, avec ce qu'il est et ce à quoi il sert. La personne qui donne n'est nommée qu'avec son accord.",
      empty: "Aucun don en nature n'a encore été reçu.",
      columns: { date: "date", giver: "donateur", what: "don", use: "usage" },
      anonymous: "anonyme",
    },
    promises: {
      kicker: "d'après le brouillon de constitution",
      heading: "Ce que l'association publiera",
      items: [
        "Un rapport annuel : comptes, dons, dépenses, décisions et limites connues du modèle.",
        "L'énergie consommée par chaque entraînement.",
        "Chaque rémunération versée, quand il y en aura.",
        "Les incidents et erreurs graves, avec ce qui a été fait.",
      ],
    },
  },
};
