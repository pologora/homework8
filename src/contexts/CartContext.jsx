import { createContext, useContext, useState } from "react";
import { Cart } from "../Models/Cart";

const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart] = useState(new Cart());

  const addToCart = (book) => {
    cart.addBook(book);
  };

  const changeQuantity = (book, quantity) => {
    cart.changeQuantity(book, quantity);
  };

  const removeFromCart = (book) => {
    cart.removeBook(book);
  };

  const clearCart = () => {
    cart.clearCart();
  };

  return (
    <CartContext.Provider value={{ cart, clearCart, addToCart, changeQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error(`Missing context data!`);
  }

  return ctx;
};
