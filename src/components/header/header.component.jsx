import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { signOutUser } from '../../lib/firebase/firebase.lib'
import { selectCurrentUser } from '../../store/auth/auth.selector'
import { selectCartItemsCount } from '../../store/cart/cart.selector'

const Header = () => {
  const currentUser = useSelector(selectCurrentUser)
  const cartItemsCount = useSelector(selectCartItemsCount)

  return (
    <header className="mb-3">
      <nav className="p-3 flex justify-between items-center h-24">
        <h1 className="text-xl font-semibold">
          <Link to="/">
            <img
              className="inline w-8 h-8 mb-3 mr-2 "
              src="/crwn.svg"
              alt="crwn logo"
            />
            Crwn
          </Link>
        </h1>
        <ul className="flex space-x-3">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/checkout">Cart</Link>
          </li>
          {currentUser && (
            <li className="cursor-pointer">
              <span onClick={signOutUser}>Logout</span>
            </li>
          )}
          {!currentUser && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
