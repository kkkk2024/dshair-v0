import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { ProductDetail } from "@/components/products/product-detail"
import { RelatedProducts } from "@/components/products/related-products"
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products"
import { ProductJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  
  if (!product) {
    return {
      title: "Product Not Found | D.S HAIR & BEAUTY",
    }
  }

  return {
    title: `${product.name} | Remy Human Hair | D.S HAIR & BEAUTY`,
    description: product.description,
    alternates: {
      canonical: `https://www.dshairbeauty.co.uk/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | D.S HAIR & BEAUTY UK`,
      description: product.description,
      images: product.images[0] ? [{ url: product.images[0], width: 800, height: 1000, alt: product.name }] : [],
      type: 'website',
      locale: 'en_GB',
      siteName: 'D.S HAIR & BEAUTY',
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.id)

  return (
    <CartProvider>
      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.dshairbeauty.co.uk' },
          { name: product.category || 'Products', url: `https://www.dshairbeauty.co.uk/collections/all` },
          { name: product.name, url: `https://www.dshairbeauty.co.uk/products/${product.slug}` },
        ]}
      />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <ProductDetail product={product} />
          {relatedProducts.length > 0 && (
            <RelatedProducts products={relatedProducts} />
          )}
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
