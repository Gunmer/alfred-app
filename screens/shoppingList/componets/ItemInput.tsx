import { AddIcon, HStack, IconButton, Input } from 'native-base';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { addShoppingItem } from '../ShoppingListService';


// @ts-ignore
export const ItemInput = (props) => {
  const [itemName, setItemName] = useState('');

  const onItemChange = (value: string) => {
    setItemName(value);
  };

  const handleItemCreation = () => {
    if (itemName == '') {
      return;
    }

    addShoppingItem(props.shoppingListId, itemName)
        .then((item) => {
          if (props.onItemAdd) {
            props.onItemAdd(item);
          }
          setItemName('');
        });
  };

  return (
      <HStack m={6}>
        <Input flex={1} placeholder="what do you want to buy?" size="lg" onChangeText={onItemChange} value={itemName}/>
        <IconButton borderRadius="sm" variant="solid" onPress={handleItemCreation} icon={<AddIcon/>}/>
      </HStack>
  );
};

ItemInput.propTypes = {
  onItemAdd: PropTypes.func,
  shoppingListId: PropTypes.string,
};
