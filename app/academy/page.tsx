import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import AcademyClient from "./academy-client"

export const metadata: Metadata = {
  title: "Hair Extension Training Academy | D.S HAIR & BEAUTY",
  description:
    "Professional hair extension training courses in Manchester. Learn tape-in, K-tip, nano ring, weft & butterfly weft installation. CPD-certified. In-person & online options.",
  keywords: [
    "hair extension training",
    "extension courses UK",
    "hair extension academy",
    "tape-in training",
    "nano ring training course",
    "extension certification",
  ],
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/academy",
  },
  openGraph: {
    title: "Hair Extension Training Academy | D.S HAIR & BEAUTY",
    description: "Professional hair extension training courses in Manchester. Learn tape-in, K-tip, nano ring, weft & butterfly weft installation.",
    url: "https://www.dshairbeauty.co.uk/academy",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function AcademyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.dshairbeauty.co.uk" },
          { name: "Academy", url: "https://www.dshairbeauty.co.uk/academy" },
        ]}
      />
      <AcademyClient />
    </>
  )
}
