import { Text, StyleSheet, View, Alert, Modal, Pressable } from "react-native";

import { useState } from "react";
import { TaskType } from "../types";
import Input from "../components/Input";
import Button from "../components/Button";
import { colors, spacing, typography, borderRadius, shadows } from "../theme";
import { categories } from "../data/categories";
import CategorySelector from "../components/CategorySelector";

type AddTaskScreenProps = {
  addTask: (task: TaskType) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const AddTaskScreen = ({
  addTask,
  isOpen,
  onOpen,
  onClose,
}: AddTaskScreenProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>(
    categories[0]
  );
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");

  const isSubmitDisabled = title.trim().length < 3;

  const cleanInputs = () => {
    setTitle("");
    setDescription("");
    setCategory(categories[0]);
  };

  const handleChangeTitle = (value) => {
    setTitleErrorMessage("");
    setTitle(value);
  };

  const handleChangeDescription = (value) => {
    setDescriptionErrorMessage("");
    setDescription(value);
  };

  const validateForm = () => {
    let valid = true;

    if (title.trim().length < 5) {
      setTitleErrorMessage("El título debe tener al menos 5 caracteres");
      valid = false;
    }

    if (description.trim().length < 10) {
      setDescriptionErrorMessage(
        "La descripción debe tener al menos 10 caracteres"
      );
      valid = false;
    }

    return valid;
  };

  const handleAddTask = () => {
    const valid = validateForm();
    if (!valid) return;

    const newTask: TaskType = {
      id: Date.now().toString(),
      title,
      description,
      category,
      done: false,
      time: "today",
    };

    addTask(newTask);
    cleanInputs();
    onClose();
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent
        visible={isOpen}
        onRequestClose={onClose}
      >
        <Pressable style={styles.overlay} onPress={onClose}>
          <Pressable
            style={styles.form}
            onPress={(e) => e.stopPropagation()}
          >
            <View style={styles.formHeader}>
              <Text style={styles.formTitle}>Nueva tarea</Text>
              <Pressable
                onPress={onClose}
                style={({ pressed }) => [
                  styles.closeButton,
                  pressed && styles.closeButtonPressed,
                ]}
                accessibilityRole="button"
                accessibilityLabel="Cerrar"
              >
                <Text style={styles.closeButtonText}>×</Text>
              </Pressable>
            </View>

            <Input
              value={title}
              placeholder={"Título"}
              autoCapitalize="sentences"
              errorMessage={titleErrorMessage}
              onChangeText={handleChangeTitle}
            />

            <Input
              value={description}
              placeholder={"Descripción"}
              autoCapitalize="sentences"
              multiline
              errorMessage={descriptionErrorMessage}
              onChangeText={handleChangeDescription}
            />

            <CategorySelector category={category} setCategory={setCategory} />

            <Button
              onPress={handleAddTask}
              disabled={isSubmitDisabled}
              label="Agregar Tarea"
            />
          </Pressable>
        </Pressable>
      </Modal>

      <View style={styles.footer}>
        <Button onPress={onOpen} label="Nueva Tarea" variant="accent" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: spacing.paddingM,
    paddingBottom: spacing.paddingM,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(31, 42, 34, 0.45)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.paddingM,
    paddingVertical: spacing.paddingL,
  },
  form: {
    width: "100%",
    maxWidth: 520,
    backgroundColor: colors.surface,
    padding: spacing.paddingL,
    gap: spacing.gapL,
    borderRadius: borderRadius.radiusM,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: shadows.color,
    shadowOffset: {
      width: shadows.offsetWidth,
      height: shadows.offsetHeight,
    },
    shadowOpacity: shadows.opacity,
    shadowRadius: shadows.radius,
    elevation: shadows.elevation,
  },
  formHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.marginS,
  },
  formTitle: {
    fontSize: typography.titleSize,
    color: colors.textPrimary,
    fontWeight: "600",
    flex: 1,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.radiusS,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primaryExtraLight,
  },
  closeButtonPressed: {
    backgroundColor: colors.primaryLight,
  },
  closeButtonText: {
    fontSize: typography.titleSize,
    lineHeight: 28,
    color: colors.textSecondary,
    fontWeight: "500",
  },
});

export default AddTaskScreen;
