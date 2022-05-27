import React from 'react';

import {
  Container,
  ImageContent,
  PokemonCardImage,
  Footer,
  InfoContent,
  NameText,
  TypeContent,
  TypeTitle,
} from './styles';

export function PokemonCard() {
  return (
    <Container>
      <ImageContent>
        <PokemonCardImage
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png',
          }}
          resizeMode="contain"
        />
      </ImageContent>
      <Footer>
        <InfoContent>
          <NameText numberOfLines={1}>Name</NameText>
        </InfoContent>
        <TypeContent>
          <TypeTitle>Normal</TypeTitle>
          <TypeTitle>Normal</TypeTitle>
        </TypeContent>
      </Footer>
    </Container>
  );
}
