import React from "react";
import InputControl from "./InputControl";
import InputTextArea from "../InputTextArea";

const FormTextArea = (props) => {
  return <InputControl {...props} >
    <InputTextArea />
  </InputControl>
};


export default FormTextArea;
