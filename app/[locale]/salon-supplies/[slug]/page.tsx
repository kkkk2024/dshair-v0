import { notFound } from "next/navigation"
import { SalonConsumableView } from "@/components/salon/salon-consumable-view"
import { salonConsumables, getSalonConsumableBySlug } from "@/lib/salon-consumables"
import { getSalonSuppliesContent } from "@/lib/i18n/salon-supplies"
import { locales, defaultLocale, type Locale, isLocale, ogLocale, hreflangAlternates, SITE_URL } from "@/lib/i18n/config"

interface LocaleSalonConsumablePageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const nonDefaultLocales = locales.filter((l) => l !== defaultLocale)
  const params: { locale: string; slug: string }[] = []
  for (const locale of nonDefaultLocales) {
    for (const product of salonConsumables) {
      params.push({ locale, slug: product.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: LocaleSalonConsumablePageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale)) {
    return { title: "Not Found | D.S HAIR & BEAUTY" }
  }
  const product = getSalonConsumableBySlug(slug)
  if (!product) {
    return { title: "Product Not Found | D.S HAIR & BEAUTY" }
  }

  const seo = getSalonSuppliesContent(locale as Locale)
  const path = `/salon-supplies/${product.slug}`

  return {
    title: `${product.name} | ${seo.metaTitle}`,
    description: product.shortDescription,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: hreflangAlternates(path),
    },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.image, width: 800, height: 800, alt: product.name }],
      type: 'website',
      locale: ogLocale[locale as Locale],
      siteName: 'D.S HAIR & BEAUTY',
      url: `${SITE_URL}/${locale}${path}`,
    },
  }
}

export default async function LocaleSalonConsumablePage({ params }: LocaleSalonConsumablePageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  const product = getSalonConsumableBySlug(slug)
  if (!product) {
    notFound()
  }
  return <SalonConsumableView product={product} locale={locale as Locale} />
}
