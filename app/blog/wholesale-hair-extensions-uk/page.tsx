import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Wholesale Hair Extensions UK: A Salon Owner's Guide to Trade Buying | D.S Hair Beauty",
  description:
    "Buy hair extensions wholesale in the UK with confidence. This guide covers trade pricing, minimum orders, how to qualify as a trade buyer, and what to look for in a UK wholesale supplier.",
}

export default function WholesaleHairExtensionsUK() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">

          {/* ── Hero ─────────────────────────────────── */}
          <section className="relative bg-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B3A6E 0%, transparent 50%)"
              }} />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                Trade & Wholesale
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                Wholesale Hair Extensions UK
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                A Salon Owner's Complete Guide to Trade Buying — from understanding wholesale pricing to qualifying as a professional buyer and finding the right UK supplier.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/salon-partners">Open Trade Account</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/blog">Read More Guides</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* ── Quick Nav ─────────────────────────────── */}
          <div className="bg-[#FDF8F0] border-b border-amber-100">
            <div className="max-w-5xl mx-auto px-4 py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-[#4A1942]">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-[#4A1942]">Blog</Link>
                <span>/</span>
                <span className="text-[#4A1942] font-medium">Wholesale Hair Extensions UK</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">

            <div className="prose prose-lg max-w-none">

              {/* ── What Does Wholesale Mean ─────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">What Does "Wholesale" Mean in Hair Extensions?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In the hair extension industry, <strong>wholesale</strong> refers to buying directly from a supplier or distributor at trade prices — rather than paying full retail. Wholesale buyers are typically salon professionals, stylists, hair boutiques, or registered businesses purchasing extension products for use in their own client services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Wholesale pricing is typically 30–60% lower than consumer retail prices, reflecting the professional trade relationship. The key difference between wholesale and retail is not just price — it is access: trade buyers get priority stock, colour advisory, account terms, and product support that retail customers do not receive.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                In the UK, the <strong>wholesale hair extensions</strong> market includes direct manufacturers, dedicated trade distributors, and salon-focused suppliers. The right choice depends on your salon's volume, specialisation, and the level of support you need.
              </p>

              {/* ── Hero Image ──────────────────────────── */}
              <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80"
                  alt="Professional hair extension wholesale supply for UK salons"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ── Benefits ───────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Benefits of Buying Hair Extensions Wholesale</h2>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">Better Margins for Your Salon</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                When you <strong>buy hair extensions wholesale</strong>, you dramatically improve your per-service margin. A full-head K-tip application that costs you £120–180 in wholesale product can generate £350–600 in client revenue — a 200–400% margin that makes extensions one of the highest-value services in any salon.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Retail prices for extensions are designed for individual consumers buying one set. As a trade buyer, you are purchasing for multiple applications across many clients — and your per-unit cost should reflect that scale.
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">Consistent Quality Across Every Order</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A reputable wholesale supplier maintains strict quality control across batches. This means every time you reorder — whether that is next week or in three months — you receive hair of the same grade, texture, and colour profile.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                For salons, this consistency is non-negotiable. Your reputation depends on delivering the same beautiful result at every appointment. Wholesale suppliers who invest in quality control give you that confidence.
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">Faster, More Reliable Restocking</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Wholesale suppliers who hold UK stock can dispatch within 24–48 hours. This means you can reorder as needed without maintaining large amounts of excess inventory — reducing your cash tied up in stock while keeping your service slots full.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Many UK trade suppliers also offer standing order arrangements, where new stock arrives on a scheduled cycle automatically — so you never run out of popular shades or lengths for your most loyal clients.
              </p>

              {/* ── Minimum Orders ─────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Minimum Order Requirements: What to Expect</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                One of the biggest misconceptions about wholesale buying is that you need to purchase hundreds of items at once. The reality varies significantly by supplier.
              </p>

              <div className="not-prose grid md:grid-cols-3 gap-4 mb-10">
                {[
                  { type: "Large distributors", moq: "10–50 units per SKU", suitable: "High-volume chains and multiple-salon operators" },
                  { type: "Specialist trade suppliers", moq: "1–5 units per SKU", suitable: "Independent salons and boutique studios" },
                  { type: "D.S Hair Beauty trade accounts", moq: "No minimum order quantity", suitable: "All UK salons and freelance stylists" },
                ].map(({ type, moq, suitable }) => (
                  <div key={type} className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                    <h4 className="font-semibold text-[#4A1942] mb-2">{type}</h4>
                    <p className="text-amber-600 font-medium text-sm mb-2">{moq}</p>
                    <p className="text-xs text-[#6B3A6E]">{suitable}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At D.S Hair Beauty, we deliberately have <strong>no minimum order quantity</strong>. Whether you need one weft to replace a damaged piece or a full head of tape-ins for a new client, you pay trade prices. This makes us accessible to every salon, from newly qualified stylists to established multi-chair operations.
              </p>

              {/* ── How to Qualify ─────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">How to Qualify as a Trade Buyer</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Most reputable UK hair extension wholesale suppliers require some proof that you are a legitimate trade buyer. This is to protect both their pricing structure and their reputation — they need to know their products will be applied professionally.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Here is what trade qualification typically involves:
              </p>

              <div className="not-prose space-y-3 mb-10">
                {[
                  { step: "Proof of trading", detail: "A salon name, trading address, and website or social media presence. Some suppliers accept a business registration number." },
                  { step: "Professional profile", detail: "Evidence of your experience — a stylist qualification, insurance certificate, or portfolio of extension work." },
                  { step: "Account application", detail: "Complete a trade account form. D.S Hair Beauty offers same-day approval for most applications." },
                  { step: "First sample order", detail: "Many suppliers require or strongly recommend a sample order before extending credit terms. This protects both parties." },
                ].map(({ step, detail }) => (
                  <div key={step} className="flex items-start gap-4 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#4A1942] block mb-1">{step}</strong>
                      <span className="text-sm text-[#6B3A6E]">{detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── UK Suppliers What to Look For ─────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">UK Wholesale Hair Extension Suppliers: What to Look For</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Not all UK wholesale hair extension suppliers are equal. Here are the attributes that separate the best from the rest:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-8">
                <li><strong>100% Remy human hair as standard</strong> — not a premium upgrade at an inflated price</li>
                <li><strong>UK-held stock</strong> — avoids customs delays, import duty, and unpredictable shipping</li>
                <li><strong>40+ colour options</strong> — including balayage, ombre, and rooted shades that UK clients demand</li>
                <li><strong>No minimum order</strong> — accessible for all salon sizes and specialist stylists</li>
                <li><strong>Trade accounts with net-30 terms</strong> — helps with cash flow management</li>
                <li><strong>Direct contact access</strong> — WhatsApp, email, or phone support from people who know the product</li>
                <li><strong>Free samples before full commitment</strong> — ethical suppliers are confident in their quality</li>
              </ul>

              {/* ── What DSB Offers ─────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What D.S Hair Beauty Offers to UK Trade Buyers</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                D.S Hair Beauty is a Manchester-based wholesale hair extension supplier with 19 years of experience supplying UK salons. We are hair professionals ourselves — so we understand what salon owners and stylists actually need.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We supply the following at trade prices to registered UK salons and stylists:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-8">
                <li>Clip-In, Tape-In, K-Tip, Weft, Butterfly Weft, and Nano Ring extensions</li>
                <li>100% Remy human hair across all ranges</li>
                <li>40+ colours per range including balayage and ombre</li>
                <li>Hair toppers and hair care products</li>
                <li>No minimum order quantity — order what you need, when you need it</li>
                <li>Free trade account — apply in minutes, approved same day</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We also offer dedicated account management for salons with multiple stylists or franchise operations. <Link href="/salon-partners" className="text-[#4A1942] font-semibold underline">Open your free trade account today</Link> and start buying at wholesale prices.
              </p>

              {/* ── CTA Box ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Interested in Our Wholesale Range?
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  Open a free trade account with D.S Hair Beauty and access wholesale pricing on 100% Remy human hair extensions. No minimum order. Same-day approval.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/salon-partners">Open a Trade Account →</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/collections/tape-in-extensions">Browse Products</Link>
                  </Button>
                </div>
              </div>

              {/* ── Internal Links ─────────────────────── */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href="/blog/how-to-choose-hair-extension-supplier" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Article</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">How to Choose a Hair Extension Supplier</p>
                </Link>
                <Link href="/blog/hair-extension-types-guide" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Hair Extension Types Explained</p>
                </Link>
              </div>

              {/* ── Back to Blog ─────────────────────────── */}
              <div className="pt-8 border-t">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Link>
              </div>

            </div>
          </article>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
