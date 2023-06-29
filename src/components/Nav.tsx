import React from 'react'
import Link from 'next/link'

import SignOut from './SignOut'

type Props = {
  user: {
    id: string
  } | null
}

export default function Nav({ user }: Props) {
  return (
    <>
      {!user && (
        <Link className="nav-link" href="/auth/sign-up">
          Sign Up
        </Link>
      )}

      {!user && (
        <Link className="nav-link" href="/auth/sign-in">
          Sign In
        </Link>
      )}

      {user && (
        <Link className="nav-link" href="/orders">
          Orders
        </Link>
      )}

      {user && <SignOut />}
    </>
  )
}
