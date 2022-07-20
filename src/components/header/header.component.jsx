import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/auth/auth.context'

const Header = () => {
  const { currentUser } = useAuth()
  console.log(currentUser)

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
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
