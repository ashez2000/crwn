import { createContext, useContext, useState } from 'react';

const CartContext = createContext({
  items: [],
  addToCart: (item) => {},
  removeFromCart: (id) => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems((cartItems) => {
      const exist = cartItems.find((i) => i.id === newItem.id);
      if (!exist) {
        return [...cartItems, { ...newItem, quantity: 1 }];
      }

      return cartItems.map((i) => {
        if (i.id === newItem.id) {
          return { ...i, quantity: i.quantity + 1 };
        }
        return i;
      });
    });
  };

  const removeFromCart = (id) => {
    setCartItems((cartItems) => {
      const exist = cartItems.find((i) => i.id === id);
      if (exist.quantity === 1) {
        return cartItems.filter((i) => i.id !== id);
      }

      return cartItems.map((i) => {
        if (i.id === id) {
          return { ...i, quantity: i.quantity - 1 };
        }
        return i;
      });
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    items: cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
