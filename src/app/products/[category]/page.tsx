import Product from '@/components/product/ProductItem'
import { db } from '@/lib/prisma'

type Props = {
  params: { category: string }
}

export default async function Category({ params }: Props) {
  const products = await db.product.findMany({
    where: {
      category: params.category,
    },
  })

  return (
    <div>
      <h1>{params.category}</h1>
      <div className="row row-cols-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
