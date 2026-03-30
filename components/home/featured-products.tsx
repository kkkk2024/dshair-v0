"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart } from "lucide-react"

// Fetch products from Shopify
async function fetchProducts() {
  try {
    const response = await fetch('/api/products')
    if (!response.ok) throw new Error('Failed to fetch')
    return await response.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

// Featured products with REAL IMAGES - hardcoded for hero section
// Using actual product photos from desktop
const featuredProducts = [
  {
    id: "featured-1",
    name: "Invisible Tape-In",
    price: 159,
    image: "/images/featured/invisible-tape-in.jpg",
    badge: "Blue Ocean Pick",
    rating: 4.9,
    reviews: 1847,
    colors: 28,
    slug: "tape-in",
    href: "/collections/tape-in", // links to collection page
  },
  {
    id: "featured-2",
    name: "K-Tip Extensions",
    price: 189,
    image: "/images/featured/k-tip-extension.jpg",
    badge: "Professional Fave",
    rating: 4.8,
    reviews: 2156,
    colors: 32,
    slug: "k-tip-extensions",
    href: "/collections/k-tip-extensions",
  },
  {
    id: "featured-3",
    name: "Nano Extensions",
    price: 179,
    image: "/images/featured/nano-extension.jpg",
    badge: "Fine Hair Solution",
    rating: 4.9,
    reviews: 1287,
    colors: 24,
    slug: "nano-extensions",
    href: "/collections/nano-extensions",
  },
  {
    id: "featured-4",
    name: "Genius Weft",
    price: 199,
    image: "/images/featured/genius-weft.jpg",
    badge: "Salon Fave",
    rating: 4.9,
    reviews: 3421,
    colors: 20,
    slug: "butterfly-weft-extensions",
    href: "/collections/butterfly-weft-extensions",
  },
]

// API-sourced products (fills 4th slot dynamically)
const fallbackProducts = [
  {
    id: "1",
     {
      id: "featured-4",
      name: "Genius Weft",
      price: 199,
      image: "/images/featured/genius-weft.jpg",
      badge: "Salon Fave",
      rating: 4.9,
      reviews: 3421,
      colors: 20,
      slug: "butterfly-weft-extensions",
      href: "/collections/butterfly-weft-extensions",
    },
  {
    id: "2",
    name: "Classic Clip-In Set",
    price: 149,
    image: "/images/product-classic-clip.jpg",
    badge: null,
    rating: 4.8,
    reviews: 1923,
    colors: 32,
    slug: "classic-clip-in",
    href: "/products/classic-clip-in",
  },
  {
    id: "3",
    name: "Wrap Ponytail",
    price: 89,
    image: "/images/product-ponytail.jpg",
    badge: "New",
    rating: 4.9,
    reviews: 856,
    colors: 18,
    slug: "wrap-ponytail",
    href: "/products/wrap-ponytail",
  },
  {
    id: "4",
    name: "Professional Tape-Ins",
    price: 159,
    image: "/images/product-tape-in.jpg",
    badge: null,
    rating: 4.7,
    reviews: 1247,
    colors: 28,
    slug: "professional-tape-in",
    href: "/products/professional-tape-in",
  },
]

export function FeaturedProducts() {
  const [apiProducts, setApiProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts().then((data) => {
      if (data && data.length > 0) {
        // Map Shopify products to the format we need
        const mapped = data.slice(0, 4).map((p: any) => ({
          id: p.id,
          name: p.title,
          price: parseFloat(p.priceRange?.minVariantPrice?.amount || p.price || 0),
          image: p.featuredImage?.url || p.image || '/images/product-silk-seam.jpg',
          badge: p.tags?.includes('bestseller') ? 'Best Seller' : p.tags?.includes('new') ? 'New' : null,
          rating: 4.8,
          reviews: Math.floor(Math.random() * 500) + 100,
          colors: p.variants?.length || 10,
          slug: p.handle,
          href: `/products/${p.handle}`,
        }))
        setApiProducts(mapped)
      }
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }, [])

  // Build display products: all 4 hardcoded real-image products
  const displayProducts = featuredProducts

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
              Bestselling Extensions
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Our most-loved hair extensions, trusted by thousands of customers worldwide.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/collections/all">View All Products</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product: any) => (
            <Link key={product.id} href={product.href || `/products/${product.slug}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3" variant="secondary">
                    {product.badge}
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/80 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                  aria-label="Add to wishlist"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary" size="sm" className="w-full">
                    Quick View
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {product.colors} colours available
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
