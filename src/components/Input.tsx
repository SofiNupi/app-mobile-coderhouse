import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TextInputProps,
} from "react-native";
import { useState } from "react";
import { colors, borderRadius, spacing } from "../theme";

interface InputProps extends TextInputProps {
  errorMessage?: string;
}

const Input = ({
  errorMessage,
  multiline,
  autoCapitalize,
  onChangeText,
  returnKeyType,
  ...textInputProps
}: InputProps) => {
  const withError = errorMessage !== "";

  const [isFocus, setIsFocus] = useState(false);

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          isFocus && styles.focus,
          withError && styles.inputError,
          multiline && styles.textArea,
        ]}
        {...textInputProps}
        multiline={multiline}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        selectionColor={colors.appBackground}
        returnKeyType={returnKeyType}
      />

      {withError && <Text style={styles.error}> {errorMessage} </Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: colors.surface,
    padding: spacing.paddingM,
    marginVertical: spacing.marginS,
    borderWidth: 1,
    borderRadius: borderRadius.radiusXS,
    borderColor: colors.border,
  },
  textArea: {
    height: 80,
  },
  focus: {
    borderColor: colors.primary,
  },
  error: {
    color: colors.error,
  },

  inputError: {
    borderColor: colors.error,
  },
});

export default Input;
