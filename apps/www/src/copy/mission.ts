import type { Localized } from "../i18n/locales.ts";

export interface Principle {
  kicker?: string;
  heading: string;
  paragraphs: string[];
}

export const mission: Localized<{ title: string; description: string; lead: string; principles: Principle[] }> = {
  en: {
    title: "Mission",
    description:
      "Why Workers' Intelligence Commons exists: artificial intelligence as a means of production that belongs to everyone, kept open by copyleft and built on sources with clear licenses.",
    lead: "The association exists so that artificial intelligence belongs to everyone. The principles below come from its draft constitution, which explains its reasons rather than only stating rules.",
    principles: [
      {
        heading: "Intelligence is a means of production",
        paragraphs: [
          "Artificial intelligence is a tool, like a machine in a workshop. It can help people understand and learn, create, lighten their work, protect themselves and organise. A tool that matters this much should not belong to a handful of companies.",
          "By workers, the project means every human being, whatever their job, status or ability.",
        ],
      },
      {
        heading: "Copyleft keeps the commons open",
        paragraphs: [
          "Everything the association publishes is under a strong copyleft: today <code>AGPL-3.0-or-later</code>. Anyone who improves a model and serves it to the public has to publish their changes, so every improvement falls back into the common pot.",
          "Open means, at least, the weights of the model, all the training code, and every source with its license, the date it was collected and checksums that let anyone verify it.",
        ],
      },
      {
        kicker: "when in doubt, it is refused",
        heading: "Principle before performance",
        paragraphs: [
          "A text enters the training corpus only when its license is clear. When a license is doubtful, the text stays out. A clean corpus is worth more than a stronger model built on doubtful ground, because trust is lost faster than it is won.",
          "No distillation: models are trained from scratch, with no output of another company's model in the data.",
        ],
      },
      {
        heading: "The service is sold, never the intelligence",
        paragraphs: [
          "Hosting a model costs money, and a paid service may one day cover that cost. What it sells is reliability, limits, support and infrastructure. The model itself stays free, self-hosting stays possible, and anyone may serve it too, for money if they like. That keeps prices honest.",
          "Nobody gets rich from it: no profit goes to investors or to the people who run the association, and any surplus goes back to the mission.",
        ],
      },
      {
        heading: "The gains of automation belong to workers",
        paragraphs: [
          "Automation of work will happen. The association does not try to stop it. It argues that what automation gains should go to the people who work rather than to those who own the capital.",
        ],
      },
    ],
  },
  fr: {
    title: "Mission",
    description:
      "Pourquoi Workers' Intelligence Commons existe : une intelligence artificielle qui appartient à tout le monde, gardée ouverte par le copyleft et construite sur des sources aux licences claires.",
    lead: "L'association existe pour que l'intelligence artificielle appartienne à tout le monde. Les principes ci-dessous viennent du brouillon de sa constitution, qui donne ses raisons au lieu de seulement poser des règles.",
    principles: [
      {
        heading: "L'intelligence est un moyen de production",
        paragraphs: [
          "L'intelligence artificielle est un outil, comme une machine dans un atelier. Elle peut aider à comprendre et apprendre, à créer, à alléger le travail, à se protéger et à s'organiser. Un outil aussi important ne devrait pas appartenir à une poignée d'entreprises.",
          "Par travailleurs, le projet entend tout être humain, quels que soient son emploi, son statut ou ses capacités.",
        ],
      },
      {
        heading: "Le copyleft garde le commun ouvert",
        paragraphs: [
          "Tout ce que l'association publie est sous copyleft fort, aujourd'hui <code>AGPL-3.0-or-later</code>. Quiconque améliore un modèle et le sert au public doit publier ses modifications, si bien que chaque amélioration retombe dans le pot commun.",
          "Sont ouverts au minimum les poids du modèle, tout le code d'entraînement, et chaque source avec sa licence, sa date de récupération et des empreintes qui permettent à n'importe qui de vérifier.",
        ],
      },
      {
        kicker: "dans le doute, on refuse",
        heading: "Le principe avant la performance",
        paragraphs: [
          "Un texte n'entre dans le corpus d'entraînement que si sa licence est claire. Quand elle est douteuse, il reste dehors. Un corpus propre vaut mieux qu'un modèle plus fort bâti sur un terrain douteux, parce que la confiance se perd plus vite qu'elle ne se gagne.",
          "Pas de distillation : les modèles sont entraînés de zéro, sans aucune sortie du modèle d'une autre entreprise dans les données.",
        ],
      },
      {
        heading: "On vend le service, jamais l'intelligence",
        paragraphs: [
          "Héberger un modèle coûte de l'argent, et un service payant pourra un jour couvrir ce coût. Ce qu'il vend, c'est la fiabilité, des limites d'usage, du support et de l'infrastructure. Le modèle reste libre, l'auto-hébergement reste possible, et n'importe qui peut le servir aussi, y compris contre paiement. C'est ce qui garde les prix honnêtes.",
          "Personne ne s'enrichit : aucun bénéfice ne va à des investisseurs ni aux personnes qui dirigent l'association, et tout excédent retourne à la mission.",
        ],
      },
      {
        heading: "Les gains de l'automatisation reviennent aux travailleurs",
        paragraphs: [
          "L'automatisation du travail aura lieu. L'association ne cherche pas à l'empêcher. Elle défend que ce qu'elle rapporte aille à celles et ceux qui travaillent plutôt qu'à ceux qui possèdent le capital.",
        ],
      },
    ],
  },
};
