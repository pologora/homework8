import { createContext, useContext, useState } from "react";

const OrdersContext = createContext(null);

export const OrdersContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  return <OrdersContext.Provider value={{ orders, addOrder }}>{children}</OrdersContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useOrdersContext = () => {
  const ctx = useContext(OrdersContext);

  if (!ctx) {
    throw new Error(`Missing context data!`);
  }

  return ctx;
};
