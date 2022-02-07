import { useCallback, useContext, useState } from 'react';

import * as S from './styles';

import { PokeCardProps } from './types';

import { AiFillEye, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineDone } from 'react-icons/md';

import { AppContext } from '../../context/App';

import { toast } from 'react-toastify';
import { Modal } from '@mui/material';

import PokemonDetails from '../PokemonDetails';

import { Box } from '@mui/material';

export default function PokeCard({ data, isRandom }: PokeCardProps) {
  const { isAuth, bag, addPokemon } = useContext(AppContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = useCallback(() => setIsMouseOver(true), []);
  const handleMouseLeave = useCallback(() => setIsMouseOver(false), []);

  const handleAddPokemon = useCallback(() => {
    if (!isAuth) return toast.info('Você precisa estar autenticado para capturar um Pokémon.');

    addPokemon(data.id);
  }, [isAuth]);

  const handleOpenDetails = useCallback(() => setIsModalOpen(true), []);

  const hasPokemon = bag.includes(data.id);

  return (
    <>
      <S.Container>
        <S.Main onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
          <S.Image src={data?.sprites?.front_default} />

          <S.Number
            data-number={data?.id}
            isRandom={isRandom}
          />

          <S.Type isRandom={isRandom}>
            {data?.types[0]?.type?.name}
          </S.Type>

          <S.Name>{data?.name}</S.Name>

          {isMouseOver && (
            <S.Flex>
              <S.Button background="#49DBDF" onClick={handleOpenDetails}>
                <AiFillEye size="1.25rem" />
              </S.Button>

              <S.Button background="#3AA05B" onClick={handleAddPokemon}>
                {hasPokemon ?  <MdOutlineDone size="1.25rem" /> : <AiOutlinePlus size="1.25rem" />}
              </S.Button>
            </S.Flex>
          )}
        </S.Main>
      </S.Container>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box width="100%" maxWidth="45rem">
          <PokemonDetails id={data?.id} />
        </Box>
      </Modal>
    </>
  );
}
