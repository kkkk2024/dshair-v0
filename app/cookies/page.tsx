import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { LegalView } from "@/components/pages/legal-view"
import { cookiesDoc } from "@/lib/legal-content"

// English-only document — see the note in app/privacy/page.tsx about hreflang.

export const metadata: Metadata = {
  title: "Cookie Policy | D.S Hair & Beauty",
  description:
    "What cookies and similar technologies dshairbeauty.co.uk uses. We use no advertising or tracking cookies, and our analytics is cookieless.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/cookies",
  },
  openGraph: {
    title: "Cookie Policy | D.S Hair & Beauty",
    description:
      "What cookies and similar technologies dshairbeauty.co.uk uses. We use no advertising or tracking cookies.",
    url: "https://www.dshairbeauty.co.uk/cookies",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function CookiesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.dshairbeauty.co.uk" },
          { name: "Cookie Policy", url: "https://www.dshairbeauty.co.uk/cookies" },
        ]}
      />
      <LegalView doc={cookiesDoc} />
    </>
  )
}
