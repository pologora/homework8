export class Book {
  constructor({ title, author, price, quantity, id }) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
    this.id = id;
  }

  get availability() {
    return this.quantity > 0;
  }
}
