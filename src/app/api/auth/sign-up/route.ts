import argon from 'argon2'
import { db } from '@/lib/prisma'

export async function POST(req: Request) {
  const { name, email, password } = await req.json()
  const hash = await argon.hash(password)

  const user = await db.user.create({
    data: {
      name,
      email,
      password: hash,
    },
  })

  return new Response(JSON.stringify(user), { status: 201 })
}
