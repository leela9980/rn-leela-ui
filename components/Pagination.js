import { StyleSheet, View } from "react-native";
import React from "react";
import { HStack, VStack } from "@/components/ui/";
import { Button, ButtonIcon, ButtonText, Text } from "@/components/ui/";
import { ChevronRight, ChevronLeft } from "lucide-react-native";

const Pagination = ({ current = 1, total = 1, onNext, onPrev }) => {
  if (total === 1) {
    return <View />;
  }

  return (
    <View>
      <VStack space="sm">
        <Text>
          Page {current} of {total}
        </Text>

        <HStack>
          <Button
            size="md"
            variant="outline"
            action="primary"
            style={styles.prev}
            onPress={onPrev}
            isDisabled={current === 1}
          >
            <ButtonText>Prev </ButtonText>
            <ButtonIcon as={ChevronLeft} />
          </Button>

          <Button
            size="md"
            variant="outline"
            action="primary"
            style={styles.next}
            onPress={onNext}
            isDisabled={current === total}
          >
            <ButtonText>Next </ButtonText>
            <ButtonIcon as={ChevronRight} />
          </Button>
        </HStack>
      </VStack>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  prev: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  next: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
