import { View } from "react-native";
import React from "react";
import { InputField, Input } from "@/components/ui/";

const InputEmail = ({
  onChange,
  value,
  isDisabled = false,
  testID = "email",
}) => {
  return (
    <View>
      <Input variant="outline" size="lg" isDisabled={isDisabled}>
        <InputField
          placeholder="Email"
          onChangeText={onChange}
          value={value}
          keyboardType="email-address"
          autoCapitalize="none"
          testID={testID}
        />
      </Input>
    </View>
  );
};

export default InputEmail;
