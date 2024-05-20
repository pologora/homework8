import { createContext, useContext, useState } from "react";

// Create a context for the orders
const OrdersContext = createContext(null);

// Orders context provider component
export const OrdersContextProvider = ({ children }) => {
  // Initialize the orders state with an empty array
  const [orders, setOrders] = useState([]);

  // Function to add a new order to the orders array
  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  // Provide orders context to the child components
  return <OrdersContext.Provider value={{ orders, addOrder }}>{children}</OrdersContext.Provider>;
};

// Custom hook to use the orders context
// eslint-disable-next-line react-refresh/only-export-components
export const useOrdersContext = () => {
  const ctx = useContext(OrdersContext);

  if (!ctx) {
    throw new Error(`Missing context data!`);
  }

  return ctx;
};
