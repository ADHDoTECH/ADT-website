// Eleventy configuration for the ADHDoTECH website.
// Pages build to `<path>.html` files and Firebase serves them without the
// extension (`cleanUrls` in firebase.json), so URLs keep the Wix shape:
// `/about`, `/post/<slug>`, `/en/about`.

export default function (eleventyConfig) {
  // Copied to the output as they are.
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/media");

  // Every page builds to `<file path>.html` (src/about.md -> _site/about.html).
  // A page can still set its own `permalink` in front matter.
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });

  // Page URLs without `.html`, matching what Firebase serves.
  eleventyConfig.addUrlTransform((page) => {
    if (page.url.endsWith("/index.html")) {
      return page.url.slice(0, -"index.html".length);
    }
    if (page.url.endsWith(".html")) {
      return page.url.slice(0, -".html".length);
    }
  });

  // The same page in the other language: `/about` <-> `/en/about`.
  // Returns null when that page does not exist (for example a Hebrew-only
  // blog post); the layout then links the language switch to the other home page.
  eleventyConfig.addFilter("counterpart", (url, lang, pages) => {
    const target =
      lang === "he" ? (url === "/" ? "/en/" : `/en${url}`) : url.replace(/^\/en(\/|$)/, "/");
    return (pages || []).some((p) => p.url === target) ? target : null;
  });

  // Marks the menu item for the current page (or a page under it).
  eleventyConfig.addFilter("isCurrent", (href, url) => {
    if (href === url) return true;
    return href !== "/" && href !== "/en/" && url.startsWith(`${href}/`);
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
