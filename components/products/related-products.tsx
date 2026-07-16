import { Product } from "@/lib/products"
import { ProductCard } from "./product-card"

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-medium mb-8 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
