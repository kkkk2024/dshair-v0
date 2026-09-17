import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { LegalView } from "@/components/pages/legal-view"
import { termsDoc } from "@/lib/legal-content"

// English-only document — see the note in app/privacy/page.tsx about hreflang.

export const metadata: Metadata = {
  title: "Terms of Service | D.S Hair & Beauty",
  description:
    "The terms that apply to orders placed with D.S Hair & Beauty and to your use of dshairbeauty.co.uk, including trade accounts, prices, delivery, returns and liability.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/terms",
  },
  openGraph: {
    title: "Terms of Service | D.S Hair & Beauty",
    description:
      "The terms that apply to orders placed with D.S Hair & Beauty and to your use of dshairbeauty.co.uk.",
    url: "https://www.dshairbeauty.co.uk/terms",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.dshairbeauty.co.uk" },
          { name: "Terms of Service", url: "https://www.dshairbeauty.co.uk/terms" },
        ]}
      />
      <LegalView doc={termsDoc} />
    </>
  )
}
