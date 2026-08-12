import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProfileScreen from "./src/screens/ProfileScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AddTaskScreen from "./src/screens/AddTaskScreen";
import { colors } from "./src/theme";
import { TaskType } from "./src/types";
import { useState, useCallback } from "react";

export default function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const onToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const addTask = useCallback((task: TaskType) => {
    setTasks((prev) => [task, ...prev]);
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const openAddTask = useCallback(() => {
    setIsAddTaskOpen(true);
  }, []);

  const closeAddTask = useCallback(() => {
    setIsAddTaskOpen(false);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ProfileScreen />
        <HomeScreen
          tasks={tasks}
          onToggleTask={onToggleTask}
          onDeleteTask={deleteTask}
          onOpenAddTask={openAddTask}
        />
        <AddTaskScreen
          addTask={addTask}
          isOpen={isAddTaskOpen}
          onOpen={openAddTask}
          onClose={closeAddTask}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
});
