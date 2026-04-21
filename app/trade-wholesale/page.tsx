import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wholesale Hair Extensions for UK Salons | Trade Account | D.S Hair Beauty",
  description:
    "Open a trade account with D.S Hair Beauty. 100% Remy human hair extensions at wholesale prices. Tape-In, K-Tip, Weft, Butterfly Weft & Toppers. Manchester-based, same-day dispatch.",
  keywords:
    "trade hair extension suppliers UK, wholesale hair extensions, hair extension wholesale UK, tape-in wholesale, salon hair supplier",
}

import TradeWholesaleClient from "./trade-wholesale-client"

export default function TradeWholesalePage() {
  return <TradeWholesaleClient />
}
