import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.slice'

const ItemCard = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <div className="mb-14 w-full">
      <div
        className="h-96 w-full bg-cover mb-3 rounded-md overflow-hidden"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div>
        <div className="flex justify-between mb-3 text-xl">
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
        <button
          className="px-3 py-2 text-center font-semibold w-full bg-gray-200 rounded-md"
          onClick={() => dispatch(addItemToCart(item))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ItemCard
