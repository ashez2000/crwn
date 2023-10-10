import { cookies } from 'next/headers'

export function getAuthPayload() {
  const id = cookies().get('token')
  if (!id) {
    return null
  }

  return { id: id.value }
}
