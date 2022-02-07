import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 0.5rem 1rem 0.5rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: white;

  border-radius: 0.5rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  min-width: 10rem;
`;

export const Image = styled.img`
  height: 4rem;
  width: 4rem;

  border-radius: 0.25rem;
  border: 2px solid #100B16;

  background: #B4ADBE;
`;

export const Name = styled.div``;

export const Type = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Buttons = styled.div`
  min-width: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
