import React from "react";
import { useController } from "react-hook-form";
import DateTimePicker from "../DateTimePicker";
import FormControl from "./FormControl";

const FormDateTimePicker = ({
  name,
  placeholder,
  control,
  value,
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
      <DateTimePicker
        value={field.value}
        onChange={field.onChange}
        text={placeholder}
        testID={name}
      />
    </FormControl>
  );
};

export default FormDateTimePicker;
