import axios from 'axios';
import { useCallback, useContext, useEffect, useState } from 'react';
import Loader from '../../components/Loader';

import PokeListItem from '../../components/PokeListItem';

import { AppContext } from '../../context/App';

import useWindowSize from '../../hooks/useWindowSize';
import { PokemonCardData } from '../../services/PokeAPI/types';

import * as S from './styles';

export default function User() {
  const { bag } = useContext(AppContext);

  const { width } = useWindowSize();

  const [pokemons, setPokemons] = useState<PokemonCardData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const isMobile = !!width && width <= 380;

  const getPokemonList = useCallback(async () => {
    setIsLoading(true);

    const promises = bag.map((id) => axios.get<PokemonCardData>('https://pokeapi.co/api/v2/pokemon/' + id));
    const responses = await Promise.all(promises);

    setPokemons(responses.map((response) => response.data));
    setIsLoading(false);
  }, [bag]);

  useEffect(() => {
    getPokemonList();
  }, [getPokemonList]);

  return (
    <S.Container>
      <S.Main>
        <S.Title>Pokedex Usuário</S.Title>

        <S.Fields isMobile={isMobile}>
          <S.Flex isMobile={isMobile}>
            <S.Field>Foto</S.Field>
            <S.Field>Nome</S.Field>
          </S.Flex>

          <S.TypeField>Tipo</S.TypeField>
          <S.ActionField>Ação</S.ActionField>
        </S.Fields>

        <S.List>
          <S.Empty></S.Empty>

          {isLoading 
            ? <Loader />
            : pokemons.map((data) => <PokeListItem key={data.name} isMobile={isMobile} data={data} />)}
        </S.List>
      </S.Main>
    </S.Container>
  );
}
