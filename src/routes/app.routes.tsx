import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@src/screens/Home';
import { PokemonDetails } from '@src/screens/PokemonDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="PokemonDetails" component={PokemonDetails} />
    </Navigator>
  );
}
