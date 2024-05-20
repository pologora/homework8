import { axiosInstance } from "./axiosInstance";

export async function getAllBooks() {
  const { data } = await axiosInstance.get("/books");

  return data;
}

export async function createBook(data) {
  console.log(data);
  const result = await axiosInstance.post("/books", data);

  return result;
}

export async function deleteBook(id) {
  const result = await axiosInstance.delete(`/books/${id}`);
  return result;
}
