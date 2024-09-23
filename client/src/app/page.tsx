import axios from 'axios'
import ProductCard from '@/components/product-card'

type Props = {}

export default async function RootPage({}: Props) {
  const { data: products } = await axios.get('http://localhost:3001/products')

  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        {products.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  )
}
