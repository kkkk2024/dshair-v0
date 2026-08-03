import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import SwitchTradeSupplierClient from "./switch-trade-supplier-client"

export const metadata: Metadata = {
  title: "Switch Your Salon Supplier | Manufacturer-Direct Trade | D.S Hair & Beauty",
  description:
    "Move from a retail-brand supplier to a manufacturer-direct trade partner. Higher margins, private label options, and factory-direct 100% Remy human hair extensions for UK & EU salons.",
  keywords: [
    "switch salon supplier",
    "salon supplier alternative",
    "wholesale hair extensions UK",
    "private label hair extensions salon",
    "manufacturer direct hair extensions",
    "salon hair extension supplier UK",
  ],
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/switch-trade-supplier",
  },
  openGraph: {
    title: "Switch Your Salon Supplier | D.S Hair & Beauty",
    description:
      "Manufacturer-direct hair extensions for salons. Higher margins and private label options.",
    url: "https://www.dshairbeauty.co.uk/switch-trade-supplier",
    type: "website",
    locale: "en_GB",
  },
}

export default function SwitchTradeSupplierPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.dshairbeauty.co.uk" },
          { name: "Switch Your Trade Supplier", url: "https://www.dshairbeauty.co.uk/switch-trade-supplier" },
        ]}
      />
      <SwitchTradeSupplierClient />
    </>
  )
}
