import { View } from "react-native";
import React from "react";
import { Card as GSCard } from "@/components/ui/";

const Card = ({ children }) => {
  return (
    <View>
      <GSCard m="$3">{children}</GSCard>
    </View>
  );
};

export default Card;
