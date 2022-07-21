import { createContext, useState, useEffect, useContext } from 'react'
import { addCartItem, removeCartItem, clearCartItem } from './cart.utils'

const CartContext = createContext({
  cartItems: [],
  cartCount: 0,
})

export const useCart = () => useContext(CartContext)

export const CollectionProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
  }

  const value = {
    cartItems,
    cartCount,
    cartTotal,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
