"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart } from "lucide-react"
import { getHomeContent } from "@/lib/i18n/home"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"

export function FeaturedProducts({ locale }: { locale: Locale }) {
  const c = getHomeContent(locale).featuredProducts

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
            {c.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.products.map((product) => (
            <Link key={product.id} href={localeHref(product.href, locale)} className="group">
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
                  <span className="text-lg font-bold text-accent">
                    {c.tradePrice}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">
                  {product.colors} {c.coloursAvailable}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href={localeHref('/collections/all', locale)}>
              {c.viewAll}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
