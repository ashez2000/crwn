'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function SignOut() {
  const router = useRouter()

  const handleSignOut = async () => {
    await axios.post('/api/auth/sign-out')
    router.refresh()
  }

  return (
    <button className="nav-link" onClick={handleSignOut}>
      Sign Out
    </button>
  )
}
