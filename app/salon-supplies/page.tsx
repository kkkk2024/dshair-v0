import type { Metadata } from "next"
import { SalonSuppliesView } from "@/components/salon/salon-supplies-view"

export const metadata: Metadata = {
  title: "Salon Consumables & Hair Extension Tools | Wholesale Supplies UK | D.S Hair Beauty",
  description:
    "Professional hair extension consumables for UK salons. Nano rings, tape tabs, sectioning clips, keratin glue & more. Quality supplies at factory prices. Free delivery. Trade pricing available.",
  keywords: [
    "nano rings UK", "tape tabs hair extensions", "sectioning clips salon", "hair extension tools UK",
    "keratin glue sticks", "threading tool hair extensions", "salon consumables wholesale",
    "extension supplies UK", "nano ring beads", "tape-in adhesive tabs",
  ],
  alternates: { canonical: "https://www.dshairbeauty.co.uk/salon-supplies" },
  openGraph: {
    title: "Salon Consumables & Hair Extension Tools | D.S Hair Beauty",
    description: "Quality extension supplies for UK salons — nano rings, tape tabs, tools & more. Factory-direct pricing.",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
    url: "https://www.dshairbeauty.co.uk/salon-supplies",
  },
}

export default function SalonSuppliesPage() {
  return <SalonSuppliesView locale="en" />
}
