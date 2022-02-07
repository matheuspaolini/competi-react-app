import { useContext } from 'react';

import * as S from './styles';

import { competiLogo, pokemonLogo } from '../../assets';

import { AppContext } from '../../context/App';
import { Link } from 'react-router-dom';

export default function Header() {
  const { searchValue, setSearchValue, isAuth, username } = useContext(AppContext);

  return (
    <S.Container>
      <S.Flex>
        <Link to="/">
          <S.PokemonLogo draggable={false} src={pokemonLogo} />
        </Link>
        
        <S.Input
          type="text"
          placeholder="Pesquisar Pokémon"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </S.Flex>

      <S.Flex style={{ width: 'unset' }}>
        {isAuth ? (
          <Link to="/pokedex">
            <S.Username>{username}</S.Username>
          </Link>
        ) :(
          <Link to="/auth">
            <S.Login>Login</S.Login>
          </Link>
        )}

        <S.CompetiLogo draggable={false} src={competiLogo} />
      </S.Flex>
    </S.Container>
  );
}
