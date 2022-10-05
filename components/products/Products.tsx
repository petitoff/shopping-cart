import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { getProducts, Product } from "../../app/api";
import { useAppSelector } from "../../hooks/hooks";
import ProductCard from "./ProductCard";

export function Products() {
  const products = useAppSelector((state) => state.productsSlice.products);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      {products.map((product, index) => {
        return (
          <View key={index}>
            <ProductCard productData={product} />
          </View>
        );
      })}
    </SafeAreaView>
  );
}
