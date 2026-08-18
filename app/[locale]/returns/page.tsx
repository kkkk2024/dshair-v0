import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import ReturnsClient from "@/app/returns/returns-client"
import { returnsContent, getReturnsContent } from "@/lib/i18n/pages/returns"
import { localeStaticParams } from "@/lib/i18n/routing"
import { isLocale, defaultLocale, hreflangAlternates, ogLocale, SITE_URL, type Locale } from "@/lib/i18n/config"

export function generateStaticParams() {
  return localeStaticParams()
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) return {}
  const c = getReturnsContent(locale as Locale)
  const path = "/returns"
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${locale}${path}`,
      languages: hreflangAlternates(path),
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${SITE_URL}/${locale}${path}`,
      type: "website",
      locale: ogLocale[locale as Locale],
      siteName: "D.S HAIR & BEAUTY",
    },
  }
}

export default async function ReturnsLocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  const c = getReturnsContent(locale as Locale)
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/${locale}` },
          { name: c.heroTitle, url: `${SITE_URL}/${locale}/returns` },
        ]}
      />
      <ReturnsClient content={c} locale={locale as Locale} />
    </>
  )
}
