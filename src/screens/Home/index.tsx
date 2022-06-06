import React, { useEffect } from 'react';
import { Header } from '@src/components/Header';
import { Input } from '@src/components/Input';
import theme from '@src/styles/theme';

import { Container, PageContent, ListContent } from './styles';
import { PokemonList } from '@src/components/ui/templates/PokemonList';
import { usePokemon } from '@src/hooks/pokemon';

export function Home() {
  const { loadPokemons, pokemons } = usePokemon();

  function handleTextChange() {}

  function handleGetCharacters() {}

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <Container>
      <Header />
      <PageContent>
        <Input
          placeholder="Buscar Pokemon"
          placeholderTextColor={theme.colors.line}
          icon="search"
          handlePress={handleTextChange}
          onChangeText={handleGetCharacters}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <ListContent>
          <PokemonList />
        </ListContent>
      </PageContent>
    </Container>
  );
}
