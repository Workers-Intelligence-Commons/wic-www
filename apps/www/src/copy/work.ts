import type { Localized } from "../i18n/locales.ts";

export interface WorkSection {
  id: string;
  heading: string;
  intro: string;
  points: string[];
}

export const work: Localized<{
  title: string;
  description: string;
  lead: string;
  summary: { title: string; body: string; href: string }[];
  sections: WorkSection[];
}> = {
  en: {
    title: "How we work",
    description:
      "How Workers' Intelligence Commons builds its AI: sources with clear licenses and named decisions, training kept to what is needed, fair work for the people who build it, and its own tools.",
    lead: "A tool that claims to serve workers has to be made in a way workers could accept. These are the rules the project holds itself to, from what its intelligences learn from to the people who do the work.",
    summary: [
      { title: "Sources", body: "Every source traced, with a clear right of use, admitted by a named person.", href: "#sources" },
      { title: "Training", body: "Small first, measured, and never more than needed.", href: "#training" },
      { title: "People", body: "No hidden unpaid work, no underpaid labelling, credit for all.", href: "#people" },
    ],
    sections: [
      {
        id: "sources",
        heading: "Every source is traced",
        intro: "What an intelligence learns from decides what it is. Whatever its form, text, images, sound or anything else, every source is documented, and the record is public.",
        points: [
          "A source enters only when its right of use clearly allows what is trained on it to be published under the copyleft. When in doubt, it stays out.",
          "Every decision to admit or refuse a source carries the declared name of the person who made it. A source trains only when someone admitted it and nobody refused it.",
          "When an author says their work should not be used for training, that wish is honoured.",
          "Erasure on request: an admitted request removes the passage, and every later training is done without it.",
          "No distillation. Models are trained from scratch, with no output of another company's model in the data and no existing base model.",
          "Provenance travels with every model: it names each source it learned from, with its credit and license.",
        ],
      },
      {
        id: "training",
        heading: "Training takes only what it needs",
        intro: "Compute and energy are shared resources. A common model is not worth wasting them.",
        points: [
          "Every intelligence starts small. Larger ones come only when the smaller ones have shown what works.",
          "No run trains beyond what is necessary. What each training costs the planet is measured and published, starting with energy.",
          "Recipes and checkpoints are published, so others can continue from them at their own scale instead of training the same thing again.",
        ],
      },
      {
        id: "people",
        heading: "The people who build it are treated as workers",
        intro: "An AI built on exploited labour would contradict everything the project stands for.",
        points: [
          "No disguised unpaid work: volunteering is always free and explicit.",
          "Labelling, moderation and similar tasks are never handed to badly paid people.",
          "Every contributor is credited, with their agreement, or stays anonymous if they ask.",
          "Employees have a say: they are electors from their first day, and after a month or two they stand by default for election as representatives.",
          "Every salary is voted by the representatives, without the person concerned voting, and its amount is published. The highest pay is never more than three times the lowest.",
        ],
      },
      {
        id: "data",
        heading: "What people write stays theirs",
        intro: "Using a tool should not mean feeding it.",
        points: [
          "What people write to the association's services is not used to train its intelligences.",
          "The only exception is a separate contributor mode: a document the person signs, and a distinct access point that is known to carry that consent. That consent can be withdrawn.",
        ],
      },
      {
        id: "tools",
        heading: "We use what we build",
        intro: "The association works with its own tools wherever they exist, and fixes them when they fall short.",
        points: [
          "This site is built with the association's design system, like its applications.",
          "The hub, its chat, runs on the harness published in Wica.",
          "The corpus lives in WPT's depot and is reviewed through its own web application.",
          "No application depends on a mandatory outside service, so anyone can host the whole thing.",
          "The work happens in public repositories, and anything useful learned along the way is published.",
        ],
      },
    ],
  },
  fr: {
    title: "Comment on travaille",
    description:
      "Comment Workers' Intelligence Commons construit son IA : des sources aux licences claires et aux décisions signées, un entraînement limité au nécessaire, un travail juste pour celles et ceux qui la construisent, et ses propres outils.",
    lead: "Un outil qui prétend servir les travailleur·euses doit être fabriqué d'une façon que les travailleur·euses pourraient accepter. Voici les règles que le projet s'impose, de ce dont ses intelligences apprennent jusqu'aux personnes qui font le travail.",
    summary: [
      { title: "Sources", body: "Chaque source tracée, avec un droit d'usage clair, admise par une personne nommée.", href: "#sources" },
      { title: "Entraînement", body: "Petit d'abord, mesuré, et jamais plus que nécessaire.", href: "#training" },
      { title: "Personnes", body: "Pas de travail gratuit caché, pas d'annotation sous-payée, du crédit pour toutes et tous.", href: "#people" },
    ],
    sections: [
      {
        id: "sources",
        heading: "Chaque source est tracée",
        intro: "Ce dont une intelligence apprend décide de ce qu'elle est. Quelle que soit sa forme, textes, images, sons ou autre chose, chaque source est donc documentée, et le registre est public.",
        points: [
          "Une source n'entre que si son droit d'usage permet clairement de publier sous copyleft ce qui en est appris. Dans le doute, elle reste dehors.",
          "Chaque décision d'admettre ou de refuser une source porte le nom déclaré de la personne qui l'a prise. Une source ne sert à l'entraînement que si quelqu'un l'a admise et que personne ne l'a refusée.",
          "Quand un·e auteur·ice dit que son œuvre ne doit pas servir à l'entraînement, ce souhait est respecté.",
          "Effacement sur demande : une demande admise retire le passage, et tous les entraînements suivants se font sans lui.",
          "Pas de distillation. Les modèles sont entraînés de zéro, sans aucune sortie du modèle d'une autre entreprise dans les données et sans modèle de base existant.",
          "La provenance voyage avec chaque modèle : il nomme chaque source dont il a appris, avec son crédit et sa licence.",
        ],
      },
      {
        id: "training",
        heading: "L'entraînement ne prend que ce qu'il faut",
        intro: "Le calcul et l'énergie sont des ressources partagées. Un modèle commun ne vaut pas qu'on les gaspille.",
        points: [
          "Chaque intelligence commence petite. Les plus grandes ne viennent que quand les petites ont montré ce qui marche.",
          "Aucun entraînement ne va au-delà du nécessaire. Ce que chacun coûte à la planète est mesuré et publié, à commencer par l'énergie.",
          "Les recettes et les checkpoints sont publiés, pour que d'autres puissent repartir de là à leur échelle au lieu d'entraîner la même chose une seconde fois.",
        ],
      },
      {
        id: "people",
        heading: "Celles et ceux qui le construisent sont traité·es en travailleur·euses",
        intro: "Une IA bâtie sur du travail exploité contredirait tout ce que défend le projet.",
        points: [
          "Pas de travail gratuit déguisé : le bénévolat est toujours libre et explicite.",
          "L'annotation, la modération et les tâches semblables ne sont jamais confiées à des personnes mal payées.",
          "Chaque contributeur·ice est crédité·e, avec son accord, ou reste anonyme sur demande.",
          "Les salarié·es ont voix au chapitre : électeur·ices dès leur premier jour, elles et ils sont, après un ou deux mois, candidat·es par défaut pour devenir représentant·es.",
          "Chaque rémunération est votée par les représentant·es, sans que la personne concernée vote, et son montant est publié. La plus haute ne dépasse jamais trois fois la plus basse.",
        ],
      },
      {
        id: "data",
        heading: "Ce que les gens écrivent leur appartient",
        intro: "Utiliser un outil ne devrait pas vouloir dire le nourrir.",
        points: [
          "Ce que les gens écrivent aux services de l'association ne sert pas à entraîner ses intelligences.",
          "Seule exception, un mode contribution séparé : un document que la personne signe, et un point d'accès distinct dont on sait que l'accord a été donné. Cet accord peut être retiré.",
        ],
      },
      {
        id: "tools",
        heading: "On utilise ce qu'on construit",
        intro: "L'association travaille avec ses propres outils partout où ils existent, et les répare quand ils ne suffisent pas.",
        points: [
          "Ce site est construit avec le design system de l'association, comme ses applications.",
          "Le hub, son chat, tourne sur le harness publié dans Wica.",
          "Le corpus vit dans le dépôt de textes de WPT et se relit dans sa propre application web.",
          "Aucune application ne dépend d'un service extérieur obligatoire : n'importe qui peut tout héberger.",
          "Le travail se fait dans des dépôts publics, et tout ce qui est utile appris en chemin est publié.",
        ],
      },
    ],
  },
};
