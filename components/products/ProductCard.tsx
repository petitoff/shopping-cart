import { Image, View, Text, StyleSheet, Button } from "react-native";
import { Product } from "../../models/Product";

interface Props {
  productData: Product;
}

const ProductCard = ({ productData }: Props) => {
  return (
    <View style={styles.container}>
      {productData?.imageURL && (
        <Image style={styles.image} source={{ uri: productData.imageURL }} />
      )}

      <View style={styles.contentContainer}>
        <Text style={styles.name}>{productData?.name}</Text>
        <Text style={styles.price}>${productData?.price}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Add to cart" />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 100,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    alignSelf: "center",

    marginVertical: 5,
  },
  contentContainer: {
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
  price: {},
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 3,
    marginRight: 20,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",

    width: "55%",
    position: "absolute",

    right: 10,
    bottom: 10,
  },
});
