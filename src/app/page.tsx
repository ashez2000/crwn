import { db } from '@/lib/prisma'
import ProductCard from '@/components/product-card'

type Props = {}

export default async function RootPage({}: Props) {
  const products = await db.product.findMany()

  return (
    <div>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
