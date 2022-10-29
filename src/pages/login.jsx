import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import {
  googleLoginWithPopup,
  signInAuthUserWithEmailAndPassword,
} from '../lib/firebase/firebase.lib'
import MainLayout from '../layouts/MainLayout'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const googleLogin = async () => {
    await googleLoginWithPopup()
    router.push('/')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
    } catch (err) {
      alert(err.message)
    }

    setEmail('')
    setPassword('')

    router.push('/')
  }

  return (
    <MainLayout>
      <div className="col-4 mx-auto">
        <div>
          <h3 className="fw-bold">Login</h3>
        </div>
        <Form onSubmit={handleSubmit}>
          {/* email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          {/* password */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <p className="text-center text-gray-500 mt-3">
          Dont have an account?{` `}
          <Link href="/signup">
            <a className="text-yellow-500">Signup</a>
          </Link>
        </p>
      </div>
    </MainLayout>
  )
}

export default LoginPage
