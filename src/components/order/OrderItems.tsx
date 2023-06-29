type Props = {
  items: Array<{
    id: string
    name: string
    price: number
    quantity: number
  }>
}

export default function OrderItems({ items }: Props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
