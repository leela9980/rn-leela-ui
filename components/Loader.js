import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Loader = ({ size = "md" }) => {
  return (
    <View style={styles.container}>
      <Text size={size}>Loading... Please wait....</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
