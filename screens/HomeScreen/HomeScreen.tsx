import { SafeAreaView } from "react-native-safe-area-context";
import HomeView from "../../components/HomeView/HomeView";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

const HomeScreen = () => {
  const rootNavigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigateToCart = () => {
    rootNavigation.navigate("CartScreen");
  };
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <HomeView onNavigateToCart={handleNavigateToCart} />
    </SafeAreaView>
  );
};

export default HomeScreen;
