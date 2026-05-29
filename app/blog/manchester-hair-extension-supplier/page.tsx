import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Why UK Salons Are Choosing Factory-Direct Hair Extension Suppliers | DS Hair Beauty",
  description:
    "Faster supply, better pricing, and direct Remy quality — why UK's top extension salons are cutting out distributors and going factory-direct. DS Hair Beauty.",
}

export default function ManchesterSupplierPage() {
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
              <span>February 2025</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 6 min read</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
              Why UK Salons Are Choosing Factory-Direct Hair Extension Suppliers
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              For years, most UK salons sourced hair extensions from large national distributors or direct from overseas. That is changing — and the reasons are clear.
            </p>

            <div className="rounded-2xl overflow-hidden mb-10 aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1470259078422-826894b933aa?w=1200&q=80"
                alt="Manchester salon hair extension supply"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>The Problem With Large Distributors</h2>
              <p>
                Most hair extension distributors serving UK salons operate large warehouses with catalogue-based ordering. While that model works for commodity products, it creates real problems for professional hair extension salons:
              </p>
              <ul>
                <li><strong>Slow turnaround:</strong> 5–14 day delivery windows mean you either over-stock or miss client appointments</li>
                <li><strong>Imprecise colour matching:</strong> Colour charts are photographed under studio lighting and rarely match real-world results</li>
                <li><strong>No relationship:</strong> You are order number 847,293 — not a partner</li>
                <li><strong>Middleman pricing:</strong> You pay distributor margins on top of importer margins</li>
              </ul>

              <h2>What a Factory-Direct Supplier Changes</h2>

              <h3>1. Manufacturer Pricing — No Middleman Markup</h3>
              <p>
                When you buy from a factory-direct supplier, you are paying manufacturer prices — not distributor markup on top of importer markup. For a busy salon ordering weekly, the savings are significant. D.S HAIR & BEAUTY sources directly from China&apos;s leading Remy hair manufacturers and holds stock in Manchester for fast UK delivery.
              </p>

              <h3>2. UK-Warehoused Stock, Fast Delivery</h3>
              <p>
                Our inventory is held in Manchester — so when you need hand-tied weft for a client booking, it ships from the UK, not from a factory in Guangzhou. No cross-continental wait times. Factory-direct quality, locally stocked.
              </p>

              <h3>3. Real Quality Control</h3>
              <p>
                We inspect every batch at source. 100% Remy human hair with cuticle alignment — because we work directly with the factories, not through three layers of intermediaries who have never seen the product.
              </p>

              <h3>4. A Real Business Relationship</h3>
              <p>
                When your usual 20-inch balayage weft is running low, you message your supplier directly. With a factory-direct partner, you are talking to the people who control production — not a sales rep who files a ticket with a warehouse. That kind of relationship makes your salon business more reliable.

              <h2>What UK Salon Owners Are Saying</h2>
              <blockquote>
                <p>&ldquo;I wasted two years ordering from a big distributor. The colour was never right and I was always waiting on stock. Switching to a factory-direct supplier changed my business completely — better pricing, better quality, and I can take same-week bookings again.&rdquo;</p>
                <footer>— Hair Extension Specialist, UK</footer>
              </blockquote>

              <h2>How to Evaluate a Factory-Direct Supplier</h2>
              <p>Not all suppliers are equal. When choosing a wholesale partner, ask:</p>
              <ul>
                <li>Do you source directly from manufacturers — or are you a middleman?</li>
                <li>Do you hold stock in the UK for fast delivery?</li>
                <li>Are your products 100% Remy human hair with cuticle alignment?</li>
                <li>What is your minimum order quantity?</li>
                <li>Do you offer hand-tied weft and balayage blends?</li>
              </ul>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 my-8 not-prose">
                <h3 className="font-semibold text-lg mb-2">DS Hair Beauty — Factory-Direct. UK-Warehoused.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  19 years of industry experience. Direct factory sourcing. UK-warehoused stock in Manchester for fast delivery. Free colour matching kit with your first trade order. No minimum order to start.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/salon-partners">Become a Partner</Link>
                  </Button>
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
