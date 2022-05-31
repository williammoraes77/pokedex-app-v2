import React from 'react';
import { PokemonCardImage } from '../../atoms/PokemonCardImage';
import { PokemonCardFooter } from '../../molecules/PokemonCardFooter';

import { Container, ImageContent } from './styles';

export function PokemonCard() {
  return (
    <Container>
      <ImageContent>
        <PokemonCardImage image_url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png" />
      </ImageContent>
      <PokemonCardFooter />
    </Container>
  );
}
