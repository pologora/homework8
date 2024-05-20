import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import CartContainer from "./Components/Cart/CartContainer.jsx";
import Order from "./Components/Order/Order.jsx";
import ContextsWrapper from "./ContextsWrapper/ContextsWrapper.jsx";
import User from "./Components/User/User.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import CreateBook from "./Components/Book/CreateBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/cart",
        element: <CartContainer />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/books/create",
        element: <CreateBook />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextsWrapper>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ContextsWrapper>
  </React.StrictMode>
);
