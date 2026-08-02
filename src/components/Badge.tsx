import { View, Text, StyleSheet } from "react-native";
import { colors, spacing, borderRadius } from '../theme';

type BadgeProps = {
  isOnline?: boolean;
};

const Badge = ({ isOnline = false }: BadgeProps) => {
  return (
    <View style={[styles.badge, isOnline ? styles.online : styles.offline]}>
      <Text style={styles.badgeText}>
        {isOnline ? "En linea" : "Desconectado"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: borderRadius.radiusM,
    paddingHorizontal: 10,
    paddingVertical: spacing.paddingS,
    alignSelf: "flex-start",
  },
  online: {
    backgroundColor: colors.success,
  },
  offline: {
    backgroundColor: colors.error,
  },
  badgeText: {
    color: colors.primaryButtonText,
  },
});

export default Badge;
