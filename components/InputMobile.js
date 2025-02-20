import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import { InputField, Input } from "@/components/ui/";
import SelectCountryCode from "./SelectCountryCode";
import useIsMobile from "../../common/hooks/useIsMobile";

const InputMobile = ({
  onChange,
  mobile = "",
  countryCode = {
    dial_code: "+61",
    code: "AU",
    flag: "🇦🇺",
    name: { en: "Australia" },
  },
  isDisabled = false,
  testID = "mobile",
}) => {
  const isMobile = useIsMobile();

  const handleCountryCode = (item) => {
    onChange && onChange(item, mobile);
  };

  const handleOnChange = (text) => {
    if (text.length > 10 || text.startsWith("0")) {
      return;
    }

    text = text.replace(/[^0-9]/g, "");
    onChange && onChange(countryCode, text);
  };

  return (
    <View>
      <View style={styles.inputRow}>
        <SelectCountryCode
          onChange={handleCountryCode}
          value={countryCode}
          isDisabled={isDisabled}
        />
        <Input
          variant="outline"
          size="lg"
          style={[styles.input, isMobile && { maxWidth: "100%" }]}
          keyboardType="phone-pad"
          isDisabled={isDisabled}
        >
          <InputField
            keyboardType="phone-pad"
            placeholder="Mobile"
            onChangeText={handleOnChange}
            value={mobile}
            testID={testID}
          />
        </Input>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    flexGrow: 4,
  },
  inputRow: {
    display: "flex",
    flexDirection: "row",
  },
});

export default InputMobile;
