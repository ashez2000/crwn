import { cookies } from 'next/headers'
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

  cookies().set('token', user.id)

  return Response.json({ user }, { status: 201 })
}
