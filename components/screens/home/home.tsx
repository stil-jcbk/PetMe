import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.conatiner}>
      <Text>Home! There will be the pet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
