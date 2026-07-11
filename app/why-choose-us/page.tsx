import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import WhyChooseUsClient from "./why-choose-us-client"

export const metadata: Metadata = {
  title: "Why Choose D.S Hair Beauty | 19 Years Expertise | Remy Human Hair Extensions",
  description:
    "19 years of hair extension expertise. Factory-direct pricing, 100% Remy human hair, same-day UK dispatch, free colour matching. Discover why 500+ UK salons trust D.S Hair Beauty.",
  keywords: [
    "why choose D.S Hair Beauty",
    "hair extension supplier benefits",
    "factory direct hair extensions",
    "reliable hair extension supplier UK",
    "salon hair extension partner",
  ],
  alternates: {
    canonical: 'https://www.dshairbeauty.co.uk/why-choose-us',
  },
  openGraph: {
    title: 'Why Choose D.S Hair Beauty | 19 Years Expertise',
    description: 'Factory-direct pricing, 100% Remy human hair, same-day UK dispatch. 500+ UK salons trust us.',
    url: 'https://www.dshairbeauty.co.uk/why-choose-us',
    type: 'website',
    locale: 'en_GB',
  },
}

export default function WhyChooseUsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.dshairbeauty.co.uk" },
        { name: "Why Choose Us", url: "https://www.dshairbeauty.co.uk/why-choose-us" },
      ]} />
      <WhyChooseUsClient />
    </>
  )
}
