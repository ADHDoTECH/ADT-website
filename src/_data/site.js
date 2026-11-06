// Site-wide settings and the interface words of the shared layout, per language.
// Page text does not belong here: it lives in each page's own file.

const email = "info@adhdotech.org";

export default {
  name: "ADHDoTECH",
  url: "https://www.adhdotech.org",
  email,
  tagline: "Unlocking ADHD Talents in High-Tech",

  // Contact and Donate are email links (no forms or payments in Stage 1).
  contactHref: `mailto:${email}`,

  social: [
    { name: "Instagram", href: "https://www.instagram.com/adhdotech/" },
    { name: "Facebook", href: "https://www.facebook.com/groups/604119371278871" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/adhdotech/" },
    { name: "YouTube", href: "https://www.youtube.com/@ADHDoTECH" },
  ],

  he: {
    dir: "rtl",
    home: "/",
    languageName: "עברית",
    skipToContent: "דלג לתוכן",
    menuLabel: "תפריט ראשי",
    homeLabel: "דף הבית",
    contact: "צרו קשר",
    donate: "תרמו לעמותה",
    donateHref: `mailto:${email}?subject=${encodeURIComponent("תרומה לעמותה")}`,
    followUs: "עקבו אחרינו",
    rights: "כל הזכויות שמורות.",
  },

  en: {
    dir: "ltr",
    home: "/en/",
    languageName: "English",
    skipToContent: "Skip to content",
    menuLabel: "Main menu",
    homeLabel: "Home",
    contact: "Contact us",
    donate: "Donate",
    donateHref: `mailto:${email}?subject=${encodeURIComponent("Donation")}`,
    followUs: "Follow us",
    rights: "All rights reserved.",
  },
};
