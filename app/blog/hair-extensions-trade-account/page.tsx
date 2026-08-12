import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ArrowRight, Users, Package, BadgePercent, Truck } from "lucide-react"
import { ArticleJsonLd, FaqJsonLd } from "@/components/seo/json-ld"
import { RelatedGuides } from "@/components/blog/related-guides"

export const metadata = {
  title: "Hair Extensions Trade Account: What It Is & How to Open One (UK Salons) | D.S Hair Beauty",
  description:
    "A hair extensions trade account gives UK salons wholesale pricing, priority stock, and account support. Learn what trade accounts include, how to qualify, and why factory-direct beats traditional distributors.",
  openGraph: {
    title: "Hair Extensions Trade Account: What It Is & How to Open One (UK Salons) | D.S Hair Beauty",
    description: "Wholesale pricing, priority stock, and account support for UK salons. How to qualify and what to compare.",
    url: "https://www.dshairbeauty.co.uk/blog/hair-extensions-trade-account",
    siteName: "D.S Hair Beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hair extensions trade account for UK salons",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-08-03",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/hair-extensions-trade-account",
  },
}

const faqs = [
  {
    question: "What is a hair extensions trade account?",
    answer:
      "A trade account is a professional buying relationship with a hair extension supplier. It gives salons and stylists access to wholesale pricing, priority stock allocation, trade-only products, and account support — instead of paying consumer retail prices.",
  },
  {
    question: "Do I need a business to open a trade account?",
    answer:
      "Yes — trade accounts are for legitimate businesses. Most UK suppliers ask for a salon name, trading address, and some proof of professional activity (a website, social profile, or stylist qualification). At D.S Hair Beauty we verify trade status but have no minimum order, so new freelancers are welcome.",
  },
  {
    question: "How fast can I get approved?",
    answer:
      "Many suppliers approve within one business day. D.S Hair Beauty approves most applications the same day, and you can place your first order immediately after approval.",
  },
  {
    question: "Is there a minimum order on a trade account?",
    answer:
      "It depends on the supplier. Large distributors often require 10–50 units per product. D.S Hair Beauty has no minimum order quantity — you buy what you need, when you need it, at trade prices.",
  },
  {
    question: "What is the difference between a trade account and private label?",
    answer:
      "A trade account lets you buy branded product at wholesale prices to use in your salon. Private label goes further: the product ships under your own salon brand with custom packaging. Trade is the starting point; private label is the next step once you have steady volume.",
  },
]

export default function HairExtensionsTradeAccount() {
  return (
    <CartProvider>
      <BlogJsonLd slug="hair-extensions-trade-account" />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <ArticleJsonLd
            title="Hair Extensions Trade Account: What It Is & How to Open One (UK Salons)"
            description="A hair extensions trade account gives UK salons wholesale pricing, priority stock, and account support. Learn what trade accounts include, how to qualify, and why factory-direct beats traditional distributors."
            authorUrl="https://www.dshairbeauty.co.uk/about/caro-chen"
            datePublished="2026-08-03"
            image="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80"
            url="https://www.dshairbeauty.co.uk/blog/hair-extensions-trade-account"
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
                Trade & Wholesale
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                Hair Extensions Trade Account
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                What a trade account actually gives your salon, how to qualify in the UK, and why factory-direct
                supply is changing the maths for independent salons.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/trade-wholesale">Open Trade Account</Link>
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
                <span className="text-[#4A1942] font-medium">Trade Account</span>
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
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-2 mb-6">What Is a Hair Extensions Trade Account?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A <strong>trade account</strong> is a professional buying relationship with a hair extension
                supplier. Instead of paying consumer retail prices, your salon buys at wholesale rates and gets
                access to things retail customers never see: priority stock, trade-only shades, reorder support,
                and someone who actually knows the product.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                In plain terms: a retail customer pays full price for one set. A salon with a trade account pays
                roughly 30–60% less per unit and treats extensions as a service line — buying by the weft, the
                pack, or the full head, and billing the client for the application on top.
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">What a Good Trade Account Includes</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: BadgePercent, title: "Wholesale pricing", text: "Trade rates on every SKU — typically 30–60% below retail. The single biggest lever on your extension margin." },
                  { icon: Package, title: "Priority stock", text: "Trade buyers get allocated popular shades and lengths before they sell out to retail." },
                  { icon: Truck, title: "Reliable reorders", text: "Express 3–5 day factory-direct shipping, so you reorder as needed without holding excess inventory." },
                  { icon: Users, title: "Account support", text: "Direct contact with people who know the hair — WhatsApp, email, or phone — not a ticket queue." },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                    <Icon className="h-6 w-6 text-amber-500 mb-3" />
                    <h4 className="font-semibold text-[#4A1942] mb-2">{title}</h4>
                    <p className="text-sm text-[#6B3A6E]">{text}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">How to Qualify for a Trade Account in the UK</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Most reputable UK suppliers ask for basic proof you are a legitimate trade buyer. This protects
                their pricing and their reputation — they need to know product will be applied professionally.
              </p>
              <div className="not-prose space-y-3 mb-10">
                {[
                  { step: "Proof of trading", detail: "Salon name, trading address, and a website or social profile. A business registration number is often accepted." },
                  { step: "Professional profile", detail: "A stylist qualification, insurance certificate, or a portfolio of extension work." },
                  { step: "Account application", detail: "Complete a short trade form. D.S Hair Beauty approves most applications the same day." },
                  { step: "First order", detail: "Many suppliers recommend a sample order first so you can assess quality before committing to volume." },
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

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Trade Account vs Private Label: Which Do You Need?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A <strong>trade account</strong> is the entry point: you buy branded product at wholesale prices
                and use it in your salon. <strong>Private label</strong> is the next step — the same product ships
                under your own salon brand, with custom packaging and your name on it.
              </p>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                <div className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                  <h4 className="font-semibold text-[#4A1942] mb-2">Trade Account</h4>
                  <ul className="text-sm text-[#6B3A6E] space-y-1 list-disc pl-4">
                    <li>Starts immediately</li>
                    <li>Branded D.S Hair &amp; Beauty product</li>
                    <li>Best for testing demand</li>
                    <li>No minimum order</li>
                  </ul>
                </div>
                <div className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                  <h4 className="font-semibold text-[#4A1942] mb-2">Private Label</h4>
                  <ul className="text-sm text-[#6B3A6E] space-y-1 list-disc pl-4">
                    <li>Your salon brand on the box</li>
                    <li>Custom packaging &amp; shade sets</li>
                    <li>Best once volume is steady</li>
                    <li>Higher perceived value</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Not sure yet? Open a trade account first, learn which shades and methods your clients actually buy,
                then move to private label once you have real reorder data. See our{" "}
                <Link href="/blog/private-label-hair-extensions-uk" className="text-[#4A1942] font-semibold underline">
                  private label guide
                </Link>{" "}
                for the full path.
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Why Factory-Direct Beats Traditional Distributors</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Traditional distributors sit between the factory and your salon — each layer adds cost. A
                factory-direct supplier (like our manufacturing arm{" "}
                <a href="https://wigexporter.com" className="text-[#4A1942] font-semibold underline" target="_blank" rel="noopener noreferrer">
                  wigexporter.com
                </a>
                ) removes that layer, so your trade price reflects the actual cost of making the hair, not three
                markups stacked on top.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The practical upside: better margins for your salon, and a supplier who can customise (shade
                matching, private label, packaging) because they actually control production. If you are comparing
                suppliers, our{" "}
                <Link href="/switch-trade-supplier" className="text-[#4A1942] font-semibold underline">
                  switch-your-supplier comparison
                </Link>{" "}
                breaks down the real differences.
              </p>

              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">Open Your Free Trade Account</h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  No minimum order. Same-day approval. Wholesale pricing on 100% Remy human hair extensions, with
                  express 3–5 day shipping to the UK &amp; EU.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/trade-wholesale">Open a Trade Account →</Link>
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
                <Link href="/blog/wholesale-hair-extensions-uk" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Wholesale Hair Extensions UK</p>
                </Link>
                <Link href="/blog/hair-extension-profit-margin-guide" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Hair Extension Profit Margins</p>
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
        <RelatedGuides slug="hair-extensions-trade-account" />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
