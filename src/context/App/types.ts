import React from 'react';

import { NameWithURL, PokemonCardData } from '../../services/PokeAPI/types';

export interface AppProviderProps {
  children: React.ReactNode;
}

export interface AppContextProps {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;

  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;

  bag: number[];
  setBag: React.Dispatch<React.SetStateAction<number[]>>;

  addPokemon: (id: number) => void;
  removePokemon: (id: number) => void;

  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;

  isLoading: boolean;

  showcaseLength: number;
  offset: number;

  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  debouncedSearchValue: string;

  pokemons: PokemonCardData[];

  types: NameWithURL[];
  pokemonsByType: PokemonCardData[];

  currentType: string;
  setCurrentType: React.Dispatch<React.SetStateAction<string>>;
}
