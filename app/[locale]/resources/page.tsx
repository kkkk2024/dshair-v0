import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ResourcesView } from "@/components/pages/resources-view"
import { getResourcesContent } from "@/lib/i18n/pages/resources"
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
  const c = getResourcesContent(locale)
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${locale}/resources`,
      languages: hreflangAlternates("/resources"),
    },
    openGraph: {
      locale: ogLocale[locale],
    },
  }
}

export default async function LocaleResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  return <ResourcesView locale={locale as Locale} />
}
