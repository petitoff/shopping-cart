import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useAppSelector } from "../../hooks/hooks";
import ProductCard from "./ProductCard";
import { Product } from "../../models/Product";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

interface Props {
  onGoBack: () => void;
}

const CartView = ({ onGoBack }: Props) => {
  const products = useAppSelector((state) => state.productsSlice.products);
  const cart = useAppSelector((state) => state.cartSlice.items);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    console.log("Add to cart", product);
  };

  const handleGoBack = () => {
    onGoBack();
  };

  useEffect(() => {
    const temp = products.filter((product) => {
      if (product.id in cart) {
        return true;
      }
      return false;
    });

    setFilteredProducts(temp);
  }, [cart]);

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.leftContainer}>
          <Pressable onPress={handleGoBack}>
            <Text>
              <Ionicons name="arrow-back-outline" size={24} color="black" />
            </Text>
          </Pressable>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.title}>My Cart</Text>
          <Text style={styles.subtitle}>
            {filteredProducts.length} items in your cart
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.rightIcon} />
        </View>
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <ProductCard
            productData={item}
            numberOfProduct={cart[item.id]}
            onAddToCart={handleAddToCart}
          />
        )}
      />
    </View>
  );
};

export default CartView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "gray",
  },

  navBar: {
    marginTop: 50,
    marginBottom: 20,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 20,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 20,
  },
  rightIcon: {
    height: 10,
    width: 10,
    resizeMode: "contain",
  },
});
