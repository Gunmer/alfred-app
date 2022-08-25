import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import { HomeScreen } from './screens/home/HomeScreen';
import { LoginScreen } from './screens/login/LoginScreen';
import { RootScreen } from './screens/root/RootScreen';
import { ShoppingListScreen } from './screens/shoppingList/ShoppingListScreen';

type RootStackParamList = {
  Login: undefined;
  Root: undefined;
  Home: undefined;
  ShoppingList: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Root" component={RootScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="ShoppingList" component={ShoppingListScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
  );
}
