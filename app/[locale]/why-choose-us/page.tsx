import type { Metadata } from "next"
import { notFound } from "next/navigation"
import WhyChooseUsClient from "@/app/why-choose-us/why-choose-us-client"
import { whyChooseUsContent } from "@/lib/i18n/pages/why-choose-us"
import { localeStaticParams } from "@/lib/i18n/routing"
import { isLocale, defaultLocale, hreflangAlternates, SITE_URL, type Locale } from "@/lib/i18n/config"

export function generateStaticParams() {
  return localeStaticParams()
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) return {}
  const c = whyChooseUsContent[locale]
  const path = `/why-choose-us`
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
      locale:
        locale === "fr" ? "fr_FR" : locale === "de" ? "de_DE" : locale === "sv" ? "sv_SE" : locale === "pl" ? "pl_PL" : "en_GB",
      siteName: "D.S HAIR & BEAUTY",
    },
  }
}

export default async function WhyChooseUsLocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  return <WhyChooseUsClient content={whyChooseUsContent[locale]} locale={locale as Locale} />
}
