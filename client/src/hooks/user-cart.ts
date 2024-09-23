import { useAtom } from 'jotai'
import { Product } from '@prisma/client'
import { cartAtom } from '@/atoms/cart-atom'

export function useCart() {
  const [cart, setCart] = useAtom(cartAtom)

  function addToCart(product: Product) {
    setCart([...cart, { product, quantity: 1 }])
  }

  function removeFromCart(product: Product) {
    setCart(cart.filter(c => c.product.id !== product.id))
  }

  function clearCart() {
    setCart([])
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  }
}
