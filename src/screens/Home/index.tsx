import { Header } from '@src/components/Header';
import { Input } from '@src/components/Input';
import theme from '@src/styles/theme';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import React from 'react';
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native';

import { Container, PageContent } from './styles';
import { PokemonList } from '@src/components/ui/templates/PokemonList';
import { PokemonCard } from '@src/components/ui/organisms/PokemonCard';

export function Home() {
  function handleTextChange() {}

  function handleGetCharacters() {}

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
        {/* <PokemonList /> */}
        <PokemonCard />
      </PageContent>
    </Container>
  );
}
