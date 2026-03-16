import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Award, Heart, Leaf, Users } from "lucide-react"

export const metadata = {
  title: "About Us | D.S HAIR & BEAUTY",
  description: "Learn about D.S HAIR & BEAUTY - World's #1 Brand for Professional and Do-It-Yourself Hair Extensions.",
}

const values = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "We source only the finest 100% Remy human hair from ethical suppliers, ensuring every strand meets our exacting standards.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our priority. Our dedicated support team is here to help you find your perfect match.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We are committed to sustainable practices, from ethical sourcing to eco-friendly packaging.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We have built a global community of hair lovers, stylists, and enthusiasts who share our passion.",
  },
]

export default function AboutPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative h-[500px] md:h-[600px] flex items-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/about-hero.jpg"
                alt="D.S HAIR & BEAUTY story"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="max-w-2xl text-white">
                <p className="text-sm tracking-widest uppercase text-white/70 mb-4">Our Story</p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                  Transforming Beauty, One Strand at a Time
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  {"World's #1 Brand for Professional and Do-It-Yourself Hair Extensions. Based in Manchester, serving beauty lovers worldwide."}
                </p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
                    Our Journey
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      D.S HAIR & BEAUTY was born from a simple vision: to make premium hair extensions accessible to everyone. What started as a small operation in Manchester has grown into a global brand trusted by thousands of customers and professional stylists alike.
                    </p>
                    <p>
                      Our founder, passionate about beauty and empowerment, noticed a gap in the market for high-quality extensions that were both luxurious and approachable. Too many women were settling for subpar products or paying salon prices they could not afford.
                    </p>
                    <p>
                      Today, we are proud to offer the finest 100% Remy human hair extensions, sourced ethically and crafted with care. Whether you are a DIY enthusiast looking to enhance your everyday look or a professional stylist seeking the best for your clients, D.S HAIR & BEAUTY has you covered.
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about-story.jpg"
                    alt="Our journey"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                  Our Values
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Everything we do is guided by our commitment to quality, sustainability, and our community.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value) => (
                  <div key={value.title} className="bg-card rounded-xl p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                Join Our Community
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Be part of the D.S HAIR & BEAUTY family. Shop our collection, connect with certified stylists, or become a professional partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/collections/diy">Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/education">Become a Partner</Link>
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
