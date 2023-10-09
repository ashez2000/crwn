'use client'

import { useCart } from '@/hooks/user-cart'

export default function CartPage() {
  const { cart, removeFromCart } = useCart()

  return (
    <div>
      <div className="border rounded-md p-3 grid grid-cols-5 mb-3">
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Options</p>
      </div>

      <div className="flex flex-col gap-3 mb-3">
        {cart.map(c => (
          <div
            key={c.product.id}
            className="border rounded-md p-3 grid grid-cols-5"
          >
            <p>{c.product.name}</p>
            <p>{c.product.price}</p>
            <p>{c.quantity}</p>
            <p>{c.quantity * c.product.price}</p>
            <button onClick={() => removeFromCart(c.product)}>remove</button>
          </div>
        ))}
      </div>

      <hr className="mb-3" />

      <div>
        Subtotal : $
        {cart.reduce((acc, c) => acc + c.product.price * c.quantity, 0)}
      </div>
    </div>
  )
}
