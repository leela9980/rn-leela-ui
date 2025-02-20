import { StyleSheet, View } from "react-native";
import React from "react";
import useIsMobile from "../../common/hooks/useIsMobile";
import { ScrollView } from "react-native";

const Container = ({ children, noScrollView = false, style, testID }) => {
  const isMobile = useIsMobile();

  return (
    <View style={[isMobile ? styles.container : styles.containerWeb, style]} testID={testID}>
      {noScrollView ? (
        children
      ) : (
        <ScrollView
          automaticallyAdjustKeyboardInsets={true}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      )}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  containerWeb: {
    width: 500,
    alignSelf: "center",
    flex: 1,
    padding: 20,
  },
  container: {
    width: "100%",
    alignSelf: "center",
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
});
