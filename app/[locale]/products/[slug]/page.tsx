import { notFound } from "next/navigation"
import { getProductBySlug, products } from "@/lib/products"
import { ProductPageView } from "@/components/products/product-page-view"
import { getProductSeoMeta } from "@/app/products/[slug]/page"
import { locales, defaultLocale, type Locale, isLocale, ogLocale, hreflangAlternates, SITE_URL } from "@/lib/i18n/config"

interface LocaleProductPageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const nonDefaultLocales = locales.filter((l) => l !== defaultLocale)
  const params: { locale: string; slug: string }[] = []
  for (const locale of nonDefaultLocales) {
    for (const product of products) {
      params.push({ locale, slug: product.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: LocaleProductPageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale)) {
    return { title: "Not Found | D.S HAIR & BEAUTY" }
  }
  const product = getProductBySlug(slug)
  if (!product) {
    return { title: "Product Not Found | D.S HAIR & BEAUTY" }
  }

  const seo = getProductSeoMeta(product)
  const path = `/products/${product.slug}`

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: hreflangAlternates(path),
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: product.images[0] ? [{ url: product.images[0], width: 800, height: 1000, alt: product.name }] : [],
      type: 'website',
      locale: ogLocale[locale as Locale],
      siteName: 'D.S HAIR & BEAUTY',
      url: `${SITE_URL}/${locale}${path}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: product.images[0] ? [product.images[0]] : [],
    },
  }
}

export default async function LocaleProductPage({ params }: LocaleProductPageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  const product = getProductBySlug(slug)
  if (!product) {
    notFound()
  }
  return <ProductPageView product={product} />
}
