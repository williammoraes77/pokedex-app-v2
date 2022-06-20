import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PokemonCard } from '../../organisms/PokemonCard';

import { Container, Separator } from './styles';

import { usePokemon, PokemonProps } from '@src/hooks/pokemon';
import { RootStackParamList } from '@src/utils/RootStackParams';

type NavProps = NativeStackNavigationProp<RootStackParamList, 'PokemonDetails'>;

export function PokemonList() {
  const { pokemons, loadPokemon, pokemon } = usePokemon();
  const { navigate } = useNavigation<NavProps>();

  function handlePokemon(pokemon_name: string) {
    loadPokemon(pokemon_name);
  }

  useEffect(() => {
    if (pokemon && pokemon?.height && pokemon.height !== null) {
      navigate('PokemonDetails');
    }
  }, [pokemon]);

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
          handlePress={() => handlePokemon(item.name)}
        />
      )}
    />
  );
}
