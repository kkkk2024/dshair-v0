import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import WhyChooseUsClient from "./why-choose-us-client"
import { whyChooseUsContent } from "@/lib/i18n/pages/why-choose-us"

export const metadata: Metadata = {
  title: whyChooseUsContent.en.metaTitle,
  description: whyChooseUsContent.en.metaDescription,
  keywords: [
    "why choose D.S Hair Beauty",
    "hair extension supplier benefits",
    "factory direct hair extensions",
    "reliable hair extension supplier UK",
    "salon hair extension partner",
  ],
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/why-choose-us",
  },
  openGraph: {
    title: whyChooseUsContent.en.metaTitle,
    description: whyChooseUsContent.en.metaDescription,
    url: "https://www.dshairbeauty.co.uk/why-choose-us",
    type: "website",
    locale: "en_GB",
  },
}

export default function WhyChooseUsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.dshairbeauty.co.uk" },
          { name: "Why Choose Us", url: "https://www.dshairbeauty.co.uk/why-choose-us" },
        ]}
      />
      <WhyChooseUsClient content={whyChooseUsContent.en} locale="en" />
    </>
  )
}
