import type { Metadata } from "next"
import { FindStylistView } from "@/components/pages/find-stylist-view"
import { getFindStylistContent } from "@/lib/i18n/pages/find-stylist"
import { SITE_URL, hreflangAlternates } from "@/lib/i18n/config"

const c = getFindStylistContent("en")

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/find-stylist`,
    languages: hreflangAlternates("/find-stylist"),
  },
  openGraph: {
    title: c.metaTitle,
    description: c.metaDescription,
    url: `${SITE_URL}/find-stylist`,
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function FindStylistPage() {
  return <FindStylistView locale="en" />
}
