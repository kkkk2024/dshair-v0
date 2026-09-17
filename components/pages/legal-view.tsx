import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import type { LegalDoc } from "@/lib/legal-content"

export function LegalView({ doc }: { doc: LegalDoc }) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="border-b bg-secondary">
            <div className="container px-4 md:px-6 py-12 md:py-16">
              <div className="max-w-3xl">
                <h1 className="font-serif text-3xl md:text-4xl font-medium mb-4">{doc.title}</h1>
                <p className="text-muted-foreground text-lg leading-relaxed">{doc.intro}</p>
                <p className="text-sm text-muted-foreground mt-6">{doc.updated}</p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto flex flex-col gap-10">
                {doc.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="font-serif text-xl md:text-2xl font-medium mb-4">
                      {section.heading}
                    </h2>
                    {section.paragraphs?.map((p, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed mb-3">
                        {p}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="flex flex-col gap-2.5 mt-1">
                        {section.bullets.map((b, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                            <span aria-hidden="true" className="text-accent select-none">
                              &#8226;
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
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
