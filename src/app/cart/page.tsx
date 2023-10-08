'use client'

import { useCart } from '@/hooks/user-cart'

export default function CartPage() {
  const { cart } = useCart()

  return (
    <div>
      {cart.map(c => (
        <div key={c.product.id}>
          <p>{c.product.name}</p>
          <p>{c.quantity}</p>
        </div>
      ))}
    </div>
  )
}
