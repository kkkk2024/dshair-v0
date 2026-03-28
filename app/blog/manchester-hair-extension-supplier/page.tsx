import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Why Manchester Salons Choose a Local Hair Extension Supplier | DS Hair Beauty",
  description:
    "Faster supply, better colour matching, and direct Remy quality — why Manchester's top extension salons are switching to local wholesale suppliers. DS Hair Beauty Manchester.",
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
              Why Manchester Salons Are Switching to Local Hair Extension Suppliers
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

              <h2>What a Local Manchester Supplier Changes</h2>

              <h3>1. Same or Next-Day Supply</h3>
              <p>
                When a client calls to book a full head of hand-tied weft, you need to know your stock will arrive before their appointment — not three weeks later. A Manchester-based supplier with local stock means you can commit to bookings with confidence.
              </p>

              <h3>2. In-Person Colour Matching</h3>
              <p>
                Colour accuracy is the number one reason for client dissatisfaction with hair extensions. A local supplier can visit your salon, assess your clients in person, and match colour under real lighting conditions. No more guessing from shade charts.
              </p>

              <h3>3. Direct Factory Quality</h3>
              <p>
                DS Hair & Beauty sources directly from China&apos;s leading Remy human hair manufacturers — the same factories that supply major international brands. By cutting out national distributors, you get factory-grade quality at better prices.
              </p>

              <h3>4. A Real Business Relationship</h3>
              <p>
                When your usual 20-inch balayage weft is running low, you call your supplier. With a local partner, that supplier picks up the phone, knows your salon, and gets you what you need. That kind of relationship takes years to build with a distant distributor — and it is available from day one with a local partner.
              </p>

              <h2>What Manchester Salon Owners Are Saying</h2>
              <blockquote>
                <p>&ldquo;I wasted two years ordering from a big distributor. The colour was never right and I was always waiting on stock. Switching to a local supplier changed my business completely — I can take same-week bookings again.&rdquo;</p>
                <footer>— Hair Extension Specialist, Didsbury Manchester</footer>
              </blockquote>

              <h2>How to Evaluate a Local Supplier</h2>
              <p>Not all local suppliers are equal. When choosing a wholesale partner, ask:</p>
              <ul>
                <li>Can you provide a free colour matching consultation?</li>
                <li>What is your typical turnaround for Manchester delivery?</li>
                <li>Are your products 100% Remy human hair with cuticle alignment?</li>
                <li>What is your minimum order quantity?</li>
                <li>Do you offer hand-tied weft and balayage blends?</li>
              </ul>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 my-8 not-prose">
                <h3 className="font-semibold text-lg mb-2">DS Hair Beauty — Manchester&apos;s Local Hair Extension Supplier</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  19 years of industry experience. Direct factory sourcing. Same/next-day Manchester supply. Free colour matching kit with your first trade order. No minimum order to start.
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
