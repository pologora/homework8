import { useOrdersContext } from "../../contexts/OrdersContext";
import style from "./Orders.module.css";

const Orders = () => {
  const { orders } = useOrdersContext();

  const oredersList = orders.map(({ orderId, user, books, totalPrice }) => {
    return (
      <li key={orderId} className={style.ordersListItem}>
        <p>
          <span>Order id:</span>
          <span>{orderId}</span>
        </p>
        <p>
          <span>Total price:</span>
          <span>{totalPrice}</span>
        </p>
        <p>
          <span>User: </span>
          <span>{user.name}</span>
        </p>
        <h4>Books:</h4>
        <ul>
          {books.map(([book, quantity]) => {
            return (
              <li key={book.tittle}>
                <span>{book.title} - </span>
                <span>{quantity}</span>
              </li>
            );
          })}
        </ul>
      </li>
    );
  });

  return (
    <div>
      <h2>Orders list</h2>
      <ul>{oredersList}</ul>
    </div>
  );
};
export default Orders;
