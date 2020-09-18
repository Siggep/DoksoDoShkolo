import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import LoginScreen from "./app/screens/LoginScreen";
import AccordionList from "./app/components/AccordionList";
import PriceSelect from "./app/components/FilterItems/PriceSelect";

export default function App() {
  return (
    // <AccordionList />
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
