import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import ShippingClient from "./shipping-client"

export const metadata: Metadata = {
  title: "Shipping & Delivery | D.S HAIR & BEAUTY",
  description:
    "Shipping and delivery information for D.S Hair & Beauty. Free UK delivery on orders over £175. Fast dispatch on orders; express 3–5 day delivery. International shipping available.",
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
    title: "Shipping & Delivery | D.S HAIR & BEAUTY",
    description: "Free UK delivery on orders over £175. Fast dispatch; express 3–5 day delivery.",
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
      <ShippingClient />
    </>
  )
}