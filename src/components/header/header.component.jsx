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
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/crwn.svg"
              alt="crwn logo"
              width="28"
              className="mb-2 ms-2 d-inline-block"
            />
            <span className="ms-2 text-dark">Crwn</span>
          </Link>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                Cart
                <span className="badge mx-1 text-primary">
                  {cartItemsCount ? cartItemsCount : null}
                </span>
              </Link>
            </li>

            {!currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}

            {!currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <span className="nav-link cursor-pointer" onClick={signOutUser}>
                  Signout
                </span>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
