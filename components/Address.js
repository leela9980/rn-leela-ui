import { View } from "@/components/ui/";
import React from "react";
import { VStack } from "@/components/ui/";
import { StyleSheet } from "react-native";
import useIsMobile from "../../common/hooks/useIsMobile";
import FormText from "./FormComponents/FormText";
import FormNumber from "./FormComponents/FormNumber";

const Address = ({
  value = {
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Australia",
  },
  control,
  name,
}) => {
  const isMobile = useIsMobile();

  return (
    <View>
      <VStack space="sm">
        <AddressField
          label="Address"
          placeholder="Street Address"
          field={name ? `${name}.address` : "address"}
          control={control}
          value={value.address}
        />
        <View style={isMobile ? styles.mobile : styles.container}>
          <AddressField
            label="City"
            placeholder="City"
            field={name ? `${name}.city` : "city"}
            control={control}
            value={value.city}
          />
          <AddressField
            label="State"
            placeholder="State"
            field={name ? `${name}.state` : "state"}
            control={control}
            value={value.state}
          />
        </View>
        <View style={isMobile ? styles.mobile : styles.container}>
          <ZipCode
            label="Zip Code"
            placeholder="Zip"
            field={name ? `${name}.zipCode` : "zipCode"}
            control={control}
            value={value.zipCode}
          />
          <AddressField
            label="Country"
            placeholder="Country"
            field={name ? `${name}.country` : "country"}
            control={control}
            value={value.country}
          />
        </View>
      </VStack>
    </View>
  );
};

const AddressField = ({ label, control, placeholder, field, value = "" }) => {
  return (
    <View key={field} label={label}>
      <FormText
        label={label}
        placeholder={placeholder}
        name={field}
        control={control}
        value={value}
      />
    </View>
  );
};

const ZipCode = ({ label, control, placeholder, field, value = "" }) => {
  return (
    <View key={field} label={label}>
      <FormNumber
        label={label}
        placeholder={placeholder}
        name={field}
        control={control}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 8,
  },
  mobile: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },
});

export default Address;
