import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { getProducts, Product } from "../../app/api";
import { receivedProducts } from "../../redux/productsSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import ProductCard from "./ProductCard";

export function Products() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.productsSlice.products);

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
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard productData={item} />}
        style={{ marginTop: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#F7F7F8",
    height: "100%",
  },
});
