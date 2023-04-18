import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MapHomeScreen from "../screens/MapHomeScreen";

const NativeStack = createNativeStackNavigator();

const MapHomeNavigator = () => (
  <NativeStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      navigationBarHidden: false,
      navigationBarColor: "transparent",
      animation: "fade",
      animationDuration: 200,
    }}
    initialRouteName={"MAPINDEX"}
  >
    <NativeStack.Screen name={"MAPINDEX"} component={MapHomeScreen} />


    {/* bottomsheet */}

  </NativeStack.Navigator>
);

export default MapHomeNavigator;
