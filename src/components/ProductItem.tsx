type ProductItemProps = {
    product: {
        id: string
        name: string
        price: number
        image: string
    }
}

export default function ProductItem({ product }: ProductItemProps) {
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
            ></div>

            <div className="">
                <h5>{product.name}</h5>
                <h5 className="text-secondary">${product.price}</h5>
            </div>
            <div className="d-grid">
                <button className="btn btn-sm btn-primary">Add to Cart</button>
            </div>
        </div>
    )
}
