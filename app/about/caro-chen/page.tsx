import type { Metadata } from "next"
import { CaroChenView } from "@/components/pages/caro-chen-view"
import { getCaroChenContent } from "@/lib/i18n/pages/caro-chen"
import { SITE_URL, hreflangAlternates } from "@/lib/i18n/config"
import { AuthorJsonLd } from "@/components/seo/json-ld"

const c = getCaroChenContent("en")

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/about/caro-chen`,
    languages: hreflangAlternates("/about/caro-chen"),
  },
  openGraph: {
    title: c.metaTitle,
    description: c.metaDescription,
    url: `${SITE_URL}/about/caro-chen`,
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function CaroChenPage() {
  return (
    <>
      <AuthorJsonLd />
      <CaroChenView locale="en" />
    </>
  )
}
