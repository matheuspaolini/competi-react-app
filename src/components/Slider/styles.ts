import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1340px;

  margin: 0 auto;
  padding: 1rem 0;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  overflow-x: scroll;

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const Arrow = styled.button`
  min-width: 2rem;
  height: 2rem;

  background: #524153;

  border-radius: 50%;

  border: 2px solid #100B16;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Page = styled.div<{ isSelected?: boolean }>`
  width: 21px;
  height: 21px;

  background: ${({ isSelected }) => isSelected ? '#535662' : '#7E7394'};

  border-radius: 50%;
  border: 2px solid #100B16;
`;
