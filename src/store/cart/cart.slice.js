import { createSlice } from '@reduxjs/toolkit'
import { addCartItem, removeCartItem, clearCartItem } from './cart.utils'

const initialState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems = addCartItem(state.cartItems, action.payload)
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = removeCartItem(state.cartItems, action.payload)
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = clearCartItem(state.cartItems, action.payload)
    },
  },
})

export const { addItemToCart, removeItemFromCart, clearItemFromCart } =
  cartSlice.actions

export default cartSlice.reducer
