import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"

export const metadata = {
  title: "Colour Match Service | D.S Hair & Beauty – Find Your Perfect Shade",
  description:
    "Can't decide? Upload a photo or send us a WhatsApp message — our colour specialists will match your perfect human hair extension shade in under 2 hours.",
}

export default function ColourMatchPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm tracking-widest uppercase text-white/50 mb-4">
                  Free Colour Matching Service
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  Find Your Perfect Shade
                </h1>
                <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
                  Not sure which colour to choose? Our colour specialists match your exact shade — free of charge. Get a professional recommendation in under 2 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                    <a
                      href="https://wa.me/8613516946001?text=Hi!%20I%27d%20like%20help%20finding%20my%20perfect%20hair%20extension%20shade."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Us a Photo
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white bg-black/30 hover:bg-white hover:text-black" asChild>
                    <Link href="#colour-chart">
                      Browse Colour Chart
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 bg-card border-b">
            <div className="container px-4 md:px-6">
              <h2 className="font-serif text-3xl font-medium text-center mb-12">
                How Our Colour Match Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    step: "01",
                    title: "Send a Photo",
                    desc: "Take a clear photo of your hair in natural daylight. Send it to us via WhatsApp.",
                  },
                  {
                    step: "02",
                    title: "We Match Your Shade",
                    desc: "Our colour specialist analyses your hair and finds the exact shade from our 31-shade range.",
                  },
                  {
                    step: "03",
                    title: "Order with Confidence",
                    desc: "Order knowing you've got the perfect match — no guesswork, no returns needed.",
                  },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-serif mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Colour Chart */}
          <section id="colour-chart" className="py-16">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-10">
                <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3">
                  D.S Hair & Beauty
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                  31-Shade Human Hair Colour Chart
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  From deep Jet Black to Platinum Blonde — every shade is 100% Remy human hair, double-drawn for consistent thickness from root to tip.
                </p>
              </div>

              {/* Color chart image */}
              <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src="/images/color-chart.jpg"
                  alt="D.S Hair & Beauty Human Hair Colour Chart — 31 shades from Jet Black to Platinum Blonde"
                  width={1980}
                  height={2440}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Download CTA */}
              <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/color-chart.pdf"
                  download="DS_Hair_Beauty_Colour_Chart.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF Colour Chart
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white py-16">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                Still Not Sure?
              </h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Send us a photo of your hair via WhatsApp — we'll reply within 2 hours with your perfect shade recommendation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                  <a
                    href="https://wa.me/8613516946001?text=Hi!%20I%27d%20like%20help%20finding%20my%20perfect%20hair%20extension%20shade."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Us Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white bg-black/30 hover:bg-white hover:text-black" asChild>
                  <Link href="/collections/diy">
                    Shop All Extensions
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
