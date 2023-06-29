import { db } from '@/lib/prisma'
import ProductItem from '@/components/product/ProductItem'

export default async function Products() {
  const products = await db.product.findMany()

  return (
    <div>
      <h1>Products</h1>
      <div className="row row-cols-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
