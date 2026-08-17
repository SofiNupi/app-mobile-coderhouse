import { Text, StyleSheet, Pressable, ViewStyle } from "react-native";
import { colors, borderRadius } from "../theme";

type CheckboxProps = {
  checked: boolean;
  onPress: () => void;
  style?: ViewStyle;
};

const Checkbox = ({ checked, onPress }: CheckboxProps) => {
  return (
    <Pressable
      style={[styles.checkbox, checked && styles.checkboxChecked]}
      hitSlop={8}
      onPress={onPress}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      accessibilityLabel={
        checked ? "Marcar como no completada" : "Marcar como completada"
      }
    >
      <Text style={styles.checkboxContent}>{checked && "✓"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.radiusS,
    borderWidth: 1.5,
    borderColor: colors.textColor,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    
  },
  checkboxContent: {
    fontSize: 18,
    color: colors.textColor,
    fontWeight: "600",
  },
  checkboxChecked: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primaryLight,
  },
});

export default Checkbox;
