import { useDispatch } from 'react-redux'

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../store/cart/cart.slice'

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

export default CheckoutItem
