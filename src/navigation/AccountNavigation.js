import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Account from "../screens/Account";

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountScreen" component={Account} />
    </Stack.Navigator>
  );
}
