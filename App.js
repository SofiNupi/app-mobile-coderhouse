import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskFlow</Text>
      <Text style={styles.subtitle}>Checkpoint 1: Estructura Base</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa4823'
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    color: "white",
  }
});
