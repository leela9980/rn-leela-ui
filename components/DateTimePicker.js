import { default as RNDateTimePicker } from "react-native-ui-datepicker";
import dayjs from "dayjs";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, ButtonText, ButtonIcon, View } from "@/components/ui/";
import { CalendarDays } from "lucide-react-native";

import {
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverArrow,
} from "@/components/ui/";

export default function DateTimePicker({
  value,
  onChange,
  text = "Select Date",
  variant = "outline",
  size = "lg",
  action = "secondary",
  width,
  testID,
  ...rest
}) {
  const [showModal, setShowModal] = useState(false);

  const handleOnPress = () => setShowModal(!showModal);
  const handleDateChange = ({ date }) => {
    setShowModal(false);
    onChange(date.format());
  };

  const s = { justifyContent: "flex-start" };
  if (width) {
    s.width = width;
  }

  const DateButton = ({ props = {}, testID }) => {
    return (
      <Button
        {...props}
        testID={testID}
        variant={variant}
        size={size}
        onPress={handleOnPress}
        action={action}
        style={s}
      >
        <ButtonIcon as={CalendarDays} mr="$2" />
        <ButtonText fontWeight="$medium" fontSize="$md">
          {value ? dayjs(value).format("ll") : text}
        </ButtonText>
      </Button>
    );
  };

  return (
    <View>
      <Popover
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        placement="top"
        size="sm"
        trigger={(triggerProps) => {
          return <DateButton props={triggerProps} testID={testID} />;
        }}
      >
        <PopoverBackdrop />
        <PopoverContent>
          <PopoverArrow />
          <RNDateTimePicker
            mode="single"
            date={value}
            onChange={handleDateChange}
            {...rest}
          />
        </PopoverContent>
      </Popover>
      {/*)}*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
