import axios from "axios";

console.log(import.meta.env.VITE_BACKEND_BASE_URL);

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

export { axiosInstance };
