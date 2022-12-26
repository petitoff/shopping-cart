import { View, Image, Text, StyleSheet, Button } from "react-native";
import { Product } from "../../models/Product";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  productData: Product;
  numberOfProduct: number;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ productData, numberOfProduct, onAddToCart }: Props) => {
  const handleAddToCart = () => {
    onAddToCart(productData);
  };

  return (
    <View style={styles.container}>
      {productData?.imageURL && (
        <View style={{}}>
          <Image style={styles.image} source={{ uri: productData.imageURL }} />
        </View>
      )}

      <View style={styles.contentContainer}>
        <Text style={styles.name}>{productData?.name}</Text>
        <Text style={styles.price}>${productData?.price}</Text>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>
              <Ionicons name="remove-circle-outline" size={45} color="black" />
            </Text>
            <Text style={{ marginHorizontal: 20, fontSize: 21 }}>
              {numberOfProduct}
            </Text>
            <Text>
              <Ionicons name="add-circle-outline" size={45} color="black" />
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Add to cart" onPress={handleAddToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  contentContainer: {
    marginTop: 10,
    width: "100%",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
  price: {},
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 3,
    marginRight: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "flex-end",
  },
});

export default ProductCard;
