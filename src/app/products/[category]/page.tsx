import ProductItem from '@/components/ProductItem'
import { db } from '@/db/conn'
import { Product } from '@prisma/client'

export default async function Category({
    params,
}: {
    params: { category: string }
}) {
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
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
