import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Products } from "../components/products/Products";
import { AppBottomTabNavigator } from "./AppBottomTabNavigator";

export const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="AppBottomTabNavigator"
          component={AppBottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
