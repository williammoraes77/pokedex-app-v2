import React from 'react';

import { Container, Title } from './styles';

import { getColorType } from '../../utils/getPokeInfo';

interface Props {
  title: string;
}

export function PokemonType({ title }: Props) {
  const typeColor = getColorType(title);

  return (
    <Container title={title} type_color={typeColor}>
      <Title>{title}</Title>
    </Container>
  );
}
