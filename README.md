# Homework 8

## Application Documentation

This application is built to demonstrate the integration of multiple classes and the use of a REST API to fetch and manipulate data in a seamless manner.

### Classes Used

The application utilizes the following four classes:

1. **Book**
2. **Cart**
3. **Order**
4. **User**

### User Initialization

- The `User` object is instantiated in the user context at render time and is hardcoded for use throughout the entire application.

### Book Fetching and Display

- Books are fetched from the database using a REST API.
- New books objects created in BooksList component
- The fetched books are displayed on the home page.
- On the same page, users can add books to their cart.

### Cart Management

- A new `Cart` is created in the context API to ensure they are accessible throughout the entire application.
- `Cart` object contains User and Book objects
- The `Cart` class methods can be used to:
  - Add a book to the cart.
  - Remove a book from the cart.
  - Change the quantity of books in the cart.
  - Clear the cart.

### Placing an Order

- On the cart page, there is a link labeled "Place an Order".
- This link directs users to the order page, which displays order details and provides an option to place an order.
- Once an order is placed, a new `Order` object is created with the user and book details, and the cart is emptied.

### User Tab

- The User tab shows information about the current user.

## Workflow Overview

1. **Home Page**

   - Fetch and display books from the database.
   - Users can add books to their cart.

2. **Cart Page**

   - Displays the current contents of the cart.
   - Users can modify the cart using methods provided by the `Cart` class.
   - Provides a link to place an order.

3. **Order Page**

   - Displays order details.
   - Allows users to place an order.
   - Upon placing an order, an `Order` object is created, and the cart is cleared.

4. **User Tab**
   - Displays information about the current user.

## Backend:

[code](https://github.com/pologora/backend_library_homework8/blob/main/readme.md)
