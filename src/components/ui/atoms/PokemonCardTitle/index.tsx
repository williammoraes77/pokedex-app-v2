import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
}

export function PokemonCardTitle({ title }: Props) {
  return <Container numberOfLines={1}>{title}</Container>;
}
