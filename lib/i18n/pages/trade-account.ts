import type { Locale } from "../config"

/**
 * Trade account application copy.
 *
 * The application is a B2B form for salons, stylists and resellers. Only the
 * English copy is written so far; other locales fall back to English rather than
 * shipping machine-generated translations of a form that has commercial and
 * contractual meaning. Add translated blocks here when they are ready.
 */
export interface TradeAccountContent {
  metaTitle: string
  metaDescription: string
  badge: string
  heading: string
  intro: string
  benefitsHeading: string
  benefits: { title: string; text: string }[]
  stepsHeading: string
  steps: { step: string; detail: string }[]
  formHeading: string
  formNote: string
  fields: {
    name: string
    namePh: string
    salon: string
    salonPh: string
    tradingAddress: string
    tradingAddressPh: string
    vat: string
    vatHint: string
    email: string
    emailPh: string
    phone: string
    phonePh: string
    website: string
    websitePh: string
    products: string
    productsPh: string
    volume: string
    volumePh: string
    message: string
    messagePh: string
  }
  consent: string
  submit: string
  submitting: string
  errorNote: string
  successHeading: string
  successBody: string
  successWhatsApp: string
  noTierNote: string
}

const en: TradeAccountContent = {
  metaTitle: "Apply for a Trade Account | D.S Hair & Beauty",
  metaDescription:
    "Apply for a D.S Hair & Beauty trade account and get wholesale pricing on Remy human hair extensions, private label options and no minimum order to start.",
  badge: "Trade account",
  heading: "Apply for a trade account",
  intro:
    "A trade account gives your salon wholesale pricing, priority on popular shades and lengths, and a direct line to us for stock planning. Apply below and we will come back to you with your trade price list.",
  benefitsHeading: "What a trade account gives you",
  benefits: [
    {
      title: "Wholesale pricing",
      text: "Trade rates on every product we list, with volume pricing as your order size grows.",
    },
    {
      title: "Priority stock",
      text: "Popular shades and lengths held back for trade customers before they go to retail.",
    },
    {
      title: "Private label",
      text: "Your own salon brand on the packaging, with our product and our production behind it.",
    },
    {
      title: "Direct contact",
      text: "One person who knows the hair, on WhatsApp or email. Not a ticket queue.",
    },
  ],
  stepsHeading: "How the application works",
  steps: [
    {
      step: "Send the form",
      detail: "Two minutes, and only the details we actually need to open an account.",
    },
    {
      step: "We review it",
      detail: "We check your details and confirm whether we can supply the products you need.",
    },
    {
      step: "You receive your trade pricing",
      detail: "Approved applications get the trade price list and a named contact for ordering.",
    },
    {
      step: "Place your first order",
      detail: "No minimum order to start. Most customers begin with a small order or samples.",
    },
  ],
  formHeading: "Trade account application",
  formNote:
    "We only use these details to assess your application and to quote you. See our Privacy Policy for how we handle your information.",
  fields: {
    name: "Your name",
    namePh: "First and last name",
    salon: "Salon / business name",
    salonPh: "As it appears on your website or insurance",
    tradingAddress: "Trading address",
    tradingAddressPh: "Street, town, postcode",
    vat: "VAT number (optional)",
    vatHint: "Only if your business is VAT registered",
    email: "Email address",
    emailPh: "you@yoursalon.co.uk",
    phone: "Phone / WhatsApp",
    phonePh: "+44 7xxx xxxxxx",
    website: "Website or Instagram",
    websitePh: "yoursalon.co.uk or @yoursalon",
    products: "Which products do you need?",
    productsPh: "e.g. tape-in, hand-tied weft, clip-in, wigs",
    volume: "Approximate order volume",
    volumePh: "e.g. a few packs a month, or 20+ packs a quarter",
    message: "Anything else we should know?",
    messagePh: "Client base, the shades and lengths you use most, or a question for us",
  },
  consent:
    "I confirm the details above are correct, and I agree to be contacted about my application.",
  submit: "Send application",
  submitting: "Sending...",
  errorNote:
    "Something went wrong sending the form. Please message us on WhatsApp instead and we will open your account manually.",
  successHeading: "Application received",
  successBody:
    "Thank you. We have your details and we will review the application and come back to you by email. If your enquiry is urgent, message us on WhatsApp and we will pick it up straight away.",
  successWhatsApp: "Message us on WhatsApp",
  noTierNote:
    "Applying does not commit you to anything. We do not ask for payment details at this stage, and we never share your details.",
}

const content: Partial<Record<Locale, TradeAccountContent>> = { en }

export function getTradeAccountContent(locale: Locale): TradeAccountContent {
  return content[locale] ?? content.en!
}

export const tradeAccountContent = content
