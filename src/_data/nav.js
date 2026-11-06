// The main menu, per language, in the Wix site's order (www.adhdotech.org, 2026-11-06).
// Paths keep the Wix paths. A link to a page that is not built yet shows the 404 page.
// Labels are as on Wix; open questions about them (such as "About" appearing twice
// in English) are on https://github.com/ADHDoTECH/ADT-website/issues/7.

export default {
  he: [
    { label: "אודות", href: "/about" },
    { label: "שירותים לארגונים", href: "/org-solutions" },
    {
      label: "תוכנית המנטורינג",
      href: "/mentoring-program",
      children: [{ label: "ערכת מנטורים", href: "/about-1" }],
    },
    {
      label: "אירועים",
      href: "/blank-1",
      children: [{ label: "הרצאות אחרונות", href: "/events-recording" }],
    },
    { label: "כתבו עלינו בעיתונות", href: "/s-projects-side-by-side" },
    { label: "מידע נוסף על השירותים", href: "/onpager" },
    { label: "Blog", href: "/blog" },
  ],

  en: [
    { label: "About", href: "/en/about" },
    { label: "Services for organizations", href: "/en/org-solutions" },
    {
      label: "Mentoring Program",
      href: "/en/mentoring-program",
      children: [{ label: "About", href: "/en/about-1" }],
    },
    {
      label: "Events",
      href: "/en/blank-1",
      children: [{ label: "Resources", href: "/en/events-recording" }],
    },
    { label: "Projects", href: "/en/s-projects-side-by-side" },
    { label: "More info", href: "/en/onpager" },
    { label: "Blog", href: "/en/blog" },
  ],
};
