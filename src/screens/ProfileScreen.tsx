import { View, StyleSheet, TouchableOpacity } from "react-native";
import ProfileCard from "../components/ProfileCard";
import { colors, spacing, borderRadius } from "../theme";
import { userData } from "../data/userdata";
import {
  selectTaskStats,
} from "../features/tasks/tasksSlice";
import { useAppSelector } from '../store/hooks'
import { Text } from "react-native";
import { logout } from '../services/auth/authService'


const ProfileScreen = () => {
  const { total, completed } = useAppSelector(selectTaskStats);
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);


  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error(
        'Error al cerrar sesión:',
        error
      )
    }
  }

  return (
    <View style={styles.profileContainer}>
      <ProfileCard
        name={`${userData.firstName} ${userData.lastName}`}
        role={userData.role}
        avatarUrl="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzNHS0JacnV1T1dJTmZkclZoSnFFenIzeVhNbiJ9"
        isOnline={true}
      />
      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>Tu progreso</Text>
          <Text style={styles.progressValue}>{progress}%</Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>
          Cerrar sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    padding: spacing.paddingM,
    backgroundColor: colors.primaryLight,
    flex: 1,
    gap: spacing.paddingM,
  },
  progressCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.radiusM,
    padding: spacing.paddingM,
    marginBottom: spacing.paddingM,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.paddingM,
  },
  progressLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textColor,
  },
  progressValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textColor,
  },
  progressTrack: {
    height: 10,
    backgroundColor: colors.primaryLight,
    borderRadius: borderRadius.radiusM,
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: borderRadius.radiusM,
  },
  logoutButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.radiusM,
    padding: spacing.paddingM,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.surface,
  }
});

export default ProfileScreen;
