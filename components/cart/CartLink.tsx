import { View, Text, Pressable } from "react-native";
import { useAppSelector } from "../../hooks/hooks";
import { getMemoizedNumItems } from "../../redux/cartSlice";

interface Props {
  onNavigateToCart: () => void;
}

export function CartLink({ onNavigateToCart }: Props) {
  const numItems = useAppSelector(getMemoizedNumItems);

  return (
    <View>
      <Pressable onPress={onNavigateToCart}>
        <Text>🛒&nbsp;&nbsp;{numItems ? numItems : "Cart"}</Text>
      </Pressable>
    </View>
  );
}
