import type { Localized } from "../i18n/locales.ts";

export interface Block {
  kicker: string;
  heading: string;
  paragraphs: string[];
}

export const governance: Localized<{ title: string; description: string; kicker: string; lead: string; statusTitle: string; status: string; blocks: Block[] }> = {
  en: {
    title: "Governance",
    description:
      "How Workers' Intelligence Commons will be governed: a French non-profit association under a constitution, with supporters, electors and representatives, a monthly public plan and no profit for anyone.",
    kicker: "who decides, and how",
    lead: "Workers' Intelligence Commons will be a non-profit association under French law (loi 1901). Its statutes and its constitution are written as drafts. This page sums them up; the full texts will be published once a lawyer has reviewed them.",
    statusTitle: "draft",
    status:
      "Drafts. The association is not founded yet, and nothing here has been reviewed by a lawyer. The texts may change before they are signed.",
    blocks: [
      {
        kicker: "above every decision",
        heading: "A constitution",
        paragraphs: [
          "The association is governed by a constitution that sets the principles it acts within. A decision, by the president or by the representatives, is valid only if it respects it. The constitution explains its reasons, so that whoever interprets it can judge cases nobody foresaw.",
          "At the very least it holds that published models are public under a strong copyleft, that no profit is distributed to investors or to the people who run the association, that the budget, the donations and the support in kind are public, and that training sources are traced with their license and credit, a doubtful source being refused.",
        ],
      },
      {
        kicker: "three kinds of members",
        heading: "Supporters, electors, representatives",
        paragraphs: [
          "Supporters back the association without a vote. Electors are supporters who vote to elect the representatives. Representatives decide on the constitution, on removing the president, and on salaries.",
          "Anyone can become an elector. A supporter applies after three months, through a lasting contribution, a recurring donation of any amount, even one euro, or a direct invitation. A donation alone never gives a vote: it only gives the right to ask.",
          "Representatives are elected by the electors for one year, founders included, and their number has no ceiling.",
        ],
      },
      {
        kicker: "in the open, every month",
        heading: "A monthly plan",
        paragraphs: [
          "Each month the president publishes what they intend to do and the budget for it. The representatives then vote on a single question: does this respect the constitution? If a third say no, the plan is suspended and discussed. If two thirds say no, it is cancelled.",
          "If a third of the electors ask for a topic, it goes to the representatives' vote at the next monthly plan.",
        ],
      },
      {
        kicker: "nobody gets rich",
        heading: "Money and salaries",
        paragraphs: [
          "No member and no officer receives a share of the profits or a claim on the assets. Surpluses go to the mission. Salaries are possible for real work, within the limits French law sets for non-profit management. Each one is voted by two thirds of the representatives, without the person concerned voting, and its amount is published.",
          "If the association is dissolved, its assets go to another non-profit with a close purpose, never to a member.",
        ],
      },
      {
        kicker: "harder to change than the rest",
        heading: "Changing the rules",
        paragraphs: [
          "The constitution and the statutes change only by a vote of three quarters of the representatives. No change can ever allow profits to be distributed.",
        ],
      },
    ],
  },
  fr: {
    title: "Gouvernance",
    description:
      "Comment Workers' Intelligence Commons sera gouvernée : une association loi 1901 sous une constitution, avec adhérents, électeurs et représentants, un plan mensuel public et aucun bénéfice pour personne.",
    kicker: "qui décide, et comment",
    lead: "Workers' Intelligence Commons sera une association à but non lucratif de loi 1901. Ses statuts et sa constitution existent à l'état de brouillon. Cette page les résume ; les textes complets seront publiés après relecture par un juriste.",
    statusTitle: "brouillon",
    status:
      "Brouillons. L'association n'est pas encore fondée, et rien ici n'a été relu par un juriste. Les textes peuvent changer avant d'être signés.",
    blocks: [
      {
        kicker: "au-dessus de chaque décision",
        heading: "Une constitution",
        paragraphs: [
          "L'association est régie par une constitution qui fixe les principes dans lesquels elle agit. Une décision, du président comme des représentants, n'est valable que si elle la respecte. La constitution donne ses raisons, pour que celles et ceux qui l'interprètent puissent juger les cas que personne n'avait prévus.",
          "Elle pose au minimum que les modèles publiés sont publics sous un copyleft fort, qu'aucun bénéfice n'est distribué ni à des investisseurs ni aux personnes qui dirigent l'association, que le budget, les dons et les soutiens en nature sont publics, et que les sources d'entraînement sont tracées avec leur licence et leur attribution, une source douteuse étant refusée.",
        ],
      },
      {
        kicker: "trois sortes de membres",
        heading: "Adhérents, électeurs, représentants",
        paragraphs: [
          "Les adhérents soutiennent l'association sans droit de vote. Les électeurs sont des adhérents qui votent pour élire les représentants. Les représentants décident de la constitution, de la révocation du président et des rémunérations.",
          "Tout le monde peut devenir électeur. Un adhérent se porte candidat après trois mois, par une contribution durable, un don récurrent de n'importe quel montant, même un euro, ou sur invitation directe. Un don seul ne donne jamais le droit de vote : il donne seulement le droit de demander.",
          "Les représentants sont élus par les électeurs pour un an, fondateurs compris, et leur nombre n'est pas plafonné.",
        ],
      },
      {
        kicker: "en public, chaque mois",
        heading: "Un plan mensuel",
        paragraphs: [
          "Chaque mois, le président publie ce qu'il compte faire et le budget correspondant. Les représentants votent alors sur une seule question : est-ce que cela respecte la constitution ? Si un tiers dit non, le plan est suspendu et discuté. Si deux tiers disent non, il est annulé.",
          "Si un tiers des électeurs demande un sujet, il passe au vote des représentants au plan mensuel suivant.",
        ],
      },
      {
        kicker: "personne ne s'enrichit",
        heading: "Argent et rémunérations",
        paragraphs: [
          "Aucun membre ni dirigeant ne reçoit une part des bénéfices ni un droit sur l'actif. Les excédents vont à la mission. Une rémunération est possible pour un travail réel, dans les limites que la loi fixe à une gestion désintéressée. Chacune est votée aux deux tiers des représentants, sans que la personne concernée vote, et son montant est publié.",
          "Si l'association est dissoute, son actif va à une autre structure non lucrative à l'objet proche, jamais à un membre.",
        ],
      },
      {
        kicker: "plus dur à changer que le reste",
        heading: "Changer les règles",
        paragraphs: [
          "La constitution et les statuts ne changent que par un vote des trois quarts des représentants. Aucune modification ne peut jamais permettre de distribuer des bénéfices.",
        ],
      },
    ],
  },
};
