import { SafeAreaView } from "react-native-safe-area-context";
import HomeView from "../../components/HomeView/HomeView";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <HomeView />
    </SafeAreaView>
  );
};

export default HomeScreen;
