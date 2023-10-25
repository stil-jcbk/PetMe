import { View, Text, StyleSheet } from "react-native";

export default function FriendsScreen() {
  return (
    <View style={styles.conatiner}>
      <Text>Friends! There will be your friends list</Text>
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
