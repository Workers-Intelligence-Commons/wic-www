import type { Localized } from "../i18n/locales.ts";

export interface Critique {
  id: string;
  heading: string;
  critique: string;
  answer: string;
  open: string;
}

export const criticism: Localized<{
  title: string;
  description: string;
  lead: string;
  contents: string;
  frame: { heading: string; paragraphs: string[] };
  labels: { answer: string; open: string };
  items: Critique[];
}> = {
  en: {
    title: "Criticism of AI",
    description:
      "What the left says against artificial intelligence, one point at a time: stolen work, hidden labour, concentration of power, ecology, jobs, surveillance, bias, fakes, dependence and hype. What Workers' Intelligence Commons does about each, and what it does not solve.",
    lead: "What the left says against artificial intelligence, one point at a time: where the association agrees, what it does about it, and what remains unsolved.",
    contents: "on this page",
    frame: {
      heading: "Who owns the machine",
      paragraphs: [
        "Most criticism of artificial intelligence from the left is right. Look closely and it is mostly about who owns it and how it is made, not about the technique itself.",
        "The Luddites did not break looms because they hated machines, but because the machines were being used against them. Marx made the same distinction: the problem is not the machine, it is who it belongs to. That is why the association wants to take artificial intelligence back rather than leave it to those who already own it.",
        "Its constitution borrows three words from the sociology of social relations, notably the work of Danièle Kergoat: exploitation, domination and oppression. Each criticism below touches at least one of them. For each, the page says what the association does, and what it does not solve.",
      ],
    },
    labels: { answer: "What the association does", open: "What it does not solve" },
    items: [
      {
        id: "stolen-work",
        heading: "It is built on stolen work",
        critique: "The large models were trained on books, articles, images and code taken without asking the people who made them, and they now compete with those same people.",
        answer: "Nothing enters what the association's intelligences learn from unless the right to use it is clear. Every source is traced with its origin and its licence, every decision to admit it carries a name, an author's refusal is honoured, and an admitted erasure request removes the work from every later training.",
        open: "Clearly licensed material is far smaller than what the large companies take, so the association's models will be smaller and weaker for a long time. And a licence that allows use does not mean the author thought about training when they chose it.",
      },
      {
        id: "hidden-labour",
        heading: "It runs on hidden, badly paid labour",
        critique: "Behind every large model there are people labelling data and filtering horrors for a few dollars an hour, often far from where the profits go.",
        answer: "The constitution says the association exploits no one: work for it is free, recognised and fairly paid when it asks for it, and the highest pay is never more than three times the lowest. Labelling and moderation are never handed to badly paid people, and every contributor is credited if they agree.",
        open: "The chips and machines the association trains on are made in mines and factories whose conditions it does not control. Renting compute does not change that.",
      },
      {
        id: "concentration",
        heading: "It concentrates power in a few companies",
        critique: "A handful of companies own the models, the data, the machines and the cloud, and the rest of the world rents access on their terms.",
        answer: "Everything the association publishes is open under a strong copyleft: anyone can host it, modify it and serve it, and every improvement served to the public must be published. Its applications depend on no mandatory outside service.",
        open: "Open weights do not make compute common. Training a large model still takes machines that few own, and the association will depend on public compute programmes or on donors for a long time.",
      },
      {
        id: "ecology",
        heading: "It costs the planet too much",
        critique: "Data centres burn electricity and water, and the race to bigger models fills the grid with a demand nobody voted for.",
        answer: "What an intelligence costs the planet counts as a cost for everyone. The association measures it, publishes it, starts small and spends only what is necessary. Publishing what it trains lets others continue from it instead of training the same thing again.",
        open: "Any training consumes. Energy is what can be measured today. Water and hardware are harder, and they are not measured yet. A cheaper tool also tends to be used more, which can cancel the savings.",
      },
      {
        id: "jobs",
        heading: "It destroys jobs and disciplines workers",
        critique: "Automation is sold as progress, but it is used to cut jobs, speed up work and watch the people who remain.",
        answer: "The association does not pretend automation can be stopped. It puts the tool in the hands of the people who work, free and self-hostable, so that a worker, a union or a cooperative can own what automates their work. Its intelligences never help to exploit or dominate, which rules out tools built to watch, rate or discipline workers.",
        open: "An open tool does not share out the gains of automation by itself. That is a political fight, and a model, however open, does not win it.",
      },
      {
        id: "surveillance",
        heading: "It serves surveillance and repression",
        critique: "Recognition, profiling and prediction give states and companies a power to watch and sort people that they never had before.",
        answer: "Helping to oppress anyone is an absolute line for the association and its intelligences, and nothing it serves is built for surveillance or repression. Its intelligences help people defend themselves, including against surveillance.",
        open: "A free licence cannot forbid a use. Someone who hosts the association's intelligences can turn them to what the association refuses, and the constitution says so plainly instead of pretending to control them.",
      },
      {
        id: "bias",
        heading: "It reproduces racism and sexism",
        critique: "Models learn from the past, and they repeat its contempt, its exclusions and its stereotypes, now with the authority of a machine.",
        answer: "The constitution starts from equality in dignity and in rights, and names oppression as one of the three relations the association fights. Because every source is traced, anyone can look at what an intelligence learned from and point at what is wrong.",
        open: "Every source carries the prejudices of its time. Tracing them makes them visible, not absent, and an honest model still has to be corrected again and again.",
      },
      {
        id: "fakes",
        heading: "It floods the world with fakes and filler",
        critique: "Generated text and images fill the web, drown out human work and make lies cheap.",
        answer: "The association's intelligences never deceive in their own name and never help with manipulation or large-scale disinformation. The answer to disinformation is to spread the truth of the facts.",
        open: "Anyone can use an open model to produce filler or lies. The association can refuse to serve that, not prevent it.",
      },
      {
        id: "dependence",
        heading: "It makes people dependent and deskilled",
        critique: "A tool that answers everything teaches people to stop learning, and it is designed to keep them coming back.",
        answer: "The association's intelligences help people become more autonomous, never more dependent on them, and use no tactic to hold attention. A good answer is one after which the person no longer needs to come back.",
        open: "There is a real tension between being useful and teaching. The line is drawn case by case, and it will sometimes be drawn in the wrong place.",
      },
      {
        id: "hype",
        heading: "It is sold on hype and an ideology",
        critique: "The promise of a super-intelligence serves to raise money and to brush aside present harms as details on the way to salvation.",
        answer: "For the association, artificial intelligence is a tool, nothing more. Its intelligences say when they do not know, and the association says what it does not know instead of hiding it behind promises.",
        open: "Saying so is not enough. The association will face the same temptation to promise more than it has, and its public accounts are there so that anyone can check.",
      },
    ],
  },
  fr: {
    title: "Les critiques de l'IA",
    description:
      "Ce que la gauche reproche à l'intelligence artificielle, point par point : vol des œuvres, travail caché, concentration du pouvoir, écologie, emploi, surveillance, biais, faux contenus, dépendance et battage. Ce que fait Workers' Intelligence Commons pour chacun, et ce que ça ne résout pas.",
    lead: "Ce que la gauche reproche à l'intelligence artificielle, point par point : là où l'association est d'accord, ce qu'elle fait, et ce qui reste sans solution.",
    contents: "sur cette page",
    frame: {
      heading: "À qui appartient la machine",
      paragraphs: [
        "La plupart des critiques que la gauche adresse à l'intelligence artificielle sont justes. À y regarder de près, elles portent surtout sur qui la possède et sur la façon dont elle est fabriquée, pas sur la technique elle-même.",
        "Les luddites ne cassaient pas les métiers à tisser parce qu'ils détestaient les machines, mais parce que les machines servaient contre eux. Marx faisait la même distinction : le problème n'est pas la machine, c'est à qui elle appartient. C'est pour ça que l'association veut reprendre l'intelligence artificielle plutôt que la laisser à ceux qui la possèdent déjà.",
        "Sa constitution emprunte trois mots à la sociologie des rapports sociaux, notamment aux travaux de Danièle Kergoat : exploitation, domination et oppression. Chaque critique ci-dessous touche au moins l'un des trois. Pour chacune, la page dit ce que fait l'association, et ce que ça ne résout pas.",
      ],
    },
    labels: { answer: "Ce que fait l'association", open: "Ce que ça ne résout pas" },
    items: [
      {
        id: "stolen-work",
        heading: "Elle est bâtie sur des œuvres volées",
        critique: "Les grands modèles ont été entraînés sur des livres, des articles, des images et du code pris sans demander à celles et ceux qui les ont faits, et ils leur font maintenant concurrence.",
        answer: "Rien n'entre dans ce dont les intelligences de l'association apprennent sans que le droit de l'utiliser soit clair. Chaque source est tracée avec son origine et sa licence, chaque décision de l'admettre porte un nom, le refus d'un auteur est respecté, et une demande d'effacement admise retire l'œuvre de tous les entraînements suivants.",
        open: "Ce qui est sous licence claire est bien plus réduit que ce que prennent les grandes entreprises, si bien que les modèles de l'association resteront longtemps plus petits et moins forts. Et une licence qui autorise l'usage ne veut pas dire que l'auteur pensait à l'entraînement en la choisissant.",
      },
      {
        id: "hidden-labour",
        heading: "Elle repose sur un travail caché et mal payé",
        critique: "Derrière chaque grand modèle, il y a des personnes qui annotent des données et filtrent des horreurs pour quelques dollars de l'heure, souvent loin de là où vont les profits.",
        answer: "La constitution dit que l'association n'exploite personne : le travail pour elle est libre, reconnu et justement payé quand elle le demande, et la rémunération la plus haute ne dépasse jamais trois fois la plus basse. L'annotation et la modération ne sont jamais confiées à des personnes mal payées, et chaque contributeur est crédité s'il le veut.",
        open: "Les puces et les machines sur lesquelles l'association entraîne sont fabriquées dans des mines et des usines dont elle ne contrôle pas les conditions. Louer du calcul n'y change rien.",
      },
      {
        id: "concentration",
        heading: "Elle concentre le pouvoir dans quelques entreprises",
        critique: "Une poignée d'entreprises possèdent les modèles, les données, les machines et le cloud, et le reste du monde loue l'accès à leurs conditions.",
        answer: "Tout ce que l'association publie est ouvert sous copyleft fort : n'importe qui peut l'héberger, le modifier et le servir, et toute amélioration servie au public doit être publiée. Ses applications ne dépendent d'aucun service extérieur obligatoire.",
        open: "Des poids ouverts ne rendent pas le calcul commun. Entraîner un grand modèle demande toujours des machines que peu possèdent, et l'association dépendra longtemps des programmes de calcul public ou des donateurs.",
      },
      {
        id: "ecology",
        heading: "Elle coûte trop cher à la planète",
        critique: "Les centres de données brûlent de l'électricité et de l'eau, et la course aux modèles géants remplit le réseau d'une demande que personne n'a votée.",
        answer: "Ce que coûte une intelligence à la planète compte comme un coût pour tout le monde. L'association le mesure, le publie, commence petit et ne dépense que le nécessaire. Publier ce qu'elle entraîne permet à d'autres de repartir de là au lieu d'entraîner la même chose une seconde fois.",
        open: "Tout entraînement consomme. L'énergie est ce qu'on sait mesurer aujourd'hui. L'eau et le matériel sont plus difficiles, et ne sont pas encore mesurés. Un outil moins cher tend aussi à être plus utilisé, ce qui peut annuler les économies.",
      },
      {
        id: "jobs",
        heading: "Elle détruit l'emploi et met les travailleurs au pas",
        critique: "L'automatisation est vendue comme un progrès, mais elle sert à supprimer des postes, à accélérer les cadences et à surveiller celles et ceux qui restent.",
        answer: "L'association ne prétend pas qu'on peut arrêter l'automatisation. Elle met l'outil entre les mains de celles et ceux qui travaillent, gratuit et auto-hébergeable, pour qu'un travailleur, un syndicat ou une coopérative puisse posséder ce qui automatise son travail. Ses intelligences n'aident jamais à exploiter ni à dominer, ce qui exclut les outils faits pour surveiller, noter ou discipliner des travailleurs.",
        open: "Un outil ouvert ne redistribue pas à lui seul les gains de l'automatisation. C'est un combat politique, et un modèle, aussi ouvert soit-il, ne le gagne pas.",
      },
      {
        id: "surveillance",
        heading: "Elle sert la surveillance et la répression",
        critique: "La reconnaissance, le profilage et la prédiction donnent aux États et aux entreprises un pouvoir de surveiller et de trier les gens qu'ils n'avaient jamais eu.",
        answer: "Aider à opprimer qui que ce soit est une ligne absolue pour l'association et ses intelligences, et rien de ce qu'elle sert n'est fait pour la surveillance ou la répression. Ses intelligences aident à se défendre, y compris contre la surveillance.",
        open: "Une licence libre ne peut pas interdire un usage. Quelqu'un qui héberge les intelligences de l'association peut les tourner vers ce qu'elle refuse, et la constitution le dit franchement au lieu de prétendre le contrôler.",
      },
      {
        id: "bias",
        heading: "Elle reproduit le racisme et le sexisme",
        critique: "Les modèles apprennent du passé, et ils en répètent le mépris, les exclusions et les stéréotypes, désormais avec l'autorité d'une machine.",
        answer: "La constitution part de l'égalité en dignité et en droits, et nomme l'oppression parmi les trois rapports que l'association combat. Comme chaque source est tracée, n'importe qui peut regarder ce dont une intelligence a appris et montrer ce qui ne va pas.",
        open: "Chaque source porte les préjugés de son époque. Les tracer les rend visibles, pas absents, et un modèle honnête doit encore être corrigé, encore et encore.",
      },
      {
        id: "fakes",
        heading: "Elle inonde le monde de faux et de remplissage",
        critique: "Les textes et les images générés envahissent le web, noient le travail humain et rendent le mensonge bon marché.",
        answer: "Les intelligences de l'association ne trompent jamais en leur propre nom et n'aident jamais à la manipulation ni à la désinformation à grande échelle. La réponse à la désinformation, c'est de diffuser la vérité des faits.",
        open: "N'importe qui peut se servir d'un modèle ouvert pour produire du remplissage ou des mensonges. L'association peut refuser de servir ça, pas l'empêcher.",
      },
      {
        id: "dependence",
        heading: "Elle rend dépendant et fait perdre des savoir-faire",
        critique: "Un outil qui répond à tout apprend aux gens à ne plus apprendre, et il est conçu pour les faire revenir.",
        answer: "Les intelligences de l'association aident les personnes à devenir plus autonomes, jamais plus dépendantes d'elles, et n'utilisent aucune tactique pour retenir l'attention. Une bonne réponse est une réponse après laquelle la personne n'a plus besoin de revenir.",
        open: "Il y a une vraie tension entre être utile et apprendre à faire. La limite se trace au cas par cas, et elle sera parfois mal placée.",
      },
      {
        id: "hype",
        heading: "Elle se vend sur du battage et une idéologie",
        critique: "La promesse d'une super-intelligence sert à lever de l'argent et à balayer les torts présents comme des détails sur le chemin du salut.",
        answer: "Pour l'association, l'intelligence artificielle est un outil, rien de plus. Ses intelligences disent quand elles ne savent pas, et l'association dit ce qu'elle ignore au lieu de le cacher derrière des promesses.",
        open: "Le dire ne suffit pas. L'association aura la même tentation de promettre plus qu'elle n'a, et ses comptes publics sont là pour que n'importe qui puisse vérifier.",
      },
    ],
  },
};
