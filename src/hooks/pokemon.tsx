import React, { ReactNode, createContext, useContext, useState } from 'react';

import { getPokemons, getPokemon } from '@src/services/source/api/PokemonService';

type PokemonProviderProps = {
  children: ReactNode;
};

export interface PokemonProps {
  url?: string;
  name: string;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  };
}

interface IPokemonContextData {
  pokemon: PokemonProps;
  pokemons: PokemonProps[];
  loadPokemons(name?: string): void;
  loadPokemon(name?: string): void;
}

const PokemonContext = createContext({} as IPokemonContextData);

function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pokemon, setPokemon] = useState<PokemonProps>({} as PokemonProps);

  async function loadPokemons(name: string) {
    try {
      const response = await getPokemons(name);
      // console.log(response);
      setPokemons(response.data.results);
    } catch (error) {}
  }

  async function loadPokemon(name: string) {
    try {
      const response = await getPokemon(name);
      // console.log(response.data.sprites.other.home.front_default);
      setPokemon(response.data);
    } catch (error) {}
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        pokemon,
        loadPokemons,
        loadPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

function usePokemon() {
  const context = useContext(PokemonContext);

  return context;
}

export { PokemonProvider, usePokemon };
