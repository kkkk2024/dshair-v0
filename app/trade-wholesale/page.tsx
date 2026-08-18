import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import TradeWholesaleClient from "./trade-wholesale-client"
import { tradeWholesaleContent } from "@/lib/i18n/pages/trade-wholesale"

export const metadata: Metadata = {
  title: tradeWholesaleContent.en.metaTitle,
  description: tradeWholesaleContent.en.metaDescription,
  keywords:
    "trade hair extension suppliers UK, wholesale hair extensions, hair extension wholesale UK, tape-in wholesale, salon hair supplier",
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/trade-wholesale",
  },
  openGraph: {
    title: tradeWholesaleContent.en.metaTitle,
    description: tradeWholesaleContent.en.metaDescription,
    url: "https://www.dshairbeauty.co.uk/trade-wholesale",
    type: "website",
    locale: "en_GB",
  },
}

export default function TradeWholesalePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.dshairbeauty.co.uk" },
          { name: "Trade Wholesale", url: "https://www.dshairbeauty.co.uk/trade-wholesale" },
        ]}
      />
      <TradeWholesaleClient content={tradeWholesaleContent.en} />
    </>
  )
}
