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
  }[];
  height?: number;
  weight?: number;
}

interface IPokemonContextData {
  pokemon: PokemonProps;
  pokemons: PokemonProps[];
  loadPokemons(name?: string): void;
  loadPokemon(name?: string): void;
  clearPokemon: () => void;
}

const PokemonContext = createContext({} as IPokemonContextData);

function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pokemon, setPokemon] = useState<PokemonProps>({} as PokemonProps);

  async function loadPokemons(name: string) {
    try {
      const response = await getPokemons(name);

      setPokemons(response.data.results);
    } catch (error) {}
  }

  async function loadPokemon(name: string) {
    try {
      const response = await getPokemon(name);

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
        clearPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );

  function clearPokemon() {
    setPokemon({} as PokemonProps);
  }
}

function usePokemon() {
  const context = useContext(PokemonContext);

  return context;
}

export { PokemonProvider, usePokemon };
