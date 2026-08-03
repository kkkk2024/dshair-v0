import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import { AuthorJsonLd } from "@/components/seo/json-ld"

export const metadata = {
  title: "Caro Chen — Founder & Trade Director, D.S Hair & Beauty",
  description:
    "Caro Chen is Founder & Trade Director at D.S Hair & Beauty and wigexporter.com. 19 years in hair extension manufacturing, helping 50+ UK & EU salons build profitable extension services through factory-direct trade supply and private label.",
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/about/caro-chen",
  },
}

export default function CaroChenPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <AuthorJsonLd />

          <section className="relative bg-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B3A6E 0%, transparent 50%)",
                }}
              />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-24 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                Founder &amp; Trade Director
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4 leading-tight">
                Caro Chen
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                D.S Hair &amp; Beauty &amp; wigexporter.com — factory-direct hair extension manufacturing since 2006
              </p>
            </div>
          </section>

          <article className="max-w-3xl mx-auto px-4 md:px-6 py-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-medium mt-2 mb-6">About Caro</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I have spent the last 19 years inside the hair extension manufacturing industry — not as a
                reseller, but at the factory level. Through our manufacturing arm{" "}
                <a href="https://wigexporter.com" className="text-[#4A1942] font-semibold underline" target="_blank" rel="noopener noreferrer">
                  wigexporter.com
                </a>{" "}
                and our UK &amp; EU salon brand D.S Hair &amp; Beauty, I help salon owners and stylists build
                profitable extension services with trade pricing, honest advice, and real manufacturing backing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Over the years I have supported <strong>50+ salons across the UK and EU</strong> — from newly
                qualified freelancers placing their first weft order to established multi-chair salons running
                private label lines under their own brand. The part I care about most is the unglamorous stuff:
                consistent Remy human hair grades, reliable reorders, and margins that actually let a salon make
                money on extensions.
              </p>

              <h2 className="font-serif text-3xl font-medium mt-12 mb-6">What I Write About</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                On the D.S Hair &amp; Beauty blog I write the guides I wish every salon owner had before they
                signed a trade account — how wholesale pricing really works, what a healthy extension margin looks
                like, how to launch a private label line, and how to qualify the right supplier instead of the
                loudest one.
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-10">
                <div className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                  <h4 className="font-semibold text-[#4A1942] mb-2">Manufacturing</h4>
                  <p className="text-sm text-[#6B3A6E]">
                    19 years producing 100% Remy human hair extensions — hand-tied weft, tape-in, K-tip, nano
                    ring, butterfly weft &amp; toppers.
                  </p>
                </div>
                <div className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                  <h4 className="font-semibold text-[#4A1942] mb-2">Salon Trade</h4>
                  <p className="text-sm text-[#6B3A6E]">
                    Factory-direct trade pricing, no minimum order, express 3–5 day shipping, and private label
                    support for UK &amp; EU salons.
                  </p>
                </div>
              </div>

              <h2 className="font-serif text-3xl font-medium mt-12 mb-6">Connect</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-8">
                <li>
                  Trade enquiries: <Link href="/trade-wholesale" className="text-[#4A1942] font-semibold underline">Open a trade account</Link>
                </li>
                <li>
                  Manufacturing &amp; private label: <a href="https://wigexporter.com" className="text-[#4A1942] font-semibold underline" target="_blank" rel="noopener noreferrer">wigexporter.com</a>
                </li>
                <li>
                  Direct line: WhatsApp +86 13516946001
                </li>
              </ul>

              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl font-medium mb-3">Building an extension service for your salon?</h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  I answer trade questions personally. Open a free account or message me on WhatsApp — no minimum
                  order, same-day approval.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/trade-wholesale">Open a Trade Account →</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/blog">Read the Blog</Link>
                  </Button>
                </div>
              </div>

              <div className="pt-8 border-t">
                <Link href="/about" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" /> Back to About
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
