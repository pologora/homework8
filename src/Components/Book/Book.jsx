import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import style from "./Book.module.css";
import { deleteBook } from "../../api/booksApi";

const Book = ({ book, getBooks }) => {
  const { cart } = useCartContext();
  const [, setTick] = useState(0);
  const inCart = cart.isBookInCart(book);

  const forseRerender = () => {
    setTick((prev) => prev + 1);
  };

  const handleDelete = async () => {
    try {
      await deleteBook(book.id);
    } catch (error) {
      console.log(error);
    } finally {
      getBooks();
    }
  };

  const addToCart = () => {
    if (book.availability) {
      cart.addBook(book, 1);
    }
    forseRerender();
  };

  const removeFromCart = () => {
    cart.removeBook(book);
    forseRerender();
  };

  return (
    <div className={style.book}>
      <p className={style.bookProperties}>
        <span className={style.bookPropertiesTitle}>Title:</span>
        <span className={style.bookPropertiesValue}>{book.title}</span>
      </p>
      <p className={style.bookProperties}>
        <span className={style.bookPropertiesTitle}>Author:</span>
        <span> {book.author}</span>
      </p>
      <p className={style.bookProperties}>
        <span className={style.bookPropertiesTitle}>Price:</span>
        <span>{book.price}</span>
      </p>
      <p className={style.bookProperties}>
        <span className={style.bookPropertiesTitle}>Availible quantity:</span>
        <span> {book.quantity}</span>
      </p>
      {inCart ? (
        <button className={style.addToCart} onClick={removeFromCart}>
          Remove from cart
        </button>
      ) : (
        <button className={style.addToCart} onClick={addToCart}>
          Add to cart
        </button>
      )}
      <button onClick={handleDelete}>Delete a book</button>
    </div>
  );
};
export default Book;
