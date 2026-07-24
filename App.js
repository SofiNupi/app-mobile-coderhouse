import { StyleSheet, SafeAreaView } from "react-native";
import ProfileScreen from "./src/screens/ProfileScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { colors } from "./src/theme";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileScreen />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
});
