import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { FindStylistView } from "@/components/pages/find-stylist-view"
import { getFindStylistContent } from "@/lib/i18n/pages/find-stylist"
import { SITE_URL, isLocale, defaultLocale, ogLocale, hreflangAlternates, type Locale } from "@/lib/i18n/config"
import { localeStaticParams } from "@/lib/i18n/routing"

export function generateStaticParams() {
  return localeStaticParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  const c = getFindStylistContent(locale)
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${locale}/find-stylist`,
      languages: hreflangAlternates("/find-stylist"),
    },
    openGraph: {
      locale: ogLocale[locale],
    },
  }
}

export default async function LocaleFindStylistPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  return <FindStylistView locale={locale as Locale} />
}
