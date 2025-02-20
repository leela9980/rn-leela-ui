import { View } from "react-native";
import React from "react";
import { Textarea, TextareaInput } from "@/components/ui/";

const InputTextArea = ({
  placeholder = "Your text goes here...",
  onChange,
  value = "",
  testID,
}) => {
  return (
    <View>
      <Textarea size="lg">
        <TextareaInput
          placeholder={placeholder}
          onChangeText={onChange}
          value={value}
          testID={testID}
        />
      </Textarea>
    </View>
  );
};

export default InputTextArea;
