import { Product } from '@prisma/client'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return <div>{product.name}</div>
}
