import { PokemonEvolution } from '@src/components/PokemonEvolution';
import { PokemonType } from '@src/components/PokemonType';
import { usePokemon } from '@src/hooks/pokemon';
import React, { useState } from 'react';
import { DetailAbout } from '../../molecules/DetailAbout';

import {
  Container,
  NavOptions,
  WrapperNavOptions,
  OptionNav,
  DataContent,
  Row,
  Title,
  InfoText,
  TypesContent,
  InfoButton,
  InfoButtonText,
  InfoButtonContent,
  StatsContent,
  RowStats,
  Value,
  TitleStats,
  EvolutionContent,
  ArrowDown,
  EvolutionsContent,
  PokeItem,
} from './styles';

export function DetailInfo() {
  const [select, setSelect] = useState('about');

  const { pokemon, clearPokemon } = usePokemon();
  return (
    <Container>
      <NavOptions>
        <WrapperNavOptions selected={select === 'about'} onPress={() => setSelect('about')}>
          <OptionNav selected={select === 'about'}>About</OptionNav>
        </WrapperNavOptions>
        <WrapperNavOptions selected={select === 'stats'} onPress={() => setSelect('stats')}>
          <OptionNav selected={select === 'stats'}>Stats</OptionNav>
        </WrapperNavOptions>
        <WrapperNavOptions selected={select === 'evolution'} onPress={() => setSelect('evolution')}>
          <OptionNav selected={select === 'evolution'}>Evolution</OptionNav>
        </WrapperNavOptions>
      </NavOptions>
      <DataContent>
        {select === 'about' && <DetailAbout />}

        {select === 'evolution' && <Title>Teste</Title>}
      </DataContent>
    </Container>
  );
}
