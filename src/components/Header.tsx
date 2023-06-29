import Link from 'next/link'
import Image from 'next/image'

import { getCurrentUser } from '@/utils/auth.utils'
import CartCount from './cart/CartCount'
import Nav from './Nav'

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
            Checkout ({<CartCount />})
          </Link>

          <Nav user={user} />
        </nav>
      </div>
    </header>
  )
}
