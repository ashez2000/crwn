'use client'

import { toast } from 'react-hot-toast'
import { useCart } from '@/context/CartContext'
import { Product } from '@prisma/client'

type Props = {
  product: Product
}

export default function Product({ product }: Props) {
  const { addToCart } = useCart()

  return (
    <div className="mb-5">
      <div
        className="mb-3"
        style={{
          height: 300,
          backgroundImage: `url('${product.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div>
        <h5>{product.name}</h5>
        <h5 className="text-secondary">${product.price}</h5>
      </div>

      <div className="d-grid">
        <button
          className="btn btn-sm btn-primary"
          onClick={() => {
            addToCart(product)
            toast.success(`${product.name} added to cart`)
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
