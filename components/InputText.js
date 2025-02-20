import { View } from "react-native";
import React from "react";
import { InputField, Input } from "@/components/ui/";

const InputText = ({
  label = "Label",
  placeholder,
  onChange,
  value = "",
  size,
  style = {},
  testID,
}) => {
  return (
    <View>
      <Input variant="outline" size={size || "lg"} style={{ ...style }}>
        <InputField
          placeholder={placeholder || label}
          onChangeText={onChange}
          value={value}
          testID={testID}
        />
      </Input>
    </View>
  );
};

export default InputText;
