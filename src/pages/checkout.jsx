import MainLayout from '../layouts/MainLayout';
import CheckoutItem from '../components/CheckoutItem';

import { useCart } from '../context/cart.context';

export default function Checkout() {
  const { items } = useCart();

  return (
    <MainLayout>
      <div className="mb-3">
        <h1 className="text-primary">Checkout</h1>
      </div>
      <div className="d-flex flex-column gap-3 mb-3">
        {items.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
      <div>
        <h2 className="d-flex justify-content-end">
          SubTotal: $
          {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </h2>
      </div>
    </MainLayout>
  );
}
