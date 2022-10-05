import { View, Text } from "react-native";

import { Provider } from "react-redux";
import { Products } from "../components/products/Products";
import { store } from "../redux/store";

export default function Routes() {
  return (
    <Provider store={store}>
      <View>
        <Products />
      </View>
    </Provider>
  );
}
