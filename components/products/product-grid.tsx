"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"
import { Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Grid3X3, LayoutGrid } from "lucide-react"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const [sortBy, setSortBy] = useState("featured")
  const [gridCols, setGridCols] = useState<3 | 4>(3)

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return 0 // Would need a date field
      default:
        return 0
    }
  })

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b">
        <p className="text-sm text-muted-foreground">
          Showing {products.length} {products.length === 1 ? "product" : "products"}
        </p>
        
        <div className="flex items-center gap-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Top Rated</SelectItem>
            </SelectContent>
          </Select>

          <div className="hidden md:flex items-center gap-1 border rounded-lg p-1">
            <Button
              variant={gridCols === 3 ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setGridCols(3)}
              aria-label="3 column grid"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={gridCols === 4 ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setGridCols(4)}
              aria-label="4 column grid"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No products found matching your criteria.</p>
          <Button variant="outline" className="mt-4">
            Clear Filters
          </Button>
        </div>
      ) : (
        <div
          className={`grid gap-6 ${
            gridCols === 4
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
