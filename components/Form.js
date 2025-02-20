import React, { useCallback, useEffect } from "react";
import { VStack } from "@/components/ui/";
import { Alert, AlertIcon, AlertText } from "@/components/ui/";
import { AlertCircleIcon } from "lucide-react-native";
import { useForm, FormProvider } from "react-hook-form";

const Form = ({ children, errors = [], style, initValues }) => {
  const methods = useForm({
    values: initValues,
  });

  // const { control, handleSubmit, setValue, setError, clearErrors } = methods;

  useEffect(() => {
    if (errors.length > 0) {
      errors.forEach((error) => {
        if (error.field) {
          methods.setError(error.field, {
            type: "custom",
            message: error.message,
          });
        }
      });
    }
  }, [errors]);

  return (
    <FormProvider {...methods}>
      <VStack space="md" reversed={false} style={style}>
        {children(methods)}

        {errors.length > 0 &&
          errors
            .filter((item) => !item.field)
            .map((error, index) => {
              return (
                <Alert mx="$2.5" action="error" variant="accent" key={index}>
                  <AlertIcon as={AlertCircleIcon} mr="$3" />
                  <AlertText>{error.message}</AlertText>
                </Alert>
              );
            })}
      </VStack>
    </FormProvider>
  );
};

export default Form;
