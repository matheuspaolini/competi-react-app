import { useEffect } from 'react';
import { ChangeEvent, useCallback, useContext } from 'react';

import { AppContext } from '../../context/App';

import * as S from './styles';

export default function Filter() {
  const { setCurrentType, types } = useContext(AppContext);

  const handleChangeType = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentType(e.target.value);
  }, []);

  return (
    <S.Container>
      <S.Label>Filter</S.Label>

      <S.Select defaultValue="" onChange={handleChangeType}>
        <S.Option value="">Sem filtro</S.Option>

        {types.map(({ name }) => 
          <S.Option key={name} value={name}>{name}</S.Option>)}
      </S.Select>
    </S.Container>
  );
}
