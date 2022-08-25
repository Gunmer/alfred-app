import { ShoppingItemResponse } from './ShoppingItemResponse';

export class ShoppingListResponse {
  id: String
  items: [ShoppingItemResponse]

  constructor(id: String, items: [ShoppingItemResponse]) {
    this.id = id;
    this.items = items;
  }
}
