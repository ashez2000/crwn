import { cookies } from 'next/headers'
import { db } from '@/lib/prisma'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = await db.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    return Response.json(
      { message: 'Invalid email or password' },
      { status: 400 }
    )
  }

  if (user.password !== password) {
    return Response.json(
      { message: 'Invalid email or password' },
      { status: 400 }
    )
  }

  cookies().set('token', user.id)

  return Response.json({ user }, { status: 200 })
}
