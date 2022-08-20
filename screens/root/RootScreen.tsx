import { Button, Center, VStack } from 'native-base';

// @ts-ignore
export const RootScreen = ({navigation}) => {
  const goHome = () => {
    navigation.navigate('Home')
  };
  const goShoppingList = () => {
    navigation.navigate('ShoppingList')
  };
  const goBack = () => {
    navigation.goBack()
  };

  return (
      <Center safeArea w="100%" h="100%" p="8">
        <VStack space="4" w="100%">
          <Button onPress={goHome}>
            Home
          </Button>
          <Button onPress={goShoppingList}>
            Shopping List
          </Button>
          <Button onPress={goBack}>
            Go back
          </Button>
        </VStack>
      </Center>
  );
}
