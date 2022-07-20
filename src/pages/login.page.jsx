import { useState } from 'react'
import {
  googleLoginWithPopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../lib/firebase/firebase.lib'
import { useAuth } from '../contexts/auth/auth.context'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setCurrentUser } = useAuth()

  const googleLogin = async () => {
    const { user } = await googleLoginWithPopup()
    createUserDocumentFromAuth(user)
    setCurrentUser(user)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      setCurrentUser(user)
    } catch (err) {
      alert(err.message)
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <form
        className="card p-3"
        style={{ minWidth: '24rem' }}
        onSubmit={handleSubmit}
      >
        <h3 className="mb-5 text-primary">Login</h3>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input className="btn btn-dark mb-3" type="submit" value="Login" />
        <hr />
        <button
          className="btn btn-primary my-4"
          type="button"
          onClick={googleLogin}
        >
          Login With Google
        </button>
      </form>
    </div>
  )
}

export default LoginPage
