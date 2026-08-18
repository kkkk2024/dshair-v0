import type { Metadata } from "next"
import { ResourcesView } from "@/components/pages/resources-view"
import { getResourcesContent } from "@/lib/i18n/pages/resources"
import { SITE_URL, hreflangAlternates } from "@/lib/i18n/config"

const c = getResourcesContent("en")

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/resources`,
    languages: hreflangAlternates("/resources"),
  },
  openGraph: {
    title: c.metaTitle,
    description: c.metaDescription,
    url: `${SITE_URL}/resources`,
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function ResourcesPage() {
  return <ResourcesView locale="en" />
}
