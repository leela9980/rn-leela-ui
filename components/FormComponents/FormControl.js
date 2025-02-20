import React from "react";
import { FormControl as GSFormControl } from "@/components/ui/";
import {
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/";
import { AlertCircleIcon } from "lucide-react-native";

const FormControl = ({
  children,
  fieldState: { error, invalid, isTouched },
  required = true,
  label,
  isReadOnly = false,
  isDisabled = false,
  showLabel = true
}) => {
  const showError = invalid && !isTouched;
  return (
    <GSFormControl size="lg" isInvalid={showError} isRequired={required} isReadOnly={isReadOnly} isDisabled={isDisabled}>
      {showLabel && (
        <FormControlLabel mb="$1">
          <FormControlLabelText>{label}</FormControlLabelText>
        </FormControlLabel>
      )}

      {children}

      {showError && (
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} color="$error600" />
          <FormControlErrorText>{error.message}</FormControlErrorText>
        </FormControlError>
      )}
    </GSFormControl>
  );
};

export default FormControl;
