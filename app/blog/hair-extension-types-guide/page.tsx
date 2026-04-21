import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, Users, Sparkles } from "lucide-react"

export const metadata = {
  title: "Hair Extension Types Explained: A Complete Guide for Salon Professionals | D.S Hair Beauty",
  description:
    "The complete guide to hair extension types for salon professionals. Compare tape-in, K-tip, weft, butterfly weft, and clip-in extensions — pros, cons, best uses, and client suitability.",
}

export default function HairExtensionTypesGuide() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">

          {/* ── Hero ─────────────────────────────────── */}
          <section className="relative bg-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B3A6E 0%, transparent 50%)"
              }} />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                Product Education
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                Hair Extension Types Explained
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                A complete guide for salon professionals. Understand every method — tape-in, K-tip, weft, butterfly weft, and clip-in — and know exactly which one to recommend for each client.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/salon-partners">Shop Wholesale</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/collections/tape-in-extensions">Browse All Ranges</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* ── Quick Nav ─────────────────────────────── */}
          <div className="bg-[#FDF8F0] border-b border-amber-100">
            <div className="max-w-5xl mx-auto px-4 py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-[#4A1942]">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-[#4A1942]">Blog</Link>
                <span>/</span>
                <span className="text-[#4A1942] font-medium">Hair Extension Types Explained</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">

            <div className="prose prose-lg max-w-none">

              {/* ── Quick Comparison ────────────────────── */}
              <div className="not-prose overflow-x-auto mb-12">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden border border-amber-100">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      <th className="p-4 text-left font-medium">Method</th>
                      <th className="p-4 text-left font-medium">Installation</th>
                      <th className="p-4 text-left font-medium">Duration</th>
                      <th className="p-4 text-left font-medium">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-50 bg-white">
                    {[
                      { method: "Tape-In", time: "45–90 min", duration: "6–8 wks", best: "Fine/medium hair, first-timers" },
                      { method: "K-Tip / Keratin Bond", time: "3–5 hours", duration: "3–5 months", best: "Thick hair, long-term wearers" },
                      { method: "Weft (Machine)", time: "2–4 hours", duration: "3–4 months", best: "Volume, thick hair" },
                      { method: "Butterfly Weft", time: "2–3 hours", duration: "3–5 months", best: "Volume with zero visibility" },
                      { method: "Clip-In", time: "Self-fit (10 min)", duration: "Per use", best: "Occasional wear, beginners" },
                    ].map((row) => (
                      <tr key={row.method} className="hover:bg-amber-50/50">
                        <td className="p-4 font-semibold text-[#4A1942]">{row.method}</td>
                        <td className="p-4 text-[#6B3A6E]">{row.time}</td>
                        <td className="p-4 text-[#6B3A6E]">{row.duration}</td>
                        <td className="p-4 text-[#6B3A6E]">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── Tape-In ─────────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">Tape-In Hair Extensions — Pros, Cons & Best For</h2>
              <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80"
                  alt="Tape-in hair extensions installed by a professional stylist"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>Tape-in extensions</strong> use pre-taped flat wefts of Remy human hair that are sandwiched between sections of the client's natural hair. The adhesive is heat-activated or pressure-sensitive and lays completely flat against the scalp.
              </p>
              <div className="not-prose grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Pros", icon: "✅", items: ["Fastest installation (45–90 min)", "Completely invisible bonds", "Easy to maintain and remove", "Reusable if re-taped", "Most affordable per-service"] },
                  { label: "Cons", icon: "⚠️", items: ["Adhesive affected by heat and oils", "Requires maintenance every 6–8 weeks", "Not ideal for very oily scalps", "Bonds visible if applied too close to hairline"] },
                  { label: "Best For", icon: "👩", items: ["Fine to medium hair", "First-time extension clients", "Clients wanting versatility", "Colour experimentation", "Low-commitment appointments"] },
                ].map(({ label, icon, items }) => (
                  <div key={label} className={`rounded-xl p-5 ${label === "Pros" ? "bg-green-50 border border-green-100" : label === "Cons" ? "bg-amber-50 border border-amber-100" : "bg-[#FDF8F0] border border-amber-100"}`}>
                    <h4 className="font-semibold text-[#4A1942] mb-3">{icon} {label}</h4>
                    <ul className="space-y-1 text-sm text-[#3D2314]">
                      {items.map(item => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              {/* ── K-Tip ──────────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">K-Tip / Keratin Bond Extensions — Pros, Cons & Best For</h2>
              <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80"
                  alt="K-tip keratin bond hair extensions application"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>K-tip extensions</strong> (also called keratin bond or fusion extensions) attach individual weft tips to small sections of natural hair using a keratin adhesive that is melted and fused with a heat tool. Each tip is hand-placed for a completely custom, natural finish.
              </p>
              <div className="not-prose grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Pros", icon: "✅", items: ["Most natural-looking result", "No tape, no beads — just keratin", "Long-lasting (3–5 months)", "Can be positioned anywhere on head", "Highest revenue per appointment"] },
                  { label: "Cons", icon: "⚠️", items: ["Slowest installation (3–5 hours)", "Requires trained, skilled stylist", "Not recommended for fine hair", "Heat application requires practice", "Maintenance requires specialist removal"] },
                  { label: "Best For", icon: "👩", items: ["Thick, coarse hair", "Long-term extension clients", "Clients wanting the most natural look", "High-value, high-revenue appointments", "Bespoke placement requests"] },
                ].map(({ label, icon, items }) => (
                  <div key={label} className={`rounded-xl p-5 ${label === "Pros" ? "bg-green-50 border border-green-100" : label === "Cons" ? "bg-amber-50 border border-amber-100" : "bg-[#FDF8F0] border border-amber-100"}`}>
                    <h4 className="font-semibold text-[#4A1942] mb-3">{icon} {label}</h4>
                    <ul className="space-y-1 text-sm text-[#3D2314]">
                      {items.map(item => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              {/* ── Weft ──────────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Weft Hair Extensions — Pros, Cons & Best For</h2>
              <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80"
                  alt="Hand-tied weft hair extensions for salon professionals"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>Weft extensions</strong> consist of continuous strips of hair stitched at the top into a seam. They are installed by sewing (braiding the weft into cornrows) or clipping onto a micro-bead braid. Machine-made wefts are the most affordable; hand-tied wefts are thinner and more luxurious.
              </p>
              <div className="not-prose grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Pros", icon: "✅", items: ["Maximum volume per installation", "Fewer attachment points needed", "Very cost-effective for clients", "Long-lasting results (3–4 months)", "Good for thick hair"] },
                  { label: "Cons", icon: "⚠️", items: ["Braided installation can be uncomfortable", "Weft seam may be visible if not covered", "Not suitable for fine or thin hair", "More maintenance required at root", "Sewing technique requires experience"] },
                  { label: "Best For", icon: "👩", items: ["Thick, coarse hair types", "Clients wanting dramatic volume", "Clients on a budget", "Braided or sewn-in styles", "Clients wanting long-term fullness"] },
                ].map(({ label, icon, items }) => (
                  <div key={label} className={`rounded-xl p-5 ${label === "Pros" ? "bg-green-50 border border-green-100" : label === "Cons" ? "bg-amber-50 border border-amber-100" : "bg-[#FDF8F0] border border-amber-100"}`}>
                    <h4 className="font-semibold text-[#4A1942] mb-3">{icon} {label}</h4>
                    <ul className="space-y-1 text-sm text-[#3D2314]">
                      {items.map(item => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              {/* ── Butterfly Weft ──────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Butterfly Weft — Pros, Cons & Best For</h2>
              <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80"
                  alt="Butterfly weft hair extensions for undetectable volume"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>Butterfly weft extensions</strong> are a newer innovation — a thin, flexible weft (approximately 0.5mm) with a unique layered cut that follows the natural flow of the hair. Unlike traditional wefts, butterfly wefts are designed to be sewn in without a braid in many cases, sitting flush against the head for a completely undetectable finish.
              </p>
              <div className="not-prose grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Pros", icon: "✅", items: ["Ultra-thin base (0.5mm) — virtually undetectable", "No braid required in many cases", "Lightweight and comfortable", "Maximum volume with minimal attachment", "Fastest weft installation method"] },
                  { label: "Cons", icon: "⚠️", items: ["Premium pricing vs. machine wefts", "Requires skilled application technique", "Not suitable for very fine hair", "Fewer suppliers carry quality butterfly weft", "Newer method — less client awareness"] },
                  { label: "Best For", icon: "👩", items: ["Medium to thick hair", "Clients wanting volume without beads", "Stylists who want faster weft installs", "Clients requesting a seamless, invisible result", "Boutique salon premium service offering"] },
                ].map(({ label, icon, items }) => (
                  <div key={label} className={`rounded-xl p-5 ${label === "Pros" ? "bg-green-50 border border-green-100" : label === "Cons" ? "bg-amber-50 border border-amber-100" : "bg-[#FDF8F0] border border-amber-100"}`}>
                    <h4 className="font-semibold text-[#4A1942] mb-3">{icon} {label}</h4>
                    <ul className="space-y-1 text-sm text-[#3D2314]">
                      {items.map(item => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              {/* ── Clip-In ─────────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Clip-In Extensions — Pros, Cons & Best For</h2>
              <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1470259078422-826894b933aa?w=1200&q=80"
                  alt="Clip-in hair extensions for instant salon results"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>Clip-in extensions</strong> are wefts of hair with sewn-in clips that the client can apply and remove themselves at home. While they are the most temporary option, they serve an important market — clients who want to trial extensions before committing, or who prefer not to have a permanent extension service.
              </p>
              <div className="not-prose grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Pros", icon: "✅", items: ["Instant results — no appointment needed", "Zero commitment or commitment", "No professional installation required", "Reusable indefinitely with care", "Ideal entry point for extension-curious clients"] },
                  { label: "Cons", icon: "⚠️", items: ["Not a professional salon service", "Clips can pull or feel heavy", "Not suitable for clients with fine hair", "Less natural-looking than bonded methods", "No ongoing salon revenue"] },
                  { label: "Best For", icon: "👩", items: ["Occasional or special-occasion wear", "Clients not ready for permanent extensions", "Retail sale in your salon", "Clients with thick, coarse hair", "Testing client interest in extensions"] },
                ].map(({ label, icon, items }) => (
                  <div key={label} className={`rounded-xl p-5 ${label === "Pros" ? "bg-green-50 border border-green-100" : label === "Cons" ? "bg-amber-50 border border-amber-100" : "bg-[#FDF8F0] border border-amber-100"}`}>
                    <h4 className="font-semibold text-[#4A1942] mb-3">{icon} {label}</h4>
                    <ul className="space-y-1 text-sm text-[#3D2314]">
                      {items.map(item => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              {/* ── How to Choose ───────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">How to Choose the Right Extension Type for Your Client</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Matching the right extension type to the right client is what separates good stylists from great ones. Use this decision framework in your consultation:
              </p>

              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "What is the client's hair type and density?", a: "Fine hair → Tape-in or Nano Ring. Medium density → K-tip, Tape-in, or Butterfly Weft. Thick hair → K-tip, Weft, or Butterfly Weft." },
                  { q: "How much commitment does the client want?", a: "No commitment → Clip-ins. Low commitment → Tape-ins (6–8 week cycles). Long-term → K-tip, Weft, or Butterfly Weft." },
                  { q: "What is the client's budget?", a: "Entry-level → Clip-ins or Tape-ins. Mid-range → Tape-in or Weft. Premium → K-tip or Butterfly Weft." },
                  { q: "How quickly does the client need results?", a: "Same day → Clip-ins (self-fit) or Tape-ins. Within a week → most methods. Willing to wait → K-tip (longest install time)." },
                  { q: "What is the client's lifestyle?", a: "Active gym-goer → Tape-ins or K-tips (secure bonds). Frequent swimmer → K-tips. Occasional events only → Clip-ins or Tape-ins." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2">{q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── CTA Box ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Stock All Extension Types for Your Salon
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  D.S Hair Beauty supplies all five extension types at wholesale trade prices. Open a free trade account and source everything from one trusted UK supplier.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/salon-partners">Open a Trade Account →</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/collections/tape-in-extensions">Browse All Products</Link>
                  </Button>
                </div>
              </div>

              {/* ── Internal Links ─────────────────────── */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href="/blog/wholesale-hair-extensions-uk" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Article</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Wholesale Hair Extensions UK: A Salon Owner's Guide</p>
                </Link>
                <Link href="/blog/how-to-choose-hair-extension-supplier" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">How to Choose a Hair Extension Supplier</p>
                </Link>
              </div>

              {/* ── Back to Blog ─────────────────────────── */}
              <div className="pt-8 border-t">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" /> Back to Blog
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
