import { View } from "react-native";
import React from "react";
import { Button as GButton, ButtonSpinner } from "@/components/ui";

const Button = ({
  text,
  loading = false,
  children,
  isDisabled,
  size = "lg",
  ...rest
}) => {
  return (
    <View>
      <GButton size={size} {...rest} isDisabled={loading || isDisabled}>
        {loading && <ButtonSpinner mr="$1" />}
        {children}
      </GButton>
    </View>
  );
};

export default Button;
