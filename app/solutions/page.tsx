import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { SolutionsView } from "@/components/pages/solutions-view"
import { getSolutionsContent } from "@/lib/i18n/pages/solutions"
import { SITE_URL } from "@/lib/i18n/config"

const c = getSolutionsContent("en")

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/solutions`,
  },
  openGraph: {
    title: c.metaTitle,
    description: c.metaDescription,
    url: `${SITE_URL}/solutions`,
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function SolutionsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Solutions", url: `${SITE_URL}/solutions` },
        ]}
      />
      <SolutionsView locale="en" />
    </>
  )
}
