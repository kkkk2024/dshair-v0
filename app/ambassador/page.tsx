import type { Metadata } from "next"
import { AmbassadorView } from "@/components/pages/ambassador-view"
import { getAmbassadorContent } from "@/lib/i18n/pages/ambassador"
import { SITE_URL, hreflangAlternates } from "@/lib/i18n/config"

const c = getAmbassadorContent("en")

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/ambassador`,
    languages: hreflangAlternates("/ambassador"),
  },
  openGraph: {
    title: c.metaTitle,
    description: c.metaDescription,
    url: `${SITE_URL}/ambassador`,
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function AmbassadorPage() {
  return <AmbassadorView locale="en" />
}
