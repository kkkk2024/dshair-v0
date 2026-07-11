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
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld"

// ─── FAQ data per collection (3 FAQs each) ───────────────────────────────
const COLLECTION_FAQS: Record<string, { question: string; answer: string }[]> = {
  'clip-in': [
    {
      question: 'How long do clip-in extensions last?',
      answer: 'With proper care, our 100% Remy clip-in extensions last 6–12 months. They can be removed daily, making them the most low-commitment method for your clients.',
    },
    {
      question: 'Can I colour-match clip-in extensions to my client\'s hair?',
      answer: 'Yes. All D.S HAIR clip-in sets use double-drawn Remy hair that can be toned or coloured by a professional stylist. We also offer free colour-matching consultations for Manchester salons.',
    },
    {
      question: 'What is the minimum order for clip-in sets?',
      answer: 'Clip-in sets have no minimum order — order 1 set or 100. Trade accounts get preferential pricing and priority stock access.',
    },
  ],
  'tape-in': [
    {
      question: 'How long do tape-in extensions stay in?',
      answer: 'Tape-in extensions last 6–8 weeks per installation. The tape tabs are reusable — simply remove, clean, and re-tape for another 6–8 weeks of wear.',
    },
    {
      question: 'Are tape-in extensions damaging to natural hair?',
      answer: 'When installed and removed correctly by a trained stylist, tape-in extensions are one of the least damaging methods. They distribute weight evenly across the scalp.',
    },
    {
      question: 'How many tape-in pieces do I need for a full head?',
      answer: 'A full head typically requires 40–60 pieces (20–30 sandwiches). We supply tape-in packs in multiples of 10 for flexible salon ordering.',
    },
  ],
  'ponytails': [
    {
      question: 'Can ponytail extensions be worn daily?',
      answer: 'Yes. Our human hair ponytail extensions are designed for daily wear. The integrated comb and clip system keeps them secure all day.',
    },
    {
      question: 'How do I colour-match a ponytail extension?',
      answer: 'Send us a photo on WhatsApp and we will match it precisely. All ponytail extensions use 100% Remy human hair and can also be toned by your stylist.',
    },
    {
      question: 'Do you supply ponytail extensions for salon retail?',
      answer: 'Absolutely. Ponytail extensions are a high-margin retail item for salons. Contact us to set up a trade account with wholesale pricing.',
    },
  ],
  'weft': [
    {
      question: 'What is the difference between hand-tied and machine weft?',
      answer: 'Hand-tied wefts are thinner, more flexible, and lie completely flat against the scalp — invisible even in fine hair. Machine wefts are slightly thicker but more durable for high-volume work.',
    },
    {
      question: 'How long does a weft installation take?',
      answer: 'A full head hand-tied weft installation takes 2–3 hours for an experienced stylist. The result is seamless — no bonds, no tape, just flat wefts sewn into a client\'s natural hair.',
    },
    {
      question: 'Can weft extensions be reused?',
      answer: 'Yes. Hand-tied wefts are designed for multiple installs. Remove carefully, trim any loose hairs, and reinstall. With proper care, a set lasts 9–12 months.',
    },
  ],
  'k-tip-extensions': [
    {
      question: 'How long do K-tip (keratin bond) extensions last?',
      answer: 'K-tip extensions are the longest-lasting method — 3–5 months with proper care. The keratin bonds are heat-fused to natural hair, creating a completely seamless look.',
    },
    {
      question: 'Are K-tip extensions suitable for fine hair?',
      answer: 'Yes, but nano rings are better for very fine hair. K-tips work best for medium-to-thick hair. The bond size is approximately 3mm — discreet but not as small as nano rings.',
    },
    {
      question: 'Can K-tip extensions be removed without damage?',
      answer: 'Yes. Use a keratin bond remover solution and the correct pliers. We supply bond remover and application tools to all trade account holders.',
    },
  ],
  'nano-extensions': [
    {
      question: 'What makes nano rings better for fine hair?',
      answer: 'Nano rings are the smallest hair extension attachment — just 2–3mm. They lie completely flat and are virtually invisible, even on very fine or thinning hair.',
    },
    {
      question: 'How long do nano ring extensions last?',
      answer: 'Nano ring extensions last 8–12 weeks before maintenance is needed. The rings are non-damaging and can be reapplied with new hair when needed.',
    },
    {
      question: 'Do you supply a nano ring application kit?',
      answer: 'Yes. We supply complete nano ring tool kits including pliers, sectioning clips, and loop tools. Available to all trade account holders at wholesale pricing.',
    },
  ],
  'fringes-bangs': [
    {
      question: 'Can fringe extensions be cut to fit my client\'s face shape?',
      answer: 'Yes. All fringe extensions use 100% Remy human hair and can be cut, styled, and coloured by a professional stylist to perfectly frame your client\'s face.',
    },
    {
      question: 'How do fringe extensions attach?',
      answer: 'Most fringe extensions use small combs or clips that slide discreetly into the client\'s natural hair. They take under 2 minutes to fit — perfect for same-day transformations.',
    },
    {
      question: 'Do you offer fringe extensions for thinning hair on top?',
      answer: 'Yes. Our hair toppers (also in our range) are specifically designed for thinning crowns. Fringe extensions can also help camouflage hairline recession when cut by a skilled stylist.',
    },
  ],
  'hair-care': [
    {
      question: 'What shampoo should I recommend for hair extensions?',
      answer: 'Use sulfate-free, paraben-free shampoo and conditioner. Sulfates dry out the hair and weaken bonds/tapes. We supply a full aftercare range designed specifically for Remy human hair extensions.',
    },
    {
      question: 'Can my clients heat-style hair extensions?',
      answer: 'Yes. All D.S HAIR extensions are 100% Remy human hair and can be heat-styled up to 180°C. We recommend a heat-protectant spray to maximise longevity.',
    },
    {
      question: 'How often should extensions be washed?',
      answer: '2–3 times per week is ideal. Over-washing can dry out the hair. Always use cool-to-warm water (never hot) and gently pat dry — never rub.',
    },
  ],
  'butterfly-weft': [
    {
      question: 'What is a butterfly weft?',
      answer: 'Butterfly weft is the newest innovation in weft extensions — a 0.5mm ultra-flat base that lies completely invisible against the scalp. No bumps, no ridges, no tell-tale weft lines.',
    },
    {
      question: 'How is butterfly weft different from hand-tied weft?',
      answer: 'Butterfly weft is even flatter than hand-tied — the base is machine-pressed to 0.5mm vs 1–2mm for hand-tied. It also has a "wing" design that allows for easier installation and a more secure fit.',
    },
    {
      question: 'Can butterfly wefts be cut to any size?',
      answer: 'Yes. Unlike hand-tied wefts that must not be cut, butterfly wefts can be cut to any width without unravelling. This makes them ideal for partial installs and custom fitting.',
    },
  ],
  'hair-toppers': [
    {
      question: 'What hair loss conditions are hair toppers suitable for?',
      answer: 'Hair toppers work best for thinning crowns, part-line widening, and early-to-mid-stage hair loss. They clip in securely and blend with existing hair for a completely natural look.',
    },
    {
      question: 'How is a hair topper different from a wig?',
      answer: 'A topper covers only the crown/part area, not the full head. It is lighter, more breathable, and blends with your client\'s natural hair — perfect for thinning rather than total hair loss.',
    },
    {
      question: 'Can hair toppers be washed and styled like normal hair?',
      answer: 'Yes. All D.S HAIR toppers use 100% Remy human hair. They can be washed, heat-styled, and coloured just like natural hair. Properly cared for, a topper lasts 6–12 months.',
    },
  ],
  'extension-tools': [
    {
      question: 'What tools do I need for a complete extension service?',
      answer: 'Essential tools vary by method: pliers (nano/K-tip), tape tabs (tape-in), thread and needle (weft), and a heat fusion tool (K-tip). We supply complete tool kits for all methods.',
    },
    {
      question: 'Do you offer tool kits for salon start-up?',
      answer: 'Yes. Our Salon Start-Up Tool Kit includes pliers, sectioning clips, loop tools, bond remover, and a professional storage case. Available exclusively to trade account holders.',
    },
    {
      question: 'Are your tools compatible with other brands\' extensions?',
      answer: 'Yes. Our pliers and tools are universally compatible with standard nano rings, micro rings, and K-tip bonds. The only brand-specific item is our tape tab adhesive (which is also available separately).',
    },
  ],
}

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
    twitter: {
      card: 'summary_large_image',
      title: titleMap[slug] || `${collection.name} | D.S HAIR & BEAUTY`,
      description: collection.description,
      images: [`https://www.dshairbeauty.co.uk/og-collection-${slug}.png`],
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
      <>
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://www.dshairbeauty.co.uk" },
            { name: "Collections", url: "https://www.dshairbeauty.co.uk/collections/all" },
            { name: collection.name, url: `https://www.dshairbeauty.co.uk/collections/${slug}` },
          ]}
        />
        {COLLECTION_FAQS[slug] && <FaqJsonLd faqs={COLLECTION_FAQS[slug]} />}
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
      </>
    </CartProvider>
  )
}
