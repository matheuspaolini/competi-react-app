import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowDropright } from 'react-icons/io';
import { v4 } from 'uuid';
import useWindowSize from '../../hooks/useWindowSize';
import { PokemonCardData } from '../../services/PokeAPI/types';
import { changeNumberByOne, createRange } from '../../utils';

import PokeCard from '../PokeCard';

import * as S from './styles';

export default function Slider() {
  const { width } = useWindowSize();

  const [page, setPage] = useState(0);

  const [randomPokemons, setRandomPokemons] = useState<PokemonCardData[]>([]);

  const isMobile = !!width && width <= 1024;

  const handleNextPage = useCallback(() => {
    const isLastPage = page === 2;

    if (isLastPage) return setPage(0);

    setPage(changeNumberByOne(true));
  }, [page]);

  const handlePreviousPage = useCallback(() => {
    const isFirstPage = page === 0;

    if (isFirstPage) return setPage(2);

    setPage(changeNumberByOne(false));
  }, [page]);

  const getRandomPokemons = useCallback(async () => {
    const generateRandomID = () => Math.floor(Math.random() * 150) + 1;

    const promises = createRange(15)
      .map(() => axios.get<PokemonCardData>('https://pokeapi.co/api/v2/pokemon/' + generateRandomID()));

    const response = await Promise.all(promises);

    setRandomPokemons(response.map((data) => data.data));
  }, []);

  const pokemonsToShow = 5;
  const offset = page * pokemonsToShow;
  const currentList = isMobile ? randomPokemons : randomPokemons.slice(offset, offset + pokemonsToShow);

  useEffect(() => {
    getRandomPokemons();
  }, [getRandomPokemons]);

  return (
    <S.Container>
      <S.List>
        <S.Arrow onClick={handlePreviousPage}>
          <IoIosArrowBack size="1.125rem" />
        </S.Arrow>

        {currentList.map((data) => <PokeCard key={data.name} isRandom data={data} />)}

        <S.Arrow onClick={handleNextPage}>
          <IoIosArrowForward size="1.125rem" />
        </S.Arrow>
      </S.List>

      <S.Pages>
        {createRange(3).map((_, i) => <S.Page key={v4()} isSelected={page === i} />)}
      </S.Pages>
    </S.Container>
  );
}
