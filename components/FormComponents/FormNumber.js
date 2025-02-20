import React from "react";
import { useController } from "react-hook-form";
import InputNumber from "../InputNumber";
import FormControl from "./FormControl";

const FormNumber = ({
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
      <InputNumber
        placeholder={placeholder}
        onChange={field.onChange}
        value={field.value}
        testID={name}
      />
    </FormControl>
  );
};

export default FormNumber;
