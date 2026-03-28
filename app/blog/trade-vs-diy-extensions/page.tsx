import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Trade Hair Extensions vs DIY: What Salon Owners Need to Know | DS Hair Beauty",
  description:
    "Why professional trade-grade Remy hair extensions deliver better results than DIY retail products — and how to explain the difference to your salon clients.",
}

export default function TradeVsDiyPage() {
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
              <span className="bg-primary/10 text-primary rounded-full px-2.5 py-1 font-medium">Business</span>
              <span>January 2025</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 5 min read</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
              Trade Hair Extensions vs DIY: What Every Salon Owner Needs to Know
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Not all hair extensions are made equal — and the difference between trade-grade and DIY retail hair is more significant than most salon owners realise.
            </p>

            <div className="rounded-2xl overflow-hidden mb-10 aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80"
                alt="Trade vs DIY hair extensions comparison"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>What is the Actual Difference?</h2>
              <p>
                The hair extension market has two distinct tiers: professional trade-grade and consumer DIY retail. The differences are not just marketing — they are structural.
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th>Trade-Grade (Professional)</th>
                      <th>DIY Retail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Hair Source</td><td>100% Remy, cuticle-aligned</td><td>Often mixed or non-Remy</td></tr>
                    <tr><td>Colour Accuracy</td><td>Professionally matched</td><td>Approximate shade range</td></tr>
                    <tr><td>Longevity</td><td>12–18 months with care</td><td>3–6 months typical</td></tr>
                    <tr><td>Tangle Resistance</td><td>High — cuticles aligned</td><td>Low — prone to matting</td></tr>
                    <tr><td>Colouring</td><td>Can be coloured/toned</td><td>Often unpredictable results</td></tr>
                    <tr><td>Application</td><td>Professional installation required</td><td>DIY-friendly but limited results</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>Why This Matters for Your Salon Business</h2>

              <h3>Client Retention</h3>
              <p>
                Clients who have had poor experiences with DIY extensions (tangling, colour mismatch, shedding) become your best potential customers — because they know the value of professional-grade hair properly installed. When they come to your salon, they are comparing against their DIY experience. The difference is obvious.
              </p>

              <h3>Your Reputation</h3>
              <p>
                If you install substandard hair, the result reflects on your work — regardless of the source. Professional salons must use professional-grade hair. Your skill and the quality of the hair you use are inseparable in the client&apos;s perception.
              </p>

              <h3>Profitability</h3>
              <p>
                Trade-grade hair allows you to charge professional prices. DIY retail hair does not justify premium salon pricing. The material cost of quality trade hair is higher, but so is your margin when positioned correctly.
              </p>

              <h2>How to Explain This to Clients</h2>
              <p>Some clients will ask why your extensions cost more than what they saw online. Here is a simple script:</p>
              <blockquote>
                <p>&ldquo;The hair I use is 100% Remy human hair, sourced from a professional trade supplier. All the cuticles run in the same direction — that is why it does not tangle and lasts up to 18 months. The extensions you see online are often blended or non-Remy hair, which is why they tangle and need replacing after a few months. You are paying for quality that lasts.&rdquo;</p>
              </blockquote>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 my-8 not-prose">
                <h3 className="font-semibold text-lg mb-2">Ready to Upgrade Your Salon Supply?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  DS Hair & Beauty supplies trade-grade Remy human hair extensions to professional salons across Manchester. Apply for your trade account today.
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
