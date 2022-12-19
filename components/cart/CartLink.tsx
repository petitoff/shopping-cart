import { View, Text } from "react-native";
import { useAppSelector } from "../../hooks/hooks";
import { getMemoizedNumItems } from "../../redux/cartSlice";
export function CartLink() {
  const numItems = useAppSelector(getMemoizedNumItems);

  return (
    <View>
      <Text>🛒&nbsp;&nbsp;{numItems ? numItems : "Cart"}</Text>
    </View>
  );
}
