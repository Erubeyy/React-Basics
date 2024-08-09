import { useContext } from "react"
import { CartContext } from "../context/cart"

export const useCart = () => {
  const { cart, addToCart, clearCart, removeFromCart } = useContext(CartContext);

  if (cart === undefined) {
    throw new Error('usecart must be used within a Cart Provider');
  }

  return {
    cart,
    addToCart,
    clearCart,
    removeFromCart
  }
}