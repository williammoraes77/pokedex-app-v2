import AppLoading from 'expo-app-loading';

import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from '@expo-google-fonts/roboto-condensed';

import { Routes } from '@src/routes';
import theme from '@src/styles/theme';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { PokemonProvider } from '@src/hooks/pokemon';

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <PokemonProvider>
        <StatusBar barStyle={'light-content'} />
        <Routes />
      </PokemonProvider>
    </ThemeProvider>
  );
}
