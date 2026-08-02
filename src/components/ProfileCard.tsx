import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Badge from './Badge';
import { colors, shadows, spacing, typography, borderRadius } from './../theme'

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  isOnline: boolean;
};

const ProfileCard = ({ name, role, avatarUrl, isOnline }: ProfileCardProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.avatar} source={{ uri: avatarUrl }} />

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
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
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
