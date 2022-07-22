import { createSelector } from '@reduxjs/toolkit'

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumalatedQuantity, cartItem) => {
      return accumalatedQuantity + cartItem.quantity
    }, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((accumalatedQuantity, cartItem) => {
      return accumalatedQuantity + cartItem.quantity * cartItem.price
    }, 0)
  }
)
