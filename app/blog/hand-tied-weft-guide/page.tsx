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
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 12 min read</span>
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
                Hand-tied weft (also called hand-sewn weft, HTW, or invisible weft) is a type of hair extension made by hand-sewing individual strands of hair onto a thin thread track — as opposed to machine weft, which uses a thick machine-sewn edge. The result is an ultra-thin, flat, flexible weft that sits at approximately 1mm thickness against the scalp and is virtually undetectable even through fine or light-coloured hair.
              </p>
              <p>
                Unlike machine weft, hand-tied weft can be cut anywhere along the track without the hair falling out — the hand-sewing technique locks each strand independently. This makes it highly versatile for custom sizing in the salon, allowing technicians to create perfectly fitted wefts for any head shape.
              </p>
              <p>
                The method rose to prominence in the UK extension market around 2018–2020, driven by demand from clients with fine Caucasian hair — the majority demographic in British salons — who found traditional weft methods too bulky and detectable. By 2025, hand-tied weft is consistently ranked among the top three most requested extension methods in UK professional salons, alongside tape-in and nano ring.
              </p>

              <h2>Why Do Salons Prefer Hand-Tied Weft?</h2>
              <ul>
                <li><strong>Flatter profile:</strong> At approximately 1mm thickness, hand-tied weft sits flat against the head with no visible bulge or ridge — even when clients run their fingers through their hair.</li>
                <li><strong>Suitable for fine hair:</strong> The thinner weft is far less detectable in clients with finer or lighter-coloured hair compared to machine weft. This is especially relevant for UK salons, where the majority of extension clients have fine to medium Caucasian hair.</li>
                <li><strong>Less weight on the scalp:</strong> Hand-tied weft is typically 30–40% lighter than equivalent-length machine weft, reducing tension on the natural hair and improving long-term comfort.</li>
                <li><strong>Customisable sizing:</strong> Can be cut to any width along the track without unravelling, allowing perfect customisation for any head shape or desired volume placement.</li>
                <li><strong>No return edge:</strong> Eliminates the folded-over bulky edge that characterises machine weft — the most common complaint from clients who have previously worn machine weft extensions.</li>
                <li><strong>Chemical-free installation:</strong> No heat, no glue, no adhesives. Installation relies entirely on beads and thread, making it one of the gentlest methods for natural hair integrity.</li>
              </ul>

              <h2>How is Hand-Tied Weft Applied?</h2>
              <p>
                Hand-tied weft is typically installed using the <strong>Natural Beaded Rows (NBR)</strong> method. The process follows a structured sequence:
              </p>
              <ol>
                <li><strong>Sectioning (10–15 min):</strong> The natural hair is sectioned horizontally. For a standard full-head installation, 2–4 rows are created depending on desired volume. Most common configuration: 3 rows — one at the nape, one mid-head, one at the crown.</li>
                <li><strong>Bead placement (20–30 min per row):</strong> Small silicone-lined micro-beads (typically 5–7mm) are threaded onto small subsections of natural hair. The beads are positioned approximately 1cm from the scalp. Each row typically contains 6–10 beads depending on head width.</li>
                <li><strong>Weft sizing (5–10 min):</strong> The hand-tied weft is measured against the beaded row and cut to fit precisely. Because hand-tied weft can be cut anywhere, sizing is exact.</li>
                <li><strong>Sewing (20–30 min per row):</strong> Using a curved needle and polyester thread (selected for durability and colour-matching), the technician sews the weft onto the beaded row. The thread passes through each bead and the weft track, securing both together.</li>
                <li><strong>Blending (15–20 min):</strong> Once all rows are installed, the technician cuts and blends the extension hair with the client&apos;s natural hair for a seamless finish.</li>
              </ol>
              <div className="not-prose my-4 p-4 bg-amber-50/60 border border-amber-100 rounded-lg">
                <p className="text-sm font-semibold mb-1">Installation timeline:</p>
                <p className="text-sm text-muted-foreground">Total chair time for a standard 3-row full-head hand-tied weft installation: 2–3.5 hours. A 2-row half-head (volume only): 1.5–2 hours. Single-row (crown volume): 1–1.5 hours.</p>
              </div>

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
                    <tr><td>Track thickness</td><td>~1mm</td><td>3–4mm</td></tr>
                    <tr><td>Weight</td><td>Light (30–40% less)</td><td>Heavier</td></tr>
                    <tr><td>Can be cut anywhere</td><td>Yes</td><td>No — only at seam lines</td></tr>
                    <tr><td>Best for hair type</td><td>Fine to medium</td><td>Medium to thick</td></tr>
                    <tr><td>Return edge</td><td>None</td><td>Notable fold at top</td></tr>
                    <tr><td>Trade price per set</td><td>£90–£180</td><td>£50–£100</td></tr>
                    <tr><td>Salon service price</td><td>£450–£850</td><td>£350–£550</td></tr>
                    <tr><td>Reusable cycles</td><td>2–3 move-ups</td><td>1–2 move-ups</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>Maintenance Schedule and Client Care</h2>
              <p>
                Hand-tied weft maintenance follows a predictable cycle. Here is the schedule your clients should expect:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Timeline</th>
                      <th>Action</th>
                      <th>Salon Time</th>
                      <th>Client Cost (Guide)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Day 0</td><td>Initial installation</td><td>2–3.5 hrs</td><td>£450–£850</td></tr>
                    <tr><td>Week 8–12</td><td>Move-up appointment (reposition beads)</td><td>1–2 hrs</td><td>£80–£150</td></tr>
                    <tr><td>Week 16–24</td><td>Second move-up</td><td>1–2 hrs</td><td>£80–£150</td></tr>
                    <tr><td>Week 24–36</td><td>Third move-up or new weft installation</td><td>1–3.5 hrs</td><td>£80–£850</td></tr>
                    <tr><td>Every 6 weeks</td><td>Weft deep condition treatment</td><td>30 min</td><td>£25–£40 (optional)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Client home care essentials:</strong> Brush 2–3 times daily with a loop brush (never a standard bristle brush near the beads). Sleep with hair in a loose braid or ponytail. Use sulphate-free shampoo and avoid applying conditioner directly to the beaded rows. Avoid oil-based products near the attachment points. Dry the root area thoroughly after washing — damp beads can cause slipping.
              </p>

              <h2>Cost-Benefit Analysis for Salons</h2>
              <p>
                From a salon business perspective, hand-tied weft occupies the premium middle-ground of the extension service menu:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Average service price (UK, 2025)</td><td>£625</td></tr>
                    <tr><td>Average material cost (trade)</td><td>£140</td></tr>
                    <tr><td>Gross profit per service</td><td>£485</td></tr>
                    <tr><td>Gross margin</td><td>77.6%</td></tr>
                    <tr><td>Chair time</td><td>2.5–3.5 hrs</td></tr>
                    <tr><td>Effective hourly rate</td><td>£150–£195/hr</td></tr>
                    <tr><td>Average maintenance visits per client per year</td><td>3–4</td></tr>
                    <tr><td>Projected annual revenue per client</td><td>£865–£1,225 (maintenance only)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                Compared to tape-in (which generates £196/hr but lower absolute revenue per client), hand-tied weft produces higher lifetime client value. A single hand-tied weft client who maintains their extensions for 18 months generates approximately £1,500–£2,500 in total salon revenue including the initial installation and all maintenance visits.
              </p>

              <h2>Client Case: Manchester Salon Example</h2>
              <blockquote>
                <p>&ldquo;We introduced hand-tied weft to our service menu 18 months ago and it now accounts for 40% of our extension revenue. Our typical client is a woman aged 28–45 with fine, highlighted hair who has tried tape-ins before and found them too visible. The hand-tied weft conversion rate from consultation to booking is around 80% — once they feel how flat the weft sits compared to machine weft, the decision is almost made for them. Our average hand-tied weft service price is £595 including a colour blend. We see each client 4 times a year for maintenance.&rdquo;</p>
                <footer className="text-sm text-muted-foreground mt-2">— Extension specialist, Manchester city-centre salon (2025)</footer>
              </blockquote>

              <h2>Common Installation Mistakes and How to Avoid Them</h2>
              <div className="not-prose space-y-3 mb-6">
                {[
                  { problem: "Beads placed too close to the scalp", solution: "Beads should sit approximately 1cm from the scalp. Closer placement causes tension and discomfort as the natural hair grows. Further placement creates a visible gap between the bead row and the weft." },
                  { problem: "Over-tightening the thread", solution: "The thread should secure the weft to the bead row without pulling the natural hair taut. Over-tightening causes tension alopecia and client discomfort. The weft should have slight movement — not be rigidly fixed." },
                  { problem: "Uneven bead spacing", solution: "Beads should be evenly distributed along each row. Clustering beads creates pressure points. The standard is 6–10 beads per row with equal spacing. Use a tail comb to measure between bead placements." },
                  { problem: "Using the wrong thread", solution: "Always use polyester or nylon upholstery thread — never cotton. Cotton thread absorbs moisture, swells, weakens, and eventually breaks. Polyester thread maintains strength when wet and resists degradation from hair products." },
                  { problem: "Not enough rows for the desired volume", solution: "A single row of hand-tied weft provides modest volume. Most clients wanting a noticeable transformation need 2–3 rows. Adding a fourth row for maximum volume is possible but increases weight — assess the client&apos;s natural hair density and scalp sensitivity before adding rows." },
                  { problem: "Installing on dirty or product-heavy hair", solution: "Hair must be freshly washed, dried, and free of product before installation. Oil, dry shampoo, and styling products reduce bead grip and cause premature slipping. Require clients to arrive with clean, product-free hair." },
                ].map(({ problem, solution }) => (
                  <div key={problem} className="p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                    <strong className="text-[#4A1942] block mb-1">{problem}</strong>
                    <span className="text-sm text-muted-foreground">{solution}</span>
                  </div>
                ))}
              </div>

              <h2>Frequently Asked Questions</h2>

              <h3>How long does hand-tied weft last?</h3>
              <p>
                The hair itself can last 12–18 months with proper care when made from 100% Remy human hair. The installation (beads and thread) requires a move-up every 8–12 weeks as the natural hair grows. Most clients get 2–3 move-up cycles from one set of hand-tied weft before the hair begins to show wear and a new set is recommended.
              </p>

              <h3>Can hand-tied weft be coloured or toned?</h3>
              <p>
                Yes — 100% Remy human hair hand-tied weft can be coloured, highlighted, and toned just like natural hair. However, we strongly recommend using pre-coloured or custom-blended weft from your supplier where possible. In-salon colouring adds 45–90 minutes to the appointment, introduces chemical exposure that can shorten the hair&apos;s lifespan, and creates additional variables — if the colour does not lift as expected, you may need to reorder.
              </p>

              <h3>Is hand-tied weft suitable for all hair types?</h3>
              <p>
                Hand-tied weft is ideal for fine to medium hair. For very thick or coarse hair, the weft may not provide enough volume per row, and multiple rows (3–4) may be required. For clients with extremely fine or thinning hair, consult carefully — even the lightest weft adds weight, and the beaded attachment requires a minimum natural hair density to anchor securely. If the client&apos;s natural hair cannot support beads, consider tape-in as an alternative.
              </p>

              <h3>What is the difference between single-drawn and double-drawn hand-tied weft?</h3>
              <p>
                Single-drawn weft contains hairs of varying lengths — approximately 50% of strands reach the full stated length, with the remainder being shorter, creating a natural tapered finish. Double-drawn weft removes shorter strands so that 90%+ of the hair reaches the full length, creating a thicker, more uniform finish from root to tip. Double-drawn costs 20–35% more but provides visibly fuller results, especially in longer lengths (22"–28"). For most salon clients, double-drawn is the preferred choice for lengths above 20".
              </p>

              <h3>How should I train my team on hand-tied weft installation?</h3>
              <p>
                Hand-tied weft requires specific training — it is not a method that can be learned through observation alone. Accredited courses in the UK typically run 1–2 days and cost £300–£600 per technician. Look for courses that include live models, bead placement technique, sewing method, and troubleshooting. Ensure your trainer is accredited by a recognised body such as Habia or VTCT. After certification, require technicians to complete 5–10 supervised installations before working independently on paying clients.
              </p>

              {/* ── CTA Box ─────────────────────────────── */}
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 my-8 not-prose">
                <h3 className="font-semibold text-lg mb-2">Manchester Salons: Get Trade Pricing on Hand-Tied Weft</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  D.S Hair & Beauty supplies hand-tied weft to professional salons across Manchester and the Northwest. Free colour matching kit with your first trade order. UK-warehoused stock for same or next-day supply. Apply for your trade account to access wholesale pricing on double-drawn Remy hand-tied weft in 40+ shades.
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
