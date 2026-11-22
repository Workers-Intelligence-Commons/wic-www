// Reads the news collection for one locale, newest first.
import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "./locales.ts";

export type Post = CollectionEntry<"news">;

export function slugOf(post: Post): string {
  return post.id.split("/").slice(1).join("/");
}

export function localeOf(post: Post): Locale {
  return post.id.split("/")[0] as Locale;
}

export async function postsIn(locale: Locale): Promise<Post[]> {
  const posts = await getCollection("news", (p) => localeOf(p) === locale);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
