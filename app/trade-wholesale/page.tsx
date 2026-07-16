import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Wholesale Hair Extensions for UK Salons | Trade Account | D.S Hair Beauty",
  description:
    "Open a trade account with D.S Hair Beauty. 100% Remy human hair extensions at wholesale prices. Tape-In, K-Tip, Weft, Butterfly Weft & Toppers. Manchester-based, same-day dispatch.",
  keywords:
    "trade hair extension suppliers UK, wholesale hair extensions, hair extension wholesale UK, tape-in wholesale, salon hair supplier",
  alternates: {
    canonical: 'https://www.dshairbeauty.co.uk/trade-wholesale',
  },
  openGraph: {
    title: 'Wholesale Hair Extensions for UK Salons | D.S Hair Beauty',
    description: 'Open a trade account. 100% Remy human hair at wholesale prices. Same-day UK dispatch.',
    url: 'https://www.dshairbeauty.co.uk/trade-wholesale',
    type: 'website',
    locale: 'en_GB',
  },
}

import TradeWholesaleClient from "./trade-wholesale-client"

export default function TradeWholesalePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.dshairbeauty.co.uk" },
        { name: "Trade Wholesale", url: "https://www.dshairbeauty.co.uk/trade-wholesale" },
      ]} />
      <TradeWholesaleClient />
    </>
  )
}
