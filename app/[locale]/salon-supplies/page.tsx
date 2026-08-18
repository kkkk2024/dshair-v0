import type { Metadata } from "next"
import { SalonSuppliesView } from "@/components/salon/salon-supplies-view"
import { getSalonSuppliesContent } from "@/lib/i18n/salon-supplies"
import { locales, defaultLocale, type Locale, isLocale, ogLocale, hreflangAlternates, SITE_URL } from "@/lib/i18n/config"

interface LocaleSalonSuppliesPageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.filter((l) => l !== defaultLocale).map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: LocaleSalonSuppliesPageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return { title: "Not Found | D.S HAIR & BEAUTY" }
  }
  const c = getSalonSuppliesContent(locale as Locale)
  const path = '/salon-supplies'
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: hreflangAlternates(path),
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      locale: ogLocale[locale as Locale],
      siteName: 'D.S HAIR & BEAUTY',
      url: `${SITE_URL}/${locale}${path}`,
    },
  }
}

export default async function LocaleSalonSuppliesPage({ params }: LocaleSalonSuppliesPageProps) {
  const { locale } = await params
  if (!isLocale(locale)) {
    return <SalonSuppliesView locale="en" />
  }
  return <SalonSuppliesView locale={locale as Locale} />
}
