import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { LegalView } from "@/components/pages/legal-view"
import { privacyDoc } from "@/lib/legal-content"

// No hreflang alternates are declared here on purpose: this policy is published
// in English only, and pointing hreflang at /de/privacy, /fr/privacy or
// /ar/privacy would send crawlers to URLs that do not exist.

export const metadata: Metadata = {
  title: "Privacy Policy | D.S Hair & Beauty",
  description:
    "How D.S Hair & Beauty collects, uses and protects personal information submitted through dshairbeauty.co.uk, and the rights you have under UK data protection law.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/privacy",
  },
  openGraph: {
    title: "Privacy Policy | D.S Hair & Beauty",
    description:
      "How D.S Hair & Beauty collects, uses and protects personal information submitted through dshairbeauty.co.uk.",
    url: "https://www.dshairbeauty.co.uk/privacy",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.dshairbeauty.co.uk" },
          { name: "Privacy Policy", url: "https://www.dshairbeauty.co.uk/privacy" },
        ]}
      />
      <LegalView doc={privacyDoc} />
    </>
  )
}
