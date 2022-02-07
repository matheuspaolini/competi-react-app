import axios from 'axios';

import { createContext, useCallback, useEffect, useState } from 'react';

import useDebounce from '../../hooks/useDebounce';

import { ListOfPokemonByTypeResponse, TypesResponse, NameWithURL, PokemonCardData, PokemonsResponse } from '../../services/PokeAPI/types';

import * as T from './types';

export const AppContext = createContext({} as T.AppContextProps);

const { Provider } = AppContext;

export default function AppProvider({ children }: T.AppProviderProps) {
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState('');

  const [bag, setBag] = useState<number[]>([]);

  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const [pokemons, setPokemons] = useState<PokemonCardData[]>([]);

  const [types, setTypes] = useState<NameWithURL[]>([]);
  const [currentType, setCurrentType] = useState('');
  
  const [pokemonsByType, setPokemonsByType] =
    useState<PokemonCardData[]>([]);

  const showcaseLength = 6;
  const offset = page * showcaseLength;

  const getPokemons = useCallback(async () => {
    if (currentType) return;

    setIsLoading(true);

    const params = { offset, limit: 6 };

    if (debouncedSearchValue.length) {
      const response = await axios.get<PokemonCardData>('https://pokeapi.co/api/v2/pokemon/' + debouncedSearchValue);
      const { data } = response;

      setCount(1);
      setPokemons([data]);

      return;
    }

    const response = await axios.get<PokemonsResponse>('https://pokeapi.co/api/v2/pokemon/', { params });

    const { data } = response;

    const promises = data.results
      .map((item) => item)
      .map(({ url }) => axios.get<PokemonCardData>(url));

    const responses = await Promise.all(promises);

    setCount(Math.floor(data.count / showcaseLength));
    setPokemons(responses.map((response) => response.data));

    setIsLoading(false);
  }, [debouncedSearchValue.length, currentType, offset]);

  const getTypes = useCallback(async () => {
    const response = await axios.get<TypesResponse>('https://pokeapi.co/api/v2/type/');
    const { data } = response;
    const { results } = data;

    setTypes(results);
  }, []);

  const getPokemonsByType = useCallback(async () => {
    if (!currentType) return;
    setIsLoading(true);

    const response = await axios.get<ListOfPokemonByTypeResponse>(
      'https://pokeapi.co/api/v2/type/' + currentType
    );
    const { data } = response;
    const { pokemon } = data;

    const promises = pokemon
      .map((data) => data.pokemon)
      .map((item) => axios.get<PokemonCardData>(item.url));
    
    const responses = await Promise.all(promises);

    setPokemonsByType(responses.map((data) => data.data));
    setIsLoading(false);
  }, [currentType]);

  const addPokemon = useCallback((id: number) => {
    if (bag.includes(id)) return;
    
    setBag((previous) => ([...previous, id]));
  }, [bag]);

  const removePokemon = useCallback((id: number) => {
    setBag((previous) => previous.filter((previousId) => previousId !== id));
  }, []);

  useEffect(() => {
    getTypes();
  }, []);

  useEffect(() => {
    getPokemonsByType();
  }, [getPokemonsByType]);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  const values = ({
    isAuth,
    setIsAuth,
    username,
    setUsername,

    bag,
    setBag,

    addPokemon,
    removePokemon,

    page,
    setPage,
    count,
    setCount,

    isLoading,

    showcaseLength,
    offset,

    searchValue,
    setSearchValue,
    debouncedSearchValue,

    pokemons,

    types,
    pokemonsByType,

    currentType,
    setCurrentType,
  });

  return (
    <Provider value={values}>
      {children}
    </Provider>
  );
}
