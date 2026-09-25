export const siteConfig = {
  siteName: "Abitu",
  siteUrl: "https://abitu.ge",
  defaultLanguage: "ka-GE",
  defaultLocale: "ka_GE",
  brand: "Abitu",
  keywords: [
    "აბიტურიენტი",
    "ჩარიცხვის სიმულატორი",
    "უნივერსიტეტის არჩევა",
    "საგამოცდო მომზადება",
    "საკონკურსო ქულა",
    "აბიტურიენტების პლატფორმა",
    "უნივერსიტეტის შერჩევა",
    "ეროვნული გამოცდები",
  ],
};

export const homepageSeo = {
  title: "Abitu — ჩარიცხვის სიმულატორი, უნივერსიტეტის არჩევა და მომზადება",
  description:
    "Abitu გეხმარებათ უნივერსიტეტის არჩევაში, ჩარიცხვის სიმულატორის გამოყენებით და გამოცდების მომზადებით ერთ სივრცეში.",
  canonical: "https://abitu.ge/",
  ogTitle: "Abitu — N1 პლატფორმა აბიტურიენტებისთვის",
  ogDescription:
    "გაიგე შენი ჩარიცხვის შანსები, შეარჩიე უნივერსიტეტი და მოემზადე ეროვნული გამოცდებისთვის ერთ სივრცეში.",
};

export const servicePagesSeo = {
  admissionSimulator: {
    title:
      "ჩარიცხვის სიმულატორი | შეადარე უნივერსიტეტები და გაითვალე საკონკურსო ქულა | Abitu",
    description:
      "გაითვალე სავარაუდო საკონკურსო ქულა, შეადარე უნივერსიტეტები და ნახე, რომელ პროგრამაზე გაქვს საუკეთესო შანსი.",
    canonical: "https://abitu.ge/#pricing",
  },
  universitySelection: {
    title: "უნივერსიტეტის არჩევა | როგორ ავირჩიოთ სწორი პროგრამა | Abitu",
    description:
      "გაეცანით, როგორ უნდა შეარჩიოთ უნივერსიტეტი და პროგრამა, რათა მაქსიმალურად გაზარდოთ თქვენი წარმატების შანსი და სწორი არჩევანი.",
    canonical: "https://abitu.ge/#features",
  },
};

export const topicClusters = [
  {
    pillar: "Abitu University Preparation",
    slug: "/",
    cluster: [
      "How to choose a university in Georgia",
      "How to estimate your admission score",
      "Best preparation strategy for university entrance exams",
      "How admission simulators work",
      "University comparison guide for applicants",
    ],
  },
];

export const articleIdeas = [
  {
    title:
      "როგორ ავირჩიოთ უნივერსიტეტი საქართველოში — 7 ფაქტორი, რომელიც უნდა გაითვალისწინოთ",
    keyword: "როგორ ავირჩიოთ უნივერსიტეტი საქართველოში",
    intent: "informational",
  },
  {
    title:
      "ჩარიცხვის სიმულატორი — როგორ გვეხმარება აბიტურიენტის გადაწყვეტილების მიღებაში",
    keyword: "ჩარიცხვის სიმულატორი",
    intent: "commercial",
  },
  {
    title: "საკონკურსო ქულების გაანგარიშება — რა უნდა იცოდეთ წინასწარ",
    keyword: "საკონკურსო ქულა",
    intent: "informational",
  },
  {
    title: "აბიტურიენტებისთვის საუკეთესო მომზადების სტრატეგია 2026 წლისთვის",
    keyword: "აბიტურიენტებისთვის მომზადება",
    intent: "commercial",
  },
  {
    title:
      "უნივერსიტეტების შედარება — რას უნდა გაითვალისწინოთ პროგრამის არჩევისას",
    keyword: "უნივერსიტეტების შედარება",
    intent: "commercial",
  },
];

export function createPageSeo({
  title,
  description,
  canonical,
  keywords = [],
}) {
  return {
    title,
    description,
    canonical,
    keywords: [...new Set([...siteConfig.keywords, ...keywords])],
  };
}

export function applySeoMeta({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  image = "https://abitu.ge/mainlogo.png",
  keywords = [],
}) {
  if (typeof document === "undefined") return;

  document.title = title;

  const setMeta = (selector, value, attr = "name") => {
    const selectorString =
      attr === "name"
        ? `meta[name="${selector}"]`
        : `meta[property="${selector}"]`;

    const tag = document.querySelector(selectorString);

    if (tag) {
      tag.setAttribute("content", value);
      return;
    }

    const newTag = document.createElement("meta");
    newTag.setAttribute(attr, selector);
    newTag.setAttribute("content", value);
    document.head.appendChild(newTag);
  };

  setMeta("description", description);
  setMeta(
    "keywords",
    [...new Set([...siteConfig.keywords, ...keywords])].join(", "),
  );
  setMeta(
    "robots",
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  );
  setMeta("theme-color", "#00C58B");
  setMeta("og:locale", "ka_GE", "property");
  setMeta("og:site_name", siteConfig.siteName, "property");
  setMeta("og:title", ogTitle, "property");
  setMeta("og:description", ogDescription, "property");
  setMeta("og:type", "website", "property");
  setMeta("og:url", canonical, "property");
  setMeta("og:image", image, "property");
  setMeta("og:image:alt", title, "property");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", ogTitle);
  setMeta("twitter:description", ogDescription);
  setMeta("twitter:image", image);

  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute("href", canonical);
}
