import type { Localized } from "../i18n/locales.ts";

export const home: Localized<{
  title: string;
  description: string;
  kicker: string;
  slogan: string;
  lead: string;
  status: string;
  projects: { heading: string; items: { title: string; body: string; anchor: string }[]; link: string };
  help: { heading: string; body: string; support: string; contribute: string };
  news: { heading: string; all: string };
}> = {
  en: {
    title: "intelligence as a means of production, in common",
    description:
      "Workers' Intelligence Commons builds open artificial intelligence and the software around it, published under a strong copyleft so it stays a common good. Its first projects are WPT, a language model, and Wica, its applications.",
    kicker: "the first principle",
    slogan: "Intelligence is a means of production",
    lead: "Workers' Intelligence Commons builds artificial intelligence that belongs to everyone, or rather to no one, and that serves to undo exploitation, domination and oppression rather than deepen them. It trains open models, writes the software that runs them, and publishes all of it under a strong copyleft, so nobody can take the common work and close it.",
    status:
      "One person runs the project for now. The association is not founded yet, no donation channel is open, and no model has been published yet.",
    projects: {
      heading: "The first projects",
      items: [
        { title: "WPT", body: "A language model trained from scratch only on texts whose license is clear.", anchor: "wpt" },
        { title: "Wica", body: "The applications built on it, starting with a chat, the hub.", anchor: "wica" },
        { title: "Design system", body: "The cut-paper look every site and application shares.", anchor: "design-system" },
      ],
      link: "See the projects",
    },
    help: {
      heading: "Compute, work, and later money",
      body: "Training costs compute, and compute costs money. Donations will open once there is a structure that can receive them without going through a personal account. Until then, compute grants and contributions to the code are what helps most.",
      support: "Ways to support",
      contribute: "Read the code",
    },
    news: { heading: "News", all: "All news" },
  },
  fr: {
    title: "l'intelligence comme moyen de production commun",
    description:
      "Workers' Intelligence Commons construit une intelligence artificielle ouverte et les logiciels qui vont avec, publiés sous copyleft fort pour qu'ils restent un bien commun. Ses premiers projets sont WPT, un modèle de langage, et Wica, ses applications.",
    kicker: "le premier principe",
    slogan: "L'intelligence est un moyen de production",
    lead: "Workers' Intelligence Commons construit une intelligence artificielle qui appartient à tout le monde, ou plutôt à personne, et qui sert à défaire l'exploitation, la domination et l'oppression plutôt qu'à les aggraver. Le projet entraîne des modèles ouverts, écrit les logiciels qui les font tourner et publie le tout sous copyleft fort, pour que personne ne puisse reprendre le travail commun et le fermer.",
    status:
      "Une seule personne porte le projet pour l'instant. L'association n'est pas encore fondée, aucun moyen de faire un don n'est ouvert et aucun modèle n'a encore été publié.",
    projects: {
      heading: "Les premiers projets",
      items: [
        { title: "WPT", body: "Un modèle de langage entraîné de zéro, uniquement sur des textes dont la licence est claire.", anchor: "wpt" },
        { title: "Wica", body: "Les applications construites dessus, à commencer par un chat, le hub.", anchor: "wica" },
        { title: "Design system", body: "L'air de papier découpé que partagent tous les sites et applications.", anchor: "design-system" },
      ],
      link: "Voir les projets",
    },
    help: {
      heading: "Du calcul, du travail, et plus tard de l'argent",
      body: "Entraîner un modèle coûte du calcul, et le calcul coûte de l'argent. Les dons ouvriront quand une structure pourra les recevoir sans passer par un compte personnel. D'ici là, ce qui aide le plus, ce sont des heures de calcul et des contributions au code.",
      support: "Les façons de soutenir",
      contribute: "Lire le code",
    },
    news: { heading: "Actualités", all: "Toutes les actualités" },
  },
};
