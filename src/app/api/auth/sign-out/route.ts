import { cookies } from 'next/headers'

export async function POST(req: Request) {
  cookies().set('token', '')
  return new Response(null, { status: 200 })
}
