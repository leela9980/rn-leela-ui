import React from "react";
import { InputField, Input, View } from "@/components/ui/";

const InputCurrency = ({
  label = "Label",
  placeholder,
  onChange,
  value = "",
  testID,
}) => {
  const handleOnChange = (text) => {
    const number = Number(text.replace(/[^\d\.]/g, ""));
    if (isNaN(number) || number.toString().length > 10) {
      return;
    }
    onChange(number);
  };

  const formatValue = (value) => {
    if (value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      }).format(value);
    }

    return 0;
  };

  const formattedValue = formatValue(value);
  return (
    <View>
      <Input variant="outline" size="lg">
        <InputField
          keyboardType="numeric"
          inputMode="numeric"
          placeholder={placeholder || label}
          onChangeText={handleOnChange}
          value={formattedValue}
          testID={testID}
        />
      </Input>
    </View>
  );
};

export default InputCurrency;
