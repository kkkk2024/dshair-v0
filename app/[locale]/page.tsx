import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { HomePageView } from "@/components/home/home-page-view"
import { getHomeContent } from "@/lib/i18n/home"
import {
  locales,
  defaultLocale,
  isLocale,
  ogLocale,
  SITE_URL,
  hreflangAlternates,
} from "@/lib/i18n/config"
import type { Locale } from "@/lib/i18n/config"

export const dynamicParams = false

export function generateStaticParams() {
  return locales
    .filter((l) => l !== defaultLocale)
    .map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const l = isLocale(locale) ? (locale as Locale) : defaultLocale
  const c = getHomeContent(l)
  const url = `${SITE_URL}/${l}`
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: url,
      languages: hreflangAlternates(),
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url,
      locale: ogLocale[l],
      siteName: "D.S HAIR & BEAUTY",
    },
  }
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  return <HomePageView locale={locale as Locale} />
}
