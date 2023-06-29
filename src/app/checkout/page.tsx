'use client'

import CartItem from '@/components/cart/CartItem'
import { useCart } from '@/context/CartContext'
import InstantCheckout from '@/components/InstantCheckout'

export default function Checkout() {
  const { cartItems, clearCart } = useCart()

  if (cartItems.length === 0)
    return (
      <div>
        <h3 className="text-center mb-3">Your cart is empty</h3>
      </div>
    )

  return (
    <div>
      <h1 className="mb-3">
        Your cart{' '}
        <span className="btn" onClick={clearCart}>
          clear cart
        </span>
      </h1>
      <div className="row row-cols-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <h4>
          Total : $
          {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </h4>
        <InstantCheckout items={cartItems} />
      </div>
    </div>
  )
}
