import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import SolutionsClient from "./solutions-client"

export const metadata: Metadata = {
  title: "Hair Extension Solutions for Salons & Stylists | D.S HAIR & BEAUTY",
  description:
    "Tailored hair extension solutions for salons: starter kits, bulk pricing, colour-match support, and training. Whether you're a solo stylist or a 10-chair salon, we've got you covered.",
  keywords: [
    "hair extension solutions",
    "salon extension packages",
    "stylist hair extension supply",
    "salon starter kit",
    "hair extension wholesale solutions",
  ],
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/solutions",
  },
  openGraph: {
    title: "Hair Extension Solutions for Salons & Stylists | D.S HAIR & BEAUTY",
    description: "Tailored hair extension solutions for salons: starter kits, bulk pricing, colour-match support, and training.",
    url: "https://www.dshairbeauty.co.uk/solutions",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function SolutionsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.dshairbeauty.co.uk" },
          { name: "Solutions", url: "https://www.dshairbeauty.co.uk/solutions" },
        ]}
      />
      <SolutionsClient />
    </>
  )
}
