'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Props = {}

export default function SignUpPage({}: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      })
      console.log(res.data)
      router.push('/')
    } catch (err) {
      console.error(err)
      alert('Something went worng!')
    }
  }

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl mb-3">Signup</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          className="border rounded-md px-3 py-2"
          type="text"
          placeholder="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="border rounded-md px-3 py-2"
          type="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="border rounded-md px-3 py-2"
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          className="rounded-md px-3 py-2 bg-slate-300"
          type="submit"
          value="signup"
        />
      </form>
    </div>
  )
}
