import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MapHomeNavigator from "./MapHomeNavigator";

export const AppNavigator = () => {

  return (
    <NavigationContainer ><MapHomeNavigator /></NavigationContainer>
  );
};

export default AppNavigator;
