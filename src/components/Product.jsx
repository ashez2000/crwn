import { useCart } from '../context/cart.context';

export default function Product({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-3">
      <h5>{product.name}</h5>
      <h6 className="text-muted">Price: ${product.price}</h6>

      <button
        className="btn btn-primary btn-sm"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
