import Link from 'next/link'
import { useSelector } from 'react-redux'

import { signOutUser } from '../../lib/firebase/firebase.lib'
import { selectCurrentUser } from '../../store/auth/auth.selector'
import { selectCartItemsCount } from '../../store/cart/cart.selector'

const Header = () => {
  const currentUser = useSelector(selectCurrentUser)
  const cartItemsCount = useSelector(selectCartItemsCount)

  return (
    <header className="mb-3">
      <nav className="p-3 flex justify-between items-center h-24 max-w-4xl mx-auto">
        <h1 className="text-xl text-yellow-500 font-semibold ">
          <Link href="/">Crwn</Link>
        </h1>
        <ul className="flex space-x-3 font-semibold">
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/checkout">Cart</Link>
          </li>
          {currentUser && (
            <li className="cursor-pointer">
              <span onClick={signOutUser}>Logout</span>
            </li>
          )}
          {!currentUser && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
