"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { contactInfo } from "@/lib/products"
import {
  BookOpen, MessageCircle, CheckCircle2, XCircle,
  Clock, ChevronDown, Scissors, ArrowRight, Star
} from "lucide-react"
import Link from "next/link"

// --- Data Types ---

interface MethodSpec {
  id: string
  name: string
  installation: string
  installTime: string
  lifespan: string
  hairType: string
  maintenance: string
  reusable: string
  diyFriendly: boolean
  priceRange: string
  collectionLink: string
  description: string
  pros: string[]
  cons: string[]
  bestFor: string
  installSteps: string[]
  maintenanceTips: string[]
}

const methods: MethodSpec[] = [
  {
    id: "tape-in",
    name: "Tape-In",
    installation: "Adhesive tape sandwich",
    installTime: "45-60 min",
    lifespan: "6-8 weeks",
    hairType: "Fine to Medium",
    maintenance: "Every 4-6 weeks",
    reusable: "No (new tape needed)",
    diyFriendly: false,
    priceRange: "\u00A340-60/25g",
    collectionLink: "/collections/tape-in",
    description:
      "Tape-in extensions use thin, flat adhesive wefts that are sandwiched between sections of natural hair. The adhesive tabs are virtually invisible when properly installed, making them one of the most popular methods for clients seeking natural-looking volume and length. Tape-ins lie completely flat against the scalp, making them particularly comfortable under hats and during sleep. They are removed and reinstalled using a specialised adhesive remover, and fresh tape is applied during each maintenance visit. This method is ideal for clients with fine to medium hair density who want a low-commitment option with a natural feel.",
    pros: [
      "Fastest professional installation time (45-60 min)",
      "Completely flat and invisible against the scalp",
      "Comfortable for sleeping and everyday wear",
      "Low maintenance compared to other semi-permanent methods",
      "Available in wide range of colours and lengths",
      "Gentle on fine hair when properly maintained",
    ],
    cons: [
      "Must be removed and re-taped every 6-8 weeks",
      "Not ideal for very thick or coarse hair",
      "Adhesive may weaken with exposure to heavy oils or deep-conditioning products",
      "Limited reusability - new tape strips required each time",
    ],
    bestFor: "Clients with fine to medium hair seeking a natural, low-profile look. Ideal for adding volume and subtle length without bulk.",
    installSteps: [
      "Section the natural hair horizontally, creating clean partings approximately 1cm apart.",
      "Remove the protective backing from the tape-in weft.",
      "Position the weft beneath a thin section of natural hair, approximately 1cm from the scalp.",
      "Place a second weft (or a replacement tape tab) on top of the natural hair to sandwich the section.",
      "Press firmly to bond the adhesive tabs together.",
      "Repeat across the head, working from the nape upwards.",
      "Blend the extensions with the natural hair using cutting or styling as needed.",
    ],
    maintenanceTips: [
      "Avoid oil-based hair products near the bonds, as these can weaken the adhesive.",
      "Brush gently, starting from the ends and working up to avoid pulling on the bonds.",
      "Use a silk or satin pillowcase to reduce friction during sleep.",
      "Schedule maintenance appointments every 4-6 weeks to prevent slippage.",
      "Dry the bonded area thoroughly after washing - avoid sleeping with wet bonds.",
    ],
  },
  {
    id: "nano-ring",
    name: "Nano Ring",
    installation: "Metal bead clamping",
    installTime: "60-90 min",
    lifespan: "8-12 weeks",
    hairType: "Medium to Thick",
    maintenance: "Every 6-8 weeks",
    reusable: "Yes (new beads)",
    diyFriendly: false,
    priceRange: "\u00A345-65/25g",
    collectionLink: "/collections/nano-extensions",
    description:
      "Nano ring extensions use tiny, virtually invisible metal beads (approximately 2-3mm in diameter) to attach individual extension strands to the natural hair. The nano bead is threaded onto a small section of natural hair along with the extension strand, then clamped shut with specialist pliers. Because the beads are significantly smaller than traditional micro rings, they are an excellent choice for clients with fine or thinning hair where discretion is paramount. Nano rings are versatile and can be repositioned during maintenance visits by moving the bead slightly along the natural hair.",
    pros: [
      "Extremely discreet - the smallest bead size available",
      "No heat or adhesive required during installation",
      "Reusable: beads can be moved and re-clamped during maintenance",
      "Good option for clients with fine or thinning hair",
      "Longer wear time than tape-ins (8-12 weeks)",
      "Versatile placement allows for targeted volume and highlights",
    ],
    cons: [
      "Installation is time-consuming for full-head applications",
      "Can feel slightly bulky on very fine hair if too many strands are applied",
      "Beads may slip if natural hair is very soft or silky",
      "Requires regular maintenance to reposition beads as natural hair grows",
    ],
    bestFor: "Clients with fine to medium hair who want a longer-lasting method with reusable bonds. Ideal for targeted volume, highlights, and clients sensitive to adhesives.",
    installSteps: [
      "Section the hair and isolate a small strand of natural hair (roughly the width of the nano bead).",
      "Thread the nano bead onto the pulling tool or loop.",
      "Insert the extension strand and the natural hair strand through the bead using the loop tool.",
      "Position the bead approximately 0.5-1cm from the scalp.",
      "Clamp the bead firmly with nano ring pliers to secure the bond.",
      "Repeat across the head, spacing beads evenly for natural distribution.",
      "Style and blend the extensions with the natural hair.",
    ],
    maintenanceTips: [
      "Do not use oils or serums directly on the beads - they can cause slippage.",
      "Check beads weekly and re-clamp any that feel loose.",
      "Avoid tight ponytails that pull directly on the beads.",
      "Schedule professional maintenance every 6-8 weeks to move beads closer to the scalp.",
      "Gently detangle using a wide-tooth comb or extension-safe brush.",
    ],
  },
  {
    id: "k-tip",
    name: "K-Tip / I-Tip",
    installation: "Keratin bond heat seal",
    installTime: "90-120 min",
    lifespan: "10-14 weeks",
    hairType: "All types",
    maintenance: "Every 8-10 weeks",
    reusable: "No (new bonds)",
    diyFriendly: false,
    priceRange: "\u00A350-75/25g",
    collectionLink: "/collections/k-tip-extensions",
    description:
      "K-tip (also known as keratin tip or pre-bonded) extensions feature individual strands with a small keratin protein tip at one end. During installation, the keratin tip is melted with a heating wand and wrapped around a small section of natural hair to form a secure bond. Because the bond is made from keratin - the same protein found in human hair - the connection feels natural and blends seamlessly. K-tip extensions are among the most durable semi-permanent methods, offering 10-14 weeks of wear before maintenance is required. They work across all hair types and are particularly popular for full-head transformations.",
    pros: [
      "Longest-lasting semi-permanent method (10-14 weeks per bond)",
      "Keratin bonds blend naturally with the hair shaft",
      "Suitable for all hair types and textures",
      "Individual strand application allows precise placement",
      "Durable and resistant to everyday styling",
      "Available in a wide range of lengths, weights and colours",
    ],
    cons: [
      "Longest installation time (90-120 min for full head)",
      "Requires heat during application and removal",
      "Not reusable - new bonds needed for each installation",
      "Improper removal can damage natural hair if not done by a trained professional",
    ],
    bestFor: "Clients wanting maximum longevity from their extensions. Suitable for all hair types, particularly those seeking full-head transformations or dramatic length increases.",
    installSteps: [
      "Section the hair into clean, dry rows from the nape upwards.",
      "Isolate a small strand of natural hair (approximately the width of the keratin tip).",
      "Position the keratin tip of the extension against the natural hair, approximately 0.5cm from the scalp.",
      "Use a heat connector wand to melt and mould the keratin tip around the natural hair.",
      "Roll the softened bond between your fingers to seal it into a smooth, flat shape.",
      "Allow the bond to cool and set for a few seconds.",
      "Repeat across the entire head, spacing bonds evenly.",
    ],
    maintenanceTips: [
      "Avoid heat styling directly on or very close to the keratin bonds.",
      "Use a heat protectant on mid-lengths and ends when styling.",
      "Brush gently starting from the tips, supporting the bonds with one hand.",
      "Schedule maintenance every 8-10 weeks to remove and reapply bonds as natural hair grows out.",
      "Avoid protein-rich treatments near the bonds, as excess protein can weaken the keratin.",
    ],
  },
  {
    id: "clip-in",
    name: "Clip-In",
    installation: "Pressure clips",
    installTime: "10-15 min",
    lifespan: "1 day (removable)",
    hairType: "All types",
    maintenance: "None",
    reusable: "Yes",
    diyFriendly: true,
    priceRange: "\u00A335-55/set",
    collectionLink: "/collections/clip-in",
    description:
      "Clip-in extensions are the most accessible and versatile hair extension option available. Each weft features built-in pressure clips that snap securely into the natural hair, allowing for instant application and removal without any professional tools or adhesives. Clip-ins are ideal for temporary transformations, special occasions, or clients who want to control when and how they wear their extensions. Because they are fully removable, they can be reused indefinitely with proper care. Sets typically include multiple wefts of varying widths to distribute volume naturally across the head.",
    pros: [
      "Instant application - no salon visit required",
      "Fully removable and reusable indefinitely",
      "No damage to natural hair with correct use",
      "Most affordable extension option per wear",
      "Complete control over placement and style",
      "Available in multi-piece sets for natural layering",
    ],
    cons: [
      "Visible clips if hair is worn very up or pulled back tightly",
      "May feel slightly heavy during all-day wear",
      "Requires practice to achieve a seamless blend",
      "Not suitable for permanent wear or active lifestyles",
    ],
    bestFor: "Clients seeking temporary volume and length for events, nights out, or occasional use. Also popular for beginners exploring extensions for the first time.",
    installSteps: [
      "Start with clean, dry hair that has been lightly teased at the roots for grip.",
      "Begin at the nape and backcomb a horizontal section to create a base for the clip.",
      "Open the clip on the weft and slide it into the backcombed section.",
      "Snap the clip shut, pressing firmly to secure it against the scalp.",
      "Smooth the natural hair over the clip to conceal it.",
      "Layer additional wefts above the first, working upwards towards the crown.",
      "Blend and style as desired.",
    ],
    maintenanceTips: [
      "Remove clip-ins before sleeping, swimming, or intense exercise.",
      "Wash gently in cool water with sulphate-free shampoo every 15-20 wears.",
      "Air dry flat on a towel - avoid wringing or heat drying.",
      "Store in the original packaging or a silk bag to prevent tangling.",
      "Detangle before and after each use with a wide-tooth comb.",
    ],
  },
  {
    id: "machine-weft",
    name: "Machine Weft",
    installation: "Sewn into braid",
    installTime: "60-90 min",
    lifespan: "8-12 weeks",
    hairType: "Medium to Thick",
    maintenance: "Every 6-8 weeks",
    reusable: "Yes (removed and re-sewn)",
    diyFriendly: false,
    priceRange: "\u00A360-90/50g",
    collectionLink: "/collections/weft",
    description:
      "Machine weft extensions are produced by sewing hair strands onto a reinforced track using high-speed machinery, creating a wide, continuous weft. The weft is then applied by creating a horizontal braid (or cornrow) in the natural hair and sewing the weft directly onto the braid using a curved needle and specialised thread. Machine wefts are a cost-effective way to add substantial volume and length in a single application. They are thicker and denser than hand-tied wefts, making them best suited for clients with medium to thick hair who want full-head coverage and dramatic results.",
    pros: [
      "Excellent value for the volume delivered per gram",
      "Fast application for full-head coverage",
      "Reusable: can be removed and re-sewn during maintenance",
      "Durable track resists shedding with quality manufacturing",
      "Dense weft provides maximum coverage per row",
    ],
    cons: [
      "Requires braiding of natural hair, which can cause tension on the scalp",
      "Weft may feel slightly bulky at the track line on finer hair",
      "Not ideal for clients with very fine or thinning hair",
      "The braid method can be uncomfortable during the first few days of wear",
    ],
    bestFor: "Clients with medium to thick hair seeking maximum volume and coverage. Popular for full-head installations where density is the priority.",
    installSteps: [
      "Part the hair horizontally at the nape and section off the rest.",
      "Create a tight, flat horizontal cornrow braid across the sectioned area.",
      "Thread a curved needle with extension sewing thread.",
      "Position the weft along the braid and sew through the weft track and braid securely.",
      "Tie off the thread and cut, ensuring no loose ends are visible.",
      "Release the upper section of hair and repeat, moving upwards.",
      "Style and blend the hair over the tracks.",
    ],
    maintenanceTips: [
      "Avoid excessively tight braiding that causes scalp tension or headaches.",
      "Do not apply conditioners or oils directly to the braid or track area.",
      "Check the stitching weekly and repair any loose threads promptly.",
      "Schedule repositioning every 6-8 weeks as natural hair grows.",
      "Gently wash the scalp area without soaking the tracks.",
    ],
  },
  {
    id: "butterfly-weft",
    name: "Butterfly Weft",
    installation: "Hand-tied + sewn into braid",
    installTime: "120-180 min",
    lifespan: "10-16 weeks",
    hairType: "Fine to Medium",
    maintenance: "Every 8-10 weeks",
    reusable: "Yes (removed and re-sewn)",
    diyFriendly: false,
    priceRange: "\u00A380-120/50g",
    collectionLink: "/collections/butterfly-weft",
    description:
      "Butterfly weft extensions, also known as hand-tied wefts, are crafted by skilled artisans who individually hand-tie hair strands onto a very thin, flexible foundation. The resulting weft is significantly thinner and more flexible than a machine weft, allowing it to lay virtually flat against the scalp. This makes butterfly wefts the premium choice for clients with fine or thinning hair who want the fullness of a weft extension without the bulk. The thin profile also allows for multiple rows to be stacked close together, creating a seamless gradient of volume and length. Installation time is longer due to the meticulous technique required.",
    pros: [
      "Thinnest, most flexible weft available - virtually invisible",
      "Ideal for fine or thinning hair where discretion is essential",
      "Longest wear time among weft methods (10-16 weeks)",
      "Reusable: can be removed and re-sewn multiple times",
      "Multiple rows can be stacked for seamless, natural layering",
      "Reduces bulk and tension compared to machine wefts",
    ],
    cons: [
      "Longest installation time of any weft method (2-3 hours)",
      "Highest price point per gram due to hand-crafted production",
      "Limited availability compared to machine weft extensions",
      "Weft can be damaged if cut - must be folded rather than trimmed",
    ],
    bestFor: "Clients with fine or thinning hair who want full-head volume with the most discreet application. Ideal for those willing to invest in premium quality for the most natural result.",
    installSteps: [
      "Part the hair horizontally at the nape and isolate the rest.",
      "Create a flat, even horizontal braid across the sectioned area.",
      "Position the hand-tied weft along the braid.",
      "Thread a curved needle and sew through the hand-tied track and braid.",
      "Space stitches evenly and tie off securely at each end.",
      "Fold and stack additional rows above, maintaining even spacing.",
      "Release the upper hair and blend over the weft rows.",
    ],
    maintenanceTips: [
      "Never cut the hand-tied weft - this will cause shedding. Always fold to adjust length.",
      "Avoid heavy conditioners on the track area to prevent loosening stitches.",
      "Check stitching every 1-2 weeks and reinforce any loose areas.",
      "Schedule professional maintenance every 8-10 weeks.",
      "Sleep with hair in a loose braid to reduce friction on the weft.",
    ],
  },
]

// Comparison matrix columns
const matrixColumns = ["Tape-In", "Nano Ring", "K-Tip", "Clip-In", "Machine Weft", "Butterfly Weft"]

function getCellValue(method: MethodSpec, key: string): { text: string; highlight?: boolean } {
  switch (key) {
    case "installation": return { text: method.installation }
    case "installTime": return { text: method.installTime }
    case "lifespan": return { text: method.lifespan }
    case "hairType": return { text: method.hairType }
    case "maintenance": return { text: method.maintenance }
    case "reusable": return { text: method.reusable }
    case "diyFriendly": return { text: method.diyFriendly ? "Yes" : "No", highlight: method.diyFriendly }
    case "priceRange": return { text: method.priceRange }
    default: return { text: "" }
  }
}

const matrixRows = [
  { key: "installation", label: "Installation Method" },
  { key: "installTime", label: "Install Time" },
  { key: "lifespan", label: "Lifespan" },
  { key: "hairType", label: "Suitable Hair Type" },
  { key: "maintenance", label: "Maintenance Cycle" },
  { key: "reusable", label: "Reusable?" },
  { key: "diyFriendly", label: "DIY Friendly?" },
  { key: "priceRange", label: "Wholesale Price Range" },
]

// --- FAQ Data ---

const faqs = [
  {
    q: "Which hair extension method lasts the longest?",
    a: "K-Tip (keratin-bonded) extensions offer the longest single application at 10-14 weeks, followed closely by Butterfly Weft at 10-16 weeks. However, all semi-permanent methods require periodic maintenance. For temporary use, Clip-In extensions can last indefinitely since they are removed each day and properly maintained between wears."
  },
  {
    q: "Can hair extensions damage natural hair?",
    a: "When properly installed and maintained by a trained professional, hair extensions should not cause damage. However, incorrect installation (e.g., bonds too close to the scalp, excessive weight, or tight braiding) can lead to tension alopecia or breakage. Always choose a certified stylist and follow recommended maintenance schedules."
  },
  {
    q: "What is the best extension method for fine hair?",
    a: "Tape-In extensions and Nano Ring extensions are both excellent for fine hair. Tape-ins lie completely flat against the scalp and distribute weight evenly, while Nano Rings use the smallest available beads (2-3mm) for minimal visibility. For weft options, Butterfly (hand-tied) wefts are significantly thinner than machine wefts and are the premium choice for fine-haired clients."
  },
  {
    q: "How much hair do I need for a full-head installation?",
    a: "This varies by method and desired result. As a general guide: Tape-In requires 3-5 packs (40-50g per pack), Nano Ring requires 100-150 strands, K-Tip requires 100-150 strands, Machine Weft requires 100-200g, and Butterfly Weft requires 100-200g across 3-4 rows. For clip-ins, a standard 7-piece set provides moderate volume."
  },
  {
    q: "Can I colour or heat-style my extensions?",
    a: "100% Remy human hair extensions can be coloured and heat-styled, though with some caveats. Always perform a strand test before applying colour. Use low to medium heat settings and always apply a heat protectant. Avoid applying colour directly over bonded areas (tape, keratin, beads). Keratin-tipped and tape-in extensions are the most sensitive to chemical processing."
  },
  {
    q: "What is the difference between machine weft and hand-tied (butterfly) weft?",
    a: "Machine wefts are sewn using high-speed machinery, creating a thick, reinforced track that holds hair densely. Hand-tied (butterfly) wefts are individually crafted by hand onto a much thinner, more flexible foundation. Hand-tied wefts are virtually invisible when installed but cost more and take longer to apply. They are the preferred choice for fine hair, while machine wefts are best for clients who want maximum volume."
  },
  {
    q: "How do I choose between nano ring and micro ring extensions?",
    a: "Both methods use metal beads, but nano rings are significantly smaller (2-3mm vs 4-5mm for micro rings). Nano rings are virtually invisible and better for fine hair, while micro rings are more durable and better suited to thicker hair. For most salon applications today, nano rings are preferred due to their superior discretion."
  },
  {
    q: "Are hair extensions suitable for short hair?",
    a: "Yes, but the method matters. For very short hair (above shoulder length), weft methods (machine or butterfly) sewn into a braid can add dramatic length. Tape-ins work well for hair that is at least 3-4 inches long. K-Tip and Nano Ring require enough natural hair to conceal the bonds. Clip-ins offer the most flexibility for experimenting with length on shorter hair."
  },
  {
    q: "How should I wash and care for extensions?",
    a: "Use sulphate-free, extension-safe shampoo and conditioner. Wash in cool or lukewarm water, gently massaging the scalp and allowing suds to rinse through the lengths. Avoid rubbing or wringing. Apply conditioner from mid-lengths to ends only, keeping products away from bonds. Air dry when possible or use low heat. Brush 2-3 times daily with an extension-safe brush to prevent tangling."
  },
  {
    q: "What does \"100% Remy\" mean and why does it matter?",
    a: "Remy hair means all cuticles are aligned in the same direction from root to tip. This prevents tangling, reduces matting, and ensures the hair moves and behaves like natural hair. Non-Remy hair has cuticles facing both directions, leading to friction, tangles, and a shorter lifespan. At D.S HAIR & BEAUTY, all our extensions are 100% Remy human hair."
  },
]

function openWhatsApp(message: string) {
  const url = `${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}

// --- Method Detail Card ---

function MethodDetailCard({ method }: { method: MethodSpec }) {
  return (
    <div id={method.id} className="scroll-mt-20 border rounded-xl overflow-hidden bg-card">
      <Accordion type="single" collapsible>
        <AccordionItem value={method.id} className="border-b-0">
          <AccordionTrigger className="px-6 py-5 hover:no-underline">
            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Scissors className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">{method.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{method.installation} &middot; {method.installTime} &middot; {method.lifespan}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-6">
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">{method.description}</p>

              {/* Pros & Cons */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2 text-green-700">
                    <CheckCircle2 className="w-4 h-4" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {method.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2 text-red-700">
                    <XCircle className="w-4 h-4" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {method.cons.map((con, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Best For */}
              <div className="bg-secondary/50 rounded-lg p-4">
                <h4 className="font-medium text-sm uppercase tracking-wide mb-1">Best For</h4>
                <p className="text-sm text-muted-foreground">{method.bestFor}</p>
              </div>

              {/* Installation Steps */}
              <div>
                <h4 className="font-medium mb-3">Installation Steps</h4>
                <ol className="space-y-2">
                  {method.installSteps.map((step, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 text-xs font-medium">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Maintenance Tips */}
              <div>
                <h4 className="font-medium mb-3">Maintenance Tips</h4>
                <ul className="space-y-2">
                  {method.maintenanceTips.map((tip, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Star className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Collection Link */}
              <div className="pt-2">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <Link href={method.collectionLink}>
                    View {method.name} Collection
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

// --- Main Client Component ---

export default function ExtensionSpecsClient() {
  return (
    <CartProvider>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-16 md:py-24">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,oklch(0.55_0.12_25),transparent_60%)]" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Professional Reference Guide</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
                Hair Extension Specification Library
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                Compare every extension method side-by-side. Technical data for salon professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Nav */}
        <section className="bg-secondary py-6 sticky top-16 z-10 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {methods.map(method => (
                <a
                  key={method.id}
                  href={`#${method.id}`}
                  className="text-sm px-4 py-2 rounded-full bg-card border hover:border-accent transition-colors whitespace-nowrap"
                >
                  {method.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Matrix Table */}
        <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-center mb-10">
                Extension Method Comparison Matrix
              </h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                A comprehensive side-by-side comparison of the six most popular hair extension methods. Use this reference to recommend the right method for each client.
              </p>

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto rounded-xl border bg-card">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="text-left p-4 font-medium sticky left-0 bg-secondary z-10 min-w-[160px]">Dimension</th>
                      {matrixColumns.map(col => (
                        <th key={col} className="text-left p-4 font-medium min-w-[150px]">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {matrixRows.map((row, ri) => (
                      <tr key={row.key} className={ri % 2 === 0 ? "bg-card" : "bg-secondary/30"}>
                        <td className="p-4 font-medium sticky left-0 z-10 bg-inherit">{row.label}</td>
                        {methods.map(method => {
                          const val = getCellValue(method, row.key)
                          return (
                            <td key={method.id} className={`p-4 text-muted-foreground ${val.highlight ? "text-green-600 font-medium" : ""}`}>
                              {val.text}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card Layout */}
              <div className="lg:hidden space-y-6">
                {methods.map(method => (
                  <div key={method.id} className="border rounded-xl p-4 bg-card">
                    <h3 className="font-serif text-lg font-semibold mb-4">{method.name}</h3>
                    <dl className="space-y-3">
                      {matrixRows.map(row => {
                        const val = getCellValue(method, row.key)
                        return (
                          <div key={row.key} className="flex justify-between items-start gap-4 text-sm border-b border-border/50 pb-2 last:border-0">
                            <dt className="font-medium text-muted-foreground shrink-0">{row.label}</dt>
                            <dd className={`text-right ${val.highlight ? "text-green-600 font-medium" : ""}`}>{val.text}</dd>
                          </div>
                        )
                      })}
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Method Detail Cards */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
                Detailed Method Guides
              </h2>
              <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
                Click to expand each method for full specifications, installation steps, and maintenance advice.
              </p>
              <div className="space-y-4">
                {methods.map(method => (
                  <MethodDetailCard key={method.id} method={method} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-center mb-10">
                Choosing the Right Extension Method
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Not sure which method suits your salon?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              Book a free consultation with our UK team. We&apos;ll help you choose the right extensions for your clients and budget.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => openWhatsApp("Hi! I'd like a free consultation about which hair extension methods would work best for my salon.")}
            >
              <MessageCircle className="w-5 h-5" />
              Book Free Consultation
            </Button>
          </div>
        </section>

        {/* JSON-LD: HowTo Schema (for each method) */}
        {methods.map(method => (
          <script
            key={method.id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": `How to Install ${method.name} Hair Extensions`,
                "description": method.description.substring(0, 200),
                "step": method.installSteps.map((step, i) => ({
                  "@type": "HowToStep",
                  "position": i + 1,
                  "text": step,
                })),
              }),
            }}
          />
        ))}

        {/* JSON-LD: FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a,
                },
              })),
            }),
          }}
        />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}
