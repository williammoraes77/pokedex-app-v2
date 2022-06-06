import React from 'react';

import { Container, InfoContent, TypeContent } from './styles';

import { PokemonCardTitle } from '../../atoms/PokemonCardTitle';
import { PokemonCardType } from '../../atoms/PokemonCardType';

interface Props {
  title: string;
  types: {
    type: {
      name: string;
    };
  }[];
}

export function PokemonCardFooter({ title, types }: Props) {
  return (
    <Container>
      <InfoContent>
        <PokemonCardTitle title={title} />
      </InfoContent>
      {types && (
        <TypeContent>
          {types.map((type, index) => (
            <PokemonCardType type={type.type.name} key={index} />
          ))}
        </TypeContent>
      )}
    </Container>
  );
}
