import { Product } from '@prisma/client'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="card">
      <div
        className="h-[340px] bg-center overflow-hidden rounded-md"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <div>
        {product.name.length > 24
          ? product.name.slice(0, 24) + ' ...'
          : product.name}
      </div>
      <div>
        <button>${product.price} | Add to Cart</button>
      </div>
    </div>
  )
}
