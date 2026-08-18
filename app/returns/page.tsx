import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import ReturnsClient from "./returns-client"
import { returnsContent, getReturnsContent } from "@/lib/i18n/pages/returns"

export const metadata: Metadata = {
  title: returnsContent.en.metaTitle,
  description: returnsContent.en.metaDescription,
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
    title: returnsContent.en.metaTitle,
    description: returnsContent.en.metaDescription,
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
      <ReturnsClient content={getReturnsContent("en")} locale="en" />
    </>
  )
}
