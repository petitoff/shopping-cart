import { View, Text, StyleSheet } from "react-native";
import { CartLink } from "../cart/CartLink";

interface Props {
  onNavigateToCart: () => void;
}

const HomeView = ({ onNavigateToCart }: Props) => {
  return (
    <View>
      <View style={styles.cartLink}>
        <CartLink onNavigateToCart={onNavigateToCart} />
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
