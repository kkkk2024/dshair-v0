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
  openGraph: {
    title: "How to Choose a Hair Extension Supplier for Your Salon | D.S Hair Beauty",
    description: "Learn the key factors to evaluate hair extension suppliers, spot red flags, and find a reliable UK trade partner for your salon.",
    url: "https://www.dshairbeauty.co.uk/blog/how-to-choose-hair-extension-supplier",
    siteName: "D.S Hair Beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "How to choose a hair extension supplier for your salon",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-05-01",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/how-to-choose-hair-extension-supplier",
  },
}

export default function HowToChooseHairExtensionSupplier() {
  return (
    <CartProvider>
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
                "headline": "How to Choose a Hair Extension Supplier for Your Salon",
                "description": "Choosing the right trade hair extension supplier can make or break your salon business. Learn the key factors to evaluate suppliers and spot red flags.",
                "url": "https://www.dshairbeauty.co.uk/blog/how-to-choose-hair-extension-supplier",
                "datePublished": "2026-05-01",
                "author": { "@type": "Organization", "name": "D.S Hair Beauty" },
                "publisher": { "@type": "Organization", "name": "D.S Hair Beauty" },
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
                  <Link href="/collections/tape-in">Browse Products</Link>
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

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">1. Hair Quality: Remy vs. Virgin vs. Non-Remy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The hair extension industry uses three quality classifications — and understanding them is the single most important factor in supplier selection:
              </p>

              <div className="not-prose space-y-3 mb-6">
                <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-100 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-green-800 block mb-1">Virgin Remy Hair</strong>
                    <span className="text-sm text-green-700/80">Collected from a single donor. Never chemically processed, coloured, or permed. Cuticles fully intact and aligned. This is the highest grade — used for premium custom colour work. Expect to pay 40–60% more than standard Remy. Lifespan: 18–24 months with care.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-amber-50 border border-amber-100 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-amber-800 block mb-1">Standard Remy Hair</strong>
                    <span className="text-sm text-amber-700/80">Cuticles intact and aligned. May have undergone gentle processing (colouring, texturising). This is the industry standard for professional trade extensions. Represents 80%+ of trade-grade hair sold to UK salons. Lifespan: 12–18 months.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-red-800 block mb-1">Non-Remy Hair</strong>
                    <span className="text-sm text-red-700/80">Collected from multiple donors — often from brushes, salon floors, or temple offerings. Cuticles stripped via acid bath. Coated in silicone to appear shiny. The silicone washes out in 2–4 shampoos. Lifespan: 1–3 months before matting. Found in budget retail extensions. Never acceptable for professional salon use.</span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Always ask your supplier to specify: &ldquo;Is this Virgin Remy, standard Remy, or non-Remy?&rdquo; A legitimate trade supplier will answer immediately. Evasion is a red flag.
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

              {/* ── China Factory Insights ────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Understanding How Chinese Hair Extension Factories Work</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Over 90% of the world&apos;s Remy human hair originates from China and India, and the majority of processing takes place in Chinese manufacturing hubs — primarily in Xuchang (Henan province), known as the global centre of the human hair trade. Understanding how these factories operate helps you evaluate suppliers more effectively.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>The factory hierarchy:</strong> Not every supplier who calls themselves a &ldquo;factory&rdquo; is one. The Chinese hair extension supply chain has three tiers:
              </p>
              <div className="not-prose space-y-3 mb-6">
                <div className="p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                  <strong className="text-[#4A1942] block mb-1">Tier 1: Raw hair collectors and processors</strong>
                  <span className="text-sm text-muted-foreground">These facilities collect raw hair, sort it by length and quality, wash and de-lice it, and perform the initial cuticle alignment. They sell bulk hair to manufacturers. Fewer than 20 facilities of this scale exist globally.</span>
                </div>
                <div className="p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                  <strong className="text-[#4A1942] block mb-1">Tier 2: Weft and tip manufacturers</strong>
                  <span className="text-sm text-muted-foreground">These factories take processed Remy hair and produce the finished extension products — sewing wefts, applying keratin tips, making tape panels, creating nano rings. They often employ 50–200 workers. This is the tier most &ldquo;factory-direct&rdquo; trade suppliers operate at.</span>
                </div>
                <div className="p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                  <strong className="text-[#4A1942] block mb-1">Tier 3: Trading companies and distributors</strong>
                  <span className="text-sm text-muted-foreground">These businesses buy from Tier 2 manufacturers, brand the products, and sell to salons — often with value added through UK stockholding, colour matching services, and trade account management. Many UK salon suppliers operate primarily at this tier.</span>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>Why this matters for your supplier decision:</strong> A Tier 2 manufacturer may offer lower unit prices but typically requires large minimum order quantities (MOQs) and provides limited ongoing support. A Tier 3 UK-based distributor adds a margin but absorbs the logistics, stockholding, currency risk, and quality control burden. For most independent UK salons, the Tier 3 model delivers better overall value despite the higher unit cost — because the distributor handles the parts of the supply chain that are expensive and risky for a salon to manage alone.
              </p>

              {/* ── MOQ Negotiation ───────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">MOQ Negotiation: What Salon Owners Need to Know</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Minimum Order Quantity (MOQ) is one of the first barriers salon owners encounter when approaching manufacturers or large distributors. Here is how to navigate it:
              </p>
              <div className="not-prose space-y-3 mb-6">
                <div className="flex items-start gap-4 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                  <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#3D2314] block mb-1">Typical MOQ by supplier type</strong>
                    <span className="text-sm text-muted-foreground">Direct Chinese factories: 50–200 sets per colour per order. UK-based distributors: often no MOQ, or as low as 5–10 sets. Blended suppliers (factory with UK warehouse): typically 10–30 sets.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                  <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#3D2314] block mb-1">How to negotiate lower MOQs</strong>
                    <span className="text-sm text-muted-foreground">Start with a sample order (1–3 sets) to test quality. Once satisfied, propose a staggered commitment: &ldquo;We will start with 20 sets this month, with a commitment to 50 sets per month within 6 months if quality and delivery are consistent.&rdquo; Suppliers value predictable volume over one-time large orders.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                  <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#3D2314] block mb-1">The mixed-order strategy</strong>
                    <span className="text-sm text-muted-foreground">Ask if the MOQ applies per product SKU or per order total. A supplier with a 30-set MOQ may accept 10 tape-in, 10 weft, and 10 nano ring in a single order if the total meets the threshold. This allows you to stock variety without overcommitting to any single product type.</span>
                  </div>
                </div>
              </div>

              {/* ── Quality Testing Methods ───────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Quality Testing Methods for Salon Owners</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Before committing to a supplier, perform these five practical tests on sample wefts:
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-lg text-muted-foreground mb-6">
                <li><strong>The Cuticle Direction Test:</strong> Run your thumb and forefinger along a strand from root to tip — it should feel smooth. Run it from tip to root — it should feel slightly rough. If it feels the same in both directions, the cuticle has been stripped. This test alone identifies non-Remy hair in seconds.</li>
                <li><strong>The Wash Test:</strong> Shampoo and condition a sample weft 5–6 times over a week. Observe after drying. Remy hair should remain smooth, shiny, and tangle-free. Non-Remy hair will begin to mat, lose shine, and feel rough.</li>
                <li><strong>The Shedding Test:</strong> Hold a weft by both ends and gently shake it. High-quality wefts should shed fewer than 3–5 strands. If a cloud of hair falls out, the weft construction is poor.</li>
                <li><strong>The Colour Match Test:</strong> Order the same shade from two different batches (separated by at least 2 weeks). Place them side by side under salon lighting. Batch-to-batch colour consistency is the hallmark of a quality manufacturer.</li>
                <li><strong>The Heat Test:</strong> Apply a straightening iron at 180°C to a few strands of the sample. Quality Remy hair should withstand heat styling without burning, smoking, or developing a plastic-like smell. Any of these reactions indicates synthetic blending or heavy chemical processing.</li>
              </ol>

              {/* ── Factory Visit Checklist ────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Factory Visit Checklist (If You Source Direct)</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                If you are considering visiting a manufacturer in China or India — or if you are auditing a UK-based supplier&apos;s facility — here is what to verify in person:
              </p>
              <div className="not-prose space-y-3 mb-6">
                {[
                  { item: "Worker conditions and wages", detail: "Ethical sourcing matters. Well-treated workers produce more consistent quality. Look for ventilated workspaces, reasonable working hours, and fair compensation structures." },
                  { item: "Raw hair storage", detail: "Proper storage means temperature-controlled, ventilated rooms. Raw hair stored in damp or hot conditions develops odour and structural damage before processing." },
                  { item: "Sorting process", detail: "Watch how hair is sorted by length and quality. Consistent sorting = consistent finished product. Random or casual sorting indicates poor quality control." },
                  { item: "Cuticle alignment process", detail: "For Remy hair, the factory must have a process to ensure all cuticles face the same direction before wefting. Ask to see this step — it is the single most important quality determinant." },
                  { item: "Weft sewing quality", detail: "Inspect the tension and spacing of the sewing line. Loose or uneven stitching causes shedding. Double-stitched wefts are more durable than single-stitched." },
                  { item: "Colour processing area", detail: "Ask about their colour formulation system. Professional factories use spectrophotometers and maintained shade libraries — they do not eyeball colours." },
                  { item: "Quality control checkpoint", detail: "Look for a dedicated QC station where finished products are inspected for shedding, colour accuracy, and weight consistency before packaging." },
                ].map(({ item, detail }) => (
                  <div key={item} className="flex items-start gap-4 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#3D2314] block mb-1">{item}</strong>
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  </div>
                ))}
              </div>

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
                D.S Hair Beauty is a factory-direct manufacturer with 19 years in the hair extension industry. We supply salons across the UK with Remy human hair extensions from UK-warehoused stock, with trade accounts, no minimum order quantities, and direct manufacturer support.
              </p>

              {/* ── FAQ ─────────────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Frequently Asked Questions</h2>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">Should I buy directly from a Chinese factory or use a UK-based supplier?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For most independent UK salons, a UK-based supplier delivers better overall value. While factory-direct pricing may be 20–35% lower per unit, you absorb logistics costs, import duties (20% VAT on imports), customs clearance delays, currency fluctuation risk, and quality control responsibility. If your monthly extension volume exceeds 100 sets, factory-direct sourcing may become cost-effective. Below that threshold, a UK supplier who holds stock and manages the supply chain typically provides better reliability at a reasonable premium.
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">What paperwork should I expect from a legitimate trade supplier?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A professional trade supplier should provide: (1) a trade account application form, (2) a wholesale price list (typically 30–50% below retail), (3) certificates of authenticity for Remy classification (mill test reports or supplier declarations), (4) Cosmetic Product Safety Reports for bonded/taped products, and (5) a terms and conditions document covering returns, quality disputes, and payment terms. If a supplier cannot produce any of these, proceed with caution.
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">How do I test a new supplier before committing to a large order?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The &ldquo;small order audit&rdquo; method: place an initial order for 3–5 sets in different shades and types. Evaluate: (1) communication responsiveness during the ordering process, (2) accuracy of delivery timeframe, (3) packaging quality, (4) colour accuracy, (5) hair quality using the five tests described above. Use one set on a trusted client and monitor the result over 4–6 weeks. Only scale up your order volume after this real-world validation.
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">What payment terms should I negotiate?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                New trade accounts typically start on pro-forma (payment before dispatch). After 3–6 months of consistent ordering, negotiate net-30 terms (payment due 30 days after invoice). Some suppliers offer net-15 as a compromise. For large orders (over £1,000), ask about staged payments: 50% upfront, 50% on dispatch. Avoid any supplier demanding 100% upfront payment via unsecured methods like bank transfer to a personal account — use credit card or PayPal for initial orders where chargeback protection exists.
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">How often should I re-evaluate my supplier relationship?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Annually, at minimum. Review: order accuracy rate, delivery reliability, quality consistency, pricing competitiveness, and responsiveness. The hair extension supply market shifts — new manufacturers enter, currency rates change, and a supplier who was excellent two years ago may have declined. Maintain relationships with 2–3 approved suppliers rather than relying on a single source. This provides backup options and keeps your primary supplier motivated to maintain service levels.
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
                    <Link href="/collections/tape-in">Browse Products</Link>
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
