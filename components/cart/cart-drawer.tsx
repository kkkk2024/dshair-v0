"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, total, isOpen, setIsOpen } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Bag ({items.length} {items.length === 1 ? "item" : "items"})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            <p className="text-muted-foreground">Your bag is empty</p>
            <Button onClick={() => setIsOpen(false)} asChild>
              <Link href="/collections/diy">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.color}-${item.length}`} className="flex gap-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          {item.color && (
                            <p className="text-xs text-muted-foreground">
                              Colour: {item.color}
                            </p>
                          )}
                          {item.length && (
                            <p className="text-xs text-muted-foreground">
                              Length: {item.length}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              {/* Shipping protection upsell */}
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg mb-4">
                <div>
                  <p className="text-sm font-medium">Shipping Protection</p>
                  <p className="text-xs text-muted-foreground">Protect your order from loss or damage</p>
                </div>
                <Button variant="outline" size="sm">
                  Add £2.99
                </Button>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Shipping and taxes calculated at checkout
              </p>

              <Separator className="my-4" />

              <div className="flex flex-col gap-2">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/checkout">Checkout</Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full" onClick={() => setIsOpen(false)}>
                  Continue Shopping
                </Button>
              </div>

              {/* Payment icons placeholder */}
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                <span>We accept:</span>
                <span>Visa</span>
                <span>Mastercard</span>
                <span>PayPal</span>
                <span>Klarna</span>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
