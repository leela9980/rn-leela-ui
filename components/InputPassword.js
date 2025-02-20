import { View } from "react-native";
import React from "react";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";

import { InputField, Input, InputIcon, InputSlot } from "@/components/ui/";

const InputPassword = ({ label = "Password", onChange, value }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <View>
      <Input variant="outline" size="lg">
        <InputField
          placeholder="*******"
          type={showPassword ? "text" : "password"}
          onChangeText={onChange}
          value={value}
        />
        <InputSlot pr="$3" onPress={handleShowPassword}>
          <InputIcon
            as={showPassword ? EyeIcon : EyeOffIcon}
            color="$darkBlue500"
          />
        </InputSlot>
      </Input>
    </View>
  );
};

export default InputPassword;
