import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ArrowRight, Package, BadgePercent, ClipboardList } from "lucide-react"
import { ArticleJsonLd, FaqJsonLd } from "@/components/seo/json-ld"

export const metadata = {
  title: "Salon Hair Extension Stockist UK: How to Stock & Resell Extensions | D.S Hair Beauty",
  description:
    "Becoming a hair extension stockist lets UK salons sell product to clients as well as apply it. Learn what a stockist arrangement involves, how to manage inventory, and what supplier support to expect.",
  openGraph: {
    title: "Salon Hair Extension Stockist UK: How to Stock & Resell Extensions | D.S Hair Beauty",
    description: "Stock and resell hair extensions from your salon. Inventory, margins, and supplier support for UK stockists.",
    url: "https://www.dshairbeauty.co.uk/blog/salon-hair-extension-stockist-uk",
    siteName: "D.S Hair Beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Salon hair extension stockist UK",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-08-03",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/salon-hair-extension-stockist-uk",
  },
}

const faqs = [
  {
    question: "What does it mean to be a hair extension stockist?",
    answer:
      "A stockist is a salon that carries hair extension inventory on site to sell directly to clients — not only applying extensions as a service, but also retailing packs, wefts, and aftercare for clients to take home or reorder. It turns your salon into both a service provider and a shop.",
  },
  {
    question: "Do I need a separate licence to resell hair extensions in the UK?",
    answer:
      "No specific licence is required to resell hair extensions in the UK, but you must be a registered business (sole trader or ltd) and charge VAT if you are VAT-registered. Your supplier handles product compliance; you handle the retail side through your normal business registration.",
  },
  {
    question: "How much inventory should a salon stockist hold?",
    answer:
      "Start lean. With express 3–5 day factory-direct reordering, most salons only need a small display range — best-selling shades and lengths in tape-in, weft, and a few clip-in sets — plus aftercare. Hold more only once you see steady repeat demand.",
  },
  {
    question: "What margin can a stockist expect?",
    answer:
      "Stockists typically buy at wholesale (30–60% below retail) and resell at retail or salon pricing. The same unit that costs you £40–90 trade can retail at £90–200, giving a 50–120% product margin on top of any application fee you charge.",
  },
  {
    question: "Does D.S Hair Beauty support stockists?",
    answer:
      "Yes. We supply registered UK salons as trade buyers with no minimum order, express 3–5 day shipping, and a digital colour catalogue so you can show clients the full shade range without holding every colour in stock. Private label is available once volume is steady.",
  },
]

export default function SalonHairExtensionStockistUK() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <ArticleJsonLd
            title="Salon Hair Extension Stockist UK: How to Stock & Resell Extensions"
            description="Becoming a hair extension stockist lets UK salons sell product to clients as well as apply it. Learn what a stockist arrangement involves, how to manage inventory, and what supplier support to expect."
            authorUrl="https://www.dshairbeauty.co.uk/about/caro-chen"
            datePublished="2026-08-03"
            image="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=80"
            url="https://www.dshairbeauty.co.uk/blog/salon-hair-extension-stockist-uk"
          />
          <FaqJsonLd faqs={faqs} />

          <section className="relative bg-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B3A6E 0%, transparent 50%)",
                }}
              />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                Stockist & Retail
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                Salon Hair Extension Stockist UK
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                How to become a stockist, manage inventory without tying up cash, and add a retail revenue stream
                on top of your extension services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/trade-wholesale">Become a Stockist</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/blog">More Guides</Link>
                </Button>
              </div>
            </div>
          </section>

          <div className="bg-[#FDF8F0] border-b border-amber-100">
            <div className="max-w-5xl mx-auto px-4 py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-[#4A1942]">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-[#4A1942]">Blog</Link>
                <span>/</span>
                <span className="text-[#4A1942] font-medium">Stockist</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="flex items-center gap-3 mb-8 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl not-prose">
              <div className="w-10 h-10 rounded-full bg-[#4A1942] text-white flex items-center justify-center font-medium text-sm shrink-0">CC</div>
              <p className="text-sm text-[#6B3A6E]">
                Written by <Link href="/about/caro-chen" className="text-[#4A1942] font-semibold underline">Caro Chen</Link>, Founder &amp; Trade Director at D.S Hair &amp; Beauty · 19 years in hair extension manufacturing
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-2 mb-6">What Is a Hair Extension Stockist?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A <strong>stockist</strong> is a salon that carries hair extension inventory on site to sell
                directly to clients — not just applying extensions as a service, but retailing the product itself.
                Your client leaves with a fresh set in her hair <em>and</em> a pack to reorder, or a weft to
                maintain at home. You become both stylist and shop.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                For many salons this is the natural next step after running extensions as a service-only line: you
                already know which shades and methods your clients love, so stocking those becomes low-risk retail
                revenue.
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Service-Only vs Stockist: The Difference</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                <div className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                  <h4 className="font-semibold text-[#4A1942] mb-2">Service-only salon</h4>
                  <ul className="text-sm text-[#6B3A6E] space-y-1 list-disc pl-4">
                    <li>Orders product per appointment</li>
                    <li>Earns on the application fee</li>
                    <li>Zero inventory to manage</li>
                    <li>Client rebooks for re-order</li>
                  </ul>
                </div>
                <div className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                  <h4 className="font-semibold text-[#4A1942] mb-2">Stockist salon</h4>
                  <ul className="text-sm text-[#6B3A6E] space-y-1 list-disc pl-4">
                    <li>Keeps best-sellers in stock</li>
                    <li>Earns on application + product sale</li>
                    <li>Small display inventory</li>
                    <li>Client buys take-home &amp; reorders</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">How to Start as a Stockist</h2>
              <div className="not-prose space-y-3 mb-10">
                {[
                  { step: "Open a trade account", detail: "Register as a trade buyer. D.S Hair Beauty approves most applications the same day, no minimum order." },
                  { step: "Pick a lean starter range", detail: "Your top 5–8 shades in tape-in and weft, plus 2–3 clip-in sets and aftercare. Cover demand you already see." },
                  { step: "Use a digital colour catalogue", detail: "Show clients the full 40+ shade range on a tablet without holding every colour in stock. We provide a free digital catalogue." },
                  { step: "Reorder express", detail: "With 3–5 day factory-direct shipping you top up only what sells — no cash tied in dead stock." },
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

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Inventory Without the Cash Trap</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The old model forced stockists to buy big boxes of every shade upfront. That ties up cash in colours
                that may never sell. With express 3–5 day factory-direct reordering, you can hold a small display
                range and replenish weekly — turning inventory from a liability into a thin, responsive layer.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A practical rule many of our 50+ partner salons use: keep one open pack of each best-seller as a
                display, and a single back-up unit. Everything else is ordered as clients commit. Your shelf looks
                full; your cash stays free.
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What Supplier Support to Expect</h2>
              <div className="not-prose grid md:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: BadgePercent, title: "Wholesale pricing", text: "Trade rates on every SKU — the base of your retail margin." },
                  { icon: ClipboardList, title: "Digital catalogue", text: "40+ shades shown digitally, so you never need every colour physically in stock." },
                  { icon: Package, title: "Express reorders", text: "3–5 day factory-direct shipping keeps your shelf topped without bulk buying." },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                    <Icon className="h-6 w-6 text-amber-500 mb-3" />
                    <h4 className="font-semibold text-[#4A1942] mb-2">{title}</h4>
                    <p className="text-sm text-[#6B3A6E]">{text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">Become a D.S Hair &amp; Beauty Stockist</h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  Free trade account, no minimum order, express 3–5 day shipping, and a digital colour catalogue to
                  show clients the full range. Add retail revenue on top of your services.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/trade-wholesale">Become a Stockist →</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/salon-partners">Salon Partner Programme</Link>
                  </Button>
                </div>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Frequently Asked Questions</h2>
              <div className="not-prose space-y-4 mb-12">
                {faqs.map((f) => (
                  <div key={f.question} className="border border-amber-100 rounded-xl p-5 bg-[#FDF8F0]">
                    <p className="font-semibold text-[#4A1942] mb-2">{f.question}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href="/blog/hair-extensions-trade-account" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Hair Extensions Trade Account</p>
                </Link>
                <Link href="/blog/hair-extension-profit-margin-guide" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Profit Margin Guide</p>
                </Link>
              </div>

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
