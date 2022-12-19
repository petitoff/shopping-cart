import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { getProducts, Product } from "../../app/api";
import { receivedProducts } from "../../redux/productsSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import ProductCard from "./ProductCard";
import { addToCart } from "../../redux/cartSlice";
import { CartLink } from "../cart/CartLink";

export function ProductsView() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.productsSlice.products);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product.id));
  };

  useEffect(() => {
    const getData = async () => {
      getProducts().then((products) => {
        dispatch(receivedProducts(products));
      });
    };

    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <CartLink />
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard productData={item} onAddToCart={handleAddToCart} />
        )}
        style={{ marginTop: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F8",
    height: "100%",
  },
});
