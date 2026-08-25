import { useState, useCallback } from "react";
import Task from "../components/Task";
import EmptyState from "../components/EmptyState";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { spacing, typography, colors } from "../theme";
import { TaskType } from "../types";
import AddTaskScreen from "../screens/AddTaskScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type TaskScreenProps = NativeStackScreenProps<RootStackParamList, "Tasks">;

const TaskScreen = ({ navigation }: TaskScreenProps) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const openDetail = useCallback(
    (task: TaskType) => {
      navigation.navigate("Detail", { task });
    },
    [navigation]
  );


  const onToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const addTask = useCallback((task: TaskType) => {
    setTasks((prev) => [task, ...prev]);
  }, []);

  const openAddTask = useCallback(() => {
    setIsAddTaskOpen(true);
  }, []);

  const closeAddTask = useCallback(() => {
    setIsAddTaskOpen(false);
  }, []);

  const renderTask = ({ item }: { item: TaskType }) => {
    return (
      <Task
        key={item.id}
        {...item}
        onToggleTask={onToggleTask}
        onOpenTask={openDetail}
      />
    );
  };

  return (
    <View style={styles.homeScreen}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<Text style={styles.title}>Tareas:</Text>}
        ListEmptyComponent={
          <EmptyState
            message="Comenzá agregando una tarea"
          />
        }
      />
      <AddTaskScreen
        addTask={addTask}
        isOpen={isAddTaskOpen}
        onOpen={openAddTask}
        onClose={closeAddTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    width: "100%",
    padding: spacing.paddingM,
    backgroundColor: colors.primaryLight,
  },
  listContent: {
    flexGrow: 1,
  },
  title: {
    fontSize: typography.titleSize,
    fontWeight: "bold",
    color: colors.textColor,
    marginBottom: spacing.marginM,
  },
});

export default TaskScreen;
