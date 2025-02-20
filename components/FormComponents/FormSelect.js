import React from "react";
import { useController } from "react-hook-form";
import Select from "../Select";
import FormControl from "./FormControl";

const FormSelect = ({
  control,
  name,
  options = [],
  placeholder = "Select Type",
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
      <Select
        onChange={field.onChange}
        options={options}
        placeholder={placeholder}
        value={field.value}
      />
    </FormControl>
  );
};

export default FormSelect;
