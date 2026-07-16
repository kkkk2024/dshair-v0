import Image from "next/image"
import { Collection } from "@/lib/products"

interface CollectionHeaderProps {
  collection: Collection
  productCount: number
}

export function CollectionHeader({ collection, productCount }: CollectionHeaderProps) {
  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl text-white">
          <p className="text-sm tracking-widest uppercase text-white/70 mb-2">
            {collection.type === "diy" ? "DIY Extensions" : collection.type === "professional" ? "Professional" : "All Products"}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            {collection.name}
          </h1>
          <p className="text-white/80 text-lg mb-4 leading-relaxed">
            {collection.description}
          </p>
          <p className="text-white/60 text-sm">
            {productCount} {productCount === 1 ? "product" : "products"}
          </p>
        </div>
      </div>
    </section>
  )
}
