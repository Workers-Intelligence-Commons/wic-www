// People thanked on the contributors page. A person is listed only after they agreed to it,
// under the name they chose; anyone can ask to be removed.
export interface Contributor {
  name: string;
  /** Optional link the person chose: a profile or a personal site. */
  url?: string;
  /** What they gave, in the words they agreed to, per locale. */
  for: { en: string; fr: string };
}

export const contributors: Contributor[] = [];

/** Gifts in kind (hardware, compute hours, services), recorded the day they are received. */
export interface InKindGift {
  date: string;
  /** The giver's name, or null when they asked to stay anonymous. */
  giver: string | null;
  what: { en: string; fr: string };
  use: { en: string; fr: string };
}

export const inKindGifts: InKindGift[] = [];
