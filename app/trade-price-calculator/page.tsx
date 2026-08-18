import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { TradePriceCalculatorView } from "@/components/pages/trade-price-calculator-view"
import { getTradeCalcContent } from "@/lib/i18n/pages/trade-price-calculator"
import { SITE_URL } from "@/lib/i18n/config"

const c = getTradeCalcContent("en")
const path = "/trade-price-calculator"

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: {
    canonical: `${SITE_URL}${path}`,
  },
  openGraph: {
    title: c.metaTitle,
    description: c.metaDescription,
    url: `${SITE_URL}${path}`,
    type: "website",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function TradePriceCalculatorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: c.heroTitle, url: `${SITE_URL}${path}` },
        ]}
      />
      <TradePriceCalculatorView locale="en" />
    </>
  )
}
