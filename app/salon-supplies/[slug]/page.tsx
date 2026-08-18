import { notFound } from "next/navigation"
import { SalonConsumableView } from "@/components/salon/salon-consumable-view"
import { salonConsumables, getSalonConsumableBySlug } from "@/lib/salon-consumables"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return salonConsumables.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getSalonConsumableBySlug(slug)
  if (!product) return { title: "Product Not Found | D.S HAIR & BEAUTY" }
  return {
    title: `${product.name} | Salon Consumables | D.S HAIR & BEAUTY`,
    description: product.shortDescription,
    alternates: { canonical: `/salon-supplies/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.image, width: 800, height: 800, alt: product.name }],
    },
  }
}

export default async function SalonConsumablePage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getSalonConsumableBySlug(slug)
  if (!product) notFound()
  return <SalonConsumableView product={product} locale="en" />
}
