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
// All 4 slots fixed with real product photos from desktop
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
    href: "/collections/tape-in",
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

// API fallback - kept for reference but not used in displayProducts
async function getFallbackProducts() {
  return featuredProducts
}

export function FeaturedProducts() {
  const [loading, setLoading] = useState(false)

  // Build display products: all 4 hardcoded real-image products
  const displayProducts = featuredProducts

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Bestselling Extensions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most-loved hair extensions, trusted by thousands of customers worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product: any) => (
            <Link key={product.id} href={product.href || `/products/${product.slug}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-primary text-white">
                    {product.badge}
                  </Badge>
                )}
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Add to wishlist"
                >
                  <Heart className="w-4 h-4 text-foreground" />
                </button>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">{product.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground">
                  {product.colors} colours available
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/collections/all-extensions">
              View All Extensions
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
