'use client'

import CheckoutItem from '@/components/CheckoutItem'
import { useCart } from '@/context/CartContext'
import InstantCheckout from '@/components/InstantCheckout'

export default function Checkout() {
  const { cart } = useCart()

  if (cart.length === 0)
    return (
      <div>
        <h3 className="text-center">Your cart is empty</h3>
      </div>
    )

  return (
    <div>
      <h1>Your cart</h1>
      <div className="row row-cols-4">
        {cart.map((item) => (
          <CheckoutItem key={item.id} product={item} />
        ))}
      </div>

      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <h4>Total: $ {cart.reduce((acc, item) => acc + item.price, 0)}</h4>
        <InstantCheckout products={cart} />
      </div>
    </div>
  )
}
