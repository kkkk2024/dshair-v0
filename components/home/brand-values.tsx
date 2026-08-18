import { Truck, RefreshCw, Award, HeartHandshake } from "lucide-react"
import { getHomeContent } from "@/lib/i18n/home"
import type { Locale } from "@/lib/i18n/config"

const icons = [Truck, RefreshCw, Award, HeartHandshake]

export function BrandValues({ locale }: { locale: Locale }) {
  const values = getHomeContent(locale).brandValues
  return (
    <section className="py-12 border-y bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => {
            const Icon = icons[i]
            return (
              <div key={value.title} className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium mb-1">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
