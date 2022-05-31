import React from 'react';

import { Container } from './styles';

interface Props {
  image_url: string;
}

export function PokemonCardImage({ image_url }: Props) {
  return <Container source={{ uri: image_url }} />;
}
