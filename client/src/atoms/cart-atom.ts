import { Product } from '@prisma/client'
import { atomWithStorage } from 'jotai/utils'

export type CartItem = {
  product: Product
  quantity: number
}

export const cartAtom = atomWithStorage<CartItem[]>('cart', [])
