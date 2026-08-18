import type { Metadata } from "next"
import { HomePageView } from "@/components/home/home-page-view"
import { hreflangAlternates } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "Wholesale Hair Extensions UK | Trade Supplier for UK & EU Salons | D.S Hair Beauty",
  description:
    "Factory-direct trade supplier of 100% Remy human hair extensions for UK & EU salons. Tape-In, K-Tip, Hand-Tied Weft, Butterfly Weft & Toppers. Wholesale pricing, private label available.",
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk",
    languages: hreflangAlternates(),
  },
  openGraph: {
    title: "Trade Hair Extensions for UK & EU Salons | D.S Hair Beauty",
    description:
      "Factory-direct wholesale hair extension supplier. 100% Remy human hair. Trade pricing for salons. 19 years manufacturing expertise.",
    url: "https://www.dshairbeauty.co.uk",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function HomePage() {
  return <HomePageView locale="en" />
}
