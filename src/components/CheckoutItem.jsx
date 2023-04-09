import { useCart } from '../context/cart.context';

export default function CheckoutItem({ item }) {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="border p-3">
      <h2>{item.name}</h2>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.price * item.quantity}</p>

      <div className="btn-group btn-group-sm">
        <button className="btn btn-primary" onClick={() => addToCart(item)}>
          Add
        </button>
        <button
          className="btn btn-danger"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
