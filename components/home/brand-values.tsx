import { Truck, RefreshCw, Award, HeartHandshake } from "lucide-react"

const values = [
  {
    icon: Truck,
    title: "Free UK Delivery",
    description: "Free standard delivery on all orders over £175",
  },
  {
    icon: RefreshCw,
    title: "30-Day Returns",
    description: "Easy returns within 30 days of purchase",
  },
  {
    icon: Award,
    title: "100% Remy Hair",
    description: "Premium quality, ethically sourced human hair",
  },
  {
    icon: HeartHandshake,
    title: "Expert Support",
    description: "Dedicated team ready to help you find your perfect match",
  },
]

export function BrandValues() {
  return (
    <section className="py-12 border-y bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-3">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="font-medium mb-1">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
