"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  color?: string
  length?: string
}

// A single bag line is identified by product + colour + length, so that two
// variants of the same product can be managed independently in the drawer.
const isSameLine = (item: CartItem, id: string, color?: string, length?: string) =>
  item.id === id && item.color === color && item.length === length

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  removeLine: (id: string, color?: string, length?: string) => void
  setLineQuantity: (id: string, color: string | undefined, length: string | undefined, quantity: number) => void
  clearCart: () => void
  itemCount: number
  total: number
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.id === newItem.id &&
          item.color === newItem.color &&
          item.length === newItem.length
      )
      if (existingItem) {
        return prev.map((item) =>
          item.id === existingItem.id &&
          item.color === existingItem.color &&
          item.length === existingItem.length
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      }
      return [...prev, newItem]
    })
    setIsOpen(true)
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => {
    setItems([])
  }

  // Line-scoped helpers: operate on one variant only, leaving other variants of
  // the same product untouched.
  const removeLine = (id: string, color?: string, length?: string) => {
    setItems((prev) => prev.filter((item) => !isSameLine(item, id, color, length)))
  }

  const setLineQuantity = (
    id: string,
    color: string | undefined,
    length: string | undefined,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeLine(id, color, length)
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        isSameLine(item, id, color, length) ? { ...item, quantity } : item
      )
    )
  }

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        removeLine,
        setLineQuantity,
        clearCart,
        itemCount,
        total,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
