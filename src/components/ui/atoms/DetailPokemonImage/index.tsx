import React from 'react';

import { Container, PokeImgPng } from './styles';

interface Props {
  image: string;
}

export function DetailPokemonImage({ image }: Props) {
  return (
    <Container>
      <PokeImgPng
        source={{
          uri: image,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
