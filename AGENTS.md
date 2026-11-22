# Working on wic-www

Read `README.md` for the layout. These rules apply to every change.

## Text

- Every visible string goes in `apps/www/src/copy/`, in both English and French. Never write text in a page or component.
- Follow the content rules of the design system's README: say what is true including what is missing, no hype, no exclamation marks, no emoji, sentence case, lowercase italic kickers.
- Facts used on several pages (addresses, repositories, licenses) live in `apps/www/src/data/site.ts` only.
- A person is listed in `apps/www/src/data/contributors.ts`, and a donor named in the in-kind register, only after they agreed to it.
- Do not publish names of members or founders, or a personal address.

## Pages

- A new page is a file in `apps/www/src/pages/[...locale]/` using `localePaths`, the `Base` layout and a copy file; add it to the navigation in `copy/ui.ts` when it belongs there.
- A page has one `h1`: a `Slogan` (through `SloganText`, since Astro passes slot content to React as HTML) or the design system's `PageTitle`.
- Do not add client-side JavaScript unless a feature cannot work without it.

## Dependencies

- Every dependency must pass `bun run licenses`; the accepted licenses are listed in `scripts/check-licenses.ts`.
- Run `bun run ready` before committing.

## Deploying

- `bun run deploy` deploys both Workers with the Cloudflare account wrangler is logged in to.
- Regenerate `apps/www/public/og.png` from `apps/www/og/og.html` as described in that file when the slogan or the look changes.
