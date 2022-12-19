import { View, Text, StyleSheet } from "react-native";
import { CartLink } from "../cart/CartLink";

const HomeView = () => {
  return (
    <View>
      <View style={styles.cartLink}>
        <CartLink />
      </View>
      <View style={styles.title}>
        <Text>Welcome to the Store</Text>
      </View>
    </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    width: "100%",
  },
  cartLink: {
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
