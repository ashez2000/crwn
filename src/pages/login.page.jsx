import { useState } from 'react'
import { googleLoginWithPopup } from '../lib/firebase/firebase.lib'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const googleLogin = async () => {
    const { user } = await googleLoginWithPopup()
    console.log(user)
  }

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <form className="card p-3" style={{ minWidth: '24rem' }}>
        <h3 className="mb-5 text-primary">Login</h3>
        <input className="form-control mb-3" type="text" placeholder="email" />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="password"
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
