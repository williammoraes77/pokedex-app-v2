import { PokemonType } from '@src/components/PokemonType';
import { usePokemon } from '@src/hooks/pokemon';
import React from 'react';
import { RowDetailAbout } from '../../molecules/RowDetailAbout';

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
      <RowDetailAbout title="Name" data={pokemon?.name} />
      <RowDetailAbout title="Height" data={`${pokemon.height! / 10}m`.toString()} />
      <RowDetailAbout title="Weight" data={`${pokemon.weight! / 10}kg`.toString()} />
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
              <PokemonType title={pokemon.types[index].type.name} key={index} />
              <Separator />
            </>
          ))}
        </TypesContent>
      </Row>
    </Container>
  );
}
