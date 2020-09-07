import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import MyListingsScreen from "../screens/MyListingsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Mitt Konto" component={AccountScreen} />
    <Stack.Screen name="Inställningar" component={MyAccountScreen} />
    <Stack.Screen name="Mina Enheter" component={MyListingsScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
