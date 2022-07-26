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
  const dispatch = useDispatch()

  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  if (cartItems.length === 0) {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-5 text-primary">Your cart is empty</h3>
        <Link to="/shop" className="btn btn-dark mb-3">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <table className="table mb-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>
                    <span
                      className="btn btn-secondary me-4"
                      onClick={() => dispatch(addItemToCart(item))}
                    >
                      +
                    </span>
                    {item.quantity}
                    <span
                      className="btn btn-secondary ms-4"
                      onClick={() => dispatch(removeItemFromCart(item))}
                    >
                      -
                    </span>
                  </td>
                  <td>$ {item.price}</td>
                  <td
                    className="text-danger cursor-pointer"
                    onClick={() => dispatch(clearItemFromCart(item))}
                  >
                    remove
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card col-4 p-2">
          <h3 className="mt-3">Total: ${cartTotal}</h3>
          <PaymentForm />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
