import type { Metadata } from "next"
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld"
import { FAQsClient } from "./faqs-client"
import { faqsContent, getFaqsContent } from "@/lib/i18n/pages/faqs"

export const metadata: Metadata = {
  title: faqsContent.en.metaTitle,
  description: faqsContent.en.metaDescription,
  keywords: [
    "hair extension FAQ",
    "hair extensions questions",
    "Remy human hair FAQ",
    "tape-in extensions FAQ",
    "K-Tip extensions FAQ",
    "nano ring extensions FAQ",
    "wholesale hair extensions UK",
  ],
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/faqs",
  },
  openGraph: {
    title: faqsContent.en.metaTitle,
    description: faqsContent.en.metaDescription,
    url: "https://www.dshairbeauty.co.uk/faqs",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function FAQsPage() {
  const c = getFaqsContent("en")
  const faqs = c.categories.flatMap((cat) => cat.faqs.map((f) => ({ question: f.q, answer: f.a })))
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.dshairbeauty.co.uk" },
          { name: "FAQs", url: "https://www.dshairbeauty.co.uk/faqs" },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <FAQsClient content={c} locale="en" />
    </>
  )
}
