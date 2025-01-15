import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getPokemonApi, getPokemonDetailsApi } from "../api/Pokemon";
import PokemonsList from "../components/PokemonsList";

export default function Pokedex() {
  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    (async () => {
      await getPokemons();
    })();
  }, []);

  const getPokemons = async () => {
    try {
      const response = await getPokemonApi();
      const pokemonsArray = [];

      for await (const p of response.results) {
        const pokemonDetails = await getPokemonDetailsApi(p.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
        setPokemonsList([...pokemonsList, ...pokemonsArray]);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <View>
      <PokemonsList pokemons={pokemonsList} />
    </View>
  );
}
