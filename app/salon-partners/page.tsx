import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import SalonPartnersClient from "./salon-partners-client"
import { salonPartnerContent } from "@/lib/i18n/pages/salon-partners"
import { hreflangAlternates } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: salonPartnerContent.en.metaTitle,
  description: salonPartnerContent.en.metaDescription,
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/salon-partners",
    languages: hreflangAlternates("/salon-partners"),
  },
  openGraph: {
    title: salonPartnerContent.en.metaTitle,
    description: salonPartnerContent.en.metaDescription,
    url: "https://www.dshairbeauty.co.uk/salon-partners",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function SalonPartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.dshairbeauty.co.uk" },
        { name: "Salon Partners", url: "https://www.dshairbeauty.co.uk/salon-partners" },
      ]} />
      <SalonPartnersClient content={salonPartnerContent.en} locale="en" />
    </>
  )
}
