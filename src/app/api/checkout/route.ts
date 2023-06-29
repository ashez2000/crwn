import { db } from '@/lib/prisma'
import { getCurrentUser } from '@/utils/auth.utils'
import { Product } from '@prisma/client'

export async function POST(req: Request) {
  const user = getCurrentUser()

  if (!user) {
    return new Response(null, { status: 401 })
  }

  const { total, products } = (await req.json()) as {
    total: number
    products: Product[]
  }

  const order = await db.order.create({
    data: {
      total,
      products: products.map((product) => product.id),
      userId: user.id,
    },
  })

  return new Response(JSON.stringify(order), { status: 201 })
}
