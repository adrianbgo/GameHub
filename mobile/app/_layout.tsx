import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Layout = () => {
  return (
    <GestureHandlerRootView>
      <Stack initialRouteName="index" />
    </GestureHandlerRootView>
  );
};

export default Layout;
