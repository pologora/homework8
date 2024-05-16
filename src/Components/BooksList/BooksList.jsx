import Book from "../Book/Book";
import style from "./BooksList.module.css";

const BooksList = ({ books }) => {
  const elements = books.map((book) => {
    return (
      <li key={book.id}>
        <Book book={book} />
      </li>
    );
  });

  return (
    <div className={style.booksListContainer}>
      <ul className={style.booksList}>{elements}</ul>
    </div>
  );
};

export default BooksList;
