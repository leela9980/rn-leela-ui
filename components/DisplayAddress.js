import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "@/components/ui/";
import useIsMobile from "../../common/hooks/useIsMobile";

const DisplayAddress = ({
  address: { address, city, state, country, zipCode },
}) => {
  const isMobile = useIsMobile();

  return (
    <View>
      <Text
        size="md"
        style={{ maxWidth: isMobile ? 200 : 400 }}
        ellipsizeMode="tail"
      >
        {address}, {city}, {state}, {zipCode}
      </Text>
    </View>
  );
};

export default DisplayAddress;

const styles = StyleSheet.create({});
