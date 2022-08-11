import { useSelector } from 'react-redux'
import Link from 'next/link'

import { selectCartItems, selectCartTotal } from '../store/cart/cart.selector'
import CheckoutItem from '../components/CheckoutItem'

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  if (cartItems.length === 0) {
    return (
      <main className="max-w-4xl mx-auto flex flex-col px-3">
        <h3 className="text-center text-2xl font-semibold mb-3">
          Your cart is empty !
        </h3>
        <Link href="/shop">
          <a className="w-full text-center px-3 py-2 rounded-md bg-yellow-200 font-semibold mb-3">
            Continue Shopping
          </a>
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto px-3">
      <div className="flex flex-col">
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <h3 className="text-xl text-center  font-semibold text-yellow-500 mb-3">
        SubTotal : <span className="text-gray-700">${cartTotal}</span>
      </h3>
    </main>
  )
}

export default CheckoutPage
