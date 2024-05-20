import { createContext, useContext, useState } from "react";
import { Cart } from "../Models/Cart";

// Create a context for the cart
const CartContext = createContext(null);

// Cart context provider component
export const CartContextProvider = ({ children }) => {
  // Initialize the cart state with a new Cart instance
  const [cart] = useState(new Cart());

  // Function to add a book to the cart
  const addToCart = (book) => {
    cart.addBook(book);
  };

  // Function to change the quantity of a book in the cart
  const changeQuantity = (book, quantity) => {
    cart.changeQuantity(book, quantity);
  };

  // Function to remove a book from the cart
  const removeFromCart = (book) => {
    cart.removeBook(book);
  };

  // Function to clear all books from the cart
  const clearCart = () => {
    cart.clearCart();
  };

  // Provide cart context to the child components
  return (
    <CartContext.Provider value={{ cart, clearCart, addToCart, changeQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error(`Missing context data!`);
  }

  return ctx;
};
