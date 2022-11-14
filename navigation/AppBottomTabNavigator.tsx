import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Products } from "../components/products/Products";

export const AppBottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="Products" component={Products} />
    </BottomTab.Navigator>
  );
};
