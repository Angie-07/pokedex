import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PokedexScreen" component={Pokedex} />
      <Stack.Screen name="PokemonScreen" component={Pokemon} />
    </Stack.Navigator>
  );
}
