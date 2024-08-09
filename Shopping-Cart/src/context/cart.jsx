import { createContext } from "react";
import { CartActions } from "../action/cart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { state, addToCart, removeFromCart, clearCart } = CartActions();

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
