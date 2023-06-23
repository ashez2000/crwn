'use client'

import { signOut } from 'next-auth/react'

export default function SignOut() {
  return (
    <button className="nav-link" onClick={() => signOut()}>
      Sign Out
    </button>
  )
}
