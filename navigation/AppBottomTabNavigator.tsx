import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProductScreen from "../screens/ProductScreen/ProductScreen";
import { View, Text } from "react-native";

export const AppBottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View>
              <Text>🏠</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Products"
        component={ProductScreen}
        options={{
          tabBarIcon: () => (
            <View>
              <Text>⚒</Text>
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
