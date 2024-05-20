export class Cart {
  #books = new Map();

  /**
   * Add book to cart
   * @param {Book} book
   * @param {number} quantity
   */
  addBook(book, quantity) {
    this.#books.set(book, quantity);
  }

  /**
   * Change book quantity in cart
   * @param {Book} book
   * @param {number} quantity
   */
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

  /**
   *
   * @param {Book} book
   * @returns {boolean}
   */
  isBookInCart(book) {
    return this.#books.has(book);
  }

  /**
   * Get if cart is empty
   */
  get isEmpty() {
    return this.#books.size === 0;
  }

  /**
   * Calculate total cart price
   */
  get totalPrice() {
    return Array.from(this.#books).reduce((acc, [book, quantity]) => acc + book.price * quantity, 0);
  }

  /**
   * Get all books from the cart as an array of arrays like [[book, 2], [book2, 1]]
   */
  get booksAndQuantity() {
    const booksArray = Array.from(this.#books);

    return booksArray;
  }

  clearCart() {
    this.#books.clear();
  }
}
