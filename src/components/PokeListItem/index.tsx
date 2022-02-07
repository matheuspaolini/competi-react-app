import { useState } from 'react';

import { PokemonCardData } from '../../services/PokeAPI/types';

import Mobile from './components/Mobile';
import Desktop from './components/Desktop';

import PokemonDetails from '../PokemonDetails';

import { Box, Modal } from '@mui/material';

interface PokeListItemProps {
  isMobile?: boolean;
  data: PokemonCardData;
}

export default function PokeListItem({ isMobile, data }: PokeListItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      {isMobile ? <Mobile data={data} setIsModalOpen={setIsModalOpen} /> : <Desktop data={data} setIsModalOpen={setIsModalOpen} />}

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box width="100%" maxWidth="45rem">
          <PokemonDetails id={data?.id} />
        </Box>
      </Modal>
    </>
  );
}
