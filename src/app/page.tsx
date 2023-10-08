import { db } from '@/lib/prisma'
import ProductCard from '@/components/product-card'

type Props = {}

export default async function RootPage({}: Props) {
  const products = await db.product.findMany()

  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  )
}
