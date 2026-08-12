import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import ReturnsClient from "./returns-client"

export const metadata: Metadata = {
  title: "Returns & Refunds Policy | D.S HAIR & BEAUTY",
  description:
    "30-day return policy on unused D.S Hair & Beauty products. Free returns by post for UK orders. Refunds processed within 5 working days of receipt.",
  keywords: [
    "returns policy UK",
    "hair extension returns",
    "D.S Hair refund",
    "30 day return",
    "salon trade returns",
  ],
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/returns",
  },
  openGraph: {
    title: "Returns & Refunds Policy | D.S HAIR & BEAUTY",
    description: "30-day return policy on unused products. Free UK returns by post.",
    url: "https://www.dshairbeauty.co.uk/returns",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function ReturnsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.dshairbeauty.co.uk" },
          { name: "Returns Policy", url: "https://www.dshairbeauty.co.uk/returns" },
        ]}
      />
      <ReturnsClient />
    </>
  )
}