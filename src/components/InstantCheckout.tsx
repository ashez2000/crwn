'use client'

import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { CartItem } from '@/context/CartContext'

type Props = {
  items: CartItem[]
}

export default function InstantCheckout({ items }: Props) {
  const handleCheckout = async () => {
    try {
      const { data } = await axios.post('/api/checkout', {
        items,
      })

      console.log(data)
    } catch (error) {
      alert('Error on checkout')
      console.log(error)
    }
  }

  return (
    <Button size="sm" variant="primary" onClick={handleCheckout}>
      Instant Checkout
    </Button>
  )
}
