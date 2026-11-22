import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import type { Locale } from "../../../i18n/locales.ts";
import { postsIn, slugOf } from "../../../i18n/news.ts";
import { localePaths, pathFor } from "../../../i18n/routes.ts";
import { news } from "../../../copy/news.ts";
import { site } from "../../../data/site.ts";

export const getStaticPaths = localePaths;

export async function GET(context: APIContext) {
  const locale = context.props.locale as Locale;
  const posts = await postsIn(locale);
  return rss({
    title: `${site.name}: ${news[locale].title}`,
    description: news[locale].description,
    site: context.site ?? site.url,
    customData: `<language>${locale}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: pathFor(locale, `news/${slugOf(post)}`),
    })),
  });
}
