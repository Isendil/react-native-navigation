import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.blue}>Hello World!</Text>
      <Text style={styles.red}>WATSUUUUUUUUUP!</Text>
      <Text style={styles.purple}>May the Force be with you, Always!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  blue: {
    color: "blue",
    fontSize: 30,
  },
  red: {
    color: "red",
    fontSize: 17,
  },
  purple: {
    color: "purple",
    fontSize: 40,
  },
});
