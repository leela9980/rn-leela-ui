import {
  View,
  VirtualizedList,
  StyleSheet,
  SafeAreaView,
  Modal,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { codes } from "./countryCodes";
import { HStack, Text } from "@/components/ui/";
import axios from "axios";
import { Button, ButtonText } from "@/components/ui/";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/";
import { SearchIcon } from "lucide-react-native";
import Container from "./Container";

const SelectCountryCode = ({
  onChange,
  value = {
    dial_code: "+61",
    code: "AU",
    flag: "🇦🇺",
    name: { en: "Australia" },
  },
  isDisabled = false,
}) => {
  const [modelShow, setModelShow] = useState(false);
  const [hasfocus, setFocus] = useState(false);
  const [searchstr, setSearchStr] = useState("");

  const handleModel = () => {
    setModelShow(!modelShow);
    setFocus(false);
  };
  const onItemPress = (item) => {
    onChange(item);
    handleModel();
  };
  const handleFocus = () => setFocus(!hasfocus);

  const getItemCount = (data) => data.length;
  const getItem = (data, index) => data[index];
  const getData = () => {
    const filtered = codes.filter((item) => {
      return (
        item.name.en.toLowerCase().includes(searchstr.toLowerCase()) ||
        item.dial_code.includes(searchstr)
      );
    });

    if (filtered.length === 0) {
      return [{ name: { en: "No results found" }, code: "" }];
    }

    return filtered;
  };

  useEffect(() => {
    if (process.env.EXPO_PUBLIC_LOCAL_USE_MOCKS !== "true") {
      axios
        .get("https://api.country.is")
        .then((response) => {
          const code = codes.find(
            (item) => item.code === response.data.country
          );
          if (code) {
            onChange(code);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <View onMouseEnter={handleFocus} onMouseLeave={handleFocus}>
      <Button
        size="lg"
        testID="countrycode"
        variant="outline"
        action="primary"
        onPress={handleModel}
        style={styles.card}
        isDisabled={isDisabled}
      >
        <ButtonText>
          {value.flag} {value.dial_code}{" "}
        </ButtonText>
      </Button>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modelShow}
        onRequestClose={handleModel}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <SafeAreaView style={styles.container}>
              <Input variant="outline" size="lg">
                <InputSlot pl="$3">
                  <InputIcon as={SearchIcon} />
                </InputSlot>
                <InputField
                  placeholder="Search..."
                  onChangeText={setSearchStr}
                  value={searchstr}
                />
              </Input>
              <VirtualizedList
                style={{ minWidth: "95%" }}
                getItemCount={getItemCount}
                getItem={getItem}
                renderItem={({ item }) => (
                  <Pressable onPress={() => onItemPress(item)}>
                    <Container>
                      <HStack space="lg" style={styles.viewStack}>
                        <Text size="lg">{item.flag}</Text>

                        <Text size="lg">{item.dial_code}</Text>

                        <Text size="lg"> {item.name.en}</Text>
                      </HStack>
                    </Container>
                  </Pressable>
                )}
                keyExtractor={(item) => item.code}
                initialNumToRender={4}
                data={getData()}
              />

              <Button
                size="sm"
                variant="outline"
                action="primary"
                onPress={handleModel}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
            </SafeAreaView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    minWidth: "95%",
  },
  card: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 350,
  },
  viewStack: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
  },
});

export default SelectCountryCode;
