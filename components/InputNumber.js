import { View } from "react-native";
import React from "react";
import { InputField, Input } from "@/components/ui/";

const InputNumber = ({
  label = "Label",
  placeholder,
  onChange,
  value = "",
  testID,
}) => {
  const handleOnChange = (text) => {
    text = text.replace(/[^0-9]/g, "");
    onChange(Number(text));
  };

  return (
    <View>
      <Input variant="outline" size="lg">
        <InputField
          keyboardType="numeric"
          inputMode="numeric"
          placeholder={placeholder || label}
          onChangeText={handleOnChange}
          value={value.toString()}
          testID={testID}
        />
      </Input>
    </View>
  );
};

export default InputNumber;
