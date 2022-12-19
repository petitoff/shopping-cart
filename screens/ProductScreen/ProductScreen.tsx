import { SafeAreaView } from "react-native-safe-area-context";
import { ProductsView } from "../../components/products/Products";

const ProductScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <ProductsView />
    </SafeAreaView>
  );
};

export default ProductScreen;
