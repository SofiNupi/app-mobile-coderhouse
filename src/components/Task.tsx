import { View, Text, StyleSheet } from "react-native";
import { colors, spacing, typography, shadows, borderRadius } from "../theme";
import { TaskType } from "../types";

const translateTime: Record<TaskType["time"], string> = {
  today: "Hoy",
  tomorrow: "Mañana",
  week: "Semana",
  month: "Mes",
};

const Task = ({ title, description, category, done, time }: TaskType) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskTitleContainer}>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskDescription}>{description}</Text>
        <Text style={styles.taskCategory}>{category}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text
          style={[styles.taskDone, done ? styles.taskDone : styles.taskUndone]}
        >
          {done ? "Realizada" : "Por hacer"}
        </Text>
        <Text style={styles.taskTime}>{translateTime[time]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: colors.surface,
    padding: spacing.paddingL,
    borderRadius: borderRadius.radiusM,
    width: "100%",
    gap: spacing.gapS,
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
  }
});

export default Task;
