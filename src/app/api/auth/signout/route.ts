import { cookies } from 'next/headers'

export async function PUT(req: Request) {
  cookies().delete('token')
  return Response.json({}, { status: 200 })
}
