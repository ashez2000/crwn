import { db } from '@/lib/prisma'
import { getCurrentUser } from '@/utils/auth.utils'

export default async function Orders() {
  const currentUser = getCurrentUser()

  if (!currentUser) {
    return <div>Access Denied</div>
  }

  const orders = await db.order.findMany({
    where: {
      userId: currentUser.id,
    },
  })

  return (
    <div>
      <h1>Orders</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>${order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
