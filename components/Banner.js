import { StyleSheet, View } from "react-native";
import React from "react";
import Logo from "./Logo";
import { Text } from "@/components/ui/";

const Banner = () => {
  return (
    <View>
      <Logo />
      {/* <View>
                <Text style={styles.loginText}>BuildOn</Text>
            </View> */}

      <View>
        <Text style={styles.welcome} size="lg">
          Welcome to the App
        </Text>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  button: {
    display: "block",
    width: "100%",
  },
  loginText: {
    textAlign: "center",
    fontSize: 30,
  },
  welcome: {
    textAlign: "center",
  },
});
