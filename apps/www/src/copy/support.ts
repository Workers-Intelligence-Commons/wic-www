import type { Localized } from "../i18n/locales.ts";
import { site } from "../data/site.ts";

const mail = `<a href="mailto:${site.contact}">${site.contact}</a>`;

export const support: Localized<{
  title: string;
  description: string;
  kicker: string;
  slogan: string;
  lead: string;
  status: string;
  pays: { kicker: string; heading: string; items: string[]; after: string };
  ways: {
    heading: string;
    money: { title: string; paragraphs: string[] };
    compute: { title: string; paragraphs: string[] };
    work: { title: string; paragraphs: string[]; primary: string; secondary: string };
  };
  apart: {
    kicker: string;
    heading: string;
    donations: { title: string; tag: string; body: string };
    service: { title: string; tag: string; body: string };
    after: string;
  };
  books: { heading: string; body: string; link: string };
}> = {
  en: {
    title: "Support",
    description:
      "How to support Workers' Intelligence Commons: compute grants, contributions to the code, and donations once a structure can receive them. What your support pays for, and what it never buys.",
    kicker: "supporting the commons",
    slogan: "Nothing pays for owning the model",
    lead: "Training a model costs compute, and compute costs money. This page explains how you can help, and what happens to what you give.",
    status:
      "Donations are not open yet. No money goes through a personal account: they will open once a fiscal host or the association can receive them.",
    pays: {
      kicker: "in this order",
      heading: "What your support pays for",
      items: [
        "GPU compute for training and evaluation runs.",
        "Storage and hosting for the corpus and the provenance registry.",
        "Infrastructure for a public test service, served without margin.",
      ],
      after: `Nothing pays for owning the model. It stays under <code>${site.codeLicense}</code>, whatever happens to funding.`,
    },
    ways: {
      heading: "Ways to give",
      money: {
        title: "Money",
        paragraphs: [
          "Not open yet. When it opens, this page will give the link, and the transparency page will show every euro received and spent.",
          "A donation is a gift. It buys no feature, no priority, and no say over which sources enter the corpus.",
        ],
      },
      compute: {
        title: "Compute",
        paragraphs: [
          `If you run a GPU programme, a cluster or a cloud account and can grant credits or hours, write to ${mail}. Please say what hardware is offered and for how long. Compute grants are reported publicly, the same way money will be.`,
        ],
      },
      work: {
        title: "Work",
        paragraphs: [
          "Every repository is public and pull requests are welcome: code, research, review of the sources and their licenses, translations.",
        ],
        primary: "Open the repositories",
        secondary: "See who contributed",
      },
    },
    apart: {
      kicker: "kept apart on purpose",
      heading: "Donations and a paid service are different things",
      donations: { title: "Donations", tag: "no counterpart", body: "Unconditional. A gift to the commons, nothing in return." },
      service: {
        title: "Paid service",
        tag: "optional",
        body: "Usage credits for a hosted model, if one opens one day. Self-hosting is always possible, and anyone may offer the model as a paid service too.",
      },
      after: "Keeping the two apart keeps the project honest about what each euro is for.",
    },
    books: {
      heading: "Where it goes",
      body: "The transparency page lists money and compute received and spent, and the register of gifts in kind. A donor can ask to stay anonymous.",
      link: "See the transparency page",
    },
  },
  fr: {
    title: "Soutenir",
    description:
      "Comment soutenir Workers' Intelligence Commons : des heures de calcul, des contributions au code, et des dons quand une structure pourra les recevoir. Ce que paie votre soutien, et ce qu'il n'achète jamais.",
    kicker: "soutenir le commun",
    slogan: "Rien ne paie pour posséder le modèle",
    lead: "Entraîner un modèle coûte du calcul, et le calcul coûte de l'argent. Cette page explique comment aider, et ce que devient ce que vous donnez.",
    status:
      "Les dons ne sont pas encore ouverts. Aucun argent ne passe par un compte personnel : ils ouvriront quand un hébergeur fiscal ou l'association pourra les recevoir.",
    pays: {
      kicker: "dans cet ordre",
      heading: "Ce que paie votre soutien",
      items: [
        "Du calcul GPU pour les entraînements et les évaluations.",
        "Le stockage et l'hébergement du corpus et du registre de provenance.",
        "L'infrastructure d'un service de test public, servi sans marge.",
      ],
      after: `Rien ne paie pour posséder le modèle. Il reste sous <code>${site.codeLicense}</code>, quoi qu'il arrive au financement.`,
    },
    ways: {
      heading: "Donner",
      money: {
        title: "Argent",
        paragraphs: [
          "Pas encore ouvert. Le jour venu, cette page donnera le lien, et la page transparence montrera chaque euro reçu et dépensé.",
          "Un don est un cadeau. Il n'achète aucune fonctionnalité, aucune priorité, et aucun droit de regard sur les sources qui entrent dans le corpus.",
        ],
      },
      compute: {
        title: "Calcul",
        paragraphs: [
          `Si vous gérez un programme GPU, un cluster ou un compte cloud et pouvez offrir des crédits ou des heures, écrivez à ${mail}. Précisez le matériel proposé et pour combien de temps. Les dons de calcul sont publiés, comme le seront les dons d'argent.`,
        ],
      },
      work: {
        title: "Travail",
        paragraphs: [
          "Tous les dépôts sont publics et les pull requests sont bienvenues : du code, de la recherche, la relecture des sources et de leurs licences, des traductions.",
        ],
        primary: "Ouvrir les dépôts",
        secondary: "Voir qui a contribué",
      },
    },
    apart: {
      kicker: "séparés exprès",
      heading: "Un don et un service payant, ce n'est pas la même chose",
      donations: { title: "Dons", tag: "sans contrepartie", body: "Inconditionnels. Un cadeau au commun, rien en retour." },
      service: {
        title: "Service payant",
        tag: "facultatif",
        body: "Des crédits d'usage pour un modèle hébergé, si un tel service ouvre un jour. L'auto-hébergement reste toujours possible, et n'importe qui peut aussi proposer le modèle comme service payant.",
      },
      after: "Garder les deux séparés, c'est rester honnête sur ce à quoi sert chaque euro.",
    },
    books: {
      heading: "Où ça va",
      body: "La page transparence liste l'argent et le calcul reçus et dépensés, ainsi que le registre des dons en nature. Un donateur peut demander à rester anonyme.",
      link: "Voir la page transparence",
    },
  },
};
