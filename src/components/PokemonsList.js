import React from "react";
import { FlatList } from "react-native";
import { Text } from "react-native";

export default function PokemonsList(props) {
  const { pokemons } = props;
  return (
    <FlatList
      data={pokemons}
      keyExtractor={(p) => String(p.id)}
      renderItem={({item}) => <Text>{item.name}</Text>}
    />
  );
}
