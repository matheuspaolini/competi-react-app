import styled, { css } from 'styled-components';

export const Main = styled.div`
  position: relative;

  width: 9rem;
  height: 8rem;

  background: #B4ADBE;

  border-radius: 0.5rem;
  border: 2px solid #100B16;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: auto;
  height: 5rem; 
`;

export const Name = styled.div`
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);

  z-index: 2;

  width: 6rem;
  height: 2.5rem;

  border-radius: 0.5rem;
  border: 2px solid #100B16;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #7E7394;

  text-transform: capitalize;

  font-size: 0.875rem;

  text-align: center;

  color: white;
`;

export const Type = styled.div<{ isRandom?: boolean }>`
  position: absolute;
  top: -0.75rem;
  right: 1rem;

  ${({ isRandom }) => 
    isRandom && css`
      right: unset;
      top: unset;

      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
    `}

  z-index: 3;

  width: 3rem;
  height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;

  text-transform: capitalize;

  color: white;

  font-size: 0.75rem;

  background: #F25D52;
`;

export const Number = styled.div<{ isRandom?: boolean }>`
  position: absolute;
  top: -1.125rem;
  left: -1.125rem;

  z-index: 2;

  width: 2.25rem;
  height: 2.25rem;

  transform: rotate(45deg);

  ${({ isRandom }) => 
    isRandom && css`
      top: -1.125rem;

      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    `}

  background: #535662;

  border: 2px solid #100B16;
  border-radius: 0.5rem;

  ::after {
    content: attr(data-number);

    position: absolute;
    top: 0;
    left: 0;

    width: 2.25rem;
    height: 2.25rem;

    color: white;

    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transform: rotate(-45deg);
  }
`;

export const Flex = styled.div`
  position: absolute;

  background: rgba(0, 0, 0, 0.25);

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 21px;
`;

export const Button = styled.button<{ background?: string }>`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  border-radius: 50%;

  background: ${({ background }) => background};

  :hover {
    filter: brightness(0.8);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: min-content;
  height: min-content;

  padding: 1.5rem;
`;
