import { db } from '@/lib/prisma'
import { getCurrentUser } from '@/utils/auth.utils'

import OrderItems from '@/components/order/OrderItems'

export default async function Orders() {
  const currentUser = getCurrentUser()

  if (!currentUser) {
    return <div>Access Denied</div>
  }

  const orders = await db.order.findMany({
    where: {
      userId: currentUser.id,
    },
    include: {
      items: true,
    },
  })

  return (
    <div>
      <h1>Orders</h1>
      <hr />
      {orders.map((order) => (
        <div className="card p-3" key={order.id}>
          <div className="mb-3">
            Order ID : {order.id} - Total Items : {order.items.length}
          </div>
          <OrderItems items={order.items} />
          <div>
            <span>
              Total Price : $
              {order.items.reduce((acc, item) => acc + item.price, 0)}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
