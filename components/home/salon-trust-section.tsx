"use client"

const salonImages = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    alt: "Professional hair salon interior",
    caption: "Premium Salon Environments",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    alt: "Hair extension application in progress",
    caption: "Expert Application",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
    alt: "Professional hair stylist at work",
    caption: "Skilled Stylists",
  },
  {
    src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&q=80",
    alt: "Modern salon workspace",
    caption: "Modern Facilities",
  },
]

export function SalonTrustSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#FFFDF9] to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            Trusted by Salons
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            Trusted by Salons Across the UK & Ireland
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            From boutique studios in Liverpool to busy city-centre salons — stylists choose D.S Hair & Beauty for reliable supply and consistent quality.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {salonImages.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-medium text-center">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { num: "19+", label: "Years in Business" },
            { num: "500+", label: "UK & EU Salons Served" },
            { num: "100%", label: "Remy Human Hair" },
            { num: "24h", label: "Dispatch Guarantee" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{stat.num}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground mb-4">
            Ready to join the D.S Hair & Beauty salon network?
          </p>
          <a
            href="/salon-partners"
            className="inline-flex items-center gap-2 bg-[#1a1a2e] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2a2a4e] transition-colors"
          >
            Apply for Trade Account
          </a>
        </div>
      </div>
    </section>
  )
}
