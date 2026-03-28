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
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 7 min read</span>
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
                Balayage extensions (also called ombre or colour-melt wefts) are hair extensions that have been pre-coloured with a gradient effect — darker at the root, lighter through the mid-lengths, and often with a bright or warm tone at the tips. They are designed to blend seamlessly with clients who already have a balayage or highlighted natural colour.
              </p>

              <h2>Why Standard Extensions Fail Balayage Clients</h2>
              <p>
                Here is the core problem: the majority of white hair salon clients in Manchester have some form of highlighted or balayage natural hair. When you install solid-colour extensions on these clients:
              </p>
              <ul>
                <li>The extension colour looks flat and unnatural next to the multi-tonal natural hair</li>
                <li>The root section of the extension is often visibly darker than the client&apos;s highlighted roots</li>
                <li>Clients frequently ask why their extensions look &ldquo;wig-like&rdquo;</li>
                <li>You may need to colour the extensions in-salon — adding time, cost, and chemical risk</li>
              </ul>
              <p>
                Pre-coloured balayage weft eliminates all of these issues. It arrives at your salon already colour-blended to match the most common balayage patterns.
              </p>

              <h2>Types of Balayage Weft Available</h2>
              <h3>Standard Balayage (Dark Root to Blonde Tips)</h3>
              <p>The most requested — natural brown or dark blonde root melting to a lighter blonde or caramel tip. Covers approximately 65% of all balayage extension requests in Manchester.</p>

              <h3>Ash Balayage</h3>
              <p>Cool-toned root to ash blonde or silver tips. Growing in demand following the platinum and silver hair trend.</p>

              <h3>Warm Caramel Balayage</h3>
              <p>Golden or honey root melting to caramel and butterscotch ends. Particularly popular for autumn/winter appointments.</p>

              <h3>Custom Colour Blend</h3>
              <p>For premium clients, custom-blended weft can be ordered from your supplier to precisely match an individual client&apos;s existing hair colour. This is a significant competitive advantage for your salon.</p>

              <h2>How to Price Balayage Extensions in Your Salon</h2>
              <p>
                Pre-coloured balayage weft commands a premium over standard extensions. Here is a typical pricing framework:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Typical Manchester Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Standard single-colour hand-tied weft</td><td>£450–£650</td></tr>
                    <tr><td>Balayage hand-tied weft (pre-coloured)</td><td>£550–£850</td></tr>
                    <tr><td>Custom colour blend weft</td><td>£750–£1,100+</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                The material cost difference between standard and balayage weft is typically £20–60 per set at trade prices. The price premium you can charge is £100–200+. The margin uplift is significant.
              </p>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 my-8 not-prose">
                <h3 className="font-semibold text-lg mb-2">Get Trade Pricing on Balayage Extensions</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  DS Hair & Beauty supplies pre-coloured balayage weft to Manchester salons. Free colour matching kit. Same/next-day supply. Trade pricing available after account approval.
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
