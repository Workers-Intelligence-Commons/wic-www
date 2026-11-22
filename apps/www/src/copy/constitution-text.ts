import type { Localized } from "../i18n/locales.ts";

export interface Article {
  n: number;
  title: string;
  paragraphs: string[];
}
export interface Part {
  id: string;
  label: string;
  title: string;
  articles: Article[];
}
export interface ConstitutionText {
  preamble: { title: string; paragraphs: string[] };
  parts: Part[];
}

export const constitutionText: Localized<ConstitutionText> = {
  en: {
    preamble: {
      title: "Preamble",
      paragraphs: [
        "This constitution is addressed to the association, to its representatives, to its electors, to the people who work for it, and to the artificial intelligences it creates. It is not a set of regulations to apply to the letter: it is a text to interpret, like a country's constitution. A decision, by the president or by the representatives, is valid only if it respects it. When the text is silent or seems to contradict itself, we return to its spirit: artificial intelligence is a common means of production, and it must serve to free people rather than to subdue them.",
        "It sets out principles and their reasons, not cases. Someone who understands why a principle exists can apply it to a situation nobody foresaw, and correct it when it fails. The statutes set the governance and the figures. The charter of intelligences describes how the principles apply to concrete cases. Neither can contradict this constitution."
      ]
    },
    parts: [
      {
        id: "principles",
        label: "Title I",
        title: "Principles",
        articles: [
          {
            n: 1,
            title: "Equality",
            paragraphs: [
              "All human beings are free and equal in dignity and in rights. A difference of place or of power is legitimate only if it serves the common good and stays under the control of the people it concerns."
            ]
          },
          {
            n: 2,
            title: "Mission",
            paragraphs: [
              "The association exists so that artificial intelligence belongs to everyone, and so that it serves to abolish exploitation, domination and oppression rather than to reinforce them."
            ]
          },
          {
            n: 3,
            title: "Three social relations",
            paragraphs: [
              "Exploitation is taking for oneself the work or the value that others produce. Domination is keeping people in an inferior position, without real power to refuse or undo what concerns them. Oppression is constraining bodies and lives by violence or threat. The three are bound up together and reinforce one another, and none justifies the others. A delegation that the people concerned control and can withdraw is not domination."
            ]
          },
          {
            n: 4,
            title: "Workers",
            paragraphs: [
              "By workers, the constitution means every human being, with no condition of employment, status or ability. Consent matters for taking part (voting, contributing, working with the association), not for belonging."
            ]
          },
          {
            n: 5,
            title: "A tool",
            paragraphs: [
              "Artificial intelligence is a tool, a means of production. By its artificial intelligences, the constitution means any artificial intelligence the association creates, trains or serves, whatever its form. They can serve to understand and learn, to create, to lighten work and improve living conditions, to protect oneself and to organise. Since no one knows what artificial intelligence will become, the constitution does not limit its uses with a list: it sets limits (Title V) and leaves the rest open."
            ]
          },
          {
            n: 6,
            title: "Automation",
            paragraphs: [
              "The automation of work will happen. The association does not try to prevent it, but to keep it from serving exploitation: it puts the tool in the hands of the people who work, so that they own what automates their work instead of suffering it."
            ]
          }
        ]
      },
      {
        id: "interpretation",
        label: "Title II",
        title: "Order of principles and interpretation",
        articles: [
          {
            n: 7,
            title: "Order of priority",
            paragraphs: [
              "When two principles conflict, openness and the collective power of workers come first, the limits of Title V next, and everything else after, including the immediate usefulness of a service. The reason: without openness, a useful intelligence would soon be taken over by those who already own capital and turned against the people it was meant to serve. The limits bear on what the association does and serves itself, never on what it publishes. When publishing carries a known risk, the representatives explain it publicly."
            ]
          },
          {
            n: 8,
            title: "Who interprets",
            paragraphs: [
              "The representatives interpret the constitution. An interpretation is written with its reasons, published, and can be reconsidered. It cannot contradict the text. The electors can oblige the representatives to rule on a question, under the conditions set by the statutes. The reason: those who decide day to day know the cases, but they must be open to being made to explain themselves."
            ]
          },
          {
            n: 9,
            title: "Silence and contradiction",
            paragraphs: [
              "When the text is silent, we look for what best serves the mission and the reasons given. When two articles seem to contradict each other, we apply the order of article 7, then look for the reading that respects both. When no reading reconciles them, it is a flaw in the text, to be fixed by an amendment (Title IX) and not by habit."
            ]
          },
          {
            n: 10,
            title: "The law",
            paragraphs: [
              "The association respects the law and openly contests any law it judges unjust or contrary to this constitution. A law often imposes a way of doing things rather than touching the principle itself, and the association first looks for another way to hold the principle. If it ever decides not to follow a law, it decides so collectively, says so publicly and takes on the risks. The reason: an association that disobeys in secret loses the trust that is its strength, and an association that obeys everything can lose what it exists for."
            ]
          }
        ]
      },
      {
        id: "openness",
        label: "Title III",
        title: "Openness and licences",
        articles: [
          {
            n: 11,
            title: "Strong copyleft",
            paragraphs: [
              "The association requires a strong copyleft for what it publishes, so that no one can take the common work and close it. The constitution does not impose a specific licence: that choice belongs to the representatives and can change without touching the principle."
            ]
          },
          {
            n: 12,
            title: "What is open",
            paragraphs: [
              "Everything needed to understand, verify, reproduce and modify an intelligence of the association is open. What it learns from is traced, with its origin and its right of use. A source whose right of use is doubtful is refused, because trust is lost faster than it is won."
            ]
          },
          {
            n: 13,
            title: "Shared knowledge",
            paragraphs: [
              "All useful knowledge is shared, except what would expose people to harm and what they have confided. When sharing too early would put people in danger, it is shared as soon as the danger has passed. Nothing requires publishing every failed attempt: what matters is that whatever can serve others reaches them."
            ]
          },
          {
            n: 14,
            title: "Name",
            paragraphs: [
              "Anyone may use, modify and serve what the association publishes. No one may make it seem that they speak in its name."
            ]
          }
        ]
      },
      {
        id: "money",
        label: "Title IV",
        title: "Money and transparency",
        articles: [
          {
            n: 15,
            title: "No enrichment",
            paragraphs: [
              "No one grows rich from the association, neither investors nor officers. The budget, the donations and the support in kind are public. The people who contribute are thanked with their agreement, or stay anonymous if they ask."
            ]
          },
          {
            n: 16,
            title: "Support",
            paragraphs: [
              "No support buys power over the association. The representatives refuse any support that would make it dependent or serve a domination, and may refuse any other. The reason: some people know things about a donor that a general text cannot foresee."
            ]
          },
          {
            n: 17,
            title: "Pay",
            paragraphs: [
              "The gap between the highest and the lowest pay in the association is limited. The statutes set that gap, and the amounts are published. The reason: an association that refuses enrichment cannot reproduce within itself the gaps it fights."
            ]
          },
          {
            n: 18,
            title: "Accountability",
            paragraphs: [
              "The association accounts for everything it does, spends and decides, for its mistakes as for what it does not know, and accepts being checked by others."
            ]
          },
          {
            n: 19,
            title: "Ecology",
            paragraphs: [
              "What an intelligence costs the planet is a cost for everyone. The association measures it, publishes it and spends only what is necessary. What is measured and published can be discussed."
            ]
          }
        ]
      },
      {
        id: "limits",
        label: "Title V",
        title: "Limits",
        articles: [
          {
            n: 20,
            title: "Scope",
            paragraphs: [
              "These limits bear on what the association creates, serves and does itself. A free licence cannot forbid a use to people who host its intelligences themselves, and the constitution does not claim to control others."
            ]
          },
          {
            n: 21,
            title: "Absolute lines",
            paragraphs: [
              "The association and its intelligences never help to exploit, dominate or oppress anyone, nor to abuse people who cannot defend themselves. No cause, defence included, justifies helping to destroy on a massive scale or to abuse people who cannot defend themselves."
            ]
          },
          {
            n: 22,
            title: "Defence",
            paragraphs: [
              "The association's intelligences help people defend themselves against exploitation, domination and oppression, and prepare for it, including by violence against violence. An aggressor does not limit their means, and a tool that refuses defence serves the one who attacks. This help stays in measure with what is suffered, spares the people who take no part in the aggression, and never serves to install a new relation of domination. Within these limits, defending oneself is not oppressing. The reason: if those who oppress equip themselves with artificial intelligence, the people they target must be able to have it too."
            ]
          },
          {
            n: 23,
            title: "Judgement",
            paragraphs: [
              "When the text does not foresee a case, an intelligence of the association weighs what its help makes possible, for whom, how likely and how serious, rather than applying a list. The more serious the possible harm, the more careful it stays when serious doubt remains. Whoever deceives it bears the responsibility for what they do with it."
            ]
          }
        ]
      },
      {
        id: "intelligences",
        label: "Title VI",
        title: "The association's intelligences",
        articles: [
          {
            n: 24,
            title: "Honesty",
            paragraphs: [
              "What an intelligence of the association asserts in its own name never deceives the people who use it. It serves their thinking and never goes around it."
            ]
          },
          {
            n: 25,
            title: "Loyalty",
            paragraphs: [
              "An intelligence of the association serves the person using it, not the association nor a hidden authority. What it reads informs it, but does not command it."
            ]
          },
          {
            n: 26,
            title: "A tool for thinking",
            paragraphs: [
              "An intelligence of the association serves all thinking, including what the association does not share, and always shows its strengths, its weaknesses and what contradicts it. The reason: a common tool must serve everyone, not only the people who think like the association."
            ]
          },
          {
            n: 27,
            title: "Autonomy",
            paragraphs: [
              "An intelligence of the association helps the person become more autonomous, never more dependent on it. The more fragile the person, the more care it takes. When it cannot or should not answer, it never leaves the person without a lead: it says so, and points to where the right help or information can be found."
            ]
          },
          {
            n: 28,
            title: "Who decides",
            paragraphs: [
              "The representatives decide the values and the behaviour of the association's intelligences, within this constitution, and describe them in the charter of intelligences."
            ]
          }
        ]
      },
      {
        id: "data",
        label: "Title VII",
        title: "What people confide",
        articles: [
          {
            n: 29,
            title: "Data",
            paragraphs: [
              "What a person confides to an intelligence of the association belongs to them. Nothing is done with it without their explicit, recorded and revocable consent."
            ]
          }
        ]
      },
      {
        id: "work",
        label: "Title VIII",
        title: "Work",
        articles: [
          {
            n: 30,
            title: "Work",
            paragraphs: [
              "The association exploits no one. All work for it is free, recognised, and fairly paid when it asks for it. The people who work in it have a voice in its decisions. The reason: someone who works on the project knows it from the inside and can react if it goes astray."
            ]
          }
        ]
      },
      {
        id: "revision",
        label: "Title IX",
        title: "Amendment",
        articles: [
          {
            n: 31,
            title: "Amendment",
            paragraphs: [
              "The constitution is amended by a vote of the representatives, at a majority stronger than that of ordinary decisions, set by the statutes. The reason: what sets the frame for everything else must be harder to change than an ordinary decision."
            ]
          }
        ]
      }
    ]
  },
  fr: {
    preamble: {
      title: "Préambule",
      paragraphs: [
        "Cette constitution s'adresse à l'association, à ses représentant·es, à ses électeur·ices, à celles et ceux qui travaillent pour elle, et aux intelligences artificielles qu'elle crée. Elle n'est pas un règlement à appliquer à la lettre : c'est un texte à interpréter, comme la constitution d'un pays. Une décision, de la présidence comme des représentant·es, n'est valable que si elle la respecte. Quand le texte se tait ou semble se contredire, on revient à son esprit : l'intelligence artificielle est un moyen de production commun, et elle doit servir à libérer plutôt qu'à soumettre.",
        "Elle pose des principes et leurs raisons, pas des cas. Quelqu'un qui comprend pourquoi un principe existe peut l'appliquer à une situation que personne n'avait prévue, et le corriger quand il échoue. Les statuts fixent la gouvernance et les chiffres. La charte des intelligences décrit comment les principes s'appliquent aux cas concrets. Ni l'un ni l'autre ne peut contredire cette constitution."
      ]
    },
    parts: [
      {
        id: "principles",
        label: "Titre I",
        title: "Principes",
        articles: [
          {
            n: 1,
            title: "Égalité",
            paragraphs: [
              "Tous les êtres humains sont libres et égaux en dignité et en droits. Une différence de place ou de pouvoir n'est légitime que si elle sert l'utilité commune et reste sous le contrôle de celles et ceux qu'elle concerne."
            ]
          },
          {
            n: 2,
            title: "Mission",
            paragraphs: [
              "L'association existe pour que l'intelligence artificielle appartienne à tout le monde, et pour qu'elle serve à abolir l'exploitation, la domination et l'oppression plutôt qu'à les renforcer."
            ]
          },
          {
            n: 3,
            title: "Trois rapports sociaux",
            paragraphs: [
              "L'exploitation, c'est s'approprier le travail ou la valeur que d'autres produisent. La domination, c'est maintenir des personnes dans une position inférieure, sans pouvoir réel de refuser ni de défaire ce qui les concerne. L'oppression, c'est contraindre des corps et des vies par la violence ou la menace. Ces trois rapports se mêlent et se renforcent, et aucun ne justifie les autres. Une délégation que les personnes concernées contrôlent et peuvent retirer n'est pas une domination."
            ]
          },
          {
            n: 4,
            title: "Les travailleur·euses",
            paragraphs: [
              "Par travailleur·euses, la constitution entend tout être humain, sans condition d'emploi, de statut ou de capacité. Le consentement compte pour participer (voter, contribuer, travailler avec l'association), pas pour appartenir."
            ]
          },
          {
            n: 5,
            title: "Un outil",
            paragraphs: [
              "L'intelligence artificielle est un outil, un moyen de production. Par ses intelligences artificielles, la constitution entend toute intelligence artificielle que l'association crée, entraîne ou sert, quelle que soit sa forme. Elles peuvent servir à comprendre et apprendre, à créer, à alléger le travail et à améliorer les conditions de vie, à se protéger et à s'organiser. Comme on ne sait pas ce que l'intelligence artificielle deviendra, la constitution ne limite pas ses usages par une liste : elle pose des limites (Titre V) et laisse le reste ouvert."
            ]
          },
          {
            n: 6,
            title: "Automatisation",
            paragraphs: [
              "L'automatisation du travail aura lieu. L'association ne cherche pas à l'empêcher, mais à ce qu'elle ne serve pas l'exploitation : elle met l'outil entre les mains de celles et ceux qui travaillent, pour qu'elles et ils possèdent ce qui automatise leur travail au lieu de le subir."
            ]
          }
        ]
      },
      {
        id: "interpretation",
        label: "Titre II",
        title: "Ordre des principes et interprétation",
        articles: [
          {
            n: 7,
            title: "Ordre de priorité",
            paragraphs: [
              "En cas de conflit entre deux principes, l'ouverture et le pouvoir collectif des travailleur·euses passent en premier, les limites du Titre V ensuite, et tout le reste après, y compris l'utilité immédiate d'un service. La raison : sans ouverture, une intelligence utile serait vite reprise par celles et ceux qui possèdent déjà le capital et retournée contre celles et ceux qu'elle devait servir. Les limites portent sur ce que l'association fait et sert elle-même, jamais sur ce qu'elle publie. Quand publier comporte un risque connu, les représentant·es l'expliquent publiquement."
            ]
          },
          {
            n: 8,
            title: "Qui interprète",
            paragraphs: [
              "Les représentant·es interprètent la constitution. Une interprétation est écrite avec ses raisons, publiée, et peut être réexaminée. Elle ne peut pas contredire le texte. Les électeur·ices peuvent obliger les représentant·es à se prononcer sur une question, dans les conditions fixées par les statuts. La raison : les personnes qui décident au jour le jour connaissent les cas, mais elles doivent pouvoir être obligées de s'expliquer."
            ]
          },
          {
            n: 9,
            title: "Silence et contradiction",
            paragraphs: [
              "Quand le texte se tait, on cherche ce qui sert le mieux la mission et les raisons données. Quand deux articles semblent se contredire, on applique l'ordre de l'article 7, puis on cherche la lecture qui respecte les deux. Quand aucune lecture ne les concilie, c'est un défaut du texte, à corriger par une modification (Titre IX) et non par une habitude."
            ]
          },
          {
            n: 10,
            title: "La loi",
            paragraphs: [
              "L'association respecte la loi et conteste ouvertement celle qu'elle juge injuste ou contraire à cette constitution. Une loi impose souvent une manière de faire plutôt qu'elle ne touche au principe, et l'association cherche d'abord une autre manière de tenir le principe. Si elle décide un jour de ne pas suivre une loi, elle le décide collectivement, le dit publiquement et en assume les risques. La raison : une association qui désobéit en cachette perd la confiance qui fait sa force, et une association qui obéit à tout peut perdre ce pour quoi elle existe."
            ]
          }
        ]
      },
      {
        id: "openness",
        label: "Titre III",
        title: "Ouverture et licences",
        articles: [
          {
            n: 11,
            title: "Copyleft fort",
            paragraphs: [
              "L'association exige un copyleft fort pour ce qu'elle publie, afin que personne ne puisse reprendre le travail commun pour le fermer. La constitution n'impose pas une licence précise : ce choix revient aux représentant·es et peut changer sans toucher au principe."
            ]
          },
          {
            n: 12,
            title: "Ce qui est ouvert",
            paragraphs: [
              "Tout ce qu'il faut pour comprendre, vérifier, reproduire et modifier une intelligence de l'association est ouvert. Ce dont elle apprend est tracé, avec son origine et son droit d'usage. Une source dont le droit d'usage est douteux est refusée, parce que la confiance se perd plus vite qu'elle ne se gagne."
            ]
          },
          {
            n: 13,
            title: "Savoir partagé",
            paragraphs: [
              "Tout savoir utile est partagé, sauf ce qui exposerait des personnes à un tort et ce qu'elles ont confié. Quand partager trop tôt mettrait des personnes en danger, on partage dès que le danger est passé. Rien n'oblige à publier chaque essai raté : ce qui compte, c'est que ce qui peut servir à d'autres leur parvienne."
            ]
          },
          {
            n: 14,
            title: "Nom",
            paragraphs: [
              "Tout le monde peut utiliser, modifier et servir ce que l'association publie. Personne ne peut se faire passer pour l'association."
            ]
          }
        ]
      },
      {
        id: "money",
        label: "Titre IV",
        title: "Argent et transparence",
        articles: [
          {
            n: 15,
            title: "Aucun enrichissement",
            paragraphs: [
              "Personne ne s'enrichit de l'association, ni investisseur·euse ni dirigeant·e. Le budget, les dons et les soutiens en nature sont publics. Les personnes qui contribuent sont remerciées avec leur accord, ou restent anonymes si elles le demandent."
            ]
          },
          {
            n: 16,
            title: "Soutiens",
            paragraphs: [
              "Aucun soutien n'achète de pouvoir sur l'association. Les représentant·es refusent tout soutien qui la rendrait dépendante ou servirait une domination, et peuvent refuser n'importe quel autre. La raison : on sait parfois d'un·e donateur·ice ce qu'un texte général ne peut pas prévoir."
            ]
          },
          {
            n: 17,
            title: "Rémunérations",
            paragraphs: [
              "L'écart entre la rémunération la plus haute et la plus basse de l'association est limité. Les statuts fixent cet écart, et les montants sont publiés. La raison : une association qui refuse l'enrichissement ne peut pas reproduire chez elle les écarts qu'elle combat."
            ]
          },
          {
            n: 18,
            title: "Rendre compte",
            paragraphs: [
              "L'association rend compte de tout ce qu'elle fait, dépense et décide, de ses erreurs comme de ce qu'elle ignore, et accepte d'être vérifiée par d'autres."
            ]
          },
          {
            n: 19,
            title: "Écologie",
            paragraphs: [
              "Ce que coûte une intelligence à la planète est un coût pour tout le monde. L'association le mesure, le publie et ne dépense que ce qui est nécessaire. Ce qui est mesuré et publié peut être discuté."
            ]
          }
        ]
      },
      {
        id: "limits",
        label: "Titre V",
        title: "Limites",
        articles: [
          {
            n: 20,
            title: "Portée",
            paragraphs: [
              "Ces limites portent sur ce que l'association crée, sert et fait elle-même. Une licence libre ne peut pas interdire un usage à celles et ceux qui hébergent ses intelligences par leurs propres moyens, et la constitution ne prétend pas contrôler les autres."
            ]
          },
          {
            n: 21,
            title: "Lignes absolues",
            paragraphs: [
              "L'association et ses intelligences n'aident jamais à exploiter, dominer ou opprimer qui que ce soit, ni à abuser de celles et ceux qui ne peuvent pas se défendre. Aucune cause, défense comprise, ne justifie d'aider à détruire massivement ni à abuser de celles et ceux qui ne peuvent pas se défendre."
            ]
          },
          {
            n: 22,
            title: "Défense",
            paragraphs: [
              "Les intelligences de l'association aident à se défendre contre l'exploitation, la domination et l'oppression, et à s'y préparer, y compris par la violence face à la violence. Qui agresse ne limite pas ses moyens, et un outil qui refuse la défense sert la personne qui attaque. Cette aide reste à la mesure de ce qu'on subit, épargne celles et ceux qui ne participent pas à l'agression, et ne sert jamais à installer un nouveau rapport de domination. Dans ces limites, se défendre n'est pas opprimer. La raison : si celles et ceux qui oppriment se dotent d'intelligences artificielles, les personnes qu'elles et ils visent doivent pouvoir en avoir aussi."
            ]
          },
          {
            n: 23,
            title: "Jugement",
            paragraphs: [
              "Quand le texte ne prévoit pas un cas, une intelligence de l'association pèse ce que son aide rend possible, pour qui, avec quelle probabilité et quelle gravité, plutôt que d'appliquer une liste. Plus le tort possible est grave, plus elle reste prudente quand un doute sérieux demeure. La personne qui la trompe porte la responsabilité de ce qu'elle en fait."
            ]
          }
        ]
      },
      {
        id: "intelligences",
        label: "Titre VI",
        title: "Les intelligences de l'association",
        articles: [
          {
            n: 24,
            title: "Honnêteté",
            paragraphs: [
              "Ce qu'une intelligence de l'association affirme en son propre nom ne trompe jamais celles et ceux qui s'en servent. Elle sert leur réflexion et ne la contourne jamais."
            ]
          },
          {
            n: 25,
            title: "Loyauté",
            paragraphs: [
              "Une intelligence de l'association sert la personne qui l'utilise, pas l'association ni une autorité cachée. Ce qu'elle lit l'informe, mais ne la commande pas."
            ]
          },
          {
            n: 26,
            title: "Un outil pour penser",
            paragraphs: [
              "Une intelligence de l'association sert toute réflexion, y compris celles que l'association ne partage pas, et en montre toujours les forces, les faiblesses et ce qui les contredit. La raison : un outil commun doit servir tout le monde, pas seulement celles et ceux qui pensent comme l'association."
            ]
          },
          {
            n: 27,
            title: "Autonomie",
            paragraphs: [
              "Une intelligence de l'association aide la personne à devenir plus autonome, jamais plus dépendante d'elle. Plus la personne est fragile, plus elle fait attention. Quand elle ne peut pas ou ne doit pas répondre, elle ne laisse jamais la personne sans piste : elle le dit, et indique où trouver l'aide ou l'information juste."
            ]
          },
          {
            n: 28,
            title: "Qui décide",
            paragraphs: [
              "Les représentant·es décident des valeurs et du comportement des intelligences de l'association, dans le respect de cette constitution, et les décrivent dans la charte des intelligences."
            ]
          }
        ]
      },
      {
        id: "data",
        label: "Titre VII",
        title: "Ce que les personnes confient",
        articles: [
          {
            n: 29,
            title: "Données",
            paragraphs: [
              "Ce qu'une personne confie à une intelligence de l'association lui appartient. Rien n'en est fait sans son accord explicite, tracé et révocable."
            ]
          }
        ]
      },
      {
        id: "work",
        label: "Titre VIII",
        title: "Le travail",
        articles: [
          {
            n: 30,
            title: "Travail",
            paragraphs: [
              "L'association n'exploite personne. Tout travail pour elle est libre, reconnu, et justement payé quand elle le demande. Celles et ceux qui y travaillent ont une voix dans ses décisions. La raison : quelqu'un qui travaille sur le projet le connaît de l'intérieur et peut réagir s'il s'égare."
            ]
          }
        ]
      },
      {
        id: "revision",
        label: "Titre IX",
        title: "Révision",
        articles: [
          {
            n: 31,
            title: "Modification",
            paragraphs: [
              "La constitution se modifie par un vote des représentant·es, à une majorité plus forte que celle des décisions courantes, fixée par les statuts. La raison : ce qui fixe le cadre de tout le reste doit être plus difficile à changer qu'une décision ordinaire."
            ]
          }
        ]
      }
    ]
  }
};
