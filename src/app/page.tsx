import Link from 'next/link'

import { db } from '@/lib/prisma'
import ProductCard from '@/components/product-card'

type Props = {}

export default async function RootPage({}: Props) {
  const products = await db.product.findMany()

  return (
    <>
      <nav className="mb-3">
        <Link href="/cart">cart</Link>
      </nav>
      <div>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  )
}
