import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Container } from './styles';

import { api } from '../../services/api';
import { getColorType, getStatsAbbreviation } from '../../utils/getPokeInfo';
import { Load } from '../../components/Load';

import { usePokemon } from '@src/hooks/pokemon';
import { HeaderPokemonDetail } from '@src/components/ui/molecules/HeaderPokemonDetail';
import { DetailPokemonImage } from '@src/components/ui/atoms/DetailPokemonImage';
import { DetailInfo } from '@src/components/ui/templates/DetailInfo';

interface PokemonListPorps {
  name: string;
  url: string;
}
export function PokemonDetails() {
  const { pokemon, clearPokemon } = usePokemon();

  const navigation = useNavigation();
  const [typeColor, setTypeColor] = useState('#000');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    console.log(pokemon);
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    try {
      const pokeResult = await api.get(`/pokemon/${pokemon.name}`);
      const color = getColorType(pokeResult.data.types[0].type.name);
      setTypeColor(color);
      const species = await api.get(`/pokemon-species/${pokeResult.data.id}/`);

      const chain = await api.get(species.data.evolution_chain.url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }

  function handleBack() {
    clearPokemon();
    navigation.goBack();
  }

  return (
    <Container background_color={typeColor}>
      <HeaderPokemonDetail handlePress={handleBack} />
      {load ? (
        <Load />
      ) : (
        <>
          <DetailPokemonImage image={pokemon.sprites.other.home.front_default} />

          <DetailInfo />
        </>
      )}
    </Container>
  );
}
