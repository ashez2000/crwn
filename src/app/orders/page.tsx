import { db } from '@/lib/prisma'
import { getCurrentUser } from '@/utils/auth.utils'

import OrderItems from '@/components/order/OrderItems'

export default async function Orders() {
  const currentUser = getCurrentUser()

  if (!currentUser) {
    return null
  }

  const orders = await db.order.findMany({
    where: {
      userId: currentUser.id,
    },
    include: {
      items: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <div>
      <h1>Orders</h1>
      <hr />
      {orders.map((order) => (
        <div className="card p-3 mb-3" key={order.id}>
          <div className="mb-3">
            <div>Order ID : {order.id}</div>
            <div>Ordered on : {order.createdAt.toString()}</div>
          </div>
          <OrderItems items={order.items} />
          <div>
            <span>
              Total : ${order.items.reduce((acc, item) => acc + item.price, 0)}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
