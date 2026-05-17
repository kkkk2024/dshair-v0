import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { ProductGrid } from "@/components/products/product-grid"
import { ProductFilters } from "@/components/products/product-filters"
import { CollectionHeader } from "@/components/products/collection-header"
import { getProductsByCollection, getCollectionBySlug, collections } from "@/lib/products"
import { BookOpen, ArrowRight } from "lucide-react"

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
  const collection = getCollectionBySlug(slug)

  if (!collection) {
    return {
      title: "Collection Not Found | D.S HAIR & BEAUTY",
    }
  }

  // SEO-optimised titles per collection
  const titleMap: Record<string, string> = {
    'all': 'Hair Extensions Wholesale UK | 100% Remy Human Hair | D.S HAIR & BEAUTY',
    'diy': 'DIY Hair Extensions | Clip-In & Tape-In | D.S HAIR & BEAUTY',
    'professional': 'Professional Hair Extensions UK | Salon Wholesale | D.S HAIR & BEAUTY',
    'clip-in': 'Clip-In Hair Extensions UK | 100% Remy Human Hair | D.S HAIR & BEAUTY',
    'tape-in': 'Tape-In Hair Extensions UK | Invisible Seamless | D.S HAIR & BEAUTY',
    'ponytails': 'Hair Ponytail Extensions | Human Hair | D.S HAIR & BEAUTY',
    'weft': 'Weft Hair Extensions UK | Hand-Tied & Machine | D.S HAIR & BEAUTY',
    'k-tip-extensions': 'K-Tip Hair Extensions UK | Keratin Bond | D.S HAIR & BEAUTY',
    'nano-extensions': 'Nano Ring Hair Extensions UK | Fine Hair | D.S HAIR & BEAUTY',
    'fringes-bangs': 'Hair Fringes & Bangs Extensions | Human Hair | D.S HAIR & BEAUTY',
    'hair-care': 'Hair Extension Care Products UK | Sulfate-Free | D.S HAIR & BEAUTY',
    'butterfly-weft': 'Butterfly Weft Extensions UK | Salon Wholesale | D.S HAIR & BEAUTY',
    'butterfly-extensions': 'Butterfly Weft Extensions UK | Salon Wholesale | D.S HAIR & BEAUTY',
    'hair-toppers': 'Hair Toppers UK | Thinning Hair Solutions | D.S HAIR & BEAUTY',
    'extension-care': 'Hair Extension Care Products UK | Sulfate-Free Shampoo & Conditioner | D.S HAIR & BEAUTY',
    'extension-tools': 'Hair Extension Tools UK | Salon Installation Kits & Pliers | D.S HAIR & BEAUTY',
    'heated-styling': 'Professional Heated Brushes UK | Salon Styling Tools | D.S HAIR & BEAUTY',
    'storage': 'Hair Extension Storage Bags & Cases UK | Velvet Organiser | D.S HAIR & BEAUTY',
  }
  // SEO-optimised meta descriptions per collection
  const descriptionMap: Record<string, string> = {
    'all': "Shop 100% Remy human hair extensions wholesale for salons. Clip-in, tape-in, weft & more. Free UK delivery, trade pricing available.",
    'diy': "Premium DIY hair extensions for home use. Salon-quality clip-in & tape-in sets in 50+ shades. Free UK delivery, 30-day returns.",
    'professional': "Professional hair extensions for salons & stylists. Wholesale pricing, bulk orders, trade accounts. Expert support & free UK delivery.",
    'clip-in': "Salon-quality clip-in hair extensions in 50+ shades. 100% Remy human hair, easy at-home application. Free UK delivery & 30-day returns.",
    'tape-in': "Ultra-thin seamless tape hair extensions for salons & stylists. Heat-friendly bonds, invisible application. Wholesale pricing, free UK delivery over £50.",
    'ponytails': "Human hair ponytail extensions in 30+ styles. Instant length & volume, no appointment needed. 100% Remy hair, free UK delivery.",
    'weft': "Weft hair extensions for salons: hand-tied & machine weft. Premium Remy hair, seamless bulk pricing. Free UK delivery for trade orders.",
    'k-tip-extensions': "K-tip keratin hair extensions for a premium long-term look. Heat-friendly, no tape or glue. Professional salon wholesale pricing.",
    'nano-extensions': "Nano ring hair extensions — ultra-invisible bonds for fine hair. No heat, no glue, 100% Remy hair. Salon wholesale available.",
    'fringes-bangs': "Hair fringe & bang extensions: instant face-framing colour & volume. 100% Remy human hair, easy to apply at home or in salon.",
    'hair-care': "Prolong your hair extensions with salon-recommended care products. Sulfate-free shampoo, conditioner, brushes & more. Free UK delivery over £30.",
    'butterfly-weft': "Butterfly weft extensions — the ultra-thin 0.5mm industry game-changer. Seamless finish for salons. Wholesale pricing, free UK delivery.",
    'butterfly-extensions': "Butterfly weft extensions — the ultra-thin 0.5mm industry game-changer. Seamless finish for salons. Wholesale pricing, free UK delivery.",
    'hair-toppers': "Hair toppers for thinning hair: silk, mono & mesh base options. Non-surgical hair loss solution. Salon wholesale & retail available.",
    'extension-care': "Hair extension care products: sulfate-free shampoo, conditioner, brushes & detangling combs. Extend extension life by up to 6 months.",
    'extension-tools': "Professional hair extension installation tools: pliers, micro rings, heat tongs & removal kits. Salon-grade quality, free UK delivery.",
    'heated-styling': "Professional heated styling brushes & tools for hair extensions. Salon-grade heat protection, compatible with all Remy hair types.",
    'storage': "Hair extension storage bags & velvet organisers. Keep extensions tangle-free & protected. Premium quality, free UK delivery.",
  }


  return {
    title: titleMap[slug] || `${collection.name} | D.S HAIR & BEAUTY`,
    description: descriptionMap[slug] || collection.description,
    alternates: {
      canonical: `https://www.dshairbeauty.co.uk/collections/${slug}`,
    },
    openGraph: {
      title: titleMap[slug] || `${collection.name} | D.S HAIR & BEAUTY`,
      description: descriptionMap[slug] || collection.description,
      url: `https://www.dshairbeauty.co.uk/collections/${slug}`,
      locale: 'en_GB',
      siteName: 'D.S HAIR & BEAUTY',
    },
  }
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)
  // Note: getProductsByCollection is now async, but in server component it should work
  const products = await getProductsByCollection(slug)

  if (!collection) {
    notFound()
  }

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <CollectionHeader collection={collection} productCount={products.length} />

          {/* ── Salon Guide Banner (per collection) ── */}
          {(() => {
            const BANNERS: Record<string, { guideUrl: string; headline: string; subtext: string }> = {
              "hair-toppers": {
                guideUrl: "/blog/hair-topper-guide",
                headline: "Not sure which topper is right for your client?",
                subtext: "Complete guide: silk vs mono vs mesh base, application steps & salon tips",
              },
              "clip-in": {
                guideUrl: "/blog/clip-in-extensions-guide",
                headline: "New to clip-in extensions?",
                subtext: "Read our complete guide: how to fit, blend, colour-match & care for clip-in sets",
              },
              "weft": {
                guideUrl: "/blog/weft-extensions-guide",
                headline: "Hand-tied or machine weft — which is right for your client?",
                subtext: "Complete guide: application methods, pricing, maintenance cycle & salon revenue tips",
              },
              "ponytails": {
                guideUrl: "/blog/ponytail-extensions-guide",
                headline: "Ponytail extensions — your salon\'s secret revenue weapon",
                subtext: "Read our guide: 5 ways to style, colour-match & upsell ponytail extensions",
              },
              "fringes-bangs": {
                guideUrl: "/blog/fringes-bangs-extensions-guide",
                headline: "Fringe extensions — the most underrated salon product",
                subtext: "Complete guide: face-framing colour, volume techniques & client recommendations",
              },
              "tape-in": {
                guideUrl: "/blog/tape-in-extensions-guide",
                headline: "Tape-in extensions — the UK's most popular method",
                subtext: "Complete guide: invisible application, aftercare & how to maximise salon revenue",
              },
              "k-tip-extensions": {
                guideUrl: "/blog/k-tip-extensions-guide",
                headline: "K-tip extensions — the premium long-term solution",
                subtext: "Complete guide: keratin bonds, maintenance & how to charge premium prices",
              },
              "nano-extensions": {
                guideUrl: "/blog/nano-ring-extensions-guide",
                headline: "Nano ring extensions — ultra-invisible for fine hair",
                subtext: "Complete guide: 3mm bonds, no-heat application & fine hair specialist tips",
              },
              "butterfly-weft": {
                guideUrl: "/blog/butterfly-extensions-guide",
                headline: "Butterfly weft — the industry game-changer",
                subtext: "Complete guide: 0.5mm ultra-thin base, seamless finish & salon pricing guide",
              },
              "butterfly-extensions": {
                guideUrl: "/blog/butterfly-extensions-guide",
                headline: "Butterfly weft — the industry game-changer",
                subtext: "Complete guide: 0.5mm ultra-thin base, seamless finish & salon pricing guide",
              },
            }
            const banner = BANNERS[slug]
            if (!banner) return null
            return (
              <div className="bg-[#FDF8F0] border-y border-amber-200">
                <div className="container px-4 md:px-6 py-5">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#4A1942] flex items-center justify-center shrink-0">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#4A1942] text-sm">{banner.headline}</p>
                        <p className="text-xs text-[#6B3A6E]">{banner.subtext}</p>
                      </div>
                    </div>
                    <Link
                      href={banner.guideUrl}
                      className="inline-flex items-center gap-2 bg-[#4A1942] hover:bg-[#3a1434] text-white text-sm font-medium px-5 py-2.5 rounded-lg shrink-0 transition-colors"
                    >
                      Read the Guide <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })()}

          <div className="container px-4 md:px-6 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar filters */}
              <aside className="w-full lg:w-64 shrink-0">
                <ProductFilters />
              </aside>
              
              {/* Product grid */}
              <div className="flex-1">
                <ProductGrid products={products} />
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
