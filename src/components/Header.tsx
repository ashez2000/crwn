import Link from 'next/link'
import Image from 'next/image'

import SignOut from './SignOut'
import { getCurrentUser } from '@/utils/auth.utils'

export default async function Header() {
  const user = getCurrentUser()

  return (
    <header className="m-5">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <Link href="/">
            <Image src="/crwn.svg" alt="crwn logo" width="48" height="48" />
          </Link>
        </div>
        <nav className="nav">
          <Link className="nav-link" href="/checkout">
            Checkout
          </Link>

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
        </nav>
      </div>
    </header>
  )
}
