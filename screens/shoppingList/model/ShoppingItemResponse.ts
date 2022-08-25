export class ShoppingItemResponse {
  id: String
  description: String
  status: String
  amount: Number

  constructor(id: String, description: String, status: String, amount: Number) {
    this.id = id;
    this.description = description;
    this.status = status;
    this.amount = amount;
  }
}
