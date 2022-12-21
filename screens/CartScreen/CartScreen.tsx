import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../navigation/types";
import CartView from "../../components/cart/CartView";

type Props = NativeStackScreenProps<RootStackParamList, "CartScreen">;
const CartScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <CartView />
    </SafeAreaView>
  );
};

export default CartScreen;
