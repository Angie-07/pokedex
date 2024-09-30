import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image } from "react-native";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        headerShown: false,
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{ tabBarLabel: "", tabBarIcon: () => renderPokeballIcon() }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeballIcon() {
  return (
    <Image
      source={require("../../assets/pokeball.png")}
      style={{ width: 65, height: 65, bottom: 15 }}
    />
  );
}
