import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AmbassadorView } from "@/components/pages/ambassador-view"
import { getAmbassadorContent } from "@/lib/i18n/pages/ambassador"
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
  const c = getAmbassadorContent(locale)
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${locale}/ambassador`,
      languages: hreflangAlternates("/ambassador"),
    },
    openGraph: {
      locale: ogLocale[locale],
    },
  }
}

export default async function LocaleAmbassadorPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  return <AmbassadorView locale={locale as Locale} />
}
