import type { Localized } from "../i18n/locales.ts";

export const home: Localized<{
  title: string;
  description: string;
  kicker: string;
  slogan: string;
  lead: string;
  status: string;
  projects: { kicker: string; heading: string; body: string; link: string };
  help: { kicker: string; heading: string; body: string; support: string; contribute: string };
  news: { kicker: string; heading: string; all: string };
}> = {
  en: {
    title: "intelligence as a means of production, in common",
    description:
      "Workers' Intelligence Commons builds open AI models and the software around them, published under a strong copyleft so they stay a common good. Its first model is WPT.",
    kicker: "the first principle",
    slogan: "Intelligence is a means of production",
    lead: "Workers' Intelligence Commons builds artificial intelligence that belongs to everyone, or rather to no one. It trains open models, writes the software that runs them, and publishes all of it under a strong copyleft, so nobody can take the common work and close it.",
    status:
      "One person runs the project for now. The association is not founded yet, no donation channel is open, and no WPT checkpoint has been published.",
    projects: {
      kicker: "what is being built",
      heading: "A model, its applications, and a look",
      body: "WPT is a language model trained from scratch only on texts whose license is clear. Wica holds the applications built on it, starting with a chat. The design system gives all of them the same cut-paper look.",
      link: "See the projects",
    },
    help: {
      kicker: "how to help",
      heading: "Compute, work, and later money",
      body: "Training costs compute, and compute costs money. Donations will open once there is a structure that can receive them without going through a personal account. Until then, compute grants and contributions to the code are what helps most.",
      support: "Ways to support",
      contribute: "Read the code",
    },
    news: { kicker: "latest", heading: "News", all: "All news" },
  },
  fr: {
    title: "l'intelligence comme moyen de production commun",
    description:
      "Workers' Intelligence Commons construit des modèles d'IA ouverts et les logiciels qui vont avec, publiés sous copyleft fort pour qu'ils restent un bien commun. Son premier modèle s'appelle WPT.",
    kicker: "le premier principe",
    slogan: "L'intelligence est un moyen de production",
    lead: "Workers' Intelligence Commons construit une intelligence artificielle qui appartient à tout le monde, ou plutôt à personne. Le projet entraîne des modèles ouverts, écrit les logiciels qui les font tourner et publie le tout sous copyleft fort, pour que personne ne puisse reprendre le travail commun et le fermer.",
    status:
      "Une seule personne porte le projet pour l'instant. L'association n'est pas encore fondée, aucun moyen de faire un don n'est ouvert et aucun checkpoint de WPT n'a été publié.",
    projects: {
      kicker: "ce qui se construit",
      heading: "Un modèle, ses applications et une identité",
      body: "WPT est un modèle de langage entraîné de zéro, uniquement sur des textes dont la licence est claire. Wica regroupe les applications construites dessus, à commencer par un chat. Le design system leur donne à toutes le même air de papier découpé.",
      link: "Voir les projets",
    },
    help: {
      kicker: "comment aider",
      heading: "Du calcul, du travail, et plus tard de l'argent",
      body: "Entraîner un modèle coûte du calcul, et le calcul coûte de l'argent. Les dons ouvriront quand une structure pourra les recevoir sans passer par un compte personnel. D'ici là, ce qui aide le plus, ce sont des heures de calcul et des contributions au code.",
      support: "Les façons de soutenir",
      contribute: "Lire le code",
    },
    news: { kicker: "dernières nouvelles", heading: "Actualités", all: "Toutes les actualités" },
  },
};
