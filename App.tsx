import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Products } from "./components/products/Products";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Products" component={Products} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
