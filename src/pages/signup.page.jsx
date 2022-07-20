import { useState } from 'react'
import {
  googleLoginWithPopup,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../lib/firebase/firebase.lib'
import { useAuth } from '../contexts/auth/auth.context'

const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')

  const { setCurrentUser } = useAuth()

  const googleLogin = async () => {
    const { user } = await googleLoginWithPopup()
    setCurrentUser(user)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      setCurrentUser(user)
    } catch (err) {
      alert(err.message)
    }

    setDisplayName('')
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
        <h3 className="mb-5 text-primary">Signup</h3>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
        <input
          className="form-control mb-3"
          type="email"
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
        <input className="btn btn-dark mb-3" type="submit" value="Signup" />
        <hr />
        <button
          className="btn btn-primary my-4"
          type="button"
          onClick={googleLogin}
        >
          Signup With Google
        </button>
      </form>
    </div>
  )
}

export default SignUpPage
