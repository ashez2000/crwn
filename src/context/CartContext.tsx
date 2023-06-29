'use client'

import { Product } from '@prisma/client'
import { createContext, useState, useContext, useEffect } from 'react'

export type CartItem = Product & { quantity: number }

type CartContextType = {
  cartItems: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      setCartItems(JSON.parse(cart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product: Product) => {
    const exist = cartItems.find((item) => item.id === product.id)
    if (exist) {
      const newCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      setCartItems(newCart)
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (id: string) => {
    const exist = cartItems.find((item) => item.id === id)
    if (exist) {
      if (exist.quantity === 1) {
        clearFromCart(id)
      } else {
        const newCart = cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        setCartItems(newCart)
      }
    }
  }

  const clearFromCart = (id: string) => {
    const newCart = cartItems.filter((item) => item.id !== id)
    setCartItems(newCart)
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
