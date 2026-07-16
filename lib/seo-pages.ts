export type SeoPage = {
  slug: string
  title: string
  keyword: string
  intent: "Commercial" | "GEO" | "Guide" | "Lead Gen"
  h1: string
  metaTitle: string
  metaDescription: string
  intro: string
  sections: Array<{ heading: string; body: string }>
  bullets: string[]
  faqs: Array<{ question: string; answer: string }>
  internalLinks: Array<{ label: string; href: string }>
  cta: string
}

export const seoPages: SeoPage[] = [
  {
    slug: "hair-extensions-wholesale-uk",
    title: "Hair Extensions Wholesale UK",
    keyword: "hair extensions wholesale uk",
    intent: "Commercial",
    h1: "Hair Extensions Wholesale UK",
    metaTitle: "Hair Extensions Wholesale UK for Salons | D.S Hair Beauty",
    metaDescription:
      "Wholesale human hair extensions for UK salons, stylists and trade buyers. Factory-direct supplier with UK-warehoused stock, trade account support and colour matching.",
    intro:
      "D.S Hair Beauty supplies professional salons and stylists with 100% Remy human hair extensions, trade account support and practical wholesale ordering from UK-warehoused stock.",
    sections: [
      {
        heading: "Wholesale supply built for salon buyers",
        body: "Salon owners need consistent quality, fast restocking and clear trade pricing. Our wholesale range covers tape-in, nano ring, K-tip, genius weft, butterfly weft, hair toppers and aftercare products for professional use.",
      },
      {
        heading: "Why UK salons choose D.S Hair Beauty",
        body: "We focus on salon-friendly support: colour matching, product guidance, trade account access, WhatsApp support and a professional range designed for repeat client services rather than one-off retail orders.",
      },
      {
        heading: "Who this page is for",
        body: "This wholesale route is for independent salons, freelance extensionists, mobile stylists, hair boutiques and beauty businesses that need reliable UK/EU hair extension supply.",
      },
    ],
    bullets: [
      "100% Remy human hair extension options",
      "Trade account route for salon and stylist buyers",
      "UK-warehoused support for UK and EU customers",
      "Colour matching help before ordering",
      "Professional categories for multiple extension methods",
    ],
    faqs: [
      {
        question: "Do you supply hair extensions wholesale to UK salons?",
        answer:
          "Yes. D.S Hair Beauty is positioned for UK salons, stylists and trade buyers looking for professional hair extension supply.",
      },
      {
        question: "Can small salons apply for trade access?",
        answer:
          "Yes. Independent salons and freelance stylists can use the salon partner and trade enquiry route to discuss suitable products and pricing.",
      },
      {
        question: "Do you offer colour matching?",
        answer:
          "Yes. Colour matching support is available to help salons choose the right shades before ordering.",
      },
    ],
    internalLinks: [
      { label: "Apply for a salon trade account", href: "/salon-partners" },
      { label: "Read the wholesale buying guide", href: "/blog/wholesale-hair-extensions-uk" },
      { label: "Request colour matching", href: "/colour-match" },
    ],
    cta: "Apply for Trade Account",
  },
  {
    slug: "hair-extension-supplier-manchester",
    title: "Hair Extension Supplier Manchester",
    keyword: "hair extension supplier manchester",
    intent: "GEO",
    h1: "Hair Extension Supplier — UK-Warehoused in Manchester",
    metaTitle: "Factory-Direct Hair Extension Supplier Manchester | D.S Hair Beauty",
    metaDescription:
      "Factory-direct hair extension manufacturer with UK-warehoused stock in Manchester. Serving salons, stylists and trade buyers across the UK with trade pricing and colour support.",
    intro:
      "D.S Hair Beauty is a factory-direct manufacturer. Our UK-warehoused stock in Manchester means salons get fast delivery with manufacturer pricing — no middleman markup.",
    sections: [
      {
        heading: "Factory-direct supply. UK-warehoused in Manchester.",
        body: "Unlike wholesalers who buy from importers and mark up again, D.S Hair Beauty sources directly from China's leading Remy hair manufacturers. Stock is held in Manchester for fast UK delivery — so you get factory-direct quality with local fulfilment speed.",
      },
      {
        heading: "Professional product range",
        body: "The range includes popular salon methods such as tape-in, nano ring, K-tip, weft and topper solutions, plus aftercare and accessories to support repeat client maintenance.",
      },
      {
        heading: "Trade support beyond product listings",
        body: "The goal is not only to sell hair. It is to support salon buyers with colour matching, product selection and a straightforward route to trade pricing at manufacturer rates.",
      },
    ],
    bullets: [
      "Factory-direct manufacturer pricing",
      "UK-warehoused stock in Manchester",
      "Trade account pathway for salons",
      "Professional extension methods and aftercare",
      "Colour matching and WhatsApp support",
      "Useful for salons, mobile stylists and beauty studios",
    ],
    faqs: [
      {
        question: "Where is your stock held?",
        answer:
          "Our stock is warehoused in Manchester, UK. We source factory-direct from manufacturers in China — so you get manufacturer pricing with fast UK delivery.",
      },
      {
        question: "Can Manchester salons open a trade account?",
        answer:
          "Yes. Salons and stylists can apply through the salon partner route or contact the team directly.",
      },
      {
        question: "Do you only supply Manchester?",
        answer:
          "No. We supply salons across the UK and EU from our UK-warehoused stock, with fast delivery nationwide.",
      },
    ],
    internalLinks: [
      { label: "Open a salon partner account", href: "/salon-partners" },
      { label: "Explore professional extensions", href: "/collections/tape-in" },
      { label: "Contact the team", href: "/contact" },
    ],
    cta: "Request Trade Pricing",
  },
  {
    slug: "hair-extensions-for-salons-uk",
    title: "Hair Extensions for Salons UK",
    keyword: "hair extensions for salons uk",
    intent: "Commercial",
    h1: "Hair Extensions for Salons UK",
    metaTitle: "Hair Extensions for Salons UK | Professional Trade Supply",
    metaDescription:
      "Professional hair extensions for UK salons and stylists with trade account support, colour matching and salon-friendly product options.",
    intro:
      "D.S Hair Beauty helps UK salons choose professional hair extension methods, maintain consistent quality and create repeatable client services.",
    sections: [
      {
        heading: "Built around salon workflows",
        body: "Salon buyers need products that fit consultation, installation, maintenance and aftercare workflows. This page positions D.S Hair Beauty around professional outcomes, not only product browsing.",
      },
      {
        heading: "Extension methods for different client needs",
        body: "Tape-in, nano ring, K-tip, weft and topper solutions all serve different clients. The site should route stylists to method pages, colour matching and trade support.",
      },
      {
        heading: "Support for small salons",
        body: "Small salons often need flexible ordering, clear advice and a supplier that understands lower volume testing before scaling a full service menu.",
      },
    ],
    bullets: [
      "Professional range for salon services",
      "Trade account and salon partner route",
      "Colour support before ordering",
      "Aftercare content for client retention",
      "Suitable for salons, mobile stylists and beauty studios",
    ],
    faqs: [
      {
        question: "What hair extensions are best for salons?",
        answer:
          "The best method depends on the client, hair type, maintenance habits and service price point. Tape-in, nano ring, K-tip and weft options each have different strengths.",
      },
      {
        question: "Can I order for a small salon?",
        answer:
          "Yes. The salon partner route is designed to support independent salons and stylists as well as larger trade buyers.",
      },
      {
        question: "Do you provide aftercare guidance?",
        answer:
          "Yes. Aftercare content and product guidance help salons support clients after installation.",
      },
    ],
    internalLinks: [
      { label: "Apply for salon partners", href: "/salon-partners" },
      { label: "Read aftercare guide", href: "/blog/hair-extension-aftercare-guide" },
      { label: "Compare methods", href: "/blog/hair-extension-methods-comparison" },
    ],
    cta: "Request Salon Trade Pricing",
  },
  {
    slug: "tape-in-hair-extensions-wholesale-uk",
    title: "Tape In Hair Extensions Wholesale UK",
    keyword: "tape in hair extensions wholesale uk",
    intent: "Commercial",
    h1: "Tape In Hair Extensions Wholesale UK",
    metaTitle: "Tape In Hair Extensions Wholesale UK | Salon Trade Supply",
    metaDescription:
      "Wholesale tape-in human hair extensions for UK salon professionals, stylists and trade buyers.",
    intro:
      "Tape-in extensions are a core salon service category because they are efficient to apply, easy to maintain and suitable for many client transformations.",
    sections: [
      {
        heading: "Why tape-in extensions work for salons",
        body: "Tape-in services can be positioned as a premium but repeatable salon offer. They are useful for volume, length and colour effects when supported by good consultation and aftercare.",
      },
      {
        heading: "Wholesale buying considerations",
        body: "Salon buyers should check hair quality, shade range, tape reliability, packaging, aftercare advice and restocking speed before choosing a wholesale supplier.",
      },
      {
        heading: "How D.S Hair Beauty can support",
        body: "The page connects product demand to trade account applications, colour matching and method education, helping search visitors become qualified salon leads.",
      },
    ],
    bullets: [
      "Professional tape-in category page",
      "Targets commercial wholesale search intent",
      "Supports salons and mobile stylists",
      "Links into method education and trade account conversion",
      "Useful for SEO and product discovery",
    ],
    faqs: [
      {
        question: "Are tape-in extensions suitable for salon trade buyers?",
        answer:
          "Yes. Tape-in extensions are one of the most searched professional extension methods and work well as a salon service category.",
      },
      {
        question: "Do clients need aftercare?",
        answer:
          "Yes. Proper aftercare helps protect the result and supports repeat maintenance appointments.",
      },
      {
        question: "Can I request trade pricing?",
        answer:
          "Yes. Use the salon partner or contact route to discuss trade access and suitable product options.",
      },
    ],
    internalLinks: [
      { label: "View tape-in collection", href: "/collections/tape-in" },
      { label: "Apply for trade account", href: "/salon-partners" },
      { label: "Read tape-in guide", href: "/blog/tape-in-extensions-guide" },
    ],
    cta: "Browse Tape-In Range",
  },
  {
    slug: "hair-extension-supplier-london",
    title: "Hair Extension Supplier London",
    keyword: "hair extension supplier london",
    intent: "GEO",
    h1: "Hair Extension Supplier London",
    metaTitle: "Hair Extension Supplier London for Salons | D.S Hair Beauty",
    metaDescription:
      "Professional hair extension supply for London salons, stylists and trade buyers with trade account support and colour matching.",
    intro:
      "D.S Hair Beauty supports London salons and mobile stylists with professional Remy human hair extensions, colour matching and trade account access.",
    sections: [
      {
        heading: "Serving London salon buyers",
        body: "London salons often need fast communication, dependable shade guidance and a professional extension range that works across premium client services. This page gives London searches a focused route into trade enquiries.",
      },
      {
        heading: "Products for salon service menus",
        body: "Tape-in, nano ring, K-tip, weft and topper solutions can support different client needs, from volume and length to thinning hair coverage and maintenance appointments.",
      },
      {
        heading: "From local search to trade enquiry",
        body: "The page is designed to convert location-based search traffic into salon partner applications, colour matching requests and WhatsApp conversations.",
      },
    ],
    bullets: [
      "London-focused landing page for local salon search",
      "Trade account route for salons and freelance stylists",
      "Colour matching support before ordering",
      "Internal links to method guides and salon partner pages",
      "Useful for Google local relevance and long-tail discovery",
    ],
    faqs: [
      {
        question: "Do you supply London salons?",
        answer:
          "Yes. D.S Hair Beauty serves UK salon buyers, including London salons, stylists and mobile extensionists.",
      },
      {
        question: "Can London stylists request trade pricing?",
        answer:
          "Yes. Stylists and salon owners can apply through the salon partner route or contact the team.",
      },
      {
        question: "Can I get help choosing shades?",
        answer:
          "Yes. Colour matching support helps salons select suitable shades before placing trade orders.",
      },
    ],
    internalLinks: [
      { label: "Apply for salon partners", href: "/salon-partners" },
      { label: "Request colour matching", href: "/colour-match" },
      { label: "Read the wholesale guide", href: "/blog/wholesale-hair-extensions-uk" },
    ],
    cta: "Request London Trade Pricing",
  },
  {
    slug: "hair-extension-supplier-birmingham",
    title: "Hair Extension Supplier Birmingham",
    keyword: "hair extension supplier birmingham",
    intent: "GEO",
    h1: "Hair Extension Supplier Birmingham",
    metaTitle: "Hair Extension Supplier Birmingham | Salon Trade Supply",
    metaDescription:
      "Hair extension supplier for Birmingham salons and stylists. Trade account support, professional ranges and colour matching.",
    intro:
      "Birmingham salons can use D.S Hair Beauty as a trade-focused route for professional hair extensions, shade guidance and salon support.",
    sections: [
      {
        heading: "A supplier route for Birmingham salons",
        body: "Independent salons and mobile stylists in Birmingham need flexible access to quality hair, practical method guidance and reliable communication when ordering for client appointments.",
      },
      {
        heading: "Professional methods and aftercare",
        body: "The page connects Birmingham search demand to tape-in, nano ring, K-tip, weft, topper and aftercare content so visitors can move from research to trade enquiry.",
      },
      {
        heading: "Designed for lead capture",
        body: "Calls to action point toward salon partner applications, WhatsApp conversations and colour matching, which are stronger conversion actions than a generic product browse.",
      },
    ],
    bullets: [
      "Birmingham GEO page for salon supplier searches",
      "Built for trade account and WhatsApp conversion",
      "Supports small salons and freelance extensionists",
      "Connects product methods to guides and aftercare",
      "Adds another UK city signal for SEO",
    ],
    faqs: [
      {
        question: "Can Birmingham salons work with D.S Hair Beauty?",
        answer:
          "Yes. Birmingham salon owners and stylists can apply for salon partner support or contact the team directly.",
      },
      {
        question: "Which extension methods are available?",
        answer:
          "The site supports professional categories including tape-in, nano ring, K-tip, weft, toppers and aftercare.",
      },
      {
        question: "Is this only for large salons?",
        answer:
          "No. The positioning is suitable for independent salons, mobile stylists and growing beauty businesses.",
      },
    ],
    internalLinks: [
      { label: "Open a salon account", href: "/salon-partners" },
      { label: "Compare extension methods", href: "/blog/hair-extension-methods-comparison" },
      { label: "Contact the team", href: "/contact" },
    ],
    cta: "Apply for Birmingham Trade Support",
  },
  {
    slug: "nano-ring-hair-extensions-wholesale-uk",
    title: "Nano Ring Hair Extensions Wholesale UK",
    keyword: "nano ring hair extensions wholesale uk",
    intent: "Commercial",
    h1: "Nano Ring Hair Extensions Wholesale UK",
    metaTitle: "Nano Ring Hair Extensions Wholesale UK | D.S Hair Beauty",
    metaDescription:
      "Wholesale nano ring hair extensions for UK salons, mobile stylists and professional trade buyers.",
    intro:
      "Nano ring extensions are a useful professional category for salons serving clients who want strand-by-strand extensions without heat or glue.",
    sections: [
      {
        heading: "Why nano ring pages matter for SEO",
        body: "Nano ring searches are highly commercial because stylists and clients already know the method. A dedicated wholesale page helps capture buyers looking for a supplier rather than general education.",
      },
      {
        heading: "Salon buying considerations",
        body: "Professional buyers should compare hair quality, ring compatibility, shade range, installation tools, aftercare support and restocking reliability.",
      },
      {
        heading: "Trade support route",
        body: "This page routes nano ring search visitors to collection pages, method education and salon partner applications for a tighter conversion path.",
      },
    ],
    bullets: [
      "Targets a commercial method-specific keyword",
      "Useful for professional stylists and small salons",
      "Links to nano collection and salon partner pages",
      "Supports colour matching and trade pricing enquiries",
      "Adds topical depth around professional extensions",
    ],
    faqs: [
      {
        question: "Are nano ring extensions suitable for professional salons?",
        answer:
          "Yes. Nano ring extensions are a common professional method when applied by trained stylists and supported with proper aftercare.",
      },
      {
        question: "Can I request trade access for nano rings?",
        answer:
          "Yes. Use the salon partner route to discuss trade access and suitable product options.",
      },
      {
        question: "Do I need colour matching?",
        answer:
          "Colour matching is recommended so the final result blends naturally with the client's hair.",
      },
    ],
    internalLinks: [
      { label: "View nano ring collection", href: "/collections/nano-extensions" },
      { label: "Apply for trade account", href: "/salon-partners" },
      { label: "Read nano ring guide", href: "/blog/nano-ring-extensions-guide" },
    ],
    cta: "Request Nano Ring Trade Pricing",
  },
  {
    slug: "salon-hair-extension-starter-bundle",
    title: "Salon Hair Extension Starter Bundle",
    keyword: "salon hair extension starter bundle",
    intent: "Lead Gen",
    h1: "Salon Hair Extension Starter Bundle",
    metaTitle: "Salon Hair Extension Starter Bundle | D.S Hair Beauty",
    metaDescription:
      "Starter bundle ideas for salons adding or expanding hair extension services in the UK.",
    intro:
      "A starter bundle helps new salon partners test extension methods, shades, tools and aftercare products without building an oversized stock position.",
    sections: [
      {
        heading: "What a starter bundle should include",
        body: "A practical starter set can include a focused method range, a small shade selection, installation tools, aftercare products and client education materials.",
      },
      {
        heading: "Designed for small salons",
        body: "Small salons often need a manageable launch kit that supports real appointments while protecting cash flow. The goal is to start with proven service demand and scale based on client response.",
      },
      {
        heading: "Turn bundle interest into trade leads",
        body: "This page captures salons that are ready to add extension services and routes them into salon partner applications and direct consultation.",
      },
    ],
    bullets: [
      "Lead magnet page for new salon partners",
      "Supports small salon and mobile stylist buyers",
      "Connects product range, tools and aftercare",
      "Good landing page for email and social campaigns",
      "Encourages higher-value bundle enquiries",
    ],
    faqs: [
      {
        question: "Who needs a starter bundle?",
        answer:
          "Starter bundles are useful for salons or stylists launching hair extension services or expanding into a new method.",
      },
      {
        question: "Can the bundle be customised?",
        answer:
          "Yes. The ideal product mix depends on the salon's services, target clients and preferred extension methods.",
      },
      {
        question: "Does a starter bundle include aftercare?",
        answer:
          "Aftercare is recommended because it supports client results, maintenance appointments and repeat product sales.",
      },
    ],
    internalLinks: [
      { label: "Apply for salon partners", href: "/salon-partners" },
      { label: "Read aftercare guide", href: "/blog/hair-extension-aftercare-guide" },
      { label: "Explore trade wholesale", href: "/trade-wholesale" },
    ],
    cta: "Build a Starter Bundle",
  },
  {
    slug: "hair-extension-supplier-leeds",
    title: "Hair Extension Supplier Leeds",
    keyword: "hair extension supplier leeds",
    intent: "GEO",
    h1: "Hair Extension Supplier Leeds",
    metaTitle: "Hair Extension Supplier Leeds | D.S Hair Beauty",
    metaDescription:
      "Hair extension supplier for Leeds salons and stylists, with trade account support and professional product guidance.",
    intro:
      "D.S Hair Beauty supports Leeds salons and stylists with professional hair extension categories, trade account access and colour matching support.",
    sections: [
      {
        heading: "Leeds salon search demand",
        body: "Local supplier pages help salons find a relevant trade route when they search by city. This page creates a specific landing path for Leeds-based stylists and beauty businesses.",
      },
      {
        heading: "Product categories for salon growth",
        body: "The page links commercial buyers into tape-in, nano ring, K-tip, weft and topper content so visitors can quickly find the right method.",
      },
      {
        heading: "Conversion-focused support",
        body: "The strongest next steps are salon partner application, colour matching and direct contact rather than passive browsing.",
      },
    ],
    bullets: [
      "Leeds-specific GEO page",
      "Supports salon and mobile stylist enquiries",
      "Links city searches to trade account conversion",
      "Adds UK coverage beyond Manchester and London",
      "Useful for internal linking and sitemap expansion",
    ],
    faqs: [
      {
        question: "Do you work with Leeds salons?",
        answer:
          "Yes. Leeds salons and stylists can use the salon partner or contact route to discuss trade supply.",
      },
      {
        question: "Can mobile stylists enquire?",
        answer:
          "Yes. Mobile stylists are a relevant trade buyer group for D.S Hair Beauty.",
      },
      {
        question: "What is the best next step?",
        answer:
          "Apply for salon partner support or request colour matching if you already have client requirements.",
      },
    ],
    internalLinks: [
      { label: "Apply for salon partner support", href: "/salon-partners" },
      { label: "Request colour matching", href: "/colour-match" },
      { label: "Read supplier guide", href: "/blog/how-to-choose-hair-extension-supplier" },
    ],
    cta: "Request Leeds Trade Support",
  },
  {
    slug: "hair-extension-wholesale-catalogue-uk",
    title: "Hair Extension Wholesale Catalogue UK",
    keyword: "hair extension wholesale catalogue uk",
    intent: "Lead Gen",
    h1: "Hair Extension Wholesale Catalogue UK",
    metaTitle: "Hair Extension Wholesale Catalogue UK | D.S Hair Beauty",
    metaDescription:
      "Request hair extension wholesale catalogue information for UK salons and professional trade buyers.",
    intro:
      "A wholesale catalogue page gives salon buyers a clear action when they want product range, method options and trade account details before placing an order.",
    sections: [
      {
        heading: "What salon buyers expect from a catalogue",
        body: "Professional buyers want product categories, method options, shade guidance, aftercare recommendations and an easy way to request trade pricing.",
      },
      {
        heading: "Catalogue as a lead capture route",
        body: "This page is designed for buyers who are not ready to order immediately but are ready to share their salon details and product interests.",
      },
      {
        heading: "How to use the catalogue request",
        body: "The page should be used in cold outreach, social profiles, email signatures and SEO internal links to collect qualified salon leads.",
      },
    ],
    bullets: [
      "Lead capture page for wholesale catalogue searches",
      "Useful for email and LinkedIn outreach",
      "Routes visitors into salon partner/contact flow",
      "Supports commercial and informational intent",
      "Creates a clear reason for buyers to enquire",
    ],
    faqs: [
      {
        question: "Can salons request a wholesale catalogue?",
        answer:
          "Yes. Salons and stylists can contact D.S Hair Beauty for product range and trade account information.",
      },
      {
        question: "Is this for consumers?",
        answer:
          "This page is focused on professional salons, stylists and trade buyers.",
      },
      {
        question: "What information should I provide?",
        answer:
          "Share your salon name, location, preferred methods and any colour or product requirements.",
      },
    ],
    internalLinks: [
      { label: "Apply for trade account", href: "/salon-partners" },
      { label: "Contact D.S Hair Beauty", href: "/contact" },
      { label: "Explore trade wholesale", href: "/trade-wholesale" },
    ],
    cta: "Request Wholesale Catalogue",
  },
]

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug)
}
