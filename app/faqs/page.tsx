"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"

export default function FAQsPage() {
  const [openCategory, setOpenCategory] = useState<string | null>("general")
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const categories = [
    {
      id: "general",
      title: "General Questions",
      icon: HelpCircle,
      faqs: [
        {
          q: "What types of hair extensions does D.S HAIR offer?",
          a: "We offer five professional extension methods: Clip-In (DIY-friendly, no commitment), Tape-In (semi-permanent, 6-8 weeks), Nano Ring (ultra-small bonds for fine hair), K-Tip / Keratin Bond (longest-lasting, 3-5 months), and Butterfly Weft (ultra-flat weft for volume). All are 100% Remy human hair — cuticle-aligned for a natural, tangle-free finish.",
        },
        {
          q: "What is 100% Remy Human Hair?",
          a: "Remy human hair means the cuticles are kept intact and aligned in one direction — the same direction as natural hair growth. This prevents tangling, maintains shine, and gives a far more natural look than non-Remy hair (where cuticles are stripped, causing matting and a dry appearance). All D.S HAIR products are certified 100% Remy human hair.",
        },
        {
          q: "What's the difference between single-drawn and double-drawn hair?",
          a: "Single-drawn hair has varying strand lengths (short to long) at the weft — like natural hair. Double-drawn hair is hand-selected so every strand is the same length from root to tip — giving consistent thickness, fuller volume, and a more premium look throughout. D.S HAIR uses double-drawn hair as standard.",
        },
        {
          q: "How do I find my perfect colour match?",
          a: "We offer two ways: 1) Browse our 31-shade colour chart above — order a free colour matching kit to compare in person. 2) Send us a WhatsApp photo of your hair in natural daylight and our colour specialist will match you within 2 hours — free of charge.",
        },
        {
          q: "Do you offer trade / wholesale pricing for salons?",
          a: "Yes. We have a dedicated Salon Partner Programme with trade pricing, no minimum order, free colour matching kits and priority Manchester delivery. Apply online — we respond within 24 hours with your personalised price list.",
        },
        {
          q: "What is your shipping and returns policy?",
          a: "Free UK delivery on orders over £175. Same-day dispatch for orders placed before 2pm. International shipping available. Returns accepted within 30 days for unused items in original packaging. See our full shipping & returns page for details.",
        },
        {
          q: "Can I colour or bleach D.S HAIR extensions?",
          a: "Yes — all D.S HAIR extensions are 100% human hair and can accept professional colour services. However: we recommend consulting an experienced colourist. We do not recommend bleaching or lightening pre-coloured shades (Balayage, Ombre) as this significantly shortens the hair's lifespan. Dyeing is done at your own risk.",
        },
      ],
    },
    {
      id: "clip-in",
      title: "Clip-In Extensions",
      icon: HelpCircle,
      image: "/images/featured/invisible-tape-in.jpg",
      imageAlt: "D.S HAIR Invisible Clip-In Extensions",
      faqs: [
        {
          q: "What types of clip-in extensions does D.S HAIR offer?",
          a: "We offer three styles: Invisible / Seamless Clip-Ins (ultra-flat silicone base, our #1 recommendation for fine hair), Classic Clip-In Wefts (durable cotton base with strong snap clips), and Clip-In Fillers / Toppers (narrow wefts for targeted crown or hairline volume). All are 100% double-drawn Remy human hair.",
        },
        {
          q: "What's special about Invisible / Seamless Clip-Ins?",
          a: "Invisible Clip-Ins feature an ultra-thin flat silicone base that mimics the scalp — the weft base disappears against the skin. Unlike standard clip-ins that create a visible ridge, seamless clip-ins lie completely flat. They are undetectable even in ponytails and updos. This is the fastest-growing clip-in category in UK salons.",
        },
        {
          q: "Do clip-in extensions damage natural hair?",
          a: "When applied correctly, clip-ins cause zero damage. The silicone-lined clips grip without pulling or cutting the hair shaft. Key rules: never clip into the same section repeatedly without repositioning; don't sleep in them; don't clip into the very front hairline; and choose the correct weight for your hair density.",
        },
        {
          q: "How long do clip-in extensions last?",
          a: "With proper care, D.S HAIR Remy clip-ins last 6-12 months of regular wear. There is no 'removal' appointment — just unclip nightly and store. Key care: wash every 15-20 wears, brush from ends upward, store in the provided pouch, avoid heat above 180°C without protectant.",
        },
        {
          q: "Can I wear clip-ins in a ponytail or updo?",
          a: "Yes — Invisible / Seamless Clip-Ins are specifically designed for this. The flat base conceals completely when hair is pulled back. With classic clip-ins, position wefts slightly lower than the ponytail so your natural hair fully covers them.",
        },
        {
          q: "How do I care for clip-in extensions?",
          a: "Wash with sulphate-free shampoo only when needed (typically every 15-20 wears). Don't scrub — gently work shampoo through the weft. Rinse thoroughly, apply lightweight conditioner from mid-shaft to ends (not the weft base or clips). Air dry flat or hang on an extension holder. Always use heat protectant before hot tool styling.",
        },
        {
          q: "Can you sleep in clip-ins?",
          a: "No. Sleeping in clip-ins is uncomfortable and can damage the clips and cause matting and tangling. Always remove clip-ins before sleeping.",
        },
        {
          q: "Do I need to wash clip-ins before first use?",
          a: "Yes. All clip-ins have a protective vitamin / processing seal from manufacturing. Wash them gently with sulphate-free shampoo before first wearing — this removes the seal and allows the extensions to blend naturally with your hair.",
        },
      ],
    },
    {
      id: "tape-in",
      title: "Tape-In Extensions",
      icon: HelpCircle,
      image: "/images/featured/invisible-tape-in.jpg",
      imageAlt: "D.S HAIR Invisible Tape-In Extensions",
      faqs: [
        {
          q: "What are Tape-In extensions and how do they work?",
          a: "Tape-In extensions use ultra-thin polyurethane (PU) wefts pre-coated with medical-grade adhesive. A small slice of your natural hair is sandwiched between two weft tabs. The bond lies completely flat against the scalp, creating a natural, seamless finish. No heat, no fusion chemicals — and one of the fastest semi-permanent methods, taking 1-2 hours to apply.",
        },
        {
          q: "Invisible Tape-In vs Standard Tape-In — what's the difference?",
          a: "Invisible (Seamless) Tape-Ins use a skin-tone matched PU base that mimics the scalp — the tab itself disappears against the skin, so hair appears to grow directly from it. Standard Tape-Ins have a slightly thicker base and offer excellent hold for all hair types. For maximum invisibility — especially in fine hair or when worn up — Invisible Tape-Ins are the premium choice.",
        },
        {
          q: "Are Tape-In extensions suitable for fine or thin hair?",
          a: "Yes — particularly our Invisible Tape-Ins. The ultra-thin 0.5mm PU base places minimal weight per section, and the skin-tone match ensures zero visible tab even in fine hair. For very fine-haired clients, we recommend taking slightly thinner sections per tab.",
        },
        {
          q: "How long do Tape-In extensions last?",
          a: "The adhesive bond typically lasts 6-8 weeks before a re-tape appointment is needed (natural hair grows and the tab moves away from the scalp). The hair weft itself can be re-taped and reused 2-3 times — meaning the initial hair investment lasts 6-12 months or more with proper care.",
        },
        {
          q: "Will Tape-In extensions damage my natural hair?",
          a: "When correctly installed and removed by a professional, tape-ins cause no damage to the hair shaft. The adhesive bonds to the surface of the hair — there is no heat or chemical penetration. Damage only occurs from improper DIY removal (never pull — always use a professional remover solution) or applying tabs too close to the root.",
        },
        {
          q: "How do I care for Tape-In extensions?",
          a: "Wash with sulphate-free shampoo — avoid conditioner or oil products at the roots as these weaken the adhesive. Blow-dry thoroughly (never leave tape bonds damp). Use a loop brush from ends upward. Avoid heavy oil-based products near bonds. Sleep in a loose plait. Do not use conditioner directly on or near the tape tabs.",
        },
        {
          q: "Can I wear Tape-Ins in a ponytail or updo?",
          a: "Yes — this is one of tape-ins' greatest strengths. Because the base is ultra-flat, the tabs lie flush against the scalp and are completely concealed in ponytails, updos, braids and buns. Invisible Tape-Ins are particularly undetectable when hair is pulled back.",
        },
      ],
    },
    {
      id: "nano-ktip",
      title: "Nano Ring & K-Tip Extensions",
      icon: HelpCircle,
      image: "/images/featured/k-tip-extension.jpg",
      imageAlt: "D.S HAIR K-Tip Extensions",
      faqs: [
        {
          q: "What is a Nano Ring extension?",
          a: "Nano Ring extensions attach individual strands of 100% Remy human hair using an ultra-small silicone-lined metal ring (~3mm) — no heat, no glue, no chemicals. The ring is mechanically clamped with specialist pliers. They are the #1 recommended method for fine or delicate hair, as each ring is approximately 90% smaller than a standard micro-ring.",
        },
        {
          q: "What is a K-Tip (Keratin Bond) extension?",
          a: "K-Tip extensions are individual strands of 100% Remy human hair with a pre-tipped keratin polymer bead. A certified stylist uses a hot-fusion wand at 180-200°C to soften the bead and mould it around a small section of natural hair, forming a smooth, virtually invisible bond. Modern keratin bonds are flexible, residue-free and dissolve cleanly with professional remover.",
        },
        {
          q: "K-Tip vs Tape-In — which is better for fine hair?",
          a: "Both work on fine hair, but with key differences. Tape-ins are quicker (1-2 hours) and more affordable upfront but need replacing every 6-8 weeks. Nano K-Tip bonds (0.5g per strand) are barely visible, place minimal weight on individual strands, and last 3-5 months. For salon clients who want the most natural, longest-lasting result, nano K-tips are increasingly the first choice.",
        },
        {
          q: "How long do Nano Ring and K-Tip extensions last?",
          a: "Nano Ring: 6-12 months with every-6-8-week move-ups. The rings are re-clamped higher as your hair grows. The hair can be reused 2-3 times by replacing the rings. K-Tip: 3-5 months per set — significantly longer than tape-ins. The same Remy hair strands can be re-tipped and reinstalled 2-3 times.",
        },
        {
          q: "Will these methods damage my natural hair?",
          a: "When professionally installed, maintained and removed, both methods are considered low-damage. Nano rings distribute weight evenly with no adhesive. K-Tip keratin bonds distribute weight across multiple strands. Damage risks arise only from incorrect installation or improper removal. Always use a certified extension stylist.",
        },
        {
          q: "Can I colour, curl or straighten these extensions?",
          a: "Yes — 100% Remy human hair accepts heat styling up to 180°C and most professional colour services. Always apply heat protectant. Wait at least 2 weeks after installation before colouring (allow bonds to fully set). For bleaching or lightening, always consult an experienced colourist first.",
        },
        {
          q: "How are K-Tip extensions removed and can they be reused?",
          a: "Removal must be done by a professional stylist. Keratin bond remover solution (isopropyl alcohol or ethyl acetate based) is applied to each bond, making it brittle. The stylist gently cracks the bond with flat-nosed pliers — the keratin crumbles away without cutting the natural strand. The Remy hair can then be re-tipped with fresh keratin and reinstalled 2-3 times.",
        },
        {
          q: "How do I care for Nano Ring and K-Tip extensions day to day?",
          a: "Use sulphate-free, bond-safe shampoo and conditioner — avoid applying conditioner directly to bonds. Wash gently in a downward motion (never circular, which causes tangling). Sleep with hair in a loose braid and use a silk pillowcase. Brush daily from ends to roots with a loop brush. Avoid heavy oils or serums near bond areas — product build-up weakens them over time.",
        },
      ],
    },
    {
      id: "colour-care",
      title: "Colour, Care & Maintenance",
      icon: HelpCircle,
      faqs: [
        {
          q: "Can D.S HAIR extensions be washed, blow-dried and heat-styled?",
          a: "Yes — all D.S HAIR extensions are 100% Remy human hair and behave like your natural hair. Wash with sulphate-free shampoo. Use a heat protectant before blow-drying, curling or straightening. Keep heat tools below 180°C. Brush gently from ends upward with a loop brush designed for extensions.",
        },
        {
          q: "Can I dye or bleach D.S HAIR extensions?",
          a: "Yes — they can accept professional colour services. However, we strongly recommend consulting an experienced colourist first. We do not recommend bleaching or lightening pre-coloured shades (Balayage, Ombre, Ash tones) as this dramatically shortens lifespan and may damage the hair. All colouring is done at the customer's own discretion and risk.",
        },
        {
          q: "How often should I wash my extensions?",
          a: "Clip-ins: wash only when needed — typically every 15-20 wears. They don't receive scalp's natural oils, so over-washing causes dryness. Tape-ins / Nano / K-Tips: wash 1-2 times per week with sulphate-free shampoo. Never sleep with wet bonds. Always blow-dry bonds thoroughly.",
        },
        {
          q: "How do I brush extensions without causing damage or tangling?",
          a: "Use a loop brush or specialist extension brush. Always brush from the ends first, working your way up to the roots in gentle strokes. Never brush from roots to ends — this puts tension on the bonds and pulls natural hair. For tape-ins, brush above the bond line only.",
        },
        {
          q: "What's the best way to sleep with semi-permanent extensions?",
          a: "Tie hair in a loose, low braid or ponytail before bed — this prevents matting and tangling overnight. Use a silk or satin pillowcase to reduce friction. Never sleep with clip-ins in. For K-Tip / Nano extensions, a silk pillowcase significantly reduces friction on the bonds.",
        },
        {
          q: "How many packs / grams do I need?",
          a: "For Nano Ring / K-Tip: 1 pack (50g / ~50 strands) for subtle volume. 2 packs (100g) for noticeable length and fullness. 3-4 packs (150-200g) for a full transformation. For Tape-In: 20-60 tabs depending on thickness and desired outcome. For Clip-In: 80-120g for subtle volume, 150-220g for full volume. Not sure? Send us a WhatsApp photo — we advise free.",
        },
      ],
    },
  ]

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-16 md:py-20">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm tracking-widest uppercase text-white/50 mb-4">
                  D.S Hair & Beauty
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl mx-auto">
                  Everything you need to know about D.S HAIR extensions — from choosing the right method to aftercare. Can't find your answer?
                </p>
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                  <a
                    href="https://wa.me/8613516946001?text=Hi!%20I%27ve%20a%20question%20about%20D.S%20HAIR%20extensions."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Ask Us on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ Categories */}
          <section className="py-16">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
              {categories.map((cat) => (
                <div key={cat.id} className="mb-8 border-b last:border-b-0">
                  {/* Category Header */}
                  <button
                    className="w-full flex items-center justify-between py-6 text-left"
                    onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
                  >
                    <div className="flex items-center gap-3">
                      <cat.icon className="h-5 w-5 text-primary shrink-0" />
                      <h2 className="font-serif text-2xl font-medium">{cat.title}</h2>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform ${openCategory === cat.id ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Category Image (for product categories) */}
                  {cat.image && openCategory === cat.id && (
                    <div className="relative w-full max-w-md mx-auto mb-6 rounded-xl overflow-hidden border shadow-sm">
                      <Image
                        src={cat.image}
                        alt={cat.imageAlt || cat.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}

                  {/* FAQs */}
                  {openCategory === cat.id && (
                    <div className="pb-6 space-y-0">
                      {cat.faqs.map((faq, i) => {
                        const faqId = `${cat.id}-${i}`
                        return (
                          <div key={faqId} className="border-b last:border-b-0 py-5">
                            <button
                              className="w-full text-left flex items-start justify-between gap-4"
                              onClick={() => setOpenFaq(openFaq === faqId ? null : faqId)}
                            >
                              <h3 className="font-medium text-base pr-4 leading-snug">{faq.q}</h3>
                              <ChevronDown
                                className={`h-4 w-4 text-muted-foreground shrink-0 mt-1 transition-transform ${openFaq === faqId ? "rotate-180" : ""}`}
                              />
                            </button>
                            {openFaq === faqId && (
                              <p className="text-muted-foreground text-sm leading-relaxed mt-3 max-w-3xl">
                                {faq.a}
                              </p>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Still have questions CTA */}
          <section className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white py-16">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="font-serif text-3xl font-medium mb-4">
                Still Have Questions?
              </h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Our team is ready to help. Send us a message on WhatsApp and we typically respond within 2 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                  <a
                    href="https://wa.me/8613516946001?text=Hi!%20I%27ve%20a%20question%20about%20D.S%20HAIR%20extensions."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white bg-black/30 hover:bg-white hover:text-black" asChild>
                  <Link href="/contact">
                    Contact Form
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
