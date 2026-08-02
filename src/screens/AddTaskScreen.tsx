import { Text, StyleSheet, View, Alert } from "react-native";
import { useState } from "react";
import { TaskType } from "../types";
import Input from "../components/Input";
import Button from "../components/Button";
import { colors, spacing, typography, borderRadius } from "../theme";
import { categories } from "../data/categories";
import CategorySelector from "../components/CategorySelector";

const AddTaskScreen = () => {
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
    console.log(newTask);

    Alert.alert("Éxito", "Tarea capturada localmente");
    cleanInputs();
  };

  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}> Nueva tarea </Text>

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

      <CategorySelector category={category} setCategory={setCategory}/>

      <Button
        onPress={handleAddTask}
        disabled={isSubmitDisabled}
        label="Agregar Tarea"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: colors.surface,
    padding: spacing.paddingL,
    gap: spacing.gapM,
    margin: spacing.marginM,
    borderRadius: borderRadius.radiusM,
  },
  formTitle: {
    fontSize: typography.subtitleSize,
  },
});

export default AddTaskScreen;
