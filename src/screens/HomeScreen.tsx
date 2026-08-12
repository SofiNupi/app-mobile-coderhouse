import { tasks } from "../data/tasks";
import Task from "../components/Task";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { spacing, typography } from "../theme";
import { TaskProps } from "../types";

const HomeScreen = () => {
  const renderTask = ({ item }: TaskProps) => {
    return <Task key={item.id} {...item} />;
  };

  return (
    <View style={styles.homeScreen}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.title}>Tareas:</Text>}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    width: "100%",
    padding: spacing.paddingM,
  },
  title: {
    fontSize: typography.titleSize,
    color: "white",
    fontWeight: "bold",
    marginBottom: spacing.marginM,
  },
});

export default HomeScreen;
