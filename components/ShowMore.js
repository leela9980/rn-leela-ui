import { StyleSheet } from "react-native";
import React from "react";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/";
import { ChevronDown } from "lucide-react-native";

const ShowMore = ({ page, setPage }) => {
  return (
    <Button
      style={{ alignItems: "center" }}
      variant="link"
      onPress={() => {
        setPage(page + 1);
      }}
    >
      <ButtonIcon as={ChevronDown} mr="$1" />
      <ButtonText>Show More</ButtonText>
    </Button>
  );
};

export default ShowMore;

const styles = StyleSheet.create({});
