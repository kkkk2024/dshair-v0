import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { TradeAccountForm } from "@/components/account/trade-account-form"
import { getTradeAccountContent } from "@/lib/i18n/pages/trade-account"

const c = getTradeAccountContent("en")

// Kept out of the search index on purpose: /trade-wholesale and /salon-partners
// are the pages we want ranking for wholesale and trade-account searches, and
// this page is the application form they lead into.
export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/account",
  },
  openGraph: {
    title: c.metaTitle,
    description: c.metaDescription,
    url: "https://www.dshairbeauty.co.uk/account",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function AccountPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.dshairbeauty.co.uk" },
          { name: "Trade Account", url: "https://www.dshairbeauty.co.uk/account" },
        ]}
      />
      <TradeAccountForm locale="en" />
    </>
  )
}
