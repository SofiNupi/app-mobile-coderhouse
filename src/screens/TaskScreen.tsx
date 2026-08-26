import { useState, useCallback } from "react";
import Task from "../components/Task";
import EmptyState from "../components/EmptyState";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { spacing, typography, colors } from "../theme";
import { TaskType } from "../types";
import AddTaskScreen from "../screens/AddTaskScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
  selectFilter,
  selectTaskStats,
  selectVisibleTasks,
  toggleTaskStatus
} from '../features/tasks/tasksSlice'
import FilterBar from "../components/FilterBar";


type TaskScreenProps = NativeStackScreenProps<RootStackParamList, "Tasks">;

const TaskScreen = ({ navigation }: TaskScreenProps) => {
  const dispatch = useAppDispatch()

  const tasks = useAppSelector(selectVisibleTasks)
  const filter = useAppSelector(selectFilter);
  const { pending, total } = useAppSelector(selectTaskStats)


  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const openDetail = useCallback(
    (task: TaskType) => {
      navigation.navigate("Detail", { taskId: task.id });
    },
    [navigation]
  );


  const onToggleTask = useCallback(
    (id: string) => {
      dispatch(toggleTaskStatus(id))
    },
    [dispatch]
  )


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

  const getEmptyStateMessage = () => {
    if (filter === "pending") {
      return "No hay tareas pendientes";
    } else if (filter === "completed") {
      return "No hay tareas completadas";
    } else {
      return "Comenzá agregando una tarea";
    }
  }

  return (
    <View style={styles.homeScreen}>

      <FilterBar />
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<Text style={styles.title}>Tareas:</Text>}
        ListEmptyComponent={
          <EmptyState
            message= {getEmptyStateMessage()}
          />
        }
      />
      <AddTaskScreen
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
