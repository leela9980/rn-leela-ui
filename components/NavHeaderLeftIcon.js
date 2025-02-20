import { Platform, View } from "react-native";
import React from "react";
import { ArrowLeft } from "lucide-react-native";
import { Link, Icon } from "@/components/ui/";

const NavHeaderLeftIcon = ({ navigation, ...rest }) => {
  return (
    <View style={{ marginLeft: 5 }}>
      <Link onPress={() => {
        // if (navigation.canGoBack()) {
        console.log('navigate back');
        navigation.goBack();
        // } else {
        //     if (Platform.OS === "web") {
        //         console.log('web back');
        //         window.history.back();
        //     }
        // }
      }}>
        <Icon as={ArrowLeft} size="xl" />
      </Link>
    </View>
  );
};

export default NavHeaderLeftIcon;
