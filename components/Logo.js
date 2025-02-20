import { View } from "react-native";
import React from "react";
import { Image } from "@/components/ui/";

const Logo = () => {
  return (
    <View style={{ alignSelf: "center" }}>
      <Image

        alt="icon"
        size="xl"
        borderRadius="$none"
        source={require("../../assets/icon.png")}
      />
    </View>
  );
};

export default Logo;
