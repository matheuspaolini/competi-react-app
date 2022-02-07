import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;

  height: 50px;

  background: #D4C3A3;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  
  padding: 1rem;

  margin: 0 auto;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);

  border-radius: 0 0 0.75rem 0.75rem;
`;

export const PageBox = styled.button<{ background?: string; isActive?: boolean }>`
  width: 2rem;
  height: 2rem;

  border-radius: 0.5rem;
  border: 2px solid #100B16;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  background: ${({ background, isActive }) => isActive ? '#535662' : background};

  :hover {
    filter: brightness(0.8);
  }
`;
