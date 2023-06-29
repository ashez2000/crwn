'use client'

import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Button from 'react-bootstrap/Button'

import { useCart, CartItem } from '@/context/CartContext'

type Props = {
  items: CartItem[]
}

export default function InstantCheckout({ items }: Props) {
  const router = useRouter()
  const { clearCart } = useCart()

  const handleCheckout = async () => {
    try {
      await axios.post('/api/checkout', {
        items,
      })

      clearCart()
      toast.success('Checkout successful!')
      router.push('/orders')
    } catch (err: any) {
      if (err.response.data === 'Unauthorized') {
        toast.error('Please sign in to checkout')
        router.push('/auth/sign-in')
      } else {
        toast.error('something went wrong')
      }
    }
  }

  return (
    <Button size="sm" variant="primary" onClick={handleCheckout}>
      Instant Checkout
    </Button>
  )
}
