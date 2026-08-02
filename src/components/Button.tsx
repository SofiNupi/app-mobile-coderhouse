import { Text, StyleSheet, Pressable } from "react-native";
import { colors, spacing, typography, borderRadius } from "../theme";

type ButtonProps = {
  disabled?: boolean;
  label: string;
  onPress: () => void;
};

const Button = ({ label, disabled, onPress }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.buttonDisabled,
        pressed && !disabled && styles.buttonPressed,
      ]}
    >
      <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}> {label} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.radiusS,
    padding: spacing.paddingS,
    height: 40,
    justifyContent: 'center', 
    alignItems: 'center',   
  },
  buttonText: {
    fontSize: typography.descriptionSize,
    fontWeight: 'bold',
    color: colors.primaryButtonText,
  },
  buttonDisabled: {
    backgroundColor: colors.disabledBackground,
  },
  buttonTextDisabled: {
    fontWeight: 'normal',
    color: colors.disabledText,
  },
  buttonPressed: {
    backgroundColor: colors.primaryHover,
  },
});

export default Button;