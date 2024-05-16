import BooksList from "../BooksList/BooksList";
import { useState } from "react";
import { books as fetchedBooks } from "../../data/books";

const Home = () => {
  const [books] = useState(fetchedBooks);
  return (
    <>
      <h3>Books list</h3>
      <BooksList books={books} />
    </>
  );
};
export default Home;
