# ADHDoTECH website

The public website of ADHDoTECH (www.adhdotech.org), in Hebrew and English. A static [Eleventy](https://www.11ty.dev/) site on Firebase Hosting, project `adt-website-28182`. Claude Code maintains and deploys it from this folder.

- The plan and every decision: map issue https://github.com/ADHDoTECH/ADT-website/issues/1 (GitHub Issues via `gh`).
- Vocabulary: [GLOSSARY.md](GLOSSARY.md) (Stage 1, Past Event, Members Area, Shared Password). Use its terms.
- The folder name ends in a space (`ADT Website `). Quote paths in shell commands.

## Build, preview, deploy

```bash
npm install          # once
npm run build        # clean build into _site/
npm start            # Eleventy dev server with live reload, http://localhost:8080
npm run preview      # build, then serve _site/ exactly as Firebase does (clean URLs, redirects, 404), http://localhost:5050
npm run deploy       # build, then firebase deploy --only hosting --project adt-website-28182
```

- Check pages with `npm run preview` before deploying: only it applies `firebase.json` (URLs without `.html`, redirects, the 404 page). `.claude/launch.json` has both servers for the browser preview.
- **Always pass `--project adt-website-28182`** to `firebase` commands (the npm scripts do). A global Firebase CLI setting maps `/` to another project, and it overrides `.firebaserc`.
- The Firebase CLI in this folder is signed in as `david@adhdotech.org`. Never run `firebase login:use` outside this folder: it changes the user's global default.
- Deploy from this machine, then commit and push every change to `main` on GitHub (`git` and `gh` use the `adt-dudi` / `david@adhdotech.org` identity here). There is no automatic deploy.
- After a deploy, open https://adt-website-28182.web.app to check it.

## How the site is built

- Hebrew is the main language, right-to-left, at the root: `src/about.md` → `/about`.
- English is left-to-right under `/en/`: `src/en/about.md` → `/en/about`.
- Paths keep the Wix paths (`/about`, `/post/<slug>`, `/en/about`). Every page builds to `<path>.html`, and Firebase serves it without `.html` (`cleanUrls`). See `eleventy.config.js`.
- `lang` and the layout come from the folder: `src/src.11tydata.json` (Hebrew) and `src/en/en.11tydata.json` (English). A page sets only its own front matter: `title`, and optionally `description`.
- The language switch links a page to the page with the same path in the other language (`/about` ↔ `/en/about`). When there is none, it links to the other language's home page.

## Where things belong

| What | Where | URL |
|---|---|---|
| Hebrew page | `src/<wix-path>.md` (home: `src/index.njk`) | `/<wix-path>` |
| English page | `src/en/<wix-path>.md`, same file name as the Hebrew page | `/en/<wix-path>` |
| Blog post | `src/post/<slug>.md`, the slug as on Wix | `/post/<slug>` |
| Past Events | data: `src/_data/pastEvents.json`, one entry per Past Event (title, date, description, image, recording link); listed by the events page | – |
| Media the pages use (images, PDFs) | `src/media/<Wix folder>/<file>`, resized for the web | `/media/...` |
| Members Area | encrypted with StatiCrypt; the Shared Password is never committed (issue 9) | – |
| Main menu | `src/_data/nav.js` | – |
| Header and footer words, email, social links | `src/_data/site.js` | – |
| Shared layout (header, menu, language switch, footer) | `src/_includes/layouts/base.njk` | – |
| Styles | `src/assets/site.css` (plain CSS, no framework) | `/assets/site.css` |
| Logo, favicon | `src/assets/` | `/assets/...` |
| Redirects for removed Wix pages | `redirects` in `firebase.json` | – |

- No videos or files over a few MB in git (GitHub rejects files over 100 MB). Where videos, recordings and the full media backup live is decided in issue 11.
- Nothing the site uses may point at `wixstatic.com`: copy the file into `src/media/`.
- Contact and Donate are email links to info@adhdotech.org (`site.js`). Stage 1 has no forms, payments or logins.
- Removed Wix pages redirect to the home page of their language (`/` or `/en/`), with a 301 in `firebase.json`.

## Look

From the Wix site: the logo (`src/assets/logo.svg`), the Heebo font (Google Fonts) and the logo's colours, defined once in `src/assets/site.css`:
pink `#eb0f8a`, orange `#f3911c`, green `#b7d555`, cyan `#50c2da`, blue `#18539b`.
Pink, orange and green are too light for small text on white: use them for decoration, blue or `--pink-text` (`#c4006f`) for text and buttons.
