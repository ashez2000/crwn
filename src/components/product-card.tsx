'use client'

import { Product } from '@prisma/client'
import { useCart } from '@/hooks/user-cart'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart()
  return (
    <div className="card">
      <div className="card-body btn" onClick={() => addToCart(product)}>
        {product.name}
      </div>
    </div>
  )
}
