# Wix page capture (2026-11-06)

The visible content of every public page on the Wix site, in Hebrew (`he/`) and English (`en/`). It was captured on the day Wix Premium ended, so the site can be rebuilt in Eleventy without Wix.

One file per page and language, named after the Wix slug (`home` is `/` and `/en`). `_menu-footer.md` holds the header, main menu and footer of each language.

`/about-1` (ערכת מנטורים, the mentor kit) is password-protected, so it was not captured. The same goes for `/mentor-info`, which needs a member login.

## How it was captured

- **Text and layout:** taken from the server-rendered HTML of the live pages, read in document order. That order is close to what a visitor sees, top to bottom.
- **Slideshows, videos and vector images:** Wix only renders these in the browser, so they come from the site's published page data (`static.wixstatic.com/sites/<page>.json.z`). English text comes from that file's `translations.en`.
- **Contact form options and the Wix Video app video:** read in a browser.

## Notation

| In the file | Meaning |
|---|---|
| `---` front matter | `source` URL, the page `<title>`, meta `description` and `og_image` as Wix serves them (several English pages still carry Hebrew titles and descriptions). |
| `![Image: alt](https://static.wixstatic.com/media/…)` | An image at that point on the page. The URL is the original upload, with Wix's resize parameters removed. The text after `Image:` is the alt text Wix has. |
| `(section background)` | The image is the background of the section that follows. |
| `![Vector image: alt](https://static.wixstatic.com/shapes/….svg)` | An SVG (logos, illustrations). |
| `[![Image…](…)](link)` | A linked image, such as a social icon or LinkedIn badge. |
| `[Button: label](link)` | A button. |
| `[Document: file name](…/_files/ugd/….pdf)` | A downloadable file. |
| `[Video: title — file …](https://video.wixstatic.com/…/file.mp4)` | An embedded Wix video, with the direct MP4 URL (it works without login). |
| `<!-- slideshow …: slide N of M — title -->` | Each slide of a carousel, in order. Only the first slide shows at a time on the live page. |
| `<!-- … -->` (other comments) | Notes from the capture, such as a translation fault or a field that isn't text. |

Headings keep the level Wix gave them, so some pages start at `##` or use `#` more than once. Text is kept as published, typos included.

## Known oddities on the live site (kept as published)

- **English home testimonials:** slide 3 repeats slide 2's quote, and the "tlv tech" logo slide shows the "הבית של תמר" logo.
- **English contact form:** several labels and dropdown options are still in Hebrew.
- **Menu labels:** the English menu calls the mentor kit "About", the lecture recordings "Resources" and the press page "Projects".
- **Machine-translated names:** the English press page translates "דודי צור" literally in places ("Uncle Tzur", "Duddy Tzur", "David Tzur").
- **Template text:** `qmark-mapping` is all Wix placeholder text. The video players on `events-recording` and `mentoring-program` are titled "Your Video Title".
- **Wix Video app video:** the home page video comes from the Wix Video app (video id `fda54b_d3ac6a07e0814214a5155e73ed680636`). Its direct file returns 403, so it has to be downloaded from the Wix dashboard.
- **Template values:** `donation-thank-you-page` shows template placeholders ("שם התורמ/ת", 0 ₪, donation number 1000).
- **No events:** `blank-1` (Events) is the Wix Events widget, and it currently says there are no events.
