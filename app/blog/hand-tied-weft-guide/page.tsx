import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle } from "lucide-react"

export const metadata = {
  title: "What is Hand-Tied Weft Hair Extensions? Complete Guide 2025 | DS Hair Beauty",
  description:
    "Hand-tied weft explained — what it is, why salons prefer it, how to apply it, and where to source trade-grade hand-tied weft in Manchester. Expert guide from DS Hair Beauty.",
}

export default function HandTiedWeftPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <article className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-20">
            {/* Breadcrumb */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary rounded-full px-2.5 py-1 font-medium">Product Guide</span>
              <span>March 2025</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 8 min read</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
              What is Hand-Tied Weft Hair Extensions? The Complete Salon Guide for 2025
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Hand-tied weft has become the most requested extension method in UK professional salons — and for good reason. If you are a salon owner or hair extension specialist, here is everything you need to know.
            </p>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80"
                alt="Hand-tied weft hair extensions"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>What is Hand-Tied Weft?</h2>
              <p>
                Hand-tied weft (also called hand-sewn weft or HTW) is a type of hair extension made by hand-sewing individual strands of hair onto a thin thread track — as opposed to machine weft, which uses a thick sewn edge. The result is an ultra-thin, flat, flexible weft that sits virtually invisible against the scalp.
              </p>
              <p>
                Unlike machine weft, hand-tied weft can be cut anywhere along the track without the hair falling out — making it highly versatile for custom sizing in the salon.
              </p>

              <h2>Why Do Salons Prefer Hand-Tied Weft?</h2>
              <ul>
                <li><strong>Flatter profile:</strong> Sits flat against the head — no bulge or ridge visible through the hair</li>
                <li><strong>Suitable for fine hair:</strong> The thinner weft is less detectable in clients with finer or lighter hair — the majority of white hair salon clients in Manchester</li>
                <li><strong>Less weight:</strong> Lighter than machine weft — more comfortable for clients over long-term wear</li>
                <li><strong>Customisable sizing:</strong> Can be cut to any width without unravelling, allowing perfect fit for any head shape</li>
                <li><strong>No return edge:</strong> Eliminates the folded-over bulky edge of machine weft</li>
              </ul>

              <h2>How is Hand-Tied Weft Applied?</h2>
              <p>
                Hand-tied weft is typically installed using the beaded weft method (also called NBR — Natural Beaded Rows). The process involves:
              </p>
              <ol>
                <li>Creating horizontal rows of small beads along the natural hair</li>
                <li>Sewing the weft onto the beaded row using a needle and thread</li>
                <li>The weft lies flat, with the beads hidden underneath</li>
              </ol>
              <p>
                Installation takes approximately 2–4 hours depending on the volume required. Results last 8–12 weeks before a move-up (maintenance) appointment is needed.
              </p>

              <h2>Hand-Tied Weft vs Machine Weft: Key Differences</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Hand-Tied Weft</th>
                      <th>Machine Weft</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Thickness</td><td>Ultra-thin (~1mm)</td><td>Thicker (3–4mm)</td></tr>
                    <tr><td>Weight</td><td>Light</td><td>Heavier</td></tr>
                    <tr><td>Cuttable</td><td>Yes, anywhere</td><td>Only at seam lines</td></tr>
                    <tr><td>Best for</td><td>Fine to medium hair</td><td>Medium to thick hair</td></tr>
                    <tr><td>Retail price</td><td>Premium</td><td>Standard</td></tr>
                    <tr><td>Salon margin</td><td>High (£400–600+)</td><td>Standard</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>How to Source Trade-Grade Hand-Tied Weft in the UK</h2>
              <p>
                The quality of hand-tied weft varies enormously between suppliers. Key things to look for:
              </p>
              <ul>
                <li><strong>100% Remy human hair:</strong> Cuticles must be aligned — non-Remy hair tangles rapidly</li>
                <li><strong>Colour accuracy:</strong> Your supplier must offer precise colour matching, not just approximate shade charts</li>
                <li><strong>Consistent thread tension:</strong> Poorly sewn wefts lose hair from the track</li>
                <li><strong>Local availability:</strong> Waiting 3–4 weeks for stock from overseas creates scheduling problems for your salon</li>
              </ul>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 my-8 not-prose">
                <h3 className="font-semibold text-lg mb-2">Manchester Salons: Get Trade Pricing on Hand-Tied Weft</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  D.S Hair & Beauty supplies hand-tied weft to professional salons across Manchester and the Northwest. Free colour matching kit with your first trade order. Same or next-day supply.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/salon-partners">Apply for Trade Account</Link>
                  </Button>
                  <Button variant="outline" className="border-green-500 text-green-700 hover:bg-green-50" asChild>
                    <a href="https://wa.me/8613516946001?text=Hi!%20I%27m%20interested%20in%20trade%20pricing%20for%20hand-tied%20weft." target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>

              <h2>Frequently Asked Questions</h2>
              <h3>How long does hand-tied weft last?</h3>
              <p>With proper care, hand-tied weft hair itself can last 12–18 months. Move-up appointments are typically every 8–12 weeks as the natural hair grows.</p>

              <h3>Can you colour hand-tied weft?</h3>
              <p>Yes — 100% Remy human hair can be coloured, highlighted, and toned just like natural hair. However, we strongly recommend using pre-coloured or custom-blended weft from your supplier to reduce salon processing time and chemical exposure on the hair.</p>

              <h3>Is hand-tied weft suitable for all hair types?</h3>
              <p>Hand-tied weft is ideal for fine to medium hair. For very thick or coarse hair, heavier machine weft or multiple rows of hand-tied weft may be more appropriate. Consult with your extension specialist.</p>
            </div>

            {/* CTA Bottom */}
            <div className="mt-12 pt-8 border-t">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" /> More Articles
              </Link>
            </div>
          </article>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
