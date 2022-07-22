import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.slice'

const ItemCard = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <div
      className="d-flex flex-column align-items-center mb-4"
      style={{ maxWidth: '18rem' }}
    >
      <div className="w-100">
        <img
          className="w-100 mb-3"
          src={item.imageUrl}
          alt="item image"
          style={{ objectFit: 'cover', height: '22rem' }}
        />
      </div>
      <div className="d-flex flex-column w-100">
        <p>Name: {item.name}</p>
        <p>Price: ${item.price}</p>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(addItemToCart(item))}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ItemCard
