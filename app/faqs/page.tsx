import type { Metadata } from "next"
import { FaqJsonLd } from "@/components/seo/json-ld"
import { FAQsClient } from "./faqs-client"

export const metadata: Metadata = {
  title: "Hair Extension FAQs | Expert Guide | D.S HAIR & BEAUTY",
  description:
    "Expert answers to the most common hair extension questions. Remy human hair, application methods, care tips, trade pricing and more — from the UK's leading wholesale supplier.",
  keywords: [
    'hair extension FAQ',
    'hair extensions questions',
    'Remy human hair FAQ',
    'tape-in extensions FAQ',
    'K-Tip extensions FAQ',
    'nano ring extensions FAQ',
    'wholesale hair extensions UK',
  ],
  alternates: {
    canonical: 'https://www.dshairbeauty.co.uk/faqs',
  },
  openGraph: {
    title: 'Hair Extension FAQs | Expert Guide | D.S HAIR & BEAUTY',
    description:
      "Expert answers to the most common hair extension questions. From the UK's leading wholesale supplier.",
    url: 'https://www.dshairbeauty.co.uk/faqs',
    locale: 'en_GB',
    siteName: 'D.S HAIR & BEAUTY',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'What types of hair extensions does D.S HAIR offer?',
    answer: 'We offer five professional extension methods: Clip-In, Tape-In, Nano Ring, K-Tip / Keratin Bond, and Butterfly Weft. All are 100% Remy human hair.',
  },
  {
    question: 'What is 100% Remy Human Hair?',
    answer: 'Remy human hair means the cuticles are kept intact and aligned in one direction — the same direction as natural hair growth. This prevents tangling and maintains shine.',
  },
  {
    question: "What's the difference between single-drawn and double-drawn hair?",
    answer: 'Double-drawn hair is hand-selected so every strand is the same length — giving consistent thickness and fuller volume. D.S HAIR uses double-drawn hair as standard.',
  },
  {
    question: 'Do you offer trade / wholesale pricing for salons?',
    answer: 'Yes. We have a dedicated Salon Partner Programme with trade pricing, no minimum order, free colour matching kits and priority Manchester delivery.',
  },
  {
    question: 'How do I find my perfect colour match?',
    answer: 'Browse our 31-shade colour chart or send us a WhatsApp photo of your hair in natural daylight and our colour specialist will match you within 2 hours — free of charge.',
  },
  {
    question: 'How long do hair extensions last?',
    answer: 'Clip-In: 6-12 months. Tape-In: 6-8 weeks per install (reusable 2-3 times). Nano Ring: 6-12 months with move-ups. K-Tip: 3-5 months. Butterfly Weft: 6-8 weeks per install.',
  },
  {
    question: 'Can I colour or bleach D.S HAIR extensions?',
    answer: 'Yes — all D.S HAIR extensions are 100% human hair and can accept professional colour services. We recommend consulting an experienced colourist.',
  },
  {
    question: 'What is your shipping and returns policy?',
    answer: 'Free UK delivery on orders over £175. Same-day dispatch for orders placed before 2pm. Returns accepted within 30 days for unused items.',
  },
]

export default function FAQsPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <FAQsClient />
    </>
  )
}
