import { ReactNode } from "react";
import { Text, StyleSheet, Pressable, ViewStyle } from "react-native";
import { colors, spacing, typography, borderRadius } from "../theme";

type ButtonVariant = "primary" | "danger" | "accent";

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  icon?: ReactNode;
  accessibilityLabel?: string;
  style?: ViewStyle;
};

const Button = ({
  label,
  onPress,
  disabled = false,
  variant = "primary",
  icon,
  accessibilityLabel,
  style,
}: ButtonProps) => {
  const pressedStyle =
    variant === "danger"
      ? styles.buttonDangerPressed
      : variant === "accent"
        ? styles.buttonAccentPressed
        : styles.buttonPressed;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      style={({ pressed }) => [
        styles.button,
        variant === "danger" && styles.buttonDanger,
        variant === "accent" && styles.buttonAccent,
        disabled && styles.buttonDisabled,
        pressed && !disabled && pressedStyle,
        style,
      ]}
    >
      {icon}
      <Text
        style={[
          styles.buttonText,
          variant === "danger" && styles.buttonTextDanger,
          disabled && styles.buttonTextDisabled,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    borderRadius: borderRadius.radiusS,
    paddingHorizontal: spacing.paddingL,
    paddingVertical: spacing.paddingS,
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.gapS,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonDanger: {
    backgroundColor: "transparent",
    borderColor: colors.error,
  },
  buttonAccent: {
    backgroundColor: colors.info,
    borderColor: colors.info,
  },
  buttonText: {
    fontSize: typography.descriptionSize,
    fontWeight: "bold",
    color: colors.primaryButtonText,
  },
  buttonTextDanger: {
    color: colors.error,
    fontWeight: "600",
  },
  buttonDisabled: {
    backgroundColor: colors.disabledBackground,
    borderColor: colors.disabledBackground,
  },
  buttonTextDisabled: {
    fontWeight: "normal",
    color: colors.disabledText,
  },
  buttonPressed: {
    backgroundColor: colors.primaryHover,
    borderColor: colors.primaryHover,
  },
  buttonDangerPressed: {
    backgroundColor: "#FDECEC",
  },
  buttonAccentPressed: {
    backgroundColor: "#3A7BC8",
    borderColor: "#3A7BC8",
  },
});

export default Button;
