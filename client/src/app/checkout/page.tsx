'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Props = {}

export default function CheckoutPage({}: Props) {
  const [email, setEmail] = useState('')
  const [card, setCard] = useState('')
  const [name, setName] = useState('')

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl mb-3">Checkout</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          className="border rounded-md px-3 py-2"
          type="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="border rounded-md px-3 py-2"
          type="text"
          placeholder="Name on card"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          className="border rounded-md px-3 py-2"
          type="text"
          placeholder="card"
          value={card}
          onChange={e => setCard(e.target.value)}
        />

        <input
          className="rounded-md px-3 py-2 bg-slate-300"
          type="submit"
          value="pay"
        />
      </form>
    </div>
  )
}
