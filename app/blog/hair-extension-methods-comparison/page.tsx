import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Hair Extension Methods Compared: Which is Right for Your Clients? | DS Hair Beauty",
  description:
    "Hand-tied weft, nano ring, tape-in, K-tip — a professional comparison of every major extension method. Help your salon clients choose the right technique every time.",
}

export default function MethodsComparisonPage() {
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
              <span className="bg-primary/10 text-primary rounded-full px-2.5 py-1 font-medium">Education</span>
              <span>February 2025</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 10 min read</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
              Hair Extension Methods Compared: Which is Right for Your Salon Clients?
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Choosing the right extension method for each client is one of the most important skills a professional extension specialist can develop. This guide walks you through every major method.
            </p>

            <div className="rounded-2xl overflow-hidden mb-10 aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80"
                alt="Hair extension methods comparison"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>The Big Four Extension Methods</h2>

              <h3>1. Hand-Tied Weft (NBR / Beaded Weft)</h3>
              <p><strong>Best for:</strong> Fine to medium hair, clients wanting maximum volume, clients who wear their hair down regularly.</p>
              <p><strong>How it works:</strong> Ultra-thin weft sewn onto beaded rows. Virtually invisible, no heat or glue required.</p>
              <p><strong>Maintenance:</strong> Every 8–12 weeks (move-up)</p>
              <p><strong>Average salon price:</strong> £450–£850</p>
              <p><strong>Pros:</strong> Flattest profile, suitable for fine hair, highly natural result, long-lasting</p>
              <p><strong>Cons:</strong> Requires specialist training, higher material cost</p>

              <h3>2. Nano Ring (Nano Bead)</h3>
              <p><strong>Best for:</strong> Clients with medium to thick hair, clients who want individual strand placement.</p>
              <p><strong>How it works:</strong> Tiny nano-sized rings are threaded onto natural hair and clamped around individual extension strands. No heat, no glue.</p>
              <p><strong>Maintenance:</strong> Every 8–10 weeks</p>
              <p><strong>Average salon price:</strong> £350–£650</p>
              <p><strong>Pros:</strong> No heat or chemical application, easy to remove/refit, very discreet</p>
              <p><strong>Cons:</strong> Can feel heavy if overstocked, not ideal for very fine hair</p>

              <h3>3. Tape-In Extensions</h3>
              <p><strong>Best for:</strong> Clients wanting volume and length quickly, first-time extension wearers.</p>
              <p><strong>How it works:</strong> Pre-taped weft panels sandwiched around a section of natural hair using medical-grade adhesive tape.</p>
              <p><strong>Maintenance:</strong> Every 6–8 weeks (re-tape)</p>
              <p><strong>Average salon price:</strong> £200–£450</p>
              <p><strong>Pros:</strong> Fast application (1–2 hours), cost-effective, good for beginners</p>
              <p><strong>Cons:</strong> Heat and oil products can loosen tape, requires careful aftercare</p>

              <h3>4. K-Tip (Keratin Bond / Fusion)</h3>
              <p><strong>Best for:</strong> Clients wanting the most natural-looking individual strand result, clients with medium to thick hair.</p>
              <p><strong>How it works:</strong> Individual strands with a keratin tip are fused to natural hair using a hot fusion iron.</p>
              <p><strong>Maintenance:</strong> Every 12–16 weeks</p>
              <p><strong>Average salon price:</strong> £450–£900+</p>
              <p><strong>Pros:</strong> Longest-lasting method, most natural movement, premium service positioning</p>
              <p><strong>Cons:</strong> Longest application time (3–5 hours), heat required, more complex removal</p>

              <h2>Quick Reference: Method vs Client Type</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Client Profile</th>
                      <th>Recommended Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Fine hair, wants volume</td><td>Hand-Tied Weft</td></tr>
                    <tr><td>Medium hair, first-time</td><td>Tape-In or Nano Ring</td></tr>
                    <tr><td>Thick hair, maximum length</td><td>K-Tip or Nano Ring</td></tr>
                    <tr><td>Active lifestyle (swimming, gym)</td><td>Nano Ring or Hand-Tied</td></tr>
                    <tr><td>Budget-conscious</td><td>Tape-In</td></tr>
                    <tr><td>Premium client, wants best result</td><td>K-Tip or Hand-Tied Weft</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 my-8 not-prose">
                <h3 className="font-semibold text-lg mb-2">Trade Supply for Every Method</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  DS Hair & Beauty supplies professional-grade hand-tied weft, nano ring, tape-in, and K-tip extensions to Manchester salons. Trade pricing, free colour kit, next-day supply.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild><Link href="/salon-partners">Apply for Trade Account</Link></Button>
                  <Button variant="outline" className="border-green-500 text-green-700 hover:bg-green-50" asChild>
                    <a href="https://wa.me/8613516946001" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp Us
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
