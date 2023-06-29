import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

export function getCurrentUser() {
  const token = cookies().get('token')?.value

  if (!token) {
    return null
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string
    }

    return { id }
  } catch (error) {
    return null
  }
}
