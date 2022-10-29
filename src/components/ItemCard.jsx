import { useDispatch } from 'react-redux'
import { addItemToCart } from '../store/cart/cart.slice'

const ItemCard = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <div className="border border-primary">
      <div
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <div>
        <div className="flex justify-between mb-3 text-xl">
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
        <button onClick={() => dispatch(addItemToCart(item))}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ItemCard
