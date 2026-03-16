"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price)
  }

  return (
    <Link href={`/products/${product.slug}`} className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            {product.badge}
          </Badge>
        )}
        <button
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          onClick={(e) => {
            e.preventDefault()
            // Add to wishlist logic
          }}
          aria-label={`Add ${product.name} to wishlist`}
        >
          <Heart className="h-4 w-4" />
        </button>
        
        {/* Color swatches preview */}
        {product.colors.length > 0 && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {product.colors.slice(0, 6).map((color) => (
              <div
                key={color.name}
                className="h-5 w-5 rounded-full border border-white/50 shadow-sm"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 6 && (
              <span className="text-xs text-white bg-black/50 px-2 py-1 rounded-full">
                +{product.colors.length - 6}
              </span>
            )}
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" className="w-full" size="sm">
            Quick View
          </Button>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-1 group-hover:text-accent transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews.toLocaleString()})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {product.colors.length} colours · {product.lengths.length > 1 ? `${product.lengths.length} lengths` : product.lengths[0]}
        </p>
      </div>
    </Link>
  )
}
