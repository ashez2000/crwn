import { CartItem } from '@/context/CartContext'
import { db } from '@/lib/prisma'
import { getCurrentUser } from '@/utils/auth.utils'

export async function POST(req: Request) {
  const user = getCurrentUser()
  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }

  const body = await req.json()
  const { items } = body as { items: CartItem[] }

  const order = await db.order.create({
    data: {
      userId: user.id,
    },
  })

  await db.cartItem.createMany({
    data: items.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      productId: item.id,
      orderId: order.id,
    })),
  })

  return new Response(JSON.stringify(order), { status: 201 })
}
