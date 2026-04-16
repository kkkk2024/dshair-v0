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
        'We offer five professional extension methods: Clip-In (DIY-friendly, no commitment), Tape-In (semi-permanent, 6-8 weeks), Nano Ring (ultra-small bonds for fine hair), K-Tip / Keratin Bond (longest-lasting, 3-5 months), and Butterfly Weft (ultra-flat weft for volume). All are 100% Remy human hair.',
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
  ]

  return (
    <>
      <FaqJsonLd faqs={faqs} />
      {children}
    </>
  )
}
