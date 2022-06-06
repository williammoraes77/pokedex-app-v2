import React from 'react';
import { PokemonCard } from '../../organisms/PokemonCard';

import { Container, Separator } from './styles';

import { usePokemon, PokemonProps } from '@src/hooks/pokemon';

export function PokemonList() {
  const { pokemons } = usePokemon();
  // console.log(pokemons);

  return (
    <Container
      data={pokemons}
      keyExtractor={(item: PokemonProps) => item.name}
      numColumns={2}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }: { item: PokemonProps }) => (
        <PokemonCard
          title={item.name}
          type="Normal"
          image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
        />
      )}
    />
  );
}
