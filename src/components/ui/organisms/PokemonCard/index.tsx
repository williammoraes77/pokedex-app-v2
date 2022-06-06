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
}

export function PokemonCard({ title, type, image_url }: Props) {
  const [pokemon, setPokemon] = useState<PokemonProps>({} as PokemonProps);

  async function loadPokemon(name: string) {
    try {
      const response = await getPokemon(title);
      // console.log(response.data);
      // console.log(response.data.sprites.other.home.front_default);
      // console.log(response.data.types[0].type.name);
      // console.log(response.data.types[0].type.name);
      setPokemon(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    loadPokemon(title);
  }, []);
  return (
    <Container>
      <ImageContent>
        <PokemonCardImage image_url={pokemon.sprites?.other.home.front_default} />
      </ImageContent>
      <PokemonCardFooter title={title} types={pokemon.types} />
    </Container>
  );
}
