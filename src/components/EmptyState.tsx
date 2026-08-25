import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors, spacing, borderRadius, typography } from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

type EmptyStateProps = {
  message?: string;
  onPress?: () => void;
};

const EmptyState = ({ message, onPress }: EmptyStateProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.emptyState,
        pressed && styles.emptyStatePressed,
      ]}
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole={onPress ? "button" : undefined}
      accessibilityLabel={message}
    >
      <MaterialIcons name="add-task" size={50} color={colors.textPrimary} />
      <Text style={styles.message}>{message}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  emptyState: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.gapM,
    // backgroundColor: colors.surface,
    borderRadius: borderRadius.radiusM,
    padding: spacing.paddingL,
  },
  emptyStatePressed: {
    opacity: 0.85,
  },
  message: {
    textAlign: "center",
    fontSize: typography.subtitleSize,
    color: colors.textPrimary,
  },
});

export default EmptyState;
