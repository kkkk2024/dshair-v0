import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Balayage Hair Extensions: The Complete Salon Guide | DS Hair Beauty Manchester",
  description:
    "Why balayage extensions are essential for Manchester salons, how pre-coloured balayage weft works, and where to source trade-grade balayage extensions in the UK.",
}

export default function BalayageExtensionsPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <article className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-20">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>

            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary rounded-full px-2.5 py-1 font-medium">Technique</span>
              <span>March 2025</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 12 min read</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
              Balayage Hair Extensions: The Ultimate Salon Guide
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Over 70% of Manchester extension clients request a balayage or highlighted look — but standard single-tone extensions simply do not blend. Pre-coloured balayage weft solves this, and it is transforming how salons work.
            </p>

            <div className="rounded-2xl overflow-hidden mb-10 aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80"
                alt="Balayage hair extensions salon"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>What are Balayage Hair Extensions?</h2>
              <p>
                Balayage extensions — also called ombre, colour-melt, or hand-painted wefts — are hair extensions that have been pre-coloured with a gradient effect. Typically, the colour transitions from darker at the root to lighter through the mid-lengths, often finishing with a bright or warm tone at the tips. The gradient is designed to blend seamlessly with clients who already have balayage, highlights, or multi-tonal natural hair.
              </p>
              <p>
                Unlike standard solid-colour extensions, which sit as a single block of colour against the client&apos;s natural hair, balayage weft creates a dimensional, natural-looking blend that mimics the way natural hair lightens over time. This is the single largest factor driving balayage extension adoption in UK salons — approximately 70% of extension clients now request a blended, multi-tonal look rather than a flat single shade.
              </p>

              <h2>Why Standard Extensions Fail Balayage Clients</h2>
              <p>
                Here is the core problem: the majority of white hair salon clients in the UK have some form of highlighted or balayage natural hair. When you install solid single-colour extensions on these clients:
              </p>
              <ul>
                <li>The extension colour looks flat and manufactured next to the multi-tonal natural hair</li>
                <li>The root section of the extension is often visibly darker than the client&apos;s highlighted roots — creating a harsh delineation line</li>
                <li>Clients frequently report that their extensions look &ldquo;wig-like&rdquo; — a perception driven entirely by the colour discrepancy rather than the hair quality</li>
                <li>To compensate, you may need to colour the extensions in-salon — adding 45–90 minutes of chair time, £30–70 in colour costs, and chemical risk that can degrade the hair&apos;s cuticle before the client has even worn it</li>
              </ul>
              <p>
                Pre-coloured balayage weft eliminates all of these issues. It arrives at your salon already colour-blended by the manufacturer to match the most common client hair patterns. The result: faster installation, higher client satisfaction, and a premium service you can price accordingly.
              </p>

              <h2>The 7 Key Balayage Tone Types</h2>
              <p>
                Not all balayage is the same. Understanding the tone families allows you to match extensions to your client&apos;s existing colour with precision:
              </p>

              <h3>1. Classic Balayage (Dark Root to Blonde Tips)</h3>
              <p>
                The most requested balayage pattern — representing approximately 60–65% of all balayage extension orders in the UK. A natural brown or dark blonde root transitions through caramel mid-lengths to a lighter blonde at the tips. Best for: clients with natural level 5–7 hair who want a sun-kissed, natural-looking lightening effect. Compatible with most skin tones, making it the safest default recommendation.
              </p>

              <h3>2. Ash Balayage</h3>
              <p>
                A cool-toned variant with an ash brown or ashy dark blonde root transitioning to ash blonde, silver-blonde, or platinum tips. Gaining significant demand following the platinum and grey-blending hair trends of 2023–2025. Best for: clients with cool or neutral skin undertones; clients with naturally ashy or mousy hair colours who find warm balayage looks unnatural against their complexion. Warning: ash tones can appear dull on warm skin tones — always match the tone to the client&apos;s undertone, not the trend.
              </p>

              <h3>3. Warm Caramel / Honey Balayage</h3>
              <p>
                A rich golden-brown root transitioning through honey and caramel tones to warm blonde tips. Particularly popular for autumn and winter appointment bookings, when clients want warmth to complement seasonal wardrobe changes. Best for: clients with warm or olive skin undertones; clients with naturally warm brown hair (levels 4–6). The warmth in the hair picks up the warmth in the skin, creating a harmonious overall look.
              </p>

              <h3>4. Bronde Balayage (Brown-to-Blonde)</h3>
              <p>
                A subtle, low-contrast transition from medium brown to soft blonde — essentially, &ldquo;brown meets blonde.&rdquo; The gradient is gentler than classic balayage, with less dramatic contrast between root and tip. Best for: clients who want a natural, &ldquo;is it or isn&apos;t it?&rdquo; look; professional environments where dramatic colour is discouraged; first-time balayage clients testing the waters.
              </p>

              <h3>5. Face-Framing Balayage (Money Piece)</h3>
              <p>
                A targeted balayage effect concentrated around the face-framing sections, with the rest of the extensions remaining in a solid colour closer to the client&apos;s natural shade. This creates the illusion of a full balayage without the full cost. Best for: budget-conscious clients; clients with short to medium-length hair where a full-head balayage effect is less visible; clients who want a subtle change rather than a dramatic transformation.
              </p>

              <h3>6. Rooted / Shadow Root Balayage</h3>
              <p>
                A deliberately darker root (1–3cm of deep colour at the attachment point) that transitions sharply to lighter lengths. This technique creates the appearance of grown-out natural colour — intentionally. Best for: clients with naturally dark roots who want low-maintenance colour; clients who want to extend the time between colour appointments. The dark root also helps conceal the attachment point of any weft method, as the darker colour at the scalp hides beads, tapes, or rings more effectively than light-rooted wefts.
              </p>

              <h3>7. Custom Colour Blend</h3>
              <p>
                For premium clients, a custom-blended weft can be ordered from your supplier to precisely match an individual client&apos;s existing hair colour — including multi-tonal highlights, lowlights, and unconventional fashion colours (pastels, vivids). This service commands the highest price point and positions your salon as a true specialist. Best for: clients with complex existing colour who cannot be matched from standard shade charts; editorial and bridal work; clients willing to wait 2–4 weeks for a bespoke product.
              </p>

              <h2>Skin Tone Matching Guide</h2>
              <p>
                Matching balayage extensions to a client&apos;s skin tone is as important as matching to their hair colour. A technically perfect colour match that clashes with the client&apos;s skin undertone will look wrong — and the client may not be able to articulate why, only that they &ldquo;don&apos;t love it.&rdquo;
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Skin Undertone</th>
                      <th>Recommended Balayage Tones</th>
                      <th>Avoid</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Cool (pink/blue veins)</td><td>Ash, platinum, cool beige, icy blonde</td><td>Warm caramel, honey, gold</td></tr>
                    <tr><td>Warm (green veins)</td><td>Caramel, honey, golden blonde, copper</td><td>Ash, silver, platinum</td></tr>
                    <tr><td>Neutral (mixed veins)</td><td>Classic, bronde, beige blonde</td><td>Extreme warm or cool tones</td></tr>
                    <tr><td>Olive</td><td>Caramel, honey, toffee, chestnut</td><td>Ash, platinum, very light blonde</td></tr>
                    <tr><td>Deep/Dark</td><td>Caramel, copper, auburn, mahogany</td><td>Ash, platinum (unless deliberately high-contrast)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Quick test:</strong> During the consultation, hold a warm-toned and a cool-toned colour swatch next to the client&apos;s face in natural light. The correct undertone will make the client&apos;s skin look brighter and healthier. The wrong one will make them look washed out or sallow. Trust what you see — the client&apos;s stated preference is secondary to what actually suits their complexion.
              </p>

              <h2>Pricing Strategy for Balayage Extensions</h2>
              <p>
                Pre-coloured balayage weft commands a premium over standard single-colour extensions — and your pricing should reflect both the higher material cost and the added value of a colour-matched result. Here is the framework:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Material Cost (Trade)</th>
                      <th>Typical UK Price</th>
                      <th>Gross Margin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Standard single-colour hand-tied weft</td><td>£130–£160</td><td>£450–£650</td><td>72–75%</td></tr>
                    <tr><td>Balayage hand-tied weft (pre-coloured)</td><td>£160–£200</td><td>£550–£850</td><td>71–76%</td></tr>
                    <tr><td>Custom colour blend weft</td><td>£200–£280</td><td>£750–£1,100+</td><td>70–75%</td></tr>
                    <tr><td>Balayage tape-in (pre-coloured)</td><td>£80–£120</td><td>£300–£500</td><td>73–76%</td></tr>
                    <tr><td>Face-framing balayage (Money Piece)</td><td>£100–£150</td><td>£400–£600</td><td>72–75%</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                The material cost difference between standard and balayage weft is typically £30–£60 per set at trade prices. The price premium you can charge is £100–£200+. The margin uplift on balayage services is substantial — and because balayage extensions produce visibly superior results for the majority of salon clients, the conversion rate from consultation to booking is typically higher than for single-colour services.
              </p>
              <div className="not-prose my-4 p-4 bg-green-50/60 border border-green-100 rounded-lg">
                <p className="text-sm font-semibold mb-1 text-green-800">Pricing tip:</p>
                <p className="text-sm text-green-700/80">Consider offering balayage as your &ldquo;standard&rdquo; weft option and pricing single-colour weft as a &ldquo;basic&rdquo; service at a lower rate. This psychologically positions balayage as the default choice — increasing your average service value without requiring the client to make an active upsell decision. Salons using this strategy report a 30–40% increase in balayage service uptake.</p>
              </div>

              <h2>Balayage Extensions vs Other Colouring Techniques</h2>
              <p>
                Clients may ask how balayage extensions compare to other colour application methods. Here is a technical comparison:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Technique</th>
                      <th>Appearance</th>
                      <th>Maintenance</th>
                      <th>Best Extension Match</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Balayage</td><td>Soft, natural gradient; darker root, lighter ends</td><td>12–16 weeks between colour appointments</td><td>Pre-coloured balayage weft</td></tr>
                    <tr><td>Highlights (Foil)</td><td>More uniform, structured lightening from root</td><td>8–12 weeks</td><td>Highlighted weft or custom blend</td></tr>
                    <tr><td>Ombre</td><td>Dramatic contrast; sharp transition mid-shaft</td><td>12–16 weeks</td><td>Ombre weft with defined transition</td></tr>
                    <tr><td>Babylights</td><td>Very fine, subtle lightening — natural sun-kissed</td><td>10–14 weeks</td><td>Subtle balayage or bronde weft</td></tr>
                    <tr><td>Colour Melt / Root Smudge</td><td>Seamless blend from root colour to lighter ends</td><td>12–16 weeks</td><td>Shadow root balayage weft</td></tr>
                    <tr><td>Full Bleach / Platinum</td><td>Uniform light colour from root to tip</td><td>6–8 weeks</td><td>Solid blonde weft (balayage not required)</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>Client Consultation and Marketing Scripts</h2>
              <p>
                <strong>Opening the balayage conversation:</strong>
              </p>
              <blockquote>
                <p>&ldquo;I notice your natural hair has some beautiful dimension to it — the variation between your root colour and your ends. If we use a pre-coloured balayage weft, the extensions will mirror that natural variation rather than sitting as one flat colour next to it. The result will look like your own hair — just with more volume and length. Would you like me to show you some examples of how that looks compared to a single-colour weft?&rdquo;</p>
              </blockquote>
              <p>
                <strong>Handling the price objection:</strong>
              </p>
              <blockquote>
                <p>&ldquo;The balayage weft costs about £30–50 more than a standard single-colour weft at our cost. Here is why it is worth it: if we use a single-colour weft and it does not blend perfectly with your existing highlights, we would need to spend an extra 45–90 minutes colour-matching it in the salon — which would cost you more in chair time than the pre-coloured weft upgrade. The balayage weft arrives already blended. It saves time and gives a better result.&rdquo;</p>
              </blockquote>
              <p>
                <strong>Social media caption template:</strong>
              </p>
              <blockquote>
                <p>&ldquo;This client wanted volume with dimension — not a flat block of colour. We installed a hand-tied balayage weft in Warm Caramel, blending from her natural root shade to a honey-blonde tip. No in-salon colouring required — the weft arrived pre-blended from our trade supplier. 22 inches, 3-row installation. Total chair time: 2 hours 45 minutes. DM us to book your balayage extension consultation.&rdquo;</p>
              </blockquote>

              <h2>Frequently Asked Questions</h2>

              <h3>Can balayage extensions be re-coloured if the shade is not perfect?</h3>
              <p>
                Yes — 100% Remy human hair balayage weft can be toned, glossed, or adjusted in the salon. However, we strongly recommend ordering colour swatches or sample wefts before committing to a full set. Most UK trade suppliers will send a sample weft or colour ring for this purpose. Getting the shade right at the ordering stage eliminates the need for in-salon correction and preserves the hair&apos;s cuticle integrity.
              </p>

              <h3>How do I photograph balayage extensions for social media?</h3>
              <p>
                The dimensional colour of balayage extensions photographs best in natural, indirect light. Direct sunlight can wash out the gradient. Position your client near a window (not in front of it), take photos from behind and from the side, and include a before-and-after comparison. The &ldquo;after&rdquo; shot should show the extension hair blending with the natural hair — the transition point between the two should be invisible. Video content (slow-motion hair movement, &ldquo;hair flipping&rdquo;) performs significantly better than static images for extension content on Instagram and TikTok.
              </p>

              <h3>What is the difference between ombre and balayage extensions?</h3>
              <p>
                Balayage creates a soft, gradual transition from dark to light with no visible line of demarcation. Ombre creates a more defined contrast — typically a sharper transition mid-shaft with a more dramatic difference between root and tip colour. Balayage is the more popular choice for UK salons (approximately 70% of requests) because it looks more natural. Ombre is preferred by clients wanting a fashion-forward, deliberately visible colour transition.
              </p>

              <h3>Do balayage extensions require different aftercare than standard extensions?</h3>
              <p>
                The aftercare is largely the same as standard Remy extensions, with one additional consideration: the lighter, colour-treated ends of balayage weft are more porous than the darker root section. This means they absorb more product and are more susceptible to brassiness from hard water. Recommend a purple shampoo once every 2–3 washes for blonde balayage and a sulphate-free colour-protect system for all balayage wearers. Advise clients to concentrate conditioner on the mid-lengths and ends rather than the root area.
              </p>

              <h3>How many balayage shade options should I stock?</h3>
              <p>
                For most independent salons, stocking 5–6 core balayage shades in 18"–22" length covers approximately 80% of client requests. Recommended starter palette: Classic Balayage (#4/#6 root to #18/#22 tip), Ash Balayage (#6 ash to #18 ash), Warm Caramel (#4 to #27/613), Bronde (#6 to #14), Shadow Root (#2 to #18), and one Face-Framing option. Stock single sets initially — you can reorder within 1–3 days from a UK-based trade supplier rather than tying up capital in slow-moving stock.
              </p>

              <h3>Can I offer balayage extensions if I am not a colourist?</h3>
              <p>
                Yes — and this is one of the key advantages of pre-coloured balayage weft. Because the colour work is done by the manufacturer, the salon technician does not need advanced colouring skills to install balayage extensions. The technician&apos;s role is consultation (selecting the right pre-coloured shade for the client), installation, and blending cut only. This allows salons without an in-house colour specialist to offer balayage extension services and capture the premium pricing they command.
              </p>

              {/* ── CTA Box ─────────────────────────────── */}
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 my-8 not-prose">
                <h3 className="font-semibold text-lg mb-2">Get Trade Pricing on Balayage Extensions</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  DS Hair & Beauty supplies pre-coloured balayage weft in 7 tone families to Manchester salons and across the Northwest. Free colour matching kit with your first trade order. UK-warehoused stock for same or next-day supply. Apply for your trade account to access wholesale pricing on balayage weft, tape-in, and custom colour blends.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/salon-partners">Apply for Trade Account</Link>
                  </Button>
                  <Button variant="outline" className="border-green-500 text-green-700 hover:bg-green-50" asChild>
                    <a href="https://wa.me/8613516946001?text=Hi!%20I%27m%20interested%20in%20balayage%20weft%20trade%20pricing." target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" /> Ask About Balayage Stock
                    </a>
                  </Button>
                </div>
              </div>
            </div>

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
