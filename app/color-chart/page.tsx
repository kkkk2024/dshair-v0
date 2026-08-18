import type { Metadata } from "next"
import { ColorChartView } from "@/components/pages/color-chart-view"
import { getColorChartContent } from "@/lib/i18n/pages/color-chart"

export const metadata: Metadata = {
  title: "Hair Extension Colour Chart | 31 Shades | D.S HAIR & BEAUTY",
  description:
    "Browse our 31 human hair shades — from Jet Black to Platinum Blonde. Find your perfect colour match for tape-in, clip-in, weft & K-tip extensions.",
  keywords: ["hair extension colour chart", "hair extension shades", "extension colour match", "human hair colour chart UK"],
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/color-chart",
  },
  openGraph: {
    title: "Hair Extension Colour Chart | 31 Shades | D.S HAIR & BEAUTY",
    description: "Browse 31 human hair shades. Find your perfect colour match.",
    url: "https://www.dshairbeauty.co.uk/color-chart",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function ColorChartPage() {
  return <ColorChartView locale="en" content={getColorChartContent("en")} />
}
