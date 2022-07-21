import { useCart } from '../contexts/cart/cart.context'

const CheckoutPage = () => {
  const {
    cartItems,
    cartTotal,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  } = useCart()

  return (
    <div className="container">
      <table className="table mb-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>
                <span
                  className="btn btn-secondary me-4"
                  onClick={() => addItemToCart(item)}
                >
                  +
                </span>
                {item.quantity}
                <span
                  className="btn btn-secondary ms-4"
                  onClick={() => removeItemFromCart(item)}
                >
                  -
                </span>
              </td>
              <td>$ {item.price}</td>
              <td
                className="text-danger cursor-pointer"
                onClick={() => clearItemFromCart(item)}
              >
                remove
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Total: ${cartTotal}</p>
    </div>
  )
}

export default CheckoutPage
