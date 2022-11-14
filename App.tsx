import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootNavigator } from "./navigation/RootNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
