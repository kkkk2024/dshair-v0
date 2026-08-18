import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import ShippingClient from "./shipping-client"
import { shippingContent, getShippingContent } from "@/lib/i18n/pages/shipping"

export const metadata: Metadata = {
  title: shippingContent.en.metaTitle,
  description: shippingContent.en.metaDescription,
  keywords: [
    "shipping policy UK",
    "hair extension delivery",
    "D.S Hair delivery",
    "UK shipping hair extensions",
    "international hair shipping",
  ],
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/shipping",
  },
  openGraph: {
    title: shippingContent.en.metaTitle,
    description: shippingContent.en.metaDescription,
    url: "https://www.dshairbeauty.co.uk/shipping",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function ShippingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.dshairbeauty.co.uk" },
          { name: "Shipping & Delivery", url: "https://www.dshairbeauty.co.uk/shipping" },
        ]}
      />
      <ShippingClient content={getShippingContent("en")} locale="en" />
    </>
  )
}
