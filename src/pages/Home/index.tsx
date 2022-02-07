import { useContext } from 'react';

import Filter from '../../components/Filter';
import Pagination from '../../components/Pagination';
import Showcase from '../../components/Showcase';
import Slider from '../../components/Slider';

import { AppContext } from '../../context/App';

import * as S from './styles';

export default function Home() {
  const { page, setPage, count, offset, showcaseLength, pokemons, pokemonsByType, currentType } = useContext(AppContext);

  const pageCount = !!currentType 
    ? Math.floor(pokemonsByType.length / showcaseLength) 
    : count;

  const currentPokemonList = !!currentType 
    ? pokemonsByType.slice(offset, offset + showcaseLength)
    : pokemons;

  return (
    <S.Container>
      <Filter />
      <Showcase data={currentPokemonList} />

      <Pagination count={pageCount} page={page} setPage={setPage} />

      <Slider />
    </S.Container>
  );
}
