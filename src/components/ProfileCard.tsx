import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Badge from './Badge';
import { colors, shadows, spacing, typography, borderRadius } from './../theme'

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl: string | null | undefined;
  isOnline: boolean;
  onPressEditPhoto?: () => void;
  isSavingPhoto?: boolean;
};

const ProfileCard = ({
  name,
  role,
  avatarUrl,
  isOnline,
  onPressEditPhoto,
  isSavingPhoto,
}: ProfileCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatarWrap}>
        {avatarUrl ? (
          <Image style={styles.avatar} source={{ uri: avatarUrl }} />
        ) : (
          <View style={[styles.avatar, styles.avatarPlaceholder]}>
            <Ionicons name="person" size={28} color={colors.primary} />
          </View>
        )}

        {onPressEditPhoto ? (
          <TouchableOpacity
            style={styles.editPhotoButton}
            onPress={onPressEditPhoto}
            disabled={isSavingPhoto}
            accessibilityLabel="Cambiar foto de perfil"
          >
            <Ionicons name="camera" size={14} color={colors.surface} />
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.nameText}> {name} </Text>
        <Text style={styles.roleText}> {role} </Text>

        <Badge isOnline={isOnline} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: borderRadius.radiusM,
    // iOS
    shadowColor: shadows.color,
    shadowOffset: { width: shadows.offsetWidth, height: shadows.offsetHeight },
    shadowOpacity: shadows.opacity,
    shadowRadius: shadows.radius,
    // Android
    elevation: shadows.elevation,
    padding: spacing.paddingL,
    backgroundColor: colors.surface,
    gap: spacing.gapM,
  },
  avatarWrap: {
    position: "relative",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  avatarPlaceholder: {
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },
  editPhotoButton: {
    position: "absolute",
    right: -2,
    bottom: -2,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.surface,
  },
  infoContainer: {
    flex: 1,
    gap: spacing.gapS,
  },
  nameText: {
    color: colors.textColor,
    fontSize: typography.titleSize,
    fontWeight: "semibold",
  },
  roleText: {
    color: colors.textColor,
    fontSize: typography.subtitleSize,
  },
});

export default ProfileCard;
