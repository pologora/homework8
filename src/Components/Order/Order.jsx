import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import { useUserContext } from "../../contexts/UserContext";
import { Order as OrderModel } from "../../Models/Order";
import { useOrdersContext } from "../../contexts/OrdersContext";

const Order = () => {
  const [order, setOrder] = useState(null);
  const { user } = useUserContext();
  const { cart, clearCart } = useCartContext();
  const { addOrder } = useOrdersContext();

  const booksList = cart?.booksAndQuantity.map(([book, quantity]) => {
    return (
      <li key={book.id}>
        <p>
          <span>Title:</span>
          <span>{book.title}</span>
        </p>
        <p>
          <span>Quantity:</span>
          <span>{quantity}</span>
        </p>
      </li>
    );
  });

  const placeNewOrder = () => {
    const order = new OrderModel({ user, cart });
    setOrder(order);
    addOrder(order);
    clearCart();
  };

  if (!order) {
    return (
      <div>
        <h2>Order details</h2>
        <p>
          <span>User:</span>
          <span>{user.name}</span>
          <span>{user.email}</span>
        </p>
        <p>
          <span>Total price:</span>
          <span>{cart.totalPrice}</span>
        </p>
        <ul>{booksList}</ul>
        {user && !cart.isEmpty && <button onClick={placeNewOrder}>Place order</button>}
      </div>
    );
  }

  return <div>Order placed</div>;
};
export default Order;
