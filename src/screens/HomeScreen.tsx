
import { Text, StyleSheet, View, FlatList } from "react-native";
import { colors, spacing, typography } from "../theme";
import { userData } from '../data/userdata';


const HomeScreen = () => {


  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Buenos días";
    if (hours < 18) return "Buenas tardes";
    return "Buenas noches";
  };

  return (
    <View style={styles.homeScreen}>
      <Text style={styles.greeting}> {getGreeting()}, {userData.firstName} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    width: "100%",
    padding: spacing.paddingM,
    backgroundColor: colors.primaryLight,
  },
  greeting: {
    fontSize: typography.titleSize,
    fontWeight: "bold",
    color: colors.textColor,
    marginBottom: spacing.marginM,
  },
});

export default HomeScreen;
