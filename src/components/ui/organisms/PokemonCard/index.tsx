import { PokemonProps, usePokemon } from '@src/hooks/pokemon';
import { getPokemon } from '@src/services/source/api/PokemonService';
import React, { useEffect, useState } from 'react';
import { PokemonCardImage } from '../../atoms/PokemonCardImage';
import { PokemonCardFooter } from '../../molecules/PokemonCardFooter';

import { Container, ImageContent } from './styles';

interface Props {
  title: string;
  type: string;
  image_url: string;
  handlePress: () => void;
}

export function PokemonCard({ title, type, image_url, handlePress }: Props) {
  const [pokemon, setPokemon] = useState<PokemonProps>({} as PokemonProps);

  async function loadPokemon(name: string) {
    try {
      const response = await getPokemon(title);

      setPokemon(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    loadPokemon(title);
  }, []);
  return (
    <Container onPress={handlePress}>
      <ImageContent>
        <PokemonCardImage image_url={pokemon.sprites?.other.home.front_default} />
      </ImageContent>
      <PokemonCardFooter title={title} types={pokemon.types} />
    </Container>
  );
}
