import argon from 'argon2'
import { db } from '@/lib/prisma'

export async function POST(req: Request) {
  const { name, email, password } = await req.json()
  const hash = await argon.hash(password)

  const exist = await db.user.findUnique({ where: { email } })
  if (exist) {
    return new Response(JSON.stringify({ message: 'Email already exist' }), {
      status: 400,
    })
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hash,
    },
  })

  return new Response(null, { status: 201 })
}
