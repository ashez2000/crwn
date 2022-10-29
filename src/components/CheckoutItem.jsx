import { useDispatch } from 'react-redux'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../store/cart/cart.slice'

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch()

  return (
    <div className="d-flex">
      <Image
        thumbnail
        rounded
        src={cartItem.imageUrl}
        alt="Item image"
        width={150}
      />
      <div className="ms-3">
        <div>
          <h4>Item : {cartItem.name}</h4>
          <p>Quantity : {cartItem.quantity}</p>
          <p>Price : ${cartItem.price}</p>
        </div>
        <ButtonGroup>
          <Button
            variant="secondary"
            className="px-2 py-1 bg-slate-300 rounded-lg"
            onClick={() => dispatch(clearItemFromCart(cartItem))}
          >
            clear
          </Button>
          <Button
            variant="secondary"
            className="px-2 py-1 bg-slate-300 rounded-lg"
            onClick={() => dispatch(addItemToCart(cartItem))}
          >
            increase
          </Button>
          <Button
            variant="secondary"
            className="px-2 py-1 bg-slate-300 rounded-lg"
            onClick={() => dispatch(removeItemFromCart(cartItem))}
          >
            decrease
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default CheckoutItem
