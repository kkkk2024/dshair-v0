import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AcademyView } from "@/components/pages/academy-view"
import { getAcademyContent } from "@/lib/i18n/pages/academy"
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
  const c = getAcademyContent(locale)
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${locale}/academy`,
      languages: hreflangAlternates("/academy"),
    },
    openGraph: {
      locale: ogLocale[locale],
    },
  }
}

export default async function LocaleAcademyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  return <AcademyView locale={locale as Locale} />
}
