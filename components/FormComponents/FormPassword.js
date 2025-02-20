import React from "react";
import { useController } from "react-hook-form";
import InputPassword from "../InputPassword";
import FormControl from "./FormControl";

const FormPassword = ({ name, control, value, required, label }) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: value,
  });

  return (
    <FormControl required={required} fieldState={fieldState} label={label}>
      <InputPassword onChange={field.onChange} value={field.value} />
    </FormControl>
  );
};

export default FormPassword;
