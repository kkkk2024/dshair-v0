import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, Sparkles, Droplets, Scissors, Calendar } from "lucide-react"

import { ArticleJsonLd } from "@/components/seo/json-ld"

export const metadata = {
  title: "Hair Extension Aftercare: Complete Guide for UK Clients & Salons | D.S HAIR & BEAUTY",
  description: "Expert hair extension aftercare guide. Learn how to wash, brush, sleep, and maintain your extensions so they last up to 24 months. Includes product recommendations for UK clients.",
  alternates: { canonical: 'https://www.dshairbeauty.co.uk/blog/hair-extension-aftercare-guide' },
  openGraph: {
    title: "Hair Extension Aftercare: Complete Guide for UK Clients & Salons | D.S HAIR & BEAUTY",
    description: "Expert hair extension aftercare guide. Learn how to wash, brush, sleep, and maintain your extensions so they last up to 24 months.",
    url: "https://www.dshairbeauty.co.uk/blog/hair-extension-aftercare-guide",
    siteName: "D.S HAIR & BEAUTY",
    images: [
      {
        url: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hair extension aftercare guide for UK salons",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-05-01",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/hair-extension-aftercare-guide",
  },
}

export default function HairExtensionAftercareGuide() {
  return (
    <CartProvider>
      <ArticleJsonLd title="Hair Extension Aftercare: Complete Guide for UK Clients & Salons" description="Expert hair extension aftercare guide. Learn how to wash, brush, sleep, and maintain your extensions so they last up to 24 months." author="D.S HAIR & BEAUTY" datePublished="2026-05-01" image="https://www.dshairbeauty.co.uk/og-blog-hair-extension-aftercare-guide.png" url="https://www.dshairbeauty.co.uk/blog/hair-extension-aftercare-guide" />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* ── JSON-LD ───────────────────────────── */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": "Hair Extension Aftercare: Complete Guide for UK Clients & Salons",
                "description": "Expert hair extension aftercare guide. Learn how to wash, brush, sleep, and maintain your extensions so they last up to 24 months.",
                "url": "https://www.dshairbeauty.co.uk/blog/hair-extension-aftercare-guide",
                "datePublished": "2026-05-01",
                "author": { "@type": "Organization", "name": "D.S HAIR & BEAUTY" },
                "publisher": { "@type": "Organization", "name": "D.S HAIR & BEAUTY" },
              })
            }}
          />

          {/* ── Hero ─────────────────────────────────── */}
          <section className="relative bg-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B3A6E 0%, transparent 50%)"
              }} />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                <Sparkles className="h-4 w-4" /> Care Guide 2026
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                Hair Extension Aftercare:<br />Make Them Last Up to 24 Months
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                The way you care for extensions in the first 48 hours — and every day after — determines how long they last. This guide covers everything UK clients and stylists need to know.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/collections/hair-care">Shop Aftercare Products</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/collections/clip-in-extensions">Shop Clip-Ins</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* ── Quick Stats ───────────────────────────── */}
          <section className="bg-[#FDF8F0] border-y border-amber-100">
            <div className="max-w-5xl mx-auto px-4 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { num: "24 mo", label: "max clip-in lifespan" },
                  { num: "48 hrs", label: "before first wash" },
                  { num: "3x/wk", label: "max washing frequency" },
                  { num: "Silk", label: "pillowcase recommended" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <div className="text-3xl font-bold text-[#4A1942]">{num}</div>
                    <div className="text-sm text-[#6B3A6E] mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">

            {/* ── Breadcrumb ───────────────────────── */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-8">
              <span className="bg-[#4A1942]/10 text-[#4A1942] rounded-full px-3 py-1 font-medium">Care Guide</span>
              <span>Updated May 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 9 min read</span>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* ── First 48 Hours ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">The First 48 Hours: Setting the Foundation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                What you do immediately after getting extensions makes a huge difference to how long they last. The bonds (tape, keratin, nano rings) need time to fully set and cure.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5" /> First 48 Hours Checklist
                </h3>
                <ul className="space-y-3">
                  {[
                    "⛔ Don't wash hair — let bonds fully cure",
                    "⛔ Avoid swimming, saunas, and steam rooms",
                    "⛔ Don't tie hair up in a tight ponytail or bun",
                    "✅ Sleep on a silk or satin pillowcase",
                    "✅ Gently brush with an extension-safe brush twice daily",
                    "✅ Keep hands away from bonds (don't touch tape or keratin tips)",
                  ].map(item => (
                    <li key={item} className="text-sm text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>

              {/* ── Washing ────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">How to Wash Extensions Correctly</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Washing extensions is where most clients go wrong. Too often, the wrong products or techniques cause matting at the roots — the #1 cause of early extension removal.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                    <Droplets className="h-5 w-5" /> Do
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Use sulfate-free, extension-safe shampoo",
                      "Wash in a downward motion — never scrub up",
                      "Apply conditioner from mid-length to ends only",
                      "Pat dry with a microfibre towel",
                      "Detangle gently with a wide-tooth comb while damp",
                      "Apply heat protection before any styling",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-green-700">
                        <span className="shrink-0">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                    <Droplets className="h-5 w-5" /> Don't
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Don't use regular supermarket shampoo (too harsh)",
                      "Don't massage the scalp near bonds vigorously",
                      "Don't apply conditioner near tape or keratin bonds",
                      "Don't wring or twist extensions when drying",
                      "Don't use a regular hairbrush on wet extensions",
                      "Don't sleep with wet hair — always dry first",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-red-700">
                        <span className="shrink-0">✗</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ── Sleeping ───────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Sleeping with Hair Extensions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Extensions rub against your pillow all night, causing friction that leads to tangling and matting. A few simple changes can prevent this entirely.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  ["Silk or satin pillowcase", "Reduces friction by up to 75% compared to cotton. The single most impactful change."],
                  ["Tie hair in a loose, low braid or ponytail", "Keeps extensions contained and prevents them from shifting under your head."],
                  ["Loose top knot (if comfortable)", "Works well for longer clip-in wearers. Use a silk scrunchie, never elastic bands."],
                  ["Brush before bed", "Use an extension brush to gently detangle any knots before sleeping."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3 p-4 bg-white border rounded-xl">
                    <span className="text-[#4A1942] text-xl shrink-0">💤</span>
                    <div>
                      <strong className="block">{title}</strong>
                      <span className="text-sm text-muted-foreground">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* ── Brushing ───────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">The Right Way to Brush Extensions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Always use a brush specifically designed for extensions — usually a loop brush or a detangling comb with ball-tipped bristles. Standard brushes can pull out hair and damage bonds.
              </p>
              <div className="bg-[#4A1942]/5 rounded-xl p-6 mb-8">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Scissors className="h-5 w-5 text-[#4A1942]" /> Brushing Technique
                </h3>
                <ol className="space-y-3">
                  {[
                    "Start from the ends — never the roots",
                    "Work in small sections, holding the bond firmly with one hand",
                    "Gently work out tangles from ends upward",
                    "Brush at least twice daily: morning and before bed",
                    "Never brush when hair is soaking wet — pat dry first",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm">
                      <span className="bg-[#4A1942] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">{i + 1}</span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* ── Products ────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Recommended Aftercare Products</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Using the right products can double the lifespan of your extensions. We stock a curated range of salon-grade aftercare products, all extension-safe and tested.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { name: "Extension-Safe Shampoo", desc: "Sulfate-free, pH-balanced formula designed for bonded and taped extensions", price: "From £12" },
                  { name: "Deep Conditioner", desc: "Intensive moisture treatment for dry or colour-treated extension hair", price: "From £14" },
                  { name: "Detangling Spray", desc: "Lightweight detangling formula that prevents matting without weighing hair down", price: "From £10" },
                  { name: "Extension-Safe Brush", desc: "Ball-tipped loop bristles, designed for gentle daily detangling", price: "From £8" },
                  { name: "Heat Protection Spray", desc: "Thermal protection up to 230°C — essential for any heat styling", price: "From £12" },
                  { name: "Silk Scrunchies (x3)", desc: "Gentle on extensions, prevents creasing and pulling", price: "From £9" },
                ].map(({ name, desc, price }) => (
                  <div key={name} className="bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm mb-1">{name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{desc}</p>
                    <span className="text-xs font-bold text-[#4A1942]">{price}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mb-8">
                <Button className="bg-[#4A1942] hover:bg-[#3a1335] text-white" asChild>
                  <Link href="/collections/hair-care">Shop All Aftercare Products</Link>
                </Button>
              </div>

              {/* ── Salon Maintenance ──────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Salon Maintenance Schedule</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For professional extensions (tape-in, keratin, nano ring), clients should return to the salon at regular intervals for maintenance.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      <th className="p-3 text-left">Extension Type</th>
                      <th className="p-3 text-left">Re-tightening</th>
                      <th className="p-3 text-left">Full Removal/Replace</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Tape-In", "Every 4–6 weeks", "Every 3–4 months"],
                      ["K-Tip / Keratin Bond", "Every 6–8 weeks", "Every 4–6 months"],
                      ["Nano Ring", "Every 6–8 weeks", "Every 4–6 months"],
                      ["Weft (Sewn-in)", "Every 6–8 weeks", "Every 3–4 months"],
                      ["Clip-In", "N/A — self-service", "Replace every 12–24 months"],
                    ].map(([type, tighten, replace]) => (
                      <tr key={type} className="border-b">
                        <td className="p-3 font-medium">{type}</td>
                        <td className="p-3">{tighten}</td>
                        <td className="p-3">{replace}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── CTA ─────────────────────────────── */}
              <div className="mt-16 bg-gradient-to-r from-[#4A1942] to-[#7B3A6E] rounded-2xl p-8 md:p-12 text-center text-white">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">Stock the Right Aftercare Products</h3>
                <p className="text-white/80 mb-8 max-w-lg mx-auto">
                  Offer your clients salon-grade aftercare products. Wholesale pricing available for trade accounts — order today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/trade-wholesale">Open Trade Account</Link>
                  </Button>
                  <Button variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
                    <Link href="/collections/hair-care">Shop Aftercare Range</Link>
                  </Button>
                </div>
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
