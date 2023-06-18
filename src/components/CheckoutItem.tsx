'use client'

import { useCart } from '@/context/CartContext'
import { Product } from '@prisma/client'

type CheckoutItemProps = {
    product: Product
}

export default function CheckoutItem({ product }: CheckoutItemProps) {
    const { removeFromCart } = useCart()

    return (
        <div className="mb-5">
            <div
                className="mb-3"
                style={{
                    height: 300,
                    backgroundImage: `url('${product.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <div>
                <h5>{product.name}</h5>
                <h5 className="text-secondary">${product.price}</h5>
            </div>

            <div className="d-grid">
                <button
                    className="btn btn-sm btn-primary"
                    onClick={() => removeFromCart(product)}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}
