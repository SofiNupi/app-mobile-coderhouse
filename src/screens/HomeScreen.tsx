import { useState } from "react";
import Task from "../components/Task";
import EmptyState from "../components/EmptyState";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { spacing, typography } from "../theme";
import { TaskType } from "../types";
import DetailTaskScreen from "../components/DetailTaskScreen";

type HomeScreenProps = {
  tasks: TaskType[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onOpenAddTask: () => void;
};

const HomeScreen = ({
  tasks,
  onToggleTask,
  onDeleteTask,
  onOpenAddTask,
}: HomeScreenProps) => {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const selectedTask =
    tasks.find((task) => task.id === selectedTaskId) ?? null;

  const openDetailTask = (task: TaskType) => {
    setSelectedTaskId(task.id);
  };

  const closeDetailTask = () => {
    setSelectedTaskId(null);
  };

  const handleDeleteTask = (id: string) => {
    onDeleteTask(id);
    closeDetailTask();
  };

  const renderTask = ({ item }: { item: TaskType }) => {
    return (
      <Task
        key={item.id}
        {...item}
        onToggleTask={onToggleTask}
        onOpenTask={openDetailTask}
      />
    );
  };

  return (
    <View style={styles.homeScreen}>
      {selectedTask ? (
        <DetailTaskScreen
          task={selectedTask}
          onBack={closeDetailTask}
          onDelete={handleDeleteTask}
          onToggle={onToggleTask}
        />
      ) : (
        <FlatList
          data={tasks}
          renderItem={renderTask}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={<Text style={styles.title}>Tareas:</Text>}
          ListEmptyComponent={
            <EmptyState
              message="Comenzá agregando una tarea"
              onPress={onOpenAddTask}
            />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    width: "100%",
    padding: spacing.paddingM,
  },
  listContent: {
    flexGrow: 1,
  },
  title: {
    fontSize: typography.titleSize,
    color: "white",
    fontWeight: "bold",
    marginBottom: spacing.marginM,
  },
});

export default HomeScreen;
