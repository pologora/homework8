import Book from "../Book/Book";
import style from "./BooksList.module.css";
import { Book as BookClass } from "../../Models/Book";

const BooksList = ({ books, getBooks }) => {
  const elements = books.map((book) => {
    return (
      <li key={book.id}>
        <Book book={new BookClass(book)} getBooks={getBooks} />
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
