import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;

  padding: 1rem;

  height: 416px;

  background: #D4C3A3;

  margin: 0 auto;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
`;

export const List = styled.div<{ background?: string; isActive?: boolean }>`
  margin: 0 auto;

  height: 100%;

  width: 100%;
  max-width: calc(14rem * 3);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background: ${({ background, isActive }) => isActive ? '#535662' : background };

  overflow-y: scroll;
`;
