import React from 'react';

import { Container } from './styles';

interface Props {
  image_url: string;
}

export function PokemonCardImage({ image_url }: Props) {
  return (
    <Container
      source={{
        uri:
          image_url ||
          'https://proofmart.com/wp-content/uploads/2021/06/loading-icon-3-product-1-600x600.png',
      }}
    />
  );
}
