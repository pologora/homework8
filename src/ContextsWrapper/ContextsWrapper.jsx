import { CartContextProvider } from "../contexts/CartContext";
import { OrdersContextProvider } from "../contexts/OrdersContext";
import { UserContextProvider } from "../contexts/UserContext";

const ContextsWrapper = ({ children }) => {
  return (
    <CartContextProvider>
      <OrdersContextProvider>
        <UserContextProvider>{children}</UserContextProvider>
      </OrdersContextProvider>
    </CartContextProvider>
  );
};
export default ContextsWrapper;
