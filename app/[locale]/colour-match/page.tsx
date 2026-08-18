import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ColourMatchView } from "@/components/pages/colour-match-view"
import { getColourMatchContent } from "@/lib/i18n/pages/colour-match"
import { localeStaticParams } from "@/lib/i18n/routing"
import { isLocale, defaultLocale, hreflangAlternates, ogLocale, SITE_URL, type Locale } from "@/lib/i18n/config"

export function generateStaticParams() {
  return localeStaticParams()
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) return {}
  const c = getColourMatchContent(locale as Locale)
  const path = "/colour-match"
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

export default async function ColourMatchLocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  return <ColourMatchView locale={locale as Locale} content={getColourMatchContent(locale as Locale)} />
}
