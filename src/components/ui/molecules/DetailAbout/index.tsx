import { PokemonType } from '@src/components/PokemonType';
import { usePokemon } from '@src/hooks/pokemon';
import React from 'react';

import {
  Container,
  Row,
  Title,
  InfoText,
  InfoButton,
  InfoButtonContent,
  InfoButtonText,
  TypesContent,
  Separator,
} from './styles';

export function DetailAbout() {
  const { pokemon } = usePokemon();
  return (
    <Container>
      <Row>
        <Title>Name</Title>
        <InfoText>{pokemon?.name}</InfoText>
      </Row>
      <Row>
        <Title>Height</Title>
        <InfoText>{pokemon.height! / 10}m</InfoText>
      </Row>
      <Row>
        <Title>Weight</Title>
        <InfoText>{pokemon.weight! / 10} Kg</InfoText>
      </Row>
      <Row>
        <Title>Abilities</Title>
        <InfoButton>
          <InfoButtonContent>
            <InfoButtonText>See All</InfoButtonText>
          </InfoButtonContent>
        </InfoButton>
      </Row>
      <Row>
        <Title>Type</Title>
        <TypesContent>
          {pokemon.types.map((type, index) => (
            <>
              <PokemonType title={pokemon.types[index].type.name} />
              <Separator />
            </>
          ))}
        </TypesContent>
      </Row>
    </Container>
  );
}
