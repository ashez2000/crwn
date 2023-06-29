import jwt from 'jsonwebtoken'
import argon from 'argon2'
import { cookies } from 'next/headers'

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

  const user = await db.user.create({
    data: {
      name,
      email,
      password: hash,
    },
  })

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!)

  cookies().set('token', token)

  return new Response(null, { status: 201 })
}
