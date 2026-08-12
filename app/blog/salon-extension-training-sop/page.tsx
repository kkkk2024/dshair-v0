import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, GraduationCap, ClipboardCheck, Users, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"

export const metadata = {
  title: "How to Train Your Salon Team on Hair Extensions: A Complete SOP | D.S Hair Beauty",
  description:
    "A practical SOP for training salon staff on hair extensions: method roadmap, certification checklist, quality control, and how to keep results consistent across every stylist. A UK guide from 19 years in the trade.",
  openGraph: {
    title: "How to Train Your Salon Team on Hair Extensions: A Complete SOP | D.S Hair Beauty",
    description: "Method roadmap, certification checklist, and a quality-control SOP so every stylist fits extensions to the same standard — a UK guide from 19 years supplying salons.",
    url: "https://www.dshairbeauty.co.uk/blog/salon-extension-training-sop",
    siteName: "D.S Hair Beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Salon team training on hair extensions",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-08-13",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/salon-extension-training-sop",
  },
}

export default function SalonExtensionTrainingSop() {
  return (
    <CartProvider>
      <BlogJsonLd slug="salon-extension-training-sop" />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* ── JSON-LD ───────────────────────────── */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": "How to Train Your Salon Team on Hair Extensions: A Complete SOP",
                "description": "A practical SOP for training salon staff on hair extensions: method roadmap, certification checklist, quality control, and how to keep results consistent across every stylist.",
                "url": "https://www.dshairbeauty.co.uk/blog/salon-extension-training-sop",
                "datePublished": "2026-08-13",
                "author": { "@type": "Organization", "name": "D.S Hair Beauty" },
                "publisher": { "@type": "Organization", "name": "D.S Hair Beauty" },
              })
            }}
          />

          {/* ── Hero ─────────────────────────────────── */}
          <section className="relative bg-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B3A6E 0%, transparent 50%)"
              }} />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                Salon Business
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                How to Train Your Salon Team on Hair Extensions: A Complete SOP
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Poor application is the fastest way to lose extension clients. A clear training roadmap and a single standard operating procedure is what turns extensions from a risk into your most reliable revenue line.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/salon-partners">Open a Trade Account</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/blog/grow-profitable-hair-salon-uk">Grow a Profitable Salon →</Link>
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
                <span className="text-[#4A1942] font-medium">Extension Training SOP</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="prose prose-lg max-w-none">

              {/* ── Intro (E-E-A-T) ─────────────────────── */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Over <strong>19 years</strong> supplying UK salons, the salons that win at extensions are rarely the ones with the cheapest hair. They are the ones where <em>every stylist fits the same method to the same standard</em>. Inconsistent application — one great install, the next client complaining of bumps or slippage — is what kills re-bookings. This guide gives you a training roadmap and a standard operating procedure (SOP) you can hand to any new stylist.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Get this right and extensions stop being a skill owned by one person and become a <em>repeatable system</em> your salon can scale.
              </p>

              {/* ── 1. Why training is the make-or-break ── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">1. Why Training Is the Make-or-Break for Extension Revenue</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80" alt="Salon stylist consulting with a client" fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Extensions are a recurring revenue engine only if clients come back. A client who wears your tape-in for six weeks and loves the result rebooks the move-up and re-orders the hair. A client with a poor first fit rarely returns — and often tells friends. The maths is brutal: one bad application can cost you a client worth £1,000+ a year. Training is not a cost; it is the thing that protects the entire revenue line. See our <Link href="/blog/salon-client-retention-rebooking-guide" className="text-[#4A1942] underline font-medium">retention guide</Link> for why the 6–8 week cycle is your retention engine.
              </p>

              {/* ── 2. Method roadmap ───────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">2. The Method Roadmap (What to Master First)</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Do not try to teach every method at once. Build competence in layers so stylists get reps on the most common methods before touching the premium ones.
              </p>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Layer 1 — Tape-in & nano ring", a: "Fast to learn, versatile, suit most clients, and create a 6–8 week maintenance cycle from the first client. This is where 80% of your extension volume will sit." },
                  { q: "Layer 2 — K-tip (keratin bond)", a: "Higher skill, higher ticket. Introduce once stylists are consistent on Layers 1. Best for clients wanting long, seamless wear and a premium result." },
                  { q: "Layer 3 — Hand-tied & butterfly weft", a: "The premium, high-ticket end. Requires the most practice and a confident consultation. Reserve for stylists who have cleared Layers 1–2." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><GraduationCap className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Our <Link href="/blog/hair-extension-methods-comparison" className="text-[#4A1942] underline font-medium">method comparison guide</Link> helps you and your team choose the right method per client once everyone is trained.
              </p>

              {/* ── 3. The extension SOP ───────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">3. The Extension SOP (Your Standard Every Time)</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Write the standard down. A good extension SOP covers the whole client journey so results do not depend on whose chair the client lands in.
              </p>
              <div className="not-prose overflow-x-auto mb-10">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden border border-amber-100">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      <th className="p-4 text-left font-medium">Stage</th>
                      <th className="p-4 text-left font-medium">Standard to enforce</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-50 bg-white">
                    {[
                      { b: "Consultation", p: "Diagnose goal, hair type, lifestyle; colour-match using the ring; set realistic wear expectations." },
                      { b: "Prep", p: "Section cleanly, check hair health, confirm method and gram weight before opening any hair." },
                      { b: "Application", p: "Follow method-specific placement (e.g. 1cm from root for tape-in); even tension; no over-direction." },
                      { b: "Blend & finish", p: "Cut and style so the result looks like the client's own hair, not 'extensions.'" },
                      { b: "Aftercare", p: "Hand over the aftercare kit and book the move-up before the client leaves the chair." },
                    ].map((row) => (
                      <tr key={row.b} className="hover:bg-amber-50/50">
                        <td className="p-4 font-semibold text-[#4A1942]">{row.b}</td>
                        <td className="p-4 text-[#6B3A6E]">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── 4. Certification checklist ──────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">4. Certification & Sign-Off Checklist</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {[
                  { label: "Theory sign-off", icon: <ClipboardCheck className="h-5 w-5" />, items: ["Knows Remy vs non-Remy and why it matters", "Understands each method's wear time & cycle", "Can explain aftercare without prompting"] },
                  { label: "Practical sign-off", icon: <ShieldCheck className="h-5 w-5" />, items: ["Completes one model head to standard", "Fits a live client under supervision", "Passes a blind colour-match test"] },
                ].map(({ label, icon, items }) => (
                  <div key={label} className="rounded-xl p-5 bg-[#FDF8F0] border border-amber-100">
                    <div className="flex items-center gap-2 text-[#4A1942] mb-3 font-semibold">{icon} {label}</div>
                    <ul className="space-y-1 text-sm text-[#3D2314]">
                      {items.map(item => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                A stylist should not be promoted to 'extensionist' until they pass both. This single gate protects your salon's reputation more than any marketing spend.
              </p>

              {/* �─ 5. Quality control ──────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">5. Quality Control & Consistency</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Photo check", a: "Require a before/after photo for every first-time install, reviewed by a senior stylist. Trends (bumps, gaps, poor blend) surface fast before they reach a second client." },
                  { q: "Hair audit", a: "Track which method and gram weight each client gets, so re-orders are exact and nothing is guessed. Inconsistent grams are the silent killer of good blends." },
                  { q: "Client feedback loop", a: "A 48-hour check-in message catches discomfort early and turns a near-complaint into loyalty. It also feeds your training: repeat issues mean retrain, not blame." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── 6. Onboarding new stylists ─────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">6. Onboarding New Stylists (Make It Scalable)</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Document once, reuse forever", a: "Your SOP and checklist are living documents. A new hire works through them on a set timeline instead of shadowing ad hoc — faster and more consistent." },
                  { q: "Pair with a mentor", a: "Each trainee shadows a certified extensionist for their first five clients. Skill transfers through reps, not just reading." },
                  { q: "Track time-to-competence", a: "Measure how long each stylist takes to pass sign-off. It tells you whether your training works and where to tighten it." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><Users className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── 7. Mistakes ─────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">7. Training Mistakes That Cost You Clients</h2>
              <div className="not-prose space-y-4 mb-10">
                {[
                  { q: "Letting stylists 'just try' on paying clients", a: "Practice belongs on model heads and supervised fits. A paying client is not a training ground — one bad result is a lost client." },
                  { q: "No written SOP", a: "If the standard lives only in one senior stylist's head, it dies when they leave and varies by chair. Write it down." },
                  { q: "Skipping the consultation", a: "Most complaints trace back to mismatched expectations set at consultation. Train the consult as hard as the application." },
                  { q: "Using inconsistent hair quality", a: "Even perfect technique fails on non-Remy hair. Standardise on 100% Remy human hair so training is not fighting the product. See our supplier checklist." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2 flex items-center gap-2"><ClipboardCheck className="h-4 w-4 text-amber-600" /> {q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* ── CTA ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  Train Your Team on Hair You Can Trust
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  Open a free UK trade account for consistent 100% Remy human hair, colour-matching support, and the training resources that help every stylist hit the same standard.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/salon-partners">Open a Trade Account →</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/blog/how-to-start-selling-hair-extensions-salon">Start an Extension Service</Link>
                  </Button>
                </div>
              </div>

              {/* ── On-page FAQ (single source of truth) ─ */}
              <BlogFaqSection slug="salon-extension-training-sop" />

              {/* ── Internal Links ─────────────────────── */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href="/blog/grow-profitable-hair-salon-uk" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Cluster Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">How to Run a Profitable Salon (UK)</p>
                </Link>
                <Link href="/blog/how-to-start-selling-hair-extensions-salon" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Article</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Start Selling Extensions in Your Salon</p>
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
        <RelatedGuides slug="salon-extension-training-sop" />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
