
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { colors, spacing, typography } from "../theme";
import { useAppSelector } from "../store/hooks";
import {
  selectTaskStats,
  selectTasksLoading,
} from "../features/tasks/tasksSlice";
import { selectCurrentUser } from "../features/auth/authSlice";

const HomeScreen = () => {

  const { pending, completed } = useAppSelector(selectTaskStats);
  const user = useAppSelector(selectCurrentUser);
  const isLoading = useAppSelector(selectTasksLoading);

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Buenos días";
    if (hours < 18) return "Buenas tardes";
    return "Buenas noches";
  };

  return (
    <View style={styles.homeScreen}>
      <Text style={styles.greeting}>
        {getGreeting()}, {user?.displayName || user?.email}
      </Text>

      {isLoading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <>
          <Text style={styles.taskStats}>
            <Text style={styles.taskStatsValue}>{pending}</Text> Tareas pendientes
          </Text>
          <Text style={styles.taskStats}>
            <Text style={styles.taskStatsValue}>{completed}</Text> Tareas completadas
          </Text>
        </>
      )}
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
  greeting: {
    fontSize: typography.titleSize,
    fontWeight: "bold",
    color: colors.textColor,
    marginBottom: spacing.marginM,
  },
  taskStats: {
    fontSize: typography.descriptionSize,
    color: colors.textColor,
    marginBottom: spacing.marginM,
    alignItems: "center",
  },
  taskStatsValue: {
    fontSize: typography.titleSize,
    fontWeight: "bold",
    color: colors.textColor,
    marginRight: spacing.marginM,
  }, 
});

export default HomeScreen;
