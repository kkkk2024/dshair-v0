import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import ResourcesClient from "./resources-client"

export const metadata: Metadata = {
  title: "Hair Extension Resources & Guides | D.S HAIR & BEAUTY",
  description:
    "Free hair extension resources: installation guides, aftercare tips, colour-matching help, and salon business guides. Expert advice from 19 years in the industry.",
  keywords: [
    "hair extension guides",
    "extension resources",
    "hair extension aftercare",
    "extension installation guide",
    "salon resources UK",
  ],
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/resources",
  },
  openGraph: {
    title: "Hair Extension Resources & Guides | D.S HAIR & BEAUTY",
    description: "Free hair extension resources: installation guides, aftercare tips, colour-matching help, and salon business guides.",
    url: "https://www.dshairbeauty.co.uk/resources",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.dshairbeauty.co.uk" },
          { name: "Resources", url: "https://www.dshairbeauty.co.uk/resources" },
        ]}
      />
      <ResourcesClient />
    </>
  )
}
