import { Checkbox, HStack, IconButton, MinusIcon } from 'native-base';
import PropTypes from 'prop-types';
import { ShoppingItem } from '../model/ShoppingItem';


// @ts-ignore
export const Item = (props) => {

  const handleCheck = () => {
    let newItem = {...props.item, isPurchased: !props.item.isPurchased};
    if (props.onItemChange) {
      props.onItemChange(newItem);
    }
  };

  const handleRemove = () => {
    if (props.onItemRemove) {
      props.onItemRemove(props.item);
    }
  };

  return (
      <HStack w="100%" justifyContent="space-between" alignItems="center">
        <Checkbox size="lg" value={props.item.id} isChecked={props.item.isPurchased} onChange={handleCheck}>{props.item.name}</Checkbox>
        <IconButton size="lg" colorScheme="trueGray" onPress={handleRemove} icon={<MinusIcon/>}/>
      </HStack>
  )
}

Item.prototype = {
  item: PropTypes.instanceOf(ShoppingItem).isRequired,
  onItemChange: PropTypes.func,
  onItemRemove: PropTypes.func,
}
