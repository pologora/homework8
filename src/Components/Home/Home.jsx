import BooksList from "../BooksList/BooksList";
import { useEffect, useState } from "react";
import { getAllBooks } from "../../api/booksApi";
import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleCreateClick = () => navigate("/books/create");
  const getBooks = async () => {
    try {
      setLoading(true);
      const { data } = await getAllBooks();
      setBooks(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Unknow error. Please try again later</div>;
  }

  return (
    <>
      <h3 className={style.title}>Books list</h3>
      <button onClick={handleCreateClick}>Create a book</button>
      <BooksList books={books} getBooks={getBooks} />
    </>
  );
};
export default Home;
