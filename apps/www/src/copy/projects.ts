import type { Localized } from "../i18n/locales.ts";
import { site } from "../data/site.ts";

export interface Project {
  id: string;
  mark?: "wpt" | "hub";
  name: string;
  kicker: string;
  paragraphs: string[];
  facts: { label: string; value: string }[];
  repository: string;
  link: string;
}

export const projects: Localized<{ title: string; description: string; kicker: string; lead: string; items: Project[] }> = {
  en: {
    title: "Projects",
    description:
      "The projects of Workers' Intelligence Commons: WPT, an open language model trained only on clearly licensed text; Wica, its applications; and the WIC design system.",
    kicker: "what is being built",
    lead: "Three repositories, all public, all under the same copyleft. Each one says plainly what works and what does not yet.",
    items: [
      {
        id: "wpt",
        mark: "wpt",
        name: "WPT: Workers' Pre-trained Transformer",
        kicker: "the first model",
        paragraphs: [
          "WPT is an open language model, trained from scratch only on content whose license is clear. Its repository holds everything needed to build a WPT model from nothing: the depot that keeps the texts and the human decisions on them, the code that builds a corpus, trains, evaluates and runs the model, and the recipes of the models.",
          "Every decision to admit or refuse a text carries the name of the person who made it. Every model folder carries a notice and the credits of every text it learned from. An owner's wish that their work not be used for training is honoured, and an admitted erasure request removes a passage from every later corpus.",
        ],
        facts: [
          { label: "license", value: site.codeLicense },
          { label: "status", value: "no checkpoint published yet" },
        ],
        repository: site.repositories.wpt,
        link: "Open the WPT repository",
      },
      {
        id: "wica",
        mark: "hub",
        name: "Wica: the applications",
        kicker: "built on the model",
        paragraphs: [
          "Wica is the monorepo of the association's applications. Small packages hold the shared logic, including the harness that runs a model with its tools, and the applications sit on top. The first one is the hub, a chat built on that harness.",
          "No application depends on a mandatory outside service, so every one of them can be hosted by anyone.",
        ],
        facts: [
          { label: "license", value: site.codeLicense },
          { label: "status", value: "in development" },
        ],
        repository: site.repositories.wica,
        link: "Open the Wica repository",
      },
      {
        id: "design-system",
        name: "The design system",
        kicker: "the look",
        paragraphs: [
          "Cut paper from the years of jazz and of May 1968: three inks on poster paper, letters cut with scissors, liner notes in a book face. The design system holds the colours, the type, the logos and the React components that every site and application of the association uses, this one included.",
        ],
        facts: [
          { label: "license", value: `${site.codeLicense}, fonts under OFL-1.1` },
          { label: "status", value: "used by this site and the hub" },
        ],
        repository: site.repositories.designSystem,
        link: "Open the design system",
      },
    ],
  },
  fr: {
    title: "Projets",
    description:
      "Les projets de Workers' Intelligence Commons : WPT, un modèle de langage ouvert entraîné seulement sur des textes aux licences claires ; Wica, ses applications ; et le design system de WIC.",
    kicker: "ce qui se construit",
    lead: "Trois dépôts, tous publics, tous sous le même copyleft. Chacun dit franchement ce qui marche et ce qui ne marche pas encore.",
    items: [
      {
        id: "wpt",
        mark: "wpt",
        name: "WPT : Workers' Pre-trained Transformer",
        kicker: "le premier modèle",
        paragraphs: [
          "WPT est un modèle de langage ouvert, entraîné de zéro uniquement sur des contenus dont la licence est claire. Son dépôt contient tout ce qu'il faut pour construire un modèle WPT à partir de rien : le dépôt de textes qui garde les textes et les décisions humaines prises sur eux, le code qui construit un corpus, entraîne, évalue et fait tourner le modèle, et les recettes des modèles.",
          "Chaque décision d'admettre ou de refuser un texte porte le nom de la personne qui l'a prise. Chaque dossier de modèle contient une notice et les crédits de tous les textes dont il a appris. Le souhait d'un auteur que son œuvre ne serve pas à l'entraînement est respecté, et une demande d'effacement admise retire le passage de tous les corpus suivants.",
        ],
        facts: [
          { label: "licence", value: site.codeLicense },
          { label: "état", value: "aucun checkpoint publié pour l'instant" },
        ],
        repository: site.repositories.wpt,
        link: "Ouvrir le dépôt de WPT",
      },
      {
        id: "wica",
        mark: "hub",
        name: "Wica : les applications",
        kicker: "construites sur le modèle",
        paragraphs: [
          "Wica est le monorepo des applications de l'association. De petits paquets portent la logique partagée, dont le harness qui fait tourner un modèle avec ses outils, et les applications se posent par-dessus. La première est le hub, un chat construit sur ce harness.",
          "Aucune application ne dépend d'un service extérieur obligatoire : n'importe qui peut toutes les héberger.",
        ],
        facts: [
          { label: "licence", value: site.codeLicense },
          { label: "état", value: "en développement" },
        ],
        repository: site.repositories.wica,
        link: "Ouvrir le dépôt de Wica",
      },
      {
        id: "design-system",
        name: "Le design system",
        kicker: "l'identité",
        paragraphs: [
          "Du papier découpé des années jazz et de Mai 68 : trois encres sur papier d'affiche, des lettres coupées aux ciseaux, des notes de pochette dans une police de livre. Le design system rassemble les couleurs, la typographie, les logos et les composants React qu'utilisent tous les sites et toutes les applications de l'association, celui-ci compris.",
        ],
        facts: [
          { label: "licence", value: `${site.codeLicense}, polices sous OFL-1.1` },
          { label: "état", value: "utilisé par ce site et par le hub" },
        ],
        repository: site.repositories.designSystem,
        link: "Ouvrir le design system",
      },
    ],
  },
};
