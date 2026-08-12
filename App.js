import { StyleSheet, SafeAreaView } from "react-native";
import ProfileScreen from "./src/screens/ProfileScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AddTaskScreen from "./src/screens/AddTaskScreen";
import { colors } from "./src/theme";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileScreen />
      <AddTaskScreen />
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
