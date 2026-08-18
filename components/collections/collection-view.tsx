import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { ProductGrid } from "@/components/products/product-grid"
import { ProductFilters } from "@/components/products/product-filters"
import { CollectionHeader } from "@/components/products/collection-header"
import { getProductsByCollection, getCollectionBySlug } from "@/lib/products"
import { type Locale, defaultLocale, ogLocale } from "@/lib/i18n/config"
import { getLocalizedCollection } from "@/lib/i18n/collections"
import { getShopUi } from "@/lib/i18n/shop"
import { localeHref } from "@/lib/i18n/routing"
import { SITE_URL } from "@/lib/i18n/config"
import { BookOpen, ArrowRight } from "lucide-react"

interface CollectionViewProps {
  slug: string
  locale?: Locale
}

export async function CollectionView({ slug, locale = defaultLocale }: CollectionViewProps) {
  const collection = getCollectionBySlug(slug)
  const products = await getProductsByCollection(slug)
  const localized = getLocalizedCollection(slug, locale)
  const t = getShopUi(locale)

  if (!collection) {
    notFound()
  }

  const banner = localized?.banner
  const guideHref = banner ? localeHref(banner.guideUrl, locale) : undefined

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <CollectionHeader collection={collection} productCount={products.length} locale={locale} />

          {/* ── Salon Guide Banner (per collection) ── */}
          {banner && guideHref && (
            <div className="bg-[#FDF8F0] border-y border-amber-200">
              <div className="container px-4 md:px-6 py-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4A1942] flex items-center justify-center shrink-0">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#4A1942] text-sm">{banner.headline}</p>
                      <p className="text-xs text-[#6B3A6E]">{banner.subtext}</p>
                    </div>
                  </div>
                  <Link
                    href={guideHref}
                    className="inline-flex items-center gap-2 bg-[#4A1942] hover:bg-[#3a1434] text-white text-sm font-medium px-5 py-2.5 rounded-lg shrink-0 transition-colors"
                  >
                    {t.productDetail.readGuide} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="container px-4 md:px-6 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar filters */}
              <aside className="w-full lg:w-64 shrink-0">
                <ProductFilters />
              </aside>
              
              {/* Product grid */}
              <div className="flex-1">
                <ProductGrid products={products} />
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}

export function collectionMetadata(slug: string, locale: Locale = defaultLocale) {
  const collection = getCollectionBySlug(slug)
  const localized = getLocalizedCollection(slug, locale)

  if (!collection) {
    return {
      title: "Collection Not Found | D.S HAIR & BEAUTY",
    }
  }

  const path = `/collections/${slug}`
  const canonical = locale === defaultLocale ? `${SITE_URL}${path}` : `${SITE_URL}/${locale}${path}`

  return {
    title: localized?.seoTitle || `${localized?.name || collection.name} | D.S HAIR & BEAUTY`,
    description: localized?.seoDescription || localized?.description || collection.description,
    alternates: {
      canonical,
      languages: {
        'en-GB': `${SITE_URL}${path}`,
        'de-DE': `${SITE_URL}/de${path}`,
        'fr-FR': `${SITE_URL}/fr${path}`,
        'ar-AR': `${SITE_URL}/ar${path}`,
        'sv-SE': `${SITE_URL}/sv${path}`,
        'pl-PL': `${SITE_URL}/pl${path}`,
        'x-default': `${SITE_URL}${path}`,
      },
    },
    openGraph: {
      title: localized?.seoTitle || `${localized?.name || collection.name} | D.S HAIR & BEAUTY`,
      description: localized?.seoDescription || localized?.description || collection.description,
      url: canonical,
      locale: ogLocale[locale],
      siteName: 'D.S HAIR & BEAUTY',
    },
  }
}
