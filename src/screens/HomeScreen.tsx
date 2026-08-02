import { tasks } from "../data/tasks";
import Task from "../components/Task";
import { Text, StyleSheet, View } from "react-native";
import { spacing, typography } from "../theme";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.title}>Tareas:</Text>
      <View
        style={styles.tasksContainer}
      >
        {tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
          />
        ))}
      </View>
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
  tasksContainer: {
    flex: 1,
    gap: spacing.gapM,
    paddingBottom: spacing.paddingL,
  },
});

export default HomeScreen;
