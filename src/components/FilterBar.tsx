import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  FILTERS,
  selectFilter,
  setFilter,
  TaskFilter,
} from "../features/tasks/tasksSlice";
import { spacing, borderRadius, colors } from "../theme";

const FILTER_KEYS = Object.keys(FILTERS) as TaskFilter[];

const FilterBar = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectFilter);
  return (
    <View style={styles.row}>
      {FILTER_KEYS.map((key) => {
        const isActive = active === key;
        return (
          <TouchableOpacity
            key={key}
            style={[styles.chip, isActive && styles.chipActive]}
            onPress={() => dispatch(setFilter(key))}
            activeOpacity={0.8}
          >
            <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
              {FILTERS[key]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: spacing.paddingM,
    },
    chip: {
      padding: spacing.paddingS,
      borderRadius: borderRadius.radiusS,
      backgroundColor: colors.primaryLight,
    },
    chipActive: {
      backgroundColor: colors.primary,
    },
    chipText: {
      color: colors.textColor,
    },
    chipTextActive: {
      color: colors.textColor,
    }
  })

export default FilterBar;
