import { View, Text, FlatList } from "react-native";
import { useAppSelector } from "../../hooks/hooks";
import ProductCard from "./ProductCard";
import { Product } from "../../models/Product";
import { useEffect, useState } from "react";

const CartView = () => {
  const products = useAppSelector((state) => state.productsSlice.products);
  const cart = useAppSelector((state) => state.cartSlice.items);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    console.log("Add to cart", product);
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
    <View>
      <Text>Cart</Text>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <ProductCard productData={item} onAddToCart={handleAddToCart} />
        )}
      />
    </View>
  );
};

export default CartView;
