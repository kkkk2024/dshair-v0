import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, XCircle, Phone } from "lucide-react"

export const metadata = {
  title: "How to Choose a Hair Extension Supplier for Your Salon | D.S Hair Beauty",
  description:
    "Choosing the right trade hair extension supplier can make or break your salon business. Learn the key factors to evaluate suppliers, spot red flags, and find a UK partner you can rely on.",
}

export default function HowToChooseHairExtensionSupplier() {
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
                Trade Guide
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                How to Choose a Hair Extension Supplier for Your Salon
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                The right supplier means consistent quality, reliable stock, and a partner who understands the UK salon trade. Here is everything you need to know before you commit.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/salon-partners">Open Trade Account</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/collections/tape-in-extensions">Browse Products</Link>
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
                <span className="text-[#4A1942] font-medium">How to Choose a Hair Extension Supplier</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">

            <div className="prose prose-lg max-w-none">

              {/* ── Why It Matters ──────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">Why Your Choice of Supplier Matters</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hair extensions are one of the most profitable salon services — but only when they are done right. A poor-quality weft, a mismatched colour, or a supplier who cannot deliver on time does not just cost you money; it costs you clients. In a relationship-driven industry, your reputation rides on the products you use.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                That is why choosing the right <strong>trade hair extension supplier</strong> is one of the most important business decisions you will make. Whether you run a busy Manchester city salon or a boutique studio in Leeds, the supplier you work with shapes every extension appointment you book.
              </p>

              {/* ── Hero Image ──────────────────────────── */}
              <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80"
                  alt="Professional salon consultation for hair extensions"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ── Key Factors ────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Key Factors to Evaluate a Hair Extension Supplier</h2>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">1. Hair Quality: Remy vs. Non-Remy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Not all human hair is equal. <strong>100% Remy human hair</strong> means the cuticle is kept intact and all strands run in the same direction — resulting in tangle-free, natural-looking extensions that last 3–6 months with proper care.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Non-Remy hair is cheaper but tangles quickly, lacks shine, and often cannot be reused. For salon reputation, always insist on Remy hair and ask your supplier for certification.
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">2. Colour Consistency Across Batches</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Clients return every 6–8 weeks for repositioning or reapplication. If your next batch of extensions looks different from the last, you will spend hours colour-matching — or worse, lose the client.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Ask suppliers for samples from different production batches before committing. Consistent colour matching across orders is a sign of a quality manufacturer, not just a trader.
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">3. Range of Colours and Lengths</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Your clients are diverse. A good supplier should offer at minimum 30+ shades across all extension types, including multi-tonal and balayage options. Lengths should range from 14" to 28".
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At D.S Hair Beauty, we stock 40+ shades across Clip-In, Tape-In, K-Tip, Weft, Butterfly Weft, and Nano Ring — all in 100% Remy human hair. If your current supplier cannot meet your colour range, they are limiting your salon revenue.
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">4. Lead Time and Reliability</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                UK salons work to appointment schedules. When a client books in for a full-head K-tip application and your supplier tells you the stock is delayed, you face two bad options: disappoint the client or source emergency stock elsewhere.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Look for suppliers with UK-based stock or fast international shipping (5–10 working days). D.S Hair Beauty holds stock in the UK for rapid dispatch — because we know your appointments do not wait.
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">5. Trade Support and Account Management</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A transactional supplier who only sends you an invoice is not a partner. Look for suppliers who offer trade accounts with net-30 terms, dedicated account managers, and responsive support via WhatsApp or email. At D.S Hair Beauty, trade accounts receive priority dispatch, volume discounts, and direct access to our team.
              </p>

              {/* ── Red Flags ───────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Red Flags to Watch Out For</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Spotting a poor supplier before you commit saves months of frustration. Here are the warning signs:
              </p>

              <div className="not-prose space-y-3 mb-10">
                {[
                  { flag: "Prices too low to be credible", detail: "If a wholesale price seems impossibly low, the hair is almost certainly non-Remy or heavily processed. You will pay more in client complaints than you save." },
                  { flag: "No physical samples available", detail: "Legitimate suppliers are happy to send sample wefts. If a supplier refuses or only sends photos, walk away." },
                  { flag: "Vague or copy-heavy product descriptions", detail: "Quality suppliers invest in accurate colour profiles and technical specifications. Vague descriptions mean they do not know their own product." },
                  { flag: "No trade account terms", detail: "If they only sell at full retail without any professional discount, they are targeting consumers, not salons — which suggests they have no understanding of the trade market." },
                  { flag: "Slow or non-existent customer support", detail: "Test their response time before committing. A supplier who takes 3 days to reply to an enquiry will be worse when you have an urgent order problem." },
                ].map(({ flag, detail }) => (
                  <div key={flag} className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-xl">
                    <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-red-700 block mb-1">{flag}</strong>
                      <span className="text-sm text-red-600/80">{detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Questions to Ask ───────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Questions to Ask Before You Commit</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Send these questions in your initial enquiry. How a supplier responds tells you everything about what working with them will be like:
              </p>

              <div className="not-prose space-y-3 mb-10">
                {[
                  "What percentage of your hair is Remy? Can you provide certification?",
                  "Do you hold UK-based stock, and what are your standard dispatch times?",
                  "What is your minimum order quantity for trade accounts?",
                  "Do you offer volume discounts, and what are your trade pricing tiers?",
                  "Can I order samples before placing a full order?",
                  "What is your returns or quality dispute policy?",
                  "Do you offer credit terms (e.g. net-30) for established trade accounts?",
                  "What aftercare or education resources do you provide to salons?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-[#3D2314]">{q}</span>
                  </div>
                ))}
              </div>

              {/* ── UK-Based Suppliers ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Why UK-Based Suppliers Are Often the Better Choice</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                It is tempting to source directly from manufacturers overseas for the lowest unit price. But for UK salons, a UK-based supplier often delivers more value:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-8">
                <li><strong>Faster dispatch</strong> — UK stock means next-day or 2-day delivery vs. 2–4 weeks from Asia</li>
                <li><strong>No customs delays or import duty</strong> — which can add 20% to your cost and 3–5 days to delivery</li>
                <li><strong>Colour matching you can trust</strong> — UK suppliers understand the UK market palette and can advise on shades that British clients actually want</li>
                <li><strong>Account management in your time zone</strong> — a WhatsApp message at 9am gets a reply at 9am, not the next business day</li>
                <li><strong>Regulatory confidence</strong> — UK-based suppliers comply with UK trading standards and product safety regulations</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                D.S Hair Beauty is a Manchester-based supplier with 19 years in the hair extension industry. We supply salons across the UK with Remy human hair extensions from UK-held stock, with trade accounts, no minimum order quantities, and direct support.
              </p>

              {/* ── CTA Box ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Ready to Find Your Ideal UK Trade Supplier?
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  D.S Hair Beauty supplies 100% Remy human hair extensions to UK salons at trade prices. Open a free trade account and get your first sample order today.
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
                <Link href="/blog/wholesale-hair-extensions-uk" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Next Article</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Wholesale Hair Extensions UK: A Salon Owner's Guide</p>
                </Link>
                <Link href="/blog/hair-extension-types-guide" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Hair Extension Types Explained: A Complete Guide</p>
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
