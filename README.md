# ADHDoTECH website

The website of ADHDoTECH, an Israeli nonprofit unlocking ADHD talent in high-tech: www.adhdotech.org, in Hebrew and English.

A static site built with [Eleventy](https://www.11ty.dev/) and served by Firebase Hosting (project `adt-website-28182`, test address https://adt-website-28182.web.app). It replaces the old Wix site and keeps its page addresses.

## Working on it

Needs Node.js 20 or later and the Firebase CLI.

```bash
npm install
npm start          # local site with live reload: http://localhost:8080
npm run preview    # the built site as Firebase serves it: http://localhost:5050
npm run deploy     # publish to Firebase Hosting
```

- Hebrew pages live in `src/`, English pages in `src/en/`.
- Where each kind of content goes, and how deploys work: [CLAUDE.md](CLAUDE.md).
- The plan and decisions: [issue 1](https://github.com/ADHDoTECH/ADT-website/issues/1). Vocabulary: [GLOSSARY.md](GLOSSARY.md).
