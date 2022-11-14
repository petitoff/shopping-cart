import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Products } from "../components/products/Products";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

export const AppBottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Products" component={Products} />
    </BottomTab.Navigator>
  );
};
