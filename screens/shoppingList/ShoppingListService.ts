import { deleteRequest, getRequest, postRequest, putRequest } from '../../commons/HttpClient';
import { ShoppingItem } from './model/ShoppingItem';
import { ShoppingItemResponse } from './model/ShoppingItemResponse';
import { ShoppingListResponse } from './model/ShoppingListResponse';


const mapShoppingItem = (item: ShoppingItemResponse): ShoppingItem => {
  return new ShoppingItem(
      item.id,
      item.description,
      item.status == 'PURCHASED',
  );
};

const mapShoppingItemResponse = (item: ShoppingItem): ShoppingItemResponse => {
  return new ShoppingItemResponse(
      item.id,
      item.name,
      item.isPurchased ? 'PURCHASED' : 'PENDING',
      1,
  );
};

export const getShoppingItems = async (listId: String): Promise<ShoppingItem[]> => {
  const shoppingList = await getRequest<ShoppingListResponse>(`/shopping-list/${listId}`);
  return shoppingList.items.map(mapShoppingItem);
};

export const addShoppingItem = async (listId: String, name: String): Promise<ShoppingItem> => {
  const item = await postRequest<ShoppingItemResponse>(`/shopping-list/${listId}/item`, {description: name});
  return mapShoppingItem(item);
};

export const updateShoppingItem = async (listId: String, item: ShoppingItem): Promise<ShoppingItem> => {
  const body = mapShoppingItemResponse(item);
  const updatedItem = await putRequest<ShoppingItemResponse>(`/shopping-list/${listId}/item/${item.id}`, body);
  return mapShoppingItem(updatedItem);
};

export const deleteShoppingItem = async (listId: String, itemId: String) => {
  await deleteRequest(`/shopping-list/${listId}/item/${itemId}`);
};

export const addItemInTopList = (item: ShoppingItem, list: ShoppingItem[]) => {
  return [item, ...list]
}

export const addItemInBottomList = (item: ShoppingItem, list: ShoppingItem[]) => {
  return [...list, item]
}

export const removeItemFromList = (item: ShoppingItem, list: ShoppingItem[]) => {
  return list.filter(it => it.id !== item.id);
}
