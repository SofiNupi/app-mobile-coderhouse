import { Text, StyleSheet, View, Pressable } from "react-native";
import { categories } from "../data/categories";
import { typography, spacing, colors, borderRadius } from "../theme";

type CategorySelectorProps = {
  category: (typeof categories)[number];
  setCategory: (category: string) => void;
};

const CategorySelector = ({ category, setCategory }: CategorySelectorProps) => {
  return (
    <>
      <Text style={styles.inputTitle}> Categoría: </Text>

      <View style={styles.categories}>
        {categories.map((item) => (
          <Pressable
            key={item}
            onPress={() => setCategory(item)}
            style={[
              styles.categoryOption,
              category === item && styles.categoryOptionSelected,
            ]}
          >
            <Text> {item} </Text>
          </Pressable>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  categories: {
    flexDirection: "row",
    gap: spacing.gapM,
  },
  categoryOption: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.radiusM,
    padding: spacing.paddingM,
  },
  categoryOptionSelected: {
    backgroundColor: colors.primaryLight,
  },
  inputTitle: {
    fontSize: typography.descriptionSize,
  },
});

export default CategorySelector;
