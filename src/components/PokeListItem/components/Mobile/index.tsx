import * as S from './styles';

import { AiFillEye } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { PokemonCardData } from '../../../../services/PokeAPI/types';
import { useCallback, useContext } from 'react';
import { AppContext } from '../../../../context/App';

interface MobileProps {
  data: PokemonCardData;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Mobile({ data, setIsModalOpen }: MobileProps) {
  const { removePokemon } = useContext(AppContext);

  const handleRemovePokemon = useCallback(() => {
    removePokemon(data?.id);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <S.Container>
      <S.Image src={data?.sprites.front_default} />

      <S.Name>Nome: {data?.name}</S.Name>

      <S.Type>Tipo: {data?.types[0]?.type?.name}</S.Type>

      <S.Buttons>
        <S.Button background="#49DBDF" onClick={handleOpenModal}>
          <AiFillEye size="1.25rem" />
        </S.Button>

        <S.Button background="#F25D52" onClick={handleRemovePokemon}>
          <FaTrashAlt size="1.25rem" />
        </S.Button>
      </S.Buttons>
    </S.Container>
  );
}
