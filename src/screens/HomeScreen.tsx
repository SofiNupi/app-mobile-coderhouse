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
        contentContainerStyle={styles.tasksContent}
      >
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            done={task.done}
            time={task.time}
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
  },
  tasksContent: {
    gap: spacing.gapS,
    paddingBottom: spacing.paddingL,
  },
});

export default HomeScreen;
