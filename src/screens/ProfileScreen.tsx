import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import ProfileCard from "../components/ProfileCard";
import { colors, spacing, borderRadius } from "../theme";
import {
  selectTaskStats,
} from "../features/tasks/tasksSlice";
import { useAppSelector, useAppDispatch } from '../store/hooks'
import {
  selectCurrentUser,
  setUserPhoto,
} from "../features/auth/authSlice";
import { logout } from '../services/auth/authService'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { updateUserPhoto } from "../services/profile/profileService";

const ProfileScreen = () => {

  const dispatch = useAppDispatch()
  const user = useAppSelector(selectCurrentUser)

  const { total, completed } = useAppSelector(selectTaskStats);
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  const [isSaving, setIsSaving] = useState(false)

  const pickImage = async () => {
    // 1. Sin permiso 'granted' no se puede abrir la galería
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert(
        'Permisos requeridos',
        'Necesitamos acceso a tu galería para cambiar la foto de perfil.'
      )
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    })

    if (result.canceled) return

    await savePhoto(result.assets[0].uri)
  }

  const savePhoto = async (photoURL: string) => {
    if (!user) return
    setIsSaving(true)

    try {
      await updateUserPhoto(user.uid, photoURL)
      dispatch(setUserPhoto(photoURL))
    } catch (error) {
      console.error('Error al guardar la foto de perfil:', error)
      Alert.alert('Error', 'No se pudo guardar la foto. Probá de nuevo.')
    } finally {
      setIsSaving(false)
    }
  }

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
        name={user?.displayName || user?.email || 'Usuario'}
        role={user?.email ?? ''}
        avatarUrl={user?.photoURL}
        isOnline={true}
        onPressEditPhoto={pickImage}
        isSavingPhoto={isSaving}
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
