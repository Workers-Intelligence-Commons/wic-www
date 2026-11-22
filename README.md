# wic-www

The public site of [Workers' Intelligence Commons](https://workers-intelligence-commons.org), in English and French. It is a static site built with [Astro](https://astro.build) and served by Cloudflare Workers from the domain `workers-intelligence-commons.org`.

The pages use the React components of the [WIC design system](https://github.com/Workers-Intelligence-Commons/wic-design-system), rendered to HTML at build time: the browser receives HTML, CSS and fonts, and no JavaScript.

## Layout

The repository is a Bun workspace.

- `apps/www` is the site. Pages are written once in `src/pages/[locale]/` and built once per locale: English under `/en/`, French under `/fr/`. The bare domain sends each visitor to their language, and `public/_redirects` sends the older English addresses, which had no prefix, to `/en/`. The text of every page lives in `src/copy/`, one file per page, with each language side by side; a missing translation is a type error. News posts are Markdown files in `src/content/news/<locale>/`.
- `apps/www/worker` runs only for `/` and `/lang/*`, every other path being a static file: it sends a visitor arriving at `/` to their browser's language, and remembers a choice made in the language menu in a `lang` cookie.
- `apps/www-redirect` is a Worker that redirects `www.workers-intelligence-commons.org` to the bare domain.
- `vendor/wic-design-system` is the design system, as a Git submodule. Its packages join the workspace and are built on install.
- `packages/` is for code shared between apps, and `apps/` is where a back end goes when the site needs one, as another Worker.

## Working on it

```sh
git clone --recurse-submodules https://github.com/Workers-Intelligence-Commons/wic-www.git
cd wic-www
bun install
bun run dev        # the site on http://localhost:4321
bun run ready      # type checks, build and dependency license check, as in CI
bun run deploy     # build and deploy both Workers (needs a Cloudflare login)
```

## Licenses

Code under `AGPL-3.0-or-later` (see `LICENSE`). Site text under `CC BY-SA 4.0`. The fonts come from the design system under `OFL-1.1`. The WPT, WIC and hub monograms are not licensed: all rights reserved.
