import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Favorite from "../screens/Favorite";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoriteScreen" component={Favorite} />
    </Stack.Navigator>
  );
}
