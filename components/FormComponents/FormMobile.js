import React from "react";
import InputMobile from "../InputMobile";
import InputControl from "./InputControl";

const defaultMobileValue = {
  countryCode: {
    dial_code: "+61",
    code: "AU",
    flag: "🇦🇺",
    name: { en: "Australia" },
  },
  mobile: ""
};

const FormMobile = (props) => {
  const dynamicPropsFn = (field) => {
    return {
      mobile: field.value?.mobile,
      countryCode: field.value?.countryCode,
      onChange: (countryCode, mobile) => {
        field.onChange({ countryCode, mobile });
      }
    }
  }

  return <InputControl {...props} value={props.value || defaultMobileValue} dynamicPropsFn={dynamicPropsFn}>
        <InputMobile/>
  </InputControl>
};

export default FormMobile;
