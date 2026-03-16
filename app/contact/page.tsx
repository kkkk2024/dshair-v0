import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us | D.S HAIR & BEAUTY",
  description: "Get in touch with D.S HAIR & BEAUTY. We are here to help with all your hair extension questions.",
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "caro@dshairbeauty.co.uk",
    description: "We aim to respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+44 161 123 4567",
    description: "Mon-Fri 9am-5pm GMT",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Manchester, UK",
    description: "Showroom visits by appointment",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday",
    description: "9:00 AM - 5:00 PM GMT",
  },
]

export default function ContactPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
                Get in Touch
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {"Have a question about our products, need styling advice, or want to become a partner? We'd love to hear from you."}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-secondary rounded-2xl p-6 md:p-8">
                  <h2 className="font-semibold text-xl mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-foreground">{item.content}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
