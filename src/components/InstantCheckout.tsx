'use client'

import axios from 'axios'
import { Product } from '@prisma/client'
import Button from 'react-bootstrap/Button'

type Props = {
  products: Product[]
}

export default function InstantCheckout(props: Props) {
  const { products } = props

  const handleCheckout = async () => {
    try {
      const { data } = await axios.post('/api/checkout', {
        products,
        total: products.reduce((acc, item) => acc + item.price, 0),
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
