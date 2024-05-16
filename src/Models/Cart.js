export class Cart {
  #books = new Map();

  addBook(book, quantity) {
    this.#books.set(book, quantity);
  }

  changeQuantity(book, quantity) {
    const quantityInCart = this.#books.get(book);
    const resultQuantity = quantityInCart + quantity;
    const booksInStock = book.quantity;

    if (resultQuantity > booksInStock) return;

    if (resultQuantity <= 0) {
      this.removeBook(book);
    } else {
      this.#books.set(book, resultQuantity);
    }
  }

  removeBook(book) {
    this.#books.delete(book);
  }

  isBookInCart(book) {
    return this.#books.has(book);
  }

  get isEmpty() {
    return this.#books.size === 0;
  }

  get totalPrice() {
    return Array.from(this.#books).reduce((acc, [book, quantity]) => acc + book.price * quantity, 0);
  }

  get booksAndQuantity() {
    const booksArray = Array.from(this.#books);

    return booksArray;
  }

  clearCart() {
    this.#books.clear();
  }
}
