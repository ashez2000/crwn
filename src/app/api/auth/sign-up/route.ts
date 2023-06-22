import { db } from '@/lib/prisma'

export async function POST(req: Request) {
  const { name, email, password } = await req.json()

  const user = await db.user.create({
    data: {
      name,
      email,
      password,
    },
  })

  return new Response(JSON.stringify(user), { status: 201 })
}
