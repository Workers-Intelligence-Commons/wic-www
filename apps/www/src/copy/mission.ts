import type { Localized } from "../i18n/locales.ts";

export interface Principle {
  kicker?: string;
  heading: string;
  paragraphs: string[];
}

export const mission: Localized<{ title: string; description: string; lead: string; principles: Principle[]; critiques: { body: string; link: string } }> = {
  en: {
    title: "Mission",
    description:
      "Why Workers' Intelligence Commons exists: artificial intelligence as a common means of production, kept open by copyleft, that serves to abolish exploitation, domination and oppression.",
    lead: "The association exists so that artificial intelligence belongs to everyone, and so that it serves to abolish exploitation, domination and oppression rather than reinforce them. The principles below come from its draft constitution, which explains its reasons rather than only stating rules.",
    principles: [
      {
        heading: "Equal in dignity and in rights",
        paragraphs: [
          "Everything starts from one sentence: all human beings are free and equal in dignity and in rights. A difference of place or of power is legitimate only if it serves the common good and stays under the control of the people it concerns.",
        ],
      },
      {
        heading: "Intelligence is a means of production",
        paragraphs: [
          "Artificial intelligence is a tool, like a machine in a workshop. It can help people understand and learn, create, lighten their work, protect themselves and organise. A tool that matters this much should not belong to a handful of companies.",
          "By workers, the project means every human being, whatever their job, status or ability. And by artificial intelligence it means every form it may take, not only the language model it is building first.",
        ],
      },
      {
        heading: "Against exploitation, domination and oppression",
        paragraphs: [
          "Exploitation is taking the work or the value that others produce. Domination is keeping people in an inferior position, without real power to refuse or undo what concerns them. Oppression is constraining bodies and lives by violence or threat. The three are bound up together, and the association's intelligences never help to exercise them.",
          "They do help people defend themselves against them, and prepare for it. An aggressor does not limit their means, and a tool that refuses defence serves the one who attacks.",
        ],
      },
      {
        heading: "Copyleft keeps the commons open",
        paragraphs: [
          "Everything the association publishes is under a strong copyleft: today <code>AGPL-3.0-or-later</code>. Anyone who improves an intelligence and serves it to the public has to publish their changes, so every improvement falls back into the common pot.",
          "Open means everything needed to understand, verify, reproduce and modify it: the weights, the code, and every source it learned from, with its origin and its right of use.",
        ],
      },
      {
        kicker: "when in doubt, it is refused",
        heading: "Principle before performance",
        paragraphs: [
          "Whatever an intelligence learns from, text, images, sound or anything else, enters only when the right to use it is clear. When it is doubtful, it stays out. A clean source is worth more than a stronger model built on doubtful ground, because trust is lost faster than it is won.",
        ],
      },
      {
        heading: "The service is sold, never the intelligence",
        paragraphs: [
          "Hosting an intelligence costs money, and a paid service may one day cover that cost. What it sells is reliability, limits, support and infrastructure. The intelligence itself stays free, self-hosting stays possible, and anyone may serve it too, for money if they like. That keeps prices honest.",
          "Nobody gets rich from it: no profit goes to investors or to the people who run the association, and the highest pay inside it is never more than three times the lowest.",
        ],
      },
      {
        heading: "Automation in the hands of the people who work",
        paragraphs: [
          "Automation of work will happen. The association does not try to stop it, but to keep it from serving exploitation: it puts the tool in the hands of the people who work, so that they own what automates their work instead of suffering it. An open tool does not share out the gains by itself, and the association does not pretend otherwise.",
        ],
      },
    ],
    critiques: {
      body: "Most criticism of artificial intelligence is right, and the association takes it seriously.",
      link: "The criticism, one point at a time",
    },
  },
  fr: {
    title: "Mission",
    description:
      "Pourquoi Workers' Intelligence Commons existe : une intelligence artificielle qui est un moyen de production commun, gardée ouverte par le copyleft, et qui sert à abolir l'exploitation, la domination et l'oppression.",
    lead: "L'association existe pour que l'intelligence artificielle appartienne à tout le monde, et pour qu'elle serve à abolir l'exploitation, la domination et l'oppression plutôt qu'à les renforcer. Les principes ci-dessous viennent du brouillon de sa constitution, qui donne ses raisons au lieu de seulement poser des règles.",
    principles: [
      {
        heading: "Égaux en dignité et en droits",
        paragraphs: [
          "Tout part d'une phrase : tous les êtres humains sont libres et égaux en dignité et en droits. Une différence de place ou de pouvoir n'est légitime que si elle sert l'utilité commune et reste sous le contrôle de celles et ceux qu'elle concerne.",
        ],
      },
      {
        heading: "L'intelligence est un moyen de production",
        paragraphs: [
          "L'intelligence artificielle est un outil, comme une machine dans un atelier. Elle peut aider à comprendre et apprendre, à créer, à alléger le travail, à se protéger et à s'organiser. Un outil aussi important ne devrait pas appartenir à une poignée d'entreprises.",
          "Par travailleurs, le projet entend tout être humain, quels que soient son emploi, son statut ou ses capacités. Et par intelligence artificielle, il entend toutes les formes qu'elle peut prendre, pas seulement le modèle de langage qu'il construit en premier.",
        ],
      },
      {
        heading: "Contre l'exploitation, la domination et l'oppression",
        paragraphs: [
          "L'exploitation, c'est s'approprier le travail ou la valeur que d'autres produisent. La domination, c'est maintenir des personnes dans une position inférieure, sans pouvoir réel de refuser ni de défaire ce qui les concerne. L'oppression, c'est contraindre des corps et des vies par la violence ou la menace. Les trois se mêlent, et les intelligences de l'association n'aident jamais à les exercer.",
          "Elles aident en revanche à s'en défendre, et à s'y préparer. Un agresseur ne limite pas ses moyens, et un outil qui refuse la défense sert celui qui attaque.",
        ],
      },
      {
        heading: "Le copyleft garde le commun ouvert",
        paragraphs: [
          "Tout ce que l'association publie est sous copyleft fort, aujourd'hui <code>AGPL-3.0-or-later</code>. Quiconque améliore une intelligence et la sert au public doit publier ses modifications, si bien que chaque amélioration retombe dans le pot commun.",
          "Ouvert veut dire tout ce qu'il faut pour la comprendre, la vérifier, la reproduire et la modifier : les poids, le code, et chaque source dont elle a appris, avec son origine et son droit d'usage.",
        ],
      },
      {
        kicker: "dans le doute, on refuse",
        heading: "Le principe avant la performance",
        paragraphs: [
          "Ce dont une intelligence apprend, textes, images, sons ou autre chose, n'entre que si le droit de l'utiliser est clair. Quand il est douteux, la source reste dehors. Une source propre vaut mieux qu'un modèle plus fort bâti sur un terrain douteux, parce que la confiance se perd plus vite qu'elle ne se gagne.",
        ],
      },
      {
        heading: "On vend le service, jamais l'intelligence",
        paragraphs: [
          "Héberger une intelligence coûte de l'argent, et un service payant pourra un jour couvrir ce coût. Ce qu'il vend, c'est la fiabilité, des limites d'usage, du support et de l'infrastructure. L'intelligence reste libre, l'auto-hébergement reste possible, et n'importe qui peut la servir aussi, y compris contre paiement. C'est ce qui garde les prix honnêtes.",
          "Personne ne s'enrichit : aucun bénéfice ne va à des investisseurs ni aux personnes qui dirigent l'association, et la rémunération la plus haute ne dépasse jamais trois fois la plus basse.",
        ],
      },
      {
        heading: "L'automatisation entre les mains de celles et ceux qui travaillent",
        paragraphs: [
          "L'automatisation du travail aura lieu. L'association ne cherche pas à l'empêcher, mais à ce qu'elle ne serve pas l'exploitation : elle met l'outil entre les mains de celles et ceux qui travaillent, pour qu'ils possèdent ce qui automatise leur travail au lieu de le subir. Un outil ouvert ne redistribue pas les gains à lui seul, et l'association ne prétend pas le contraire.",
        ],
      },
    ],
    critiques: {
      body: "La plupart des critiques adressées à l'intelligence artificielle sont justes, et l'association les prend au sérieux.",
      link: "Les critiques, une par une",
    },
  },
};
