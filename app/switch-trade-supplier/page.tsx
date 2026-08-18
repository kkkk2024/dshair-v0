import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { SwitchTradeSupplierView } from "@/components/pages/switch-trade-supplier-view"
import { getSwitchContent } from "@/lib/i18n/pages/switch-trade-supplier"
import { SITE_URL } from "@/lib/i18n/config"

const c = getSwitchContent("en")

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/switch-trade-supplier`,
  },
  openGraph: {
    title: c.metaTitle,
    description: c.metaDescription,
    url: `${SITE_URL}/switch-trade-supplier`,
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function SwitchTradeSupplierPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Switch Your Trade Supplier", url: `${SITE_URL}/switch-trade-supplier` },
        ]}
      />
      <SwitchTradeSupplierView locale="en" />
    </>
  )
}
