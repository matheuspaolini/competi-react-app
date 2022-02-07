import { useContext } from 'react';

import { v4 } from 'uuid';

import { AppContext } from '../../context/App';
import { PokemonCardData } from '../../services/PokeAPI/types';
import Loader from '../Loader';

import PokeCard from '../PokeCard';

import * as S from './styles';

export default function Showcase({ data }: { data: PokemonCardData[]}) {
  const { isLoading } = useContext(AppContext);

  return (
    <S.Container>
      <S.List>
        {isLoading 
          ? <Loader />
          : data?.map((data) => <PokeCard key={v4()} data={data} />)}
      </S.List>
    </S.Container>
  );
}
