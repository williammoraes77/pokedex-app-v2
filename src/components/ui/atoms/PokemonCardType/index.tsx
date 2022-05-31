import React from 'react';

import { Container } from './styles';

interface Props {
  type: string;
}

export function PokemonCardType({ type }: Props) {
  return <Container>{type}</Container>;
}
