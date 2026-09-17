import { permanentRedirect } from "next/navigation"
import { collections, getCollectionBySlug } from "@/lib/products"
import { CollectionView, collectionMetadata } from "@/components/collections/collection-view"
import { defaultLocale } from "@/lib/i18n/config"

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
  return collectionMetadata(slug, defaultLocale)
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params

  // Same reasoning as product pages: a collection address that no longer exists
  // is a legacy URL, so send it to the full range rather than a dead end.
  if (!getCollectionBySlug(slug)) {
    permanentRedirect("/collections/all")
  }

  return <CollectionView slug={slug} locale={defaultLocale} />
}
