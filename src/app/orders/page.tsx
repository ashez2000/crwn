import { getAuthSession } from '@/lib/next-auth'
import { db } from '@/lib/prisma'

export default async function Orders() {
  const session = await getAuthSession()

  if (!session) {
    return <div>Access Denied</div>
  }

  const orders = await db.order.findMany({
    where: {
      userId: session.user.id,
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
