import { collections } from "@/lib/products"
import { CollectionView, collectionMetadata } from "@/components/collections/collection-view"
import { locales, defaultLocale, type Locale, isLocale } from "@/lib/i18n/config"
import { notFound } from "next/navigation"

interface LocaleCollectionPageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const nonDefaultLocales = locales.filter((l) => l !== defaultLocale)
  const params: { locale: string; slug: string }[] = []
  for (const locale of nonDefaultLocales) {
    for (const collection of collections) {
      params.push({ locale, slug: collection.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: LocaleCollectionPageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale)) {
    return { title: "Not Found | D.S HAIR & BEAUTY" }
  }
  return collectionMetadata(slug, locale as Locale)
}

export default async function LocaleCollectionPage({ params }: LocaleCollectionPageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  return <CollectionView slug={slug} locale={locale as Locale} />
}
