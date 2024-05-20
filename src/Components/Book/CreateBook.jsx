import { useNavigate } from "react-router-dom";
import style from "./Book.module.css";
import { useState } from "react";
import { createBook } from "../../api/booksApi";

const defaulFormValues = {
  title: "",
  author: "",
  quantity: 0,
  price: 0,
  format: "",
  fileSize: 0,
};

const CreateBook = () => {
  const navigate = useNavigate();
  const hadleBackClick = () => navigate("/");
  const [data, setData] = useState(defaulFormValues);
  const [error, setError] = useState(false);

  const clearForm = () => {
    setData(defaulFormValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(false);

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createBook(data);
      console.log(result);
      clearForm();
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className={style.createContainer}>
      {error && <p>Unknown error</p>}
      <button onClick={hadleBackClick}>Back</button>
      <div className={style.formContainer}>
        <h2>Create a book</h2>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.inputContainer}>
            <label htmlFor="title">Title*</label>
            <input type="text" id="title" name="title" required onChange={handleChange} value={data.title} />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="author">Author*</label>
            <input type="text" id="author" name="author" required onChange={handleChange} value={data.author} />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="quantity">Quantity*</label>
            <input type="number" id="quantity" name="quantity" required onChange={handleChange} value={data.quantity} />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="price">Price*</label>
            <input type="text" id="price" name="price" required onChange={handleChange} value={data.price} />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="format">Format</label>
            <input type="text" id="format" name="format" onChange={handleChange} value={data.format} />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="fileSize">File size</label>
            <input type="number" id="fileSize" name="fileSize" onChange={handleChange} value={data.fileSize} />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};
export default CreateBook;
