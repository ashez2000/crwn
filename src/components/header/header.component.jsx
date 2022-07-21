import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/auth/auth.context'
import { signOutUser } from '../../lib/firebase/firebase.lib'

const Header = () => {
  const { currentUser } = useAuth()

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
                <span
                  className="nav-link"
                  onClick={signOutUser}
                  style={{ cursor: 'pointer' }}
                >
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
