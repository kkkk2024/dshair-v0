import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CaroChenView } from "@/components/pages/caro-chen-view"
import { getCaroChenContent } from "@/lib/i18n/pages/caro-chen"
import { SITE_URL, isLocale, defaultLocale, ogLocale, hreflangAlternates, type Locale } from "@/lib/i18n/config"
import { localeStaticParams } from "@/lib/i18n/routing"
import { AuthorJsonLd } from "@/components/seo/json-ld"

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
  const c = getCaroChenContent(locale)
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/${locale}/about/caro-chen`,
      languages: hreflangAlternates("/about/caro-chen"),
    },
    openGraph: {
      locale: ogLocale[locale],
    },
  }
}

export default async function LocaleCaroChenPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  return (
    <>
      <AuthorJsonLd />
      <CaroChenView locale={locale as Locale} />
    </>
  )
}
