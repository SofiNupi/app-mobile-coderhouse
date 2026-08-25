import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
} from "../theme";
import { translateTime } from "../data/timeLabels";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {RootStackParamList} from '../navigation/types'


type DetailTaskScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Detail'
>


const DetailTaskScreen = ({
  navigation, route
}: DetailTaskScreenProps) => {
  const { task } = route.params;
  const { id, title, description, category, time, done } = task;

  const onDelete = (id: string) => {
    //TODO add reducer to delete task
  };

  const onToggle = (id: string) => {
    //TODO add reducer to toggle task
  };

  const handleDelete = () => {
    Alert.alert(
      "Borrar tarea",
      "¿Seguro que querés borrar esta tarea?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Borrar",
          style: "destructive",
          onPress: () => onDelete(id),
        },
      ]
    );
  };

  return (
    <View style={styles.screen}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={({ pressed }) => [
          styles.backButton,
          pressed && styles.backButtonPressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel="Atrás"
      >
        <Ionicons name="arrow-back" size={22} color={colors.textPrimary} />
        <Text style={styles.backLabel}>Atrás</Text>
      </Pressable>

      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.title}>{title}</Text>
            <View
              style={[
                styles.statusBadge,
                done ? styles.statusDone : styles.statusPending,
              ]}
            >
              <Text
                style={[
                  styles.statusText,
                  done ? styles.statusTextDone : styles.statusTextPending,
                ]}
              >
                {done ? "Completada" : "Pendiente"}
              </Text>
            </View>
          </View>

          <Checkbox
            checked={done}
            onPress={() => onToggle(id)}
          />
        </View>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.divider} />

        <View style={styles.infoList}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Categoría</Text>
            <Text style={styles.infoCategory}>{category}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Cuándo</Text>
            <Text style={styles.infoValue}>{translateTime[time]}</Text>
          </View>
        </View>

        <Button
          label="Borrar tarea"
          variant="danger"
          onPress={handleDelete}
          accessibilityLabel="Borrar tarea"
          icon={
            <Ionicons name="trash-outline" size={18} color={colors.error} />
          }
          style={styles.deleteButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: spacing.gapM,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: spacing.gapS,
    paddingVertical: spacing.paddingS,
    paddingRight: spacing.paddingM,
  },
  backButtonPressed: {
    opacity: 0.6,
  },
  backLabel: {
    fontSize: typography.descriptionSize,
    color: colors.textPrimary,
    fontWeight: "600",
  },
  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.radiusM,
    padding: spacing.paddingL,
    gap: spacing.gapL,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: shadows.color,
    shadowOffset: {
      width: shadows.offsetWidth,
      height: shadows.offsetHeight,
    },
    shadowOpacity: shadows.opacity,
    shadowRadius: shadows.radius,
    elevation: shadows.elevation,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.gapL,
  },
  headerContent: {
    flex: 1,
    gap: spacing.gapM,
  },
  checkbox: {
    marginTop: 2,
  },
  title: {
    fontSize: typography.titleSize,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  statusBadge: {
    alignSelf: "flex-start",
    borderRadius: borderRadius.radiusS,
    paddingHorizontal: spacing.paddingM,
    paddingVertical: spacing.paddingS,
  },
  statusDone: {
    backgroundColor: colors.primaryLight,
  },
  statusPending: {
    backgroundColor: "#FFF6E0",
  },
  statusText: {
    fontSize: typography.descriptionSize,
    fontWeight: "600",
  },
  statusTextDone: {
    color: colors.success,
  },
  statusTextPending: {
    color: colors.warning,
  },
  description: {
    fontSize: typography.subtitleSize,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
  },
  infoList: {
    gap: spacing.gapL,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLabel: {
    fontSize: typography.descriptionSize,
    color: colors.textSecondary,
  },
  infoValue: {
    fontSize: typography.descriptionSize,
    color: colors.textPrimary,
    fontWeight: "500",
  },
  infoCategory: {
    fontSize: typography.descriptionSize,
    color: colors.accent,
    fontWeight: "600",
  },
  deleteButton: {
    marginTop: "auto",
  },
});

export default DetailTaskScreen;
