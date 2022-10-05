import { Image, View, Text, StyleSheet } from "react-native";
import { Product } from "../../models/Product";

interface Props {
  productData: Product;
}

const ProductCard = ({ productData }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.space}>
        <View>
          <Image source={{ uri: productData.imageURL }} />
        </View>

        <Text style={styles.name}>{productData.name}</Text>
        <Text>{productData.description}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
  },
  space: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
});
