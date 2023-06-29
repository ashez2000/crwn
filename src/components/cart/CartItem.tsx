'use client'

import Button from 'react-bootstrap/Button'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { CartItem, useCart } from '@/context/CartContext'
import { Product } from '@prisma/client'

type Props = {
  item: CartItem
}

export default function CartItem({ item }: Props) {
  const { addToCart, removeFromCart, clearFromCart } = useCart()

  return (
    <div className="mb-5">
      <div
        className="mb-3"
        style={{
          height: 300,
          backgroundImage: `url('${item.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-grid gap-3">
          <h5>{item.name}</h5>
          <h5 className="text-secondary">
            ${item.price} x {item.quantity}
          </h5>
        </div>
        <div className="d-grid gap-3">
          <span
            className="px-3 py-1 border border-dark-subtle cursor-pointer"
            onClick={() => addToCart(item)}
          >
            <BiPlus />
          </span>
          <span
            className="px-3 py-1 border border-dark-subtle cursor-pointer"
            onClick={() => removeFromCart(item.id)}
          >
            <BiMinus />
          </span>
        </div>
      </div>

      <div className="d-grid">
        <button
          className="btn btn-sm btn-primary"
          onClick={() => clearFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  )
}
