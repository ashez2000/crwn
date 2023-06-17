import { db } from '@/db/conn'

export default async function Products() {
    const products = await db.product.findMany()

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}
