import { PokemonCardData } from '../../services/PokeAPI/types';

export interface PokeCardProps {
  data: PokemonCardData;

  isRandom?: boolean;
}
