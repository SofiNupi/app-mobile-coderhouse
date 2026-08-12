import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors, spacing, typography, shadows, borderRadius } from "../theme";
import { TaskType } from "../types";
import Checkbox from "./Checkbox";

type TaskProps = TaskType & {
  onToggleTask: (id: string) => void;
  onOpenTask: (task: TaskType) => void;
};

const Task = ({
  id,
  title,
  description,
  category,
  done,
  time,
  onToggleTask,
  onOpenTask,
}: TaskProps) => {
  const task: TaskType = { id, title, description, category, done, time };

  return (
    <View
      style={[styles.taskContainer, done && styles.taskContainerDone]}
    >
      <Pressable
        style={styles.taskContent}
        onPress={() => onOpenTask(task)}
        accessibilityRole="button"
        accessibilityLabel={`Abrir tarea ${title}`}
      >
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskDescription}>{description}</Text>
        <Text style={styles.taskCategory}>{category}</Text>
      </Pressable>

      <Checkbox checked={done} onPress={() => onToggleTask(id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    padding: spacing.paddingL,
    borderRadius: borderRadius.radiusM,
    width: "100%",
    marginVertical: spacing.marginM,
    gap: spacing.gapL,
    // iOS
    shadowColor: shadows.color,
    shadowOffset: { width: shadows.offsetWidth, height: shadows.offsetHeight },
    shadowOpacity: shadows.opacity,
    shadowRadius: shadows.radius,
    // Android
    elevation: shadows.elevation,
  },
  taskContainerDone: {
    backgroundColor: colors.primaryLight,
  },
  taskContent: {
    flex: 1,
    gap: spacing.gapS,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  taskTitle: {
    fontSize: typography.titleSize,
    fontWeight: "bold",
    color: colors.textColor,
  },
  taskDescription: {
    fontSize: typography.subtitleSize,
    color: colors.textColor,
  },
  taskCategory: {
    fontSize: typography.descriptionSize,
    color: colors.accent,
  },
});

export default Task;
