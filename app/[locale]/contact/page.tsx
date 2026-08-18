import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ContactView } from "@/components/pages/contact-view"
import { contactContent } from "@/lib/i18n/pages/contact"
import { localeStaticParams } from "@/lib/i18n/routing"
import { isLocale, locales, defaultLocale, hreflangAlternates, SITE_URL, type Locale } from "@/lib/i18n/config"

export function generateStaticParams() {
  return localeStaticParams()
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) return {}
  const c = contactContent[locale]
  const path = `/contact`
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

export default async function ContactLocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale) || locale === defaultLocale) notFound()
  return <ContactView content={contactContent[locale]} locale={locale as Locale} />
}
