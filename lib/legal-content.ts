// Legal page content — Privacy Policy, Terms of Service, Cookie Policy.
//
// IMPORTANT: only verifiable facts are stated here. No company registration
// number, VAT number or registered office is claimed, because none has been
// confirmed. If the business is later registered as a limited company, add the
// company number and registered office to the "Who we are" section.

export type LegalSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export type LegalDoc = {
  title: string
  intro: string
  updated: string
  sections: LegalSection[]
}

const CONTACT_EMAIL = "caro@dshairbeauty.co.uk"
const CONTACT_WHATSAPP = "+86 13516946001"

export const privacyDoc: LegalDoc = {
  title: "Privacy Policy",
  intro:
    "This policy explains what personal information D.S Hair & Beauty collects through dshairbeauty.co.uk, why we collect it, who we share it with, and the rights you have under UK data protection law.",
  updated: "Last updated: 17 September 2026",
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        "D.S Hair & Beauty (\u201cwe\u201d, \u201cus\u201d, \u201cour\u201d) operates this website and supplies human hair extensions, salon consumables and related products to salons, stylists and trade customers in the United Kingdom, the European Union and internationally.",
        `For any question about this policy, or to exercise any of the rights described below, contact us at ${CONTACT_EMAIL} or on WhatsApp at ${CONTACT_WHATSAPP}.`,
      ],
    },
    {
      heading: "Information we collect",
      bullets: [
        "Details you enter into a form on this site — your name, salon or business name, location, phone or WhatsApp number, email address and your message. Trade account applications may also include your website or social profile and your approximate order volumes.",
        "Correspondence with us — the content of emails and WhatsApp messages you send us, including order details, delivery addresses and any product or colour requirements.",
        "Technical information generated when your browser requests a page — such as your IP address, browser type and the pages you visit. Our hosting provider processes this in order to serve and secure the website.",
      ],
      paragraphs: [
        "We do not ask for, and do not want, payment card details or special category data (for example health information) to be sent to us through this website.",
      ],
    },
    {
      heading: "How we use your information",
      bullets: [
        "To reply to your enquiry and prepare a quote — legitimate interests, and steps taken at your request before entering into a contract.",
        "To process your order, arrange delivery and provide after-sales support — performance of a contract with you.",
        "To assess a trade account application — legitimate interests, so that we can decide whether to open a trade account and on what terms.",
        "To keep sales, tax and accounting records — compliance with our legal obligations.",
        "To understand which pages of the site are used so that we can improve it — legitimate interests. This is measured with cookieless analytics, described in our Cookie Policy.",
      ],
    },
    {
      heading: "Who we share it with",
      bullets: [
        "Formspree (Formspree, Inc.) — the service that receives the forms on this site and forwards the contents to us. Its servers may be located outside the United Kingdom.",
        "Vercel Inc. — the hosting provider that serves this website and provides its cookieless usage analytics.",
        "Couriers and freight partners — we share the name, delivery address and contact number of the recipient so that your order can be delivered.",
        "Professional advisers and public authorities — where we are required to do so by law, or where it is necessary to establish or defend a legal claim.",
      ],
      paragraphs: [
        "We do not sell your personal information, and we do not share it for third-party advertising.",
      ],
    },
    {
      heading: "Transfers outside the United Kingdom",
      paragraphs: [
        "Some of the service providers we use are established outside the United Kingdom, principally in the United States. Where personal information is transferred outside the UK, we rely on the safeguards those providers have put in place, such as the UK Extension to the EU–US Data Privacy Framework or standard contractual clauses, together with technical measures such as encryption in transit.",
      ],
    },
    {
      heading: "How long we keep your information",
      bullets: [
        "Enquiries and quotes — for as long as the enquiry is live, and for a reasonable period afterwards so that we can pick up the conversation again.",
        "Order and accounting records — for as long as UK tax law requires, which is currently up to six years after the end of the relevant tax year.",
        "Correspondence with trade customers — for the duration of the trading relationship and for a reasonable period afterwards.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "Under the UK GDPR you have the right to ask us for a copy of the personal information we hold about you, to have inaccurate information corrected, to have information erased, to restrict or object to how we use it, and to receive the information you gave us in a portable format. Where we rely on your consent, you can withdraw it at any time.",
        "To exercise any of these rights, contact us at the address above. We will respond within one month. If you are unhappy with how we have handled your information, you have the right to complain to the Information Commissioner's Office (ICO) at ico.org.uk. We would appreciate the opportunity to resolve your concern first.",
      ],
    },
    {
      heading: "Cookies and analytics",
      paragraphs: [
        "This website does not use advertising or tracking cookies. Our analytics is cookieless. See our Cookie Policy for a full description of what is and is not stored on your device.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time, for example if we change a supplier or add a feature to the site. The date at the top of the page shows when it was last changed.",
      ],
    },
  ],
}

export const termsDoc: LegalDoc = {
  title: "Terms of Service",
  intro:
    "These terms apply to your use of dshairbeauty.co.uk and to any order you place with us. Please read them before you order.",
  updated: "Last updated: 17 September 2026",
  sections: [
    {
      heading: "About these terms",
      paragraphs: [
        "These terms are an agreement between you and D.S Hair & Beauty (\u201cwe\u201d, \u201cus\u201d, \u201cour\u201d). They cover your use of this website and any order for our products. By using the site, or by placing an order, you accept them.",
      ],
    },
    {
      heading: "Trade and consumer customers",
      paragraphs: [
        "We supply both consumers and trade customers such as salons, independent stylists and resellers. Trade prices, trade accounts and volume terms are available only to approved trade customers. Where you buy from us as a consumer, nothing in these terms affects your statutory rights under the Consumer Rights Act 2015.",
      ],
    },
    {
      heading: "How orders are placed",
      bullets: [
        "This website does not take payment online. A selection held in the bag is an enquiry, not a confirmed order.",
        "We confirm every order in writing, by email or WhatsApp, setting out availability, price, delivery cost and the estimated delivery window.",
        "An order is only formed between us when we accept it in writing.",
      ],
      paragraphs: [
        "Orders placed over WhatsApp or email are confirmed in the same way, so that both sides have the same written record of what was agreed.",
      ],
    },
    {
      heading: "Prices and payment",
      bullets: [
        "Prices are shown in GBP unless another currency is stated. Product pages marked \u201cTrade Exclusive Pricing\u201d or \u201cprice on request\u201d require a quote, because trade pricing depends on volume.",
        "Prices may change. The price confirmed in writing for your order is the price that applies to it.",
        "Payment is by bank transfer, or by a secure payment link that we issue, unless we agree otherwise in writing.",
        "Where VAT, import duty or other charges apply, they are shown on your invoice.",
        "Goods remain our property until they have been paid for in full.",
      ],
    },
    {
      heading: "Delivery",
      bullets: [
        "We dispatch orders from our warehouse. Dispatch times and transit times are given in good faith but are estimates, not guaranteed dates.",
        "For deliveries to the United Kingdom, express courier transit is typically a few working days once your order has been dispatched.",
        "Risk in the goods passes to you on delivery (or on collection, where you arrange it).",
        "If goods arrive damaged, or do not arrive within the estimated window, tell us within seven days of the expected delivery date so that we can open a claim with the carrier.",
      ],
    },
    {
      heading: "Our products",
      paragraphs: [
        "Human hair is a natural product. Colour shade, texture, density and length can vary slightly between production batches and between individual wefts. Photographs, swatch images and digital colour charts are indicative, and screens display colour differently from one another. Our descriptions — for example 100% Remy human hair, cuticle-aligned, double-drawn — describe how the hair is made; they are not a promise that every bundle will be visually identical to another.",
        "For the same reason, a shade that looks different under salon lighting is not, by itself, a fault. If you are unsure, order a sample first, or ask us for a digital colour match before you commit to a larger order.",
      ],
    },
    {
      heading: "Returns and refunds",
      paragraphs: [
        "Our returns policy forms part of these terms and is available on the Returns Policy page. For hygiene and safety reasons, hair that has been worn, cut, brushed out of its bundle, chemically processed, or had its tags removed cannot normally be returned.",
      ],
    },
    {
      heading: "Your responsibilities",
      bullets: [
        "Give us accurate contact and delivery details, and tell us promptly if anything changes.",
        "Use our products in line with the instructions and the advice given on this site, and have professional methods such as bonds, tapes and rings applied by a competent person.",
        "Only use our photography, product descriptions and brand assets in the way we have agreed in writing, particularly for private label arrangements.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "The text, photographs, images and design of this website belong to us, or are used with permission, and may not be copied, reproduced or reused commercially without our written consent.",
      ],
    },
    {
      heading: "Our liability",
      paragraphs: [
        "We do not exclude or limit our liability where it would be unlawful to do so, including liability for death or personal injury caused by our negligence, and liability for fraud or fraudulent misrepresentation.",
        "Subject to that: we are not liable for indirect or consequential losses, such as loss of profit or loss of business; and our total liability in connection with any order is limited to the amount you paid us for the goods in that order.",
        "We are not responsible for damage or unsatisfactory results caused by incorrect application, unsuitable product choice for a client's hair, or salon procedures that we did not carry out ourselves.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of England and Wales, and the courts of England and Wales have non-exclusive jurisdiction over any dispute arising from them.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `If you have any question about these terms, contact us at ${CONTACT_EMAIL} or on WhatsApp at ${CONTACT_WHATSAPP}.`,
      ],
    },
  ],
}

export const cookiesDoc: LegalDoc = {
  title: "Cookie Policy",
  intro:
    "This policy explains what cookies and similar technologies this website uses, and what they are used for. The short version: we do not use advertising or tracking cookies.",
  updated: "Last updated: 17 September 2026",
  sections: [
    {
      heading: "The short version",
      paragraphs: [
        "This website does not use advertising cookies, does not use tracking cookies, and does not build a profile of you or follow you across other websites. Because there are no optional cookies to consent to, you will not see a cookie consent banner on this site.",
      ],
    },
    {
      heading: "What cookies are",
      paragraphs: [
        "Cookies are small text files that a website can ask your browser to store on your device. They are often used to remember something between page loads, or to recognise the same browser when it returns. Similar technologies, such as local storage, do something comparable but keep the information inside your browser rather than sending it back with every request.",
      ],
    },
    {
      heading: "What this website actually stores",
      bullets: [
        "Essential cookies: none. The site works without setting any cookies of its own.",
        "Your bag: the products you add to your bag are held in your browser's memory for the current visit only. Nothing is written to a cookie, and if you close the tab the selection is cleared.",
        "Analytics: we use Vercel Web Analytics to understand which pages are visited and how the site is used. It is cookieless — it does not set cookies, does not fingerprint your device and does not identify you personally. The figures we see are aggregated counts.",
        "Advertising and marketing cookies: none. We do not run third-party advertising on this site, and we do not share data with advertising networks for retargeting.",
      ],
    },
    {
      heading: "Third parties involved in loading this site",
      paragraphs: [
        "The site is served by Vercel Inc., and the forms on the site are delivered to us by Formspree (Formspree, Inc.). These providers process technical information in order to deliver the page or the form to you. We do not use either of them to track you across other websites, and we do not receive information from them that identifies you personally beyond what you typed into a form yourself.",
      ],
    },
    {
      heading: "Managing cookies in your browser",
      paragraphs: [
        "Because we do not set non-essential cookies from this site, there is nothing to opt out of here. If you would like to block cookies more generally, every major browser lets you review and delete stored cookies in its privacy or security settings. Blocking all cookies can stop some functions on other websites from working, but it will not stop you from browsing or ordering from this site.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "If we add a tool to the site that uses cookies — for example an advertising or measurement cookie — we will update this page and, where the law requires it, ask for your consent before the cookie is set. The date at the top of the page shows when this policy was last changed.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        `If you have a question about cookies or about anything else on this site, contact us at ${CONTACT_EMAIL} or on WhatsApp at ${CONTACT_WHATSAPP}.`,
      ],
    },
  ],
}
