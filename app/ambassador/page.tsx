import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import AmbassadorClient from "./ambassador-client"

export const metadata: Metadata = {
  title: "Become a Hair Extension Brand Ambassador | D.S HAIR & BEAUTY",
  description:
    "Join the D.S HAIR ambassador programme. Earn commission, get free extensions, and grow your audience. Open to UK-based stylists, content creators & salon professionals.",
  keywords: [
    "hair extension ambassador",
    "hair brand ambassador UK",
    "extension influencer programme",
    "salon ambassador",
    "hair extension partnership",
  ],
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/ambassador",
  },
  openGraph: {
    title: "Become a Hair Extension Brand Ambassador | D.S HAIR & BEAUTY",
    description: "Join the D.S HAIR ambassador programme. Earn commission, get free extensions, and grow your audience.",
    url: "https://www.dshairbeauty.co.uk/ambassador",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function AmbassadorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.dshairbeauty.co.uk" },
          { name: "Ambassador", url: "https://www.dshairbeauty.co.uk/ambassador" },
        ]}
      />
      <AmbassadorClient />
    </>
  )
}
