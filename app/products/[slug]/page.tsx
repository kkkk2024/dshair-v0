import { notFound } from "next/navigation"
import { getProductBySlug, products } from "@/lib/products"
import { ProductPageView } from "@/components/products/product-page-view"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

// ─── SEO title templates per product type ─────────────────────────────────
const PRODUCT_TYPE_SEO: Record<string, { titleSuffix: string; descPrefix: string; keywords: string[] }> = {
  'Clip-In Extensions': {
    titleSuffix: 'Clip-In Hair Extensions UK',
    descPrefix: '100% Remy human hair clip-in extensions.',
    keywords: ['clip-in extensions', 'human hair clip-ins', 'remy clip-in extensions UK', 'salon clip-in hair'],
  },
  'Tape-In Extensions': {
    titleSuffix: 'Tape-In Hair Extensions UK',
    descPrefix: 'Seamless tape-in hair extensions for salons.',
    keywords: ['tape-in extensions', 'seamless tape hair', 'tape extensions UK', 'salon tape-in'],
  },
  'Weft Extensions': {
    titleSuffix: 'Weft Hair Extensions UK',
    descPrefix: 'Professional weft hair extensions — hand-tied & machine.',
    keywords: ['weft extensions', 'hand-tied weft', 'weft hair extensions UK', 'salon weft'],
  },
  'Butterfly Weft Extensions': {
    titleSuffix: 'Butterfly Weft Extensions UK',
    descPrefix: 'Ultra-flat 0.5mm butterfly weft extensions.',
    keywords: ['butterfly weft', 'ultra-flat weft', 'butterfly extensions UK', 'salon butterfly weft'],
  },
  'K-Tip Extensions': {
    titleSuffix: 'K-Tip Keratin Extensions UK',
    descPrefix: 'Keratin bond K-tip hair extensions for long-term wear.',
    keywords: ['k-tip extensions', 'keratin bond extensions', 'k-tip UK', 'keratin hair extensions'],
  },
  'Nano Ring Extensions': {
    titleSuffix: 'Nano Ring Extensions UK',
    descPrefix: 'Ultra-invisible nano ring extensions for fine hair.',
    keywords: ['nano ring extensions', 'nano extensions UK', 'fine hair extensions', 'nano bond'],
  },
  'Ponytails': {
    titleSuffix: 'Ponytail Hair Extension UK',
    descPrefix: 'Instant volume ponytail extensions — 100% Remy human hair.',
    keywords: ['ponytail extension', 'hair ponytail UK', 'wrap ponytail', 'human hair ponytail'],
  },
  'Hair Topper': {
    titleSuffix: 'Hair Topper for Thinning Hair UK',
    descPrefix: 'Natural-looking hair topper for thinning hair & hair loss.',
    keywords: ['hair topper', 'topper for thinning hair', 'hair loss topper UK', 'crown topper'],
  },
  'Hair Extension Tools': {
    titleSuffix: 'Hair Extension Tools UK',
    descPrefix: 'Professional hair extension installation tools & kits.',
    keywords: ['extension tools', 'hair extension pliers', 'salon tool kit', 'extension removal kit'],
  },
  'Hair Care': {
    titleSuffix: 'Hair Extension Care UK',
    descPrefix: 'Sulfate-free hair extension care products.',
    keywords: ['extension care', 'sulfate-free shampoo extensions', 'extension aftercare UK'],
  },
  'Fringes & Bangs': {
    titleSuffix: 'Fringe & Bangs Extensions UK',
    descPrefix: 'Human hair fringe and bangs extensions.',
    keywords: ['fringe extension', 'bangs extension', 'hair fringe UK', 'clip-in fringe'],
  },
  'I-Tip Extensions': {
    titleSuffix: 'I-Tip Hair Extensions UK',
    descPrefix: 'No-heat I-tip hair extensions with micro rings.',
    keywords: ['i-tip extensions', 'micro ring extensions', 'i-tip UK', 'cold fusion extensions'],
  },
}

export function getProductSeoMeta(product: { name: string; description: string; productType: string; shortDescription: string; price: number; colors: { name: string }[]; lengths: string[]; slug: string; images: string[]; type: string }) {
  const seo = PRODUCT_TYPE_SEO[product.productType]
  const colorCount = product.colors?.length || 0
  const lengthInfo = product.lengths?.join(', ') || ''
  const priceStr = product.price > 0 ? `From £${product.price}.` : ''
  const colorInfo = colorCount > 0 ? `${colorCount} shades available.` : ''

  // SEO-optimized title: [Product Name] — [Type Keyword] | D.S HAIR & BEAUTY
  const title = seo
    ? `${product.name} — ${seo.titleSuffix} | D.S HAIR & BEAUTY`
    : `${product.name} | 100% Remy Human Hair | D.S HAIR & BEAUTY`

  // SEO-optimized description: unique per product with color/length/price signals
  const descParts = [
    seo?.descPrefix || product.shortDescription || product.description,
    colorInfo,
    lengthInfo ? `Lengths: ${lengthInfo}.` : '',
    priceStr,
    'Free UK delivery. Trade pricing available.',
  ].filter(Boolean).join(' ')
  // Trim to ~155 chars for meta description
  const description = descParts.length > 160 ? descParts.substring(0, 157) + '...' : descParts

  const keywords = seo?.keywords
    ? [...seo.keywords, product.name.toLowerCase()]
    : [product.name.toLowerCase(), 'hair extensions', 'remy human hair', 'UK']

  return { title, description, keywords }
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Product Not Found | D.S HAIR & BEAUTY",
    }
  }

  const seo = getProductSeoMeta(product)

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: product.images[0] ? [{ url: product.images[0], width: 800, height: 1000, alt: product.name }] : [],
      type: 'website',
      locale: 'en_GB',
      siteName: 'D.S HAIR & BEAUTY',
      url: `/products/${product.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: product.images[0] ? [product.images[0]] : [],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return <ProductPageView product={product} />
}
