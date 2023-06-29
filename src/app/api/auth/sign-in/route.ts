import jwt from 'jsonwebtoken'
import argon from 'argon2'
import { cookies } from 'next/headers'

import { db } from '@/lib/prisma'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = await db.user.findUnique({ where: { email } })
  if (!user) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 400,
    })
  }

  const valid = await argon.verify(user.password, password)
  if (!valid) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 400,
    })
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!)
  cookies().set('token', token)

  return new Response(null, { status: 201 })
}
