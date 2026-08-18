import type { Metadata } from "next"
import { AcademyView } from "@/components/pages/academy-view"
import { getAcademyContent } from "@/lib/i18n/pages/academy"
import { SITE_URL, hreflangAlternates } from "@/lib/i18n/config"

const c = getAcademyContent("en")

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/academy`,
    languages: hreflangAlternates("/academy"),
  },
  openGraph: {
    title: c.metaTitle,
    description: c.metaDescription,
    url: `${SITE_URL}/academy`,
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function AcademyPage() {
  return <AcademyView locale="en" />
}
