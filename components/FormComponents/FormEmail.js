import React from "react";
import InputEmail from "../InputEmail";
import InputControl from "./InputControl";

const FormEmail = (props) => {
  return <InputControl {...props}>
    <InputEmail/>
  </InputControl>
}

export default FormEmail;


// const FormEmail = ({
//   name = "email",
//   value = "",
//   control,
//   isDisabled = false,
//   required,
//   label,
// }) => {
//   const { field, fieldState } = useController({
//     name,
//     control,
//     defaultValue: value,
//   });
//
//   return (
//     <FormControl required={required} fieldState={fieldState} label={label}>
//       <InputEmail
//         placeholder="Email"
//         onChange={field.onChange}
//         value={field.value}
//         isDisabled={isDisabled}
//         testID={name}
//       />
//     </FormControl>
//   );
// };

// export default FormEmail;
