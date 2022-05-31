import React from 'react';

import { Container, InfoContent, TypeContent } from './styles';

import { PokemonCardTitle } from '../../atoms/PokemonCardTitle';
import { PokemonCardType } from '../../atoms/PokemonCardType';

export function PokemonCardFooter() {
  return (
    <Container>
      <InfoContent>
        <PokemonCardTitle title="Bulba" />
      </InfoContent>
      <TypeContent>
        <PokemonCardType type="Normal" />
        <PokemonCardType type="Planta" />
      </TypeContent>
    </Container>
  );
}
