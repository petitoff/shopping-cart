import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../navigation/types";
import CartView from "../../components/cart/CartView";
import { useNavigation } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "CartScreen">;
const CartScreen = () => {
  const rootNavigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleGoBack = () => {
    rootNavigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <CartView onGoBack={handleGoBack} />
    </SafeAreaView>
  );
};

export default CartScreen;
