import { Box, VStack } from 'native-base';
import { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Item } from './componets/Item';
import { ItemInput } from './componets/ItemInput';
import { ShoppingItem } from './model/ShoppingItem';
import { addItemInBottomList, addItemInTopList, deleteShoppingItem, getShoppingItems, removeItemFromList, updateShoppingItem } from './ShoppingListService';


export const ShoppingListScreen = () => {
  const [items, setItems] = useState(Array<ShoppingItem>())
  const shoppingListId = '157f3298-c2cc-45ef-b921-cfecf8054c10'

  useEffect(() => {
    getShoppingItems(shoppingListId)
        .then(setItems)
  }, []);


  const _onItemAdd = (item: ShoppingItem) => {
    setItems(addItemInTopList(item, items));
  };

  const _onItemChange = (item: ShoppingItem) => {
    updateShoppingItem(shoppingListId, item).then(newItem => {
      setItems(prevState => {
        const newItems = removeItemFromList(newItem, prevState);
        if (newItem.isPurchased) {
          return addItemInBottomList(newItem, newItems);
        } else {
          return addItemInTopList(newItem, newItems);
        }
      });
    });
  };

  const _onItemRemove = (item: ShoppingItem) => {
    deleteShoppingItem(shoppingListId, item.id).then(_ => {
      setItems(removeItemFromList(item, items));
    });
  };

  // @ts-ignore
  const _renderItem = (listRenderItem: ListRenderItemInfo<ShoppingItem>) => {
    return <Item item={listRenderItem.item} onItemChange={_onItemChange} onItemRemove={_onItemRemove}/>
  };

  return (
      <VStack w="100%">
        <ItemInput onItemAdd={_onItemAdd} shoppingListId={shoppingListId}/>
        <Box m={8}>
          <FlatList data={items} renderItem={_renderItem}/>
        </Box>
      </VStack>
  );
}
