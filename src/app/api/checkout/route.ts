import { getAuthSession } from '@/lib/next-auth'
import { db } from '@/lib/prisma'
import { Product } from '@prisma/client'

export async function POST(req: Request) {
  const session = await getAuthSession()

  if (!session) {
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
      userId: session.user.id,
    },
  })

  return new Response(JSON.stringify(order), { status: 201 })
}
