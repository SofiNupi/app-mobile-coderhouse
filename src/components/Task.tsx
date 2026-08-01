import { View, Text, StyleSheet } from "react-native";
import { colors, spacing, typography, shadows } from "../theme";
import { TaskProps } from "../types";

const translateTime: Record<Task["time"], string> = {
  today: "Hoy",
  tomorrow: "Mañana",
  week: "Semana",
  month: "Mes",
};

const Task = ({ title, description, done, time }: TaskProps) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskTitleContainer}>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskDescription}>{description}</Text>
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
    backgroundColor: colors.cardBackgroundColor,
    padding: spacing.paddingL,
    borderRadius: 20,
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
  taskDone: {
    fontSize: typography.descriptionSize,
    color: colors.textColor,
  },
  taskTime: {
    fontSize: typography.descriptionSize,
    color: colors.textColor,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  taskDone: {
    color: colors.success,
  },
  taskUndone: {
    color: colors.warning,
  }
});

export default Task;
