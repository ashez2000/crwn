import { Product } from '@prisma/client'
import { atom } from 'jotai'

export type CartItem = {
  product: Product
  quantity: number
}

export const cartAtom = atom<CartItem[]>([])
