import { useCallback, useContext } from 'react';

import { AppContext } from '../../context/App';

import * as S from './styles';

import { competiLogo, pokemonLogo } from '../../assets';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const { setUsername, isAuth, setIsAuth } = useContext(AppContext);

  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    if (isAuth) return;

    setIsAuth(true);
  }, [isAuth]);

  if (isAuth) navigate('/');

  return (
    <S.Container>
      <S.Main>
        <img src={pokemonLogo} alt="" />

        <S.Input type="text" autoFocus onChange={(e) => setUsername(e.target.value)} placeholder="Usuário" />
        <S.Input type="password" placeholder="Senha" />

        <S.Button onClick={handleLogin}>Login</S.Button>
      </S.Main>

      <S.CompetiLogo src={competiLogo} alt="" />
    </S.Container>
  );
}
