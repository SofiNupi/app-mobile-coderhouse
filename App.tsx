import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProfileScreen from "./src/screens/ProfileScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AddTaskScreen from "./src/screens/AddTaskScreen";
import { colors } from "./src/theme";
import { TaskType } from "./src/types";
import { useState, useCallback } from "react";
import { Provider } from 'react-redux';
import { store } from './src/store';
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <TabNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
});
