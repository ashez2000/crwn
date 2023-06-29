'use client'

import { useCart } from '@/context/CartContext'

export default function CartCount() {
  const { cartItems } = useCart()
  const count = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  return <span>{count}</span>
}
