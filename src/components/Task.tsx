import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { colors, spacing, typography, shadows, borderRadius } from "../theme";
import { TaskType } from "../types";
import { translateTime } from "../data/timeLabels";

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
    <View style={styles.taskContainer}>
      <Pressable
        style={styles.checkbox}
        hitSlop={10}
        onPress={() => onToggleTask(id)}
      >
        <Text style={styles.checkboxContent}>{done && "✓"}</Text>
      </Pressable>
      <View style={styles.taskTitleContainer}>
        <TouchableOpacity onPress={() => onOpenTask(task)}>
          <Text style={styles.taskTitle}>{title}</Text>
          <Text style={styles.taskDescription}>{description}</Text>
          <Text style={styles.taskCategory}>{category}</Text>
          {/* <View style={styles.statusContainer}>
            <Text
              style={[styles.taskDone, done ? styles.taskDone : styles.taskUndone]}
            >
              {done ? "Realizada" : "Por hacer"}
            </Text>
            <Text style={styles.taskTime}>{translateTime[time]}</Text>
          </View> */}
        </TouchableOpacity>
      </View>
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
  taskTitleContainer: {
    gap: spacing.gapS,
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
  taskDone: {
    fontSize: typography.descriptionSize,
    color: colors.success,
  },
  taskTime: {
    fontSize: typography.descriptionSize,
    color: colors.textColor,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskUndone: {
    color: colors.warning,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: borderRadius.radiusS,
    borderWidth: 1,
    borderColor: colors.textColor,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContent: {
    fontSize: typography.descriptionSize,
    color: colors.textColor,
  },
});

export default Task;
