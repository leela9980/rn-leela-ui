import React from "react";
import { useController } from "react-hook-form";
import InputCurrency from "../InputCurrency";
import FormControl from "./FormControl";

const FormCurrency = ({
  name,
  placeholder,
  control,
  value = "",
  required,
  label,
}) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: value,
  });

  return (
    <FormControl required={required} fieldState={fieldState} label={label}>
      <InputCurrency
        placeholder={placeholder}
        onChange={field.onChange}
        value={field.value}
        testID={name}
      />
    </FormControl>
  );
};

export default FormCurrency;
