export class Order {
  static id = 0;
  constructor({ user, cart }) {
    this.user = user;
    this.books = cart.booksAndQuantity;
    this.totalPrice = cart.totalPrice;
    this.orderId = Order.id + 1;
    Order.id++;
  }
}
