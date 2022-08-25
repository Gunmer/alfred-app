export class ShoppingItem {
  id: String;
  name: String;
  isPurchased: Boolean;

  constructor(id: String, name: String, isPurchased: Boolean) {
    this.id = id;
    this.name = name;
    this.isPurchased = isPurchased;
  }
}
