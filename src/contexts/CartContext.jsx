import { createContext, useContext, useState } from "react";
import { Cart } from "../Models/Cart";

const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart] = useState(new Cart());
  const [, setTick] = useState(0);

  const forceUpdate = () => {
    setTick((oldValue) => oldValue + 1);
  };

  const addToCart = (book) => {
    cart.addBook(book);
    forceUpdate();
  };

  const changeQuantity = (book, quantity) => {
    cart.changeQuantity(book, quantity);
    forceUpdate();
  };

  const removeFromCart = (book) => {
    forceUpdate();
    cart.removeBook(book);
  };

  const clearCart = () => {
    cart.clearCart();
    forceUpdate();
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
