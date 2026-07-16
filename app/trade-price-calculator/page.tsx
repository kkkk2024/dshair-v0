import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trade Price Calculator | D.S HAIR & BEAUTY",
  description:
    "Estimate your wholesale hair extension costs in seconds. Trade pricing for Tape-In, Nano Ring, K-Tip, Clip-In, Weft and Butterfly Weft extensions. Volume discounts for UK salons.",
  keywords:
    "hair extension trade price calculator, wholesale hair extensions UK, salon hair extension pricing, tape-in wholesale price, bulk hair extensions",
}

import TradePriceCalculatorClient from "./trade-price-calculator-client"

export default function TradePriceCalculatorPage() {
  return <TradePriceCalculatorClient />
}
