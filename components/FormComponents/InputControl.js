import React from "react";
import { useController } from "react-hook-form";
import FormControl from "./FormControl";
import { toTitleCase } from "../../../firebaseApi/utils";

const InputControl = (props) => {
  const {
    name,
    placeholder,
    control,
    value = "",
    required,
    label,
    isReadOnly,
    isDisabled = false,
    showLabel = true,
    children,
    ...rest
  } = props;
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: value,
  });
  return (
    <FormControl
      required={required}
      fieldState={fieldState}
      label={label || toTitleCase(name)}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      showLabel={showLabel}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          let childProps = {
            ...props,
            ...rest,
            ...child.props
          }
          childProps.placeholder = childProps.placeholder || toTitleCase(name);
          childProps.testID = childProps.testID || name;
          childProps.value = field.value;
          childProps.onChange = field.onChange;
          if (childProps.dynamicPropsFn) {
            childProps = {
              ...childProps,
              ...childProps.dynamicPropsFn(field, fieldState, { ...childProps })
            }
          }
          return React.cloneElement(child, { ...childProps });
        }
        return child;
      })}
    </FormControl>
  );
};

export default InputControl;
