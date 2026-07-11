import { FaqJsonLd } from '@/components/seo/json-ld'

export default function FaqsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqs = [
    {
      question: 'What types of hair extensions does D.S HAIR offer?',
      answer:
        'We offer professional extension methods: Clip-In (DIY-friendly), Tape-In (semi-permanent, 6-8 weeks), Nano Ring (ultra-small bonds for fine hair), K-Tip / Keratin Bond (longest-lasting, 3-5 months), Butterfly Weft (ultra-flat weft), Hand-Tied Weft, Hair Toppers, and Ponytail extensions. All are 100% Remy human hair.',
    },
    {
      question: 'What is 100% Remy Human Hair?',
      answer:
        'Remy human hair means the cuticles are kept intact and aligned in one direction — the same direction as natural hair growth. This prevents tangling, maintains shine, and gives a far more natural look than non-Remy hair.',
    },
    {
      question: "What's the difference between single-drawn and double-drawn hair?",
      answer:
        'Single-drawn hair has varying strand lengths at the weft. Double-drawn hair is hand-selected so every strand is the same length — giving consistent thickness, fuller volume, and a more premium look. D.S HAIR uses double-drawn hair as standard.',
    },
    {
      question: 'Do you offer trade / wholesale pricing for salons?',
      answer:
        'Yes. We offer dedicated trade pricing for professional salons, stylists, and hair extension artists. Contact us to set up a trade account — we offer flexible MOQs and preferential pricing for regular orders.',
    },
    {
      question: 'What is your minimum order quantity (MOQ)?',
      answer:
        'Our MOQ varies by product type. Clip-In sets start from 1 unit. Tape-In, Nano Ring, and K-Tip products typically start from 10-20 strands per order. We offer flexible MOQs for trade accounts — contact us to discuss.',
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Yes. We ship throughout the UK and Europe. International shipping is available to most countries. Shipping costs and delivery times vary by destination.',
    },
    {
      question: 'How do I apply for a trade account?',
      answer:
        "Contact us via email at hello@dshairbeauty.co.uk or DM us on Instagram @d.shairbeauty. We'll set up your account with trade pricing and provide a dedicated account manager.",
    },
    {
      question: 'What is your returns policy?',
      answer:
        'Due to the nature of hair products, we cannot accept returns on opened or used items. However, if there is a quality issue with your order, please contact us within 7 days and we will resolve it.',
    },
    // ── New FAQs (9-24) ─────────────────────────────────────────────
    {
      question: 'How long do hair extensions last?',
      answer:
        'Longevity depends on the method: Clip-In sets last 6-12 months with proper care, Tape-In lasts 6-8 weeks per install (tape is reusable), Nano Rings last 8-12 weeks, K-Tip lasts 3-5 months, and Weft installations last 6-8 weeks per install. Proper aftercare is the key to maximising lifespan.',
    },
    {
      question: 'Can I swim or exercise with hair extensions?',
      answer:
        'Yes, but extra care is needed. Always braid or tie hair back before swimming to prevent tangling. Rinse hair immediately after swimming to remove chlorine or salt. For exercise, tie hair up and use a gentle dry shampoo between washes.',
    },
    {
      question: 'How do I wash and care for hair extensions?',
      answer:
        'Use sulfate-free, paraben-free shampoo and conditioner. Wash 2-3 times per week in lukewarm water. Gently massage the scalp — never rub the hair lengths. Pat dry with a towel (never rub) and apply a leave-in conditioner before air-drying or heat-styling.',
    },
    {
      question: 'Can hair extensions be heat-styled?',
      answer:
        'Yes. All D.S HAIR extensions are 100% Remy human hair and can be heat-styled up to 180°C. We recommend always using a heat protectant spray to maximise the hair\'s lifespan.',
    },
    {
      question: 'Do you offer colour matching services?',
      answer:
        'Yes. We offer free colour matching consultations for registered trade salons in Greater Manchester. For other areas, we offer virtual colour matching via WhatsApp or email — simply send us a photo in natural daylight.',
    },
    {
      question: 'What is the difference between Remy and non-Remy hair?',
      answer:
        'Remy hair has intact, aligned cuticles — it tangles minimally and looks natural. Non-Remy hair has had the cuticles stripped away with acid (often coated in silicone to look shiny temporarily). After 3-5 washes the silicone washes off and the hair becomes dry and prone to matting. Always choose Remy.',
    },
    {
      question: 'Can I dye or tone my hair extensions?',
      answer:
        'Yes. Because our extensions are 100% Remy human hair, they can be toned or coloured by a professional stylist. We recommend doing a strand test first. Do not lighten extensions more than 1-2 shades at a time to avoid damage.',
    },
    {
      question: 'How do I store hair extensions when not in use?',
      answer:
        'Store clip-in sets and ponytails on a dedicated hanger or in a velvet storage bag to prevent tangling and dust. Keep them in a cool, dry place away from direct sunlight. We supply premium velvet storage bags — ask your trade account manager.',
    },
    {
      question: 'Do you offer training or certification for stylists?',
      answer:
        'Yes. We run regular hands-on training sessions at our Manchester studio covering all extension methods. Trade account holders get priority booking and discounted training rates. Contact us to see the upcoming schedule.',
    },
    {
      question: 'What is the difference between nano rings and micro rings?',
      answer:
        'Nano rings are approximately 2-3mm (the smallest attachment available), making them virtually invisible and ideal for fine or thinning hair. Micro rings are slightly larger (4-5mm) and better suited for medium-to-thick hair. Both are non-damaging and reusable.',
    },
    {
      question: 'Can men wear hair extensions?',
      answer:
        'Absolutely. Hair toppers and fringe extensions are popular solutions for men with thinning crowns or receding hairlines. They clip in discreetly and blend with existing hair for a completely natural look. Many of our Manchester salon partners offer this service to male clients.',
    },
    {
      question: 'Do you offer volume discounts for large orders?',
      answer:
        'Yes. We offer tiered pricing for bulk orders — the more you order, the lower your per-unit cost. For salon chains or distributors, we also offer dedicated account management and exclusive territory pricing. Contact us to discuss your requirements.',
    },
    {
      question: 'Are your hair extensions suitable for sensitive scalps?',
      answer:
        'Yes. All our extensions use 100% human hair with no synthetic coatings. For clients with very sensitive scalps, we recommend nano rings (no glue, no heat) or clip-in sets (no permanent attachment). Always do a patch test if the client has known sensitivities.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept bank transfer, credit/debit card, and PayPal. For approved trade accounts, we also offer 30-day net payment terms. Contact us to set up your trade account with payment terms that work for your salon.',
    },
    {
      question: 'Can I order samples before placing a large order?',
      answer:
        'Absolutely. We offer sample packs for all extension methods so you can assess the quality, colour, and texture before committing to a full order. Trade account holders receive sample packs at cost price.',
    },
    {
      question: 'Do you supply private label / custom packaging?',
      answer:
        'Yes. For salon chains and distributors, we offer private label services including custom packaging, branded colour rings, and exclusive colour blends. Minimum order quantities apply. Contact our trade team to discuss your branding requirements.',
    },
  ]

  return (
    <>
      <FaqJsonLd faqs={faqs} />
      {children}
    </>
  )
}
