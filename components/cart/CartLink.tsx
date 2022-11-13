import { View, Text } from "react-native";
import { useAppSelector } from "../../hooks/hooks";
import { getNumItems } from "../../redux/cartSlice";

export function CartLink() {
  const numItems = useAppSelector(getNumItems);

  return (
    <View>
      <Text>🛒&nbsp;&nbsp;{numItems}</Text>
    </View>
  );
}
