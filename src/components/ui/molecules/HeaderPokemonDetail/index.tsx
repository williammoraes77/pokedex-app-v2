import React from 'react';

import { Container, BackButton, Icon } from './styles';

interface Props {
  handlePress: () => void;
}

export function HeaderPokemonDetail({ handlePress }: Props) {
  return (
    <Container>
      <BackButton onPress={handlePress}>
        <Icon name="arrow-left" />
      </BackButton>
    </Container>
  );
}
