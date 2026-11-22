import type { Localized } from "../i18n/locales.ts";

export interface Block {
  heading: string;
  paragraphs: string[];
}

export const governance: Localized<{ title: string; description: string; lead: string; constitutionLink: string; statusTitle: string; status: string; blocks: Block[] }> = {
  en: {
    title: "Governance",
    description:
      "How Workers' Intelligence Commons will be governed: a French non-profit association under a constitution, with supporters, electors and representatives, a monthly public plan and no profit for anyone.",
    lead: "Workers' Intelligence Commons will be a non-profit association under French law (loi 1901). Its statutes and its constitution are written as drafts. This page sums them up, and the constitution can be read in full.",
    constitutionLink: "Read the full constitution",
    statusTitle: "draft",
    status:
      "Drafts. The association is not founded yet, and nothing here has been reviewed by a lawyer. The texts may change before they are signed.",
    blocks: [
      {
        heading: "A constitution",
        paragraphs: [
          "The association is governed by a constitution that sets the principles it acts within. A decision, by the president or by the representatives, is valid only if it respects it. The constitution explains its reasons, so that whoever interprets it can judge cases nobody foresaw.",
          "It starts from equality: all human beings are free and equal in dignity and in rights. Its mission is that artificial intelligence belongs to everyone and serves to abolish exploitation, domination and oppression. It also holds that what the association publishes is open under a strong copyleft, that no profit goes to investors or to the people who run it, that the budget, the donations and the support in kind are public, and that whatever its intelligences learn from is traced, a doubtful source being refused.",
        ],
      },
      {
        heading: "Supporters, electors, representatives",
        paragraphs: [
          "Supporters back the association, with a donation or with their help, without a vote. Electors are supporters who want to be represented: they elect the representatives. Representatives carry that voice and decide on the constitution, on removing the president, and on salaries.",
          "Anyone can become an elector: after three months as a supporter, they only have to ask. The request is accepted as a matter of course, and the representatives can refuse it only for fraud, such as a fake or duplicate account, with a published reason.",
          "After three months, any supporter can also stand to become a representative. Representatives are elected by the electors for one year, founders included, and their number has no ceiling.",
        ],
      },
      {
        heading: "A monthly plan",
        paragraphs: [
          "Each month the president publishes what they intend to do and the budget for it. The representatives then vote on a single question: does this respect the constitution? If a third say no, the plan is suspended and discussed. If two thirds say no, it is cancelled.",
          "If a third of the electors ask for a topic, it goes to the representatives' vote at the next monthly plan.",
        ],
      },
      {
        heading: "Money and salaries",
        paragraphs: [
          "No member and no officer receives a share of the profits or a claim on the assets. Surpluses go to the mission. Salaries are possible for real work, within the limits French law sets for non-profit management. Each one is voted by two thirds of the representatives, without the person concerned voting, and its amount is published. The highest pay in the association is never more than three times the lowest.",
          "If the association is dissolved, its assets go to another non-profit with a close purpose, never to a member.",
        ],
      },
      {
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
      "Comment Workers' Intelligence Commons sera gouvernée : une association loi 1901 sous une constitution, avec adhérent·es, électeur·ices et représentant·es, un plan mensuel public et aucun bénéfice pour personne.",
    lead: "Workers' Intelligence Commons sera une association à but non lucratif de loi 1901. Ses statuts et sa constitution existent à l'état de brouillon. Cette page les résume, et la constitution se lit en entier.",
    constitutionLink: "Lire la constitution complète",
    statusTitle: "brouillon",
    status:
      "Brouillons. L'association n'est pas encore fondée, et rien ici n'a été relu par un·e juriste. Les textes peuvent changer avant d'être signés.",
    blocks: [
      {
        heading: "Une constitution",
        paragraphs: [
          "L'association est régie par une constitution qui fixe les principes dans lesquels elle agit. Une décision, de la présidence comme des représentant·es, n'est valable que si elle la respecte. La constitution donne ses raisons, pour que celles et ceux qui l'interprètent puissent juger les cas que personne n'avait prévus.",
          "Elle part de l'égalité : tous les êtres humains sont libres et égaux en dignité et en droits. Sa mission est que l'intelligence artificielle appartienne à tout le monde et serve à abolir l'exploitation, la domination et l'oppression. Elle pose aussi que ce que l'association publie est ouvert sous un copyleft fort, qu'aucun bénéfice ne va à des investisseur·euses ni aux personnes qui la dirigent, que le budget, les dons et les soutiens en nature sont publics, et que ce dont ses intelligences apprennent est tracé, une source douteuse étant refusée.",
        ],
      },
      {
        heading: "Adhérent·es, électeur·ices, représentant·es",
        paragraphs: [
          "Les adhérent·es soutiennent l'association, par un don ou par leur aide, sans droit de vote. Les électeur·ices sont des adhérent·es qui veulent être représenté·es : elles et ils élisent les représentant·es. Les représentant·es portent cette voix et décident de la constitution, de la révocation de la présidence et des rémunérations.",
          "Tout le monde peut devenir électeur·ice : après trois mois d'adhésion, il suffit de le demander. La demande est acceptée d'office, et les représentant·es ne peuvent la refuser que pour fraude, comme un faux compte ou un doublon, avec une raison publiée.",
          "Après trois mois, tout·e adhérent·e peut aussi se présenter pour devenir représentant·e. Les représentant·es sont élu·es par les électeur·ices pour un an, fondateur·ices compris·es, et leur nombre n'est pas plafonné.",
        ],
      },
      {
        heading: "Un plan mensuel",
        paragraphs: [
          "Chaque mois, la présidence publie ce qu'elle compte faire et le budget correspondant. Les représentant·es votent alors sur une seule question : est-ce que cela respecte la constitution ? Si un tiers dit non, le plan est suspendu et discuté. Si deux tiers disent non, il est annulé.",
          "Si un tiers des électeur·ices demande un sujet, il passe au vote des représentant·es au plan mensuel suivant.",
        ],
      },
      {
        heading: "Argent et rémunérations",
        paragraphs: [
          "Aucun membre ni dirigeant·e ne reçoit une part des bénéfices ni un droit sur l'actif. Les excédents vont à la mission. Une rémunération est possible pour un travail réel, dans les limites que la loi fixe à une gestion désintéressée. Chacune est votée aux deux tiers des représentant·es, sans que la personne concernée vote, et son montant est publié. La rémunération la plus haute de l'association ne dépasse jamais trois fois la plus basse.",
          "Si l'association est dissoute, son actif va à une autre structure non lucrative à l'objet proche, jamais à un membre.",
        ],
      },
      {
        heading: "Changer les règles",
        paragraphs: [
          "La constitution et les statuts ne changent que par un vote des trois quarts des représentant·es. Aucune modification ne peut jamais permettre de distribuer des bénéfices.",
        ],
      },
    ],
  },
};
