'use client'

import { Product } from '@prisma/client'
import { createContext, useState, useContext, useEffect } from 'react'

type CartContextType = {
    cart: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (product: Product) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextType>({} as CartContextType)

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([])

    useEffect(() => {
        const cart = localStorage.getItem('cart')
        if (cart) {
            setCart(JSON.parse(cart))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product: Product) => {
        const exist = cart.find((item) => item.id === product.id)
        if (!exist) {
            setCart([...cart, product])
        }
    }

    const removeFromCart = (product: Product) => {
        const newCart = cart.filter((item) => item.id !== product.id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
