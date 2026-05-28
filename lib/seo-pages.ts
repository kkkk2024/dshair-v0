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
      "Wholesale human hair extensions for UK salons, stylists and trade buyers. Manchester-based supplier with trade account support and colour matching.",
    intro:
      "D.S Hair Beauty supplies professional salons and stylists with 100% Remy human hair extensions, trade account support and practical wholesale ordering from our Manchester base.",
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
      "Manchester-based support for UK and EU customers",
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
    h1: "Hair Extension Supplier Manchester",
    metaTitle: "Hair Extension Supplier Manchester | D.S Hair Beauty",
    metaDescription:
      "Manchester-based hair extension supplier for salons, stylists and trade buyers across the UK and Europe.",
    intro:
      "For Manchester salons and stylists, D.S Hair Beauty offers professional hair extension supply, colour support and trade account access from a UK-focused base.",
    sections: [
      {
        heading: "Local supply for Manchester salons",
        body: "Manchester salons need dependable stock, fast communication and professional hair extension options that can be used across multiple client services. This page supports local search demand and routes qualified buyers into trade account enquiries.",
      },
      {
        heading: "Professional product range",
        body: "The range includes popular salon methods such as tape-in, nano ring, K-tip, weft and topper solutions, plus aftercare and accessories to support repeat client maintenance.",
      },
      {
        heading: "Trade support beyond product listings",
        body: "The goal is not only to sell hair. It is to support salon buyers with colour matching, product selection and a straightforward route to trade pricing.",
      },
    ],
    bullets: [
      "Manchester-focused supplier positioning",
      "Trade account pathway for salons",
      "Professional extension methods and aftercare",
      "Colour matching and WhatsApp support",
      "Useful for salons, mobile stylists and beauty studios",
    ],
    faqs: [
      {
        question: "Are you based in Manchester?",
        answer:
          "D.S Hair Beauty uses Manchester-based positioning and support for UK salon buyers. Contact the team for current fulfilment and delivery details.",
      },
      {
        question: "Can Manchester salons open a trade account?",
        answer:
          "Yes. Salons and stylists can apply through the salon partner route or contact the team directly.",
      },
      {
        question: "Do you only supply Manchester?",
        answer:
          "No. The site serves UK and EU salon buyers, with Manchester used as a strong local relevance signal.",
      },
    ],
    internalLinks: [
      { label: "Open a salon partner account", href: "/salon-partners" },
      { label: "Explore professional extensions", href: "/collections/tape-in" },
      { label: "Contact the team", href: "/contact" },
    ],
    cta: "Request Manchester Trade Support",
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
]

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug)
}
