import { useCallback, useEffect, useState, MouseEvent } from 'react';

import axios from 'axios';

import * as S from './styles';
import { FullPokemonData } from '../../services/PokeAPI/pokemon/types';

interface PokemonDetailsProps {
  id: number;
}

export default function PokemonDetails({ id }: PokemonDetailsProps) {
  const [pokemonData, setPokemonData] = useState({} as FullPokemonData);
  const [currentSprite, setCurrentSprite] = useState('');

  const getPokemonInfo = useCallback(async () => {
    const response = await axios.get<FullPokemonData>('https://pokeapi.co/api/v2/pokemon/' + id);
    const { data } = response;

    setCurrentSprite(data?.sprites?.front_default);
    setPokemonData(data);
  }, []);

  const handleChangeSprite = useCallback((e: MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    setCurrentSprite(target.src);
  }, []);

  useEffect(() => {
    getPokemonInfo();
  }, [getPokemonInfo]);

  return (
    <S.Container>
      <S.Title>Pokémon: {pokemonData?.name}</S.Title>
      <S.Paragraph>Weigth: {pokemonData?.weight}</S.Paragraph>
      <S.Paragraph>Species: {pokemonData?.species?.name}</S.Paragraph>

      <S.Image src={currentSprite} />

      <S.MinitatureList>
        <S.Miniature onClick={handleChangeSprite} src={pokemonData?.sprites?.front_default} />
        <S.Miniature onClick={handleChangeSprite} src={pokemonData?.sprites?.back_default} />
      </S.MinitatureList>

      <S.Lists>
        <S.List>
          <S.ListName>ABILITIES:</S.ListName>
          {pokemonData?.abilities?.map((ability) => <S.Field key={ability.ability.name}>{ability.ability.name}</S.Field>)}
        </S.List>

        <S.List>
          <S.ListName>STATS:</S.ListName>
          {pokemonData?.stats?.map((stat) => <S.Field key={stat.stat.name}>{stat.stat.name} - {stat.base_stat} </S.Field>)}
        </S.List>

        <S.List>
          <S.ListName>MOVES:</S.ListName>
          {pokemonData?.moves?.map((move) => <S.Field>{move.move.name}</S.Field>)}
        </S.List>

        <S.List>
          <S.ListName>MOVES:</S.ListName>
        </S.List>
      </S.Lists>
    </S.Container>
  );
}
