import React from "react";
import InputControl from "./InputControl";
import InputText from "../InputText";

const FormText = (props) => {
 return <InputControl {...props} >
   <InputText/>
 </InputControl>
};

export default FormText;
