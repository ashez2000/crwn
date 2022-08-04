import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../store/cart/cart.slice'
import { selectCartItems, selectCartTotal } from '../store/cart/cart.selector'

import PaymentForm from '../components/payment-form/payment-form.component'

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  if (cartItems.length === 0) {
    return (
      <main className="max-w-4xl mx-auto flex flex-col px-3">
        <h3 className="text-center text-2xl font-semibold mb-3">
          Your cart is empty !
        </h3>
        <Link
          className="w-full text-center px-3 py-2 rounded-md bg-yellow-200 font-semibold mb-3"
          to="/shop"
        >
          Continue Shopping
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
      <PaymentForm />
    </main>
  )
}

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch()

  return (
    <div className="flex space-x-3 mb-3 p-3 bg-gray-200 rounded-md">
      <img
        className="w-24 rounded-md"
        src={cartItem.imageUrl}
        alt="Item image"
      />
      <div className="space-y-3">
        <div>
          <h4>Item : {cartItem.name}</h4>
          <p>Quantity : {cartItem.quantity}</p>
          <p>Price : ${cartItem.price}</p>
        </div>
        <div className="flex space-x-3 text-xs">
          <button
            className="px-2 py-1 bg-slate-300 rounded-lg"
            onClick={() => dispatch(clearItemFromCart(cartItem))}
          >
            clear
          </button>
          <button
            className="px-2 py-1 bg-slate-300 rounded-lg"
            onClick={() => dispatch(addItemToCart(cartItem))}
          >
            increase
          </button>
          <button
            className="px-2 py-1 bg-slate-300 rounded-lg"
            onClick={() => dispatch(removeItemFromCart(cartItem))}
          >
            decrease
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
