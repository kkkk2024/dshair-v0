import type { Metadata } from "next"
import { ColourMatchView } from "@/components/pages/colour-match-view"
import { getColourMatchContent } from "@/lib/i18n/pages/colour-match"

export const metadata: Metadata = {
  title:
    "Colour Match Service | D.S Hair & Beauty – Find Your Perfect Shade",
  description:
    "Can't decide? Upload a photo or send us a WhatsApp message — our colour specialists will match your perfect human hair extension shade in under 2 hours.",
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/colour-match",
  },
  openGraph: {
    title: "Colour Match Service | D.S Hair & Beauty",
    description: "Find your perfect hair extension shade. Free colour matching by specialists.",
    url: "https://www.dshairbeauty.co.uk/colour-match",
    type: "website",
    locale: "en_GB",
  },
}

export default function ColourMatchPage() {
  return <ColourMatchView locale="en" content={getColourMatchContent("en")} />
}
