import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import { useState } from "react";
import style from "./CartContainer.module.css";

const CartContainer = () => {
  const { cart } = useCartContext();
  const [, setTick] = useState(0);

  const removeItem = (book) => {
    cart.removeBook(book);
    forseRerender();
  };

  const minusOneProduct = (book) => {
    cart.changeQuantity(book, -1);
    forseRerender();
  };

  const plusOneProduct = (book) => {
    cart.changeQuantity(book, +1);
    forseRerender();
  };

  const booksList = cart?.booksAndQuantity.map(([book, quantity]) => {
    return (
      <li key={book.id} className={style.listItem}>
        <p>
          <span>Title:</span>
          <span className={style.bookTitle}>{book.title}</span>
        </p>
        <p>
          <span>Quantity:</span>
          <span>{quantity}</span>
        </p>
        <div className={style.actionButtonsContainer}>
          <button className={style.actionButton} onClick={() => removeItem(book)}>
            remove item
          </button>
          <button className={style.actionButton} onClick={() => plusOneProduct(book, quantity)}>
            + 1
          </button>
          <button className={style.actionButton} onClick={() => minusOneProduct(book, quantity)}>
            - 1
          </button>
        </div>
      </li>
    );
  });

  const forseRerender = () => {
    setTick((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>{booksList}</ul>
      <Link to="/order">Place an order</Link>
    </div>
  );
};
export default CartContainer;
