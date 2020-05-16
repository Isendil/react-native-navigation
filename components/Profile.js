import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Profile </Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go to About View"
          onPress={() => this.props.navigation.navigate("About")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
export default Profile;
