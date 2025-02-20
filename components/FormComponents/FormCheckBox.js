import React from "react";
import InputControl from "./InputControl";
import CheckBox from "../CheckBox";

const FormCheckBox = (props) => {
    return <InputControl {...props}>
        <CheckBox />
    </InputControl>
}

export default FormCheckBox;
