import { useCallback, useEffect, useState } from 'react';
import * as S from './styles';

import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { changeNumberByOne, createRange } from '../../utils';
import { PaginationProps } from './types';

export default function Pagination({ count, page, setPage }: PaginationProps) {
  const [index, setIndex] = useState(0);
  const [currentPageBox, setCurrentPageBox] = useState(0);

  const pageBoxLength = 2;

  const pageNumbers = createRange(count).map((_, i) => i + 1);
  const pageNumbersLength = pageNumbers.length - 1;

  const handleNextPage = useCallback(() => {
    const isLastBox = currentPageBox === pageBoxLength;
    const isLastPage = page === pageNumbersLength;
    const isLastIndex = index === pageNumbersLength

    if (isLastBox && isLastPage || isLastIndex) return;

    setPage(changeNumberByOne(true));

    if (isLastBox) return setIndex(changeNumberByOne(true));

    setCurrentPageBox(changeNumberByOne(true));
  }, [index, currentPageBox, page]);

  const handlePreviousPage = useCallback(() => {
    const isFirstBox = currentPageBox === 0;
    const isFirstIndex = index === 0;

    if (isFirstIndex && isFirstBox) return;

    setPage(changeNumberByOne(false));

    if (isFirstBox) return setIndex(changeNumberByOne(false));

    setCurrentPageBox(changeNumberByOne(false));
  }, [index, currentPageBox]);

  const handleSelectPage = useCallback((pageBox: number, index: number) => {
    setCurrentPageBox(pageBox);
    setPage(pageNumbers[index] - 1);
  }, []);

  useEffect(() => {
    setPage(0);
  }, []);

  return (
    <S.Container>
      <S.PageBox background="#B4ADBE" onClick={handlePreviousPage}>
        <IoMdArrowDropleft size="1.25rem" fill="white" />
      </S.PageBox>

      <S.PageBox
        background="#7E7394"
        isActive={currentPageBox === 0}
        onClick={() => handleSelectPage(0, index)}
      >
        {pageNumbers[index]}
      </S.PageBox>

      <S.PageBox
        background="#7E7394"
        isActive={currentPageBox === 1}
        onClick={() => handleSelectPage(1, index + 1)}
      >
        {pageNumbers[index + 1]}
      </S.PageBox>

      <S.PageBox
        background="#7E7394"
        isActive={currentPageBox === 2}
        onClick={() => handleSelectPage(2, index + 2)}
      >
        {pageNumbers[index + 2]}
      </S.PageBox>

      <S.PageBox background="#B4ADBE" onClick={handleNextPage}>
        <IoMdArrowDropright size="1.25rem" fill="white" />
      </S.PageBox>
    </S.Container>
  );
}
