import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { ProductGrid } from "@/components/products/product-grid"
import { ProductFilters } from "@/components/products/product-filters"
import { CollectionHeader } from "@/components/products/collection-header"
import { getProductsByCollection, getCollectionBySlug, collections } from "@/lib/products"

interface CollectionPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }))
}

export async function generateMetadata({ params }: CollectionPageProps) {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)
  
  if (!collection) {
    return {
      title: "Collection Not Found | D.S HAIR & BEAUTY",
    }
  }

  return {
    title: `${collection.name} | D.S HAIR & BEAUTY`,
    description: collection.description,
  }
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)
  // Note: getProductsByCollection is now async, but in server component it should work
  const products = await getProductsByCollection(slug)

  if (!collection) {
    notFound()
  }

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <CollectionHeader collection={collection} productCount={products.length} />
          
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
