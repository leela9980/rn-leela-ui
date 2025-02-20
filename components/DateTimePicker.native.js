import { default as RNDateTimePicker } from "react-native-ui-datepicker";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, ButtonText, ButtonIcon, View } from "@/components/ui/";

import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalBody,
} from "@/components/ui/";
import { CalendarDays } from "lucide-react-native";
import dayjs from "dayjs";

export default function DateTimePicker({
  value,
  onChange,
  text = "Select Date",
  variant = "outline",
  action = "secondary",
  width,
  testID,
  ...rest
}) {
  const [showModal, setShowModal] = useState(false);
  const ref = React.useRef(null);

  const handleDateChange = ({ date }) => {
    setShowModal(false);
    onChange(date.format());
  };

  const handleOnPress = () => setShowModal(!showModal);

  const s = { justifyContent: "flex-start" };
  if (width) {
    s.width = width;
  }

  return (
    <View>
      <Button
        variant={variant}
        size="lg"
        onPress={handleOnPress}
        action={action}
        style={s}
        testID={testID}
      >
        <ButtonIcon as={CalendarDays} mr="$2" />
        <ButtonText fontWeight="$medium" fontSize="$md">
          {value ? dayjs(value).format("ll") : text}..
        </ButtonText>
      </Button>

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalBody>
            <RNDateTimePicker
              mode="single"
              date={value}
              onChange={handleDateChange}
              {...rest}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
