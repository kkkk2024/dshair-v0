import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

export const metadata = {
  title: "Hair Extension Blog | DS Hair Beauty Manchester",
  description:
    "Expert guides on hand-tied weft, balayage extensions, nano ring, tape-in, and everything professional salons need to know. From Manchester's leading hair extension supplier.",
}

const posts = [
  {
    slug: "hand-tied-weft-guide",
    title: "What is Hand-Tied Weft? The Complete Salon Guide for 2025",
    excerpt:
      "Hand-tied weft is the fastest growing extension method in UK professional salons. Here is everything you need to know — application, care, and why your clients will love it.",
    category: "Product Guide",
    readTime: "8 min read",
    date: "March 2025",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  },
  {
    slug: "balayage-extensions-salon-guide",
    title: "Balayage Hair Extensions: The Ultimate Salon Guide",
    excerpt:
      "Over 70% of Manchester salon clients request balayage colour — but standard extensions do not blend. Here is how to solve it with pre-coloured balayage weft.",
    category: "Technique",
    readTime: "7 min read",
    date: "March 2025",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    slug: "hair-extension-methods-comparison",
    title: "Hair Extension Methods Compared: Which is Right for Your Salon Clients?",
    excerpt:
      "Hand-tied weft, nano ring, tape-in, K-tip — each method suits a different client. This guide helps you recommend the right technique every time.",
    category: "Education",
    readTime: "10 min read",
    date: "February 2025",
    image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=800&q=80",
  },
  {
    slug: "manchester-hair-extension-supplier",
    title: "Why Manchester Salons Are Switching to Local Hair Extension Suppliers",
    excerpt:
      "Faster supply, better colour matching, and direct factory quality — why more Manchester salons are choosing a local wholesale partner over large distributors.",
    category: "Business",
    readTime: "6 min read",
    date: "February 2025",
    image: "https://images.unsplash.com/photo-1470259078422-826894b933aa?w=800&q=80",
  },
  {
    slug: "trade-vs-diy-extensions",
    title: "Trade Hair Extensions vs DIY: What Every Salon Owner Needs to Know",
    excerpt:
      "Not all extensions are made equal. Here is why professional trade-grade Remy human hair delivers better results, better retention, and better client satisfaction.",
    category: "Business",
    readTime: "5 min read",
    date: "January 2025",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80",
  },
]

export default function BlogPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Header */}
          <section className="bg-secondary py-16 md:py-20">
            <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto">
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3">Expert Knowledge</p>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Hair Extension Blog</h1>
              <p className="text-lg text-muted-foreground">
                Professional guides, product education, and salon business tips — from Manchester&apos;s hair extension specialists.
              </p>
            </div>
          </section>

          {/* Posts Grid */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={`group rounded-2xl overflow-hidden border bg-card hover:shadow-lg transition-shadow ${
                      i === 0 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className={`relative ${i === 0 ? "aspect-[16/7]" : "aspect-[16/9]"} overflow-hidden`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-serif text-xl font-medium mb-2 group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read Article <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
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
