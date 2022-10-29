import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'

import { addItemToCart } from '../store/cart/cart.slice'

const ProductCard = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <div className="border border-primary mb-3">
      <div
        style={{
          backgroundImage: `url(${item.imageUrl})`,
          height: '200px',
        }}
      />
      <div className="p-3">
        <div className="d-flex justify-content-between">
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
        <Button variant="primary" onClick={() => dispatch(addItemToCart(item))}>
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
