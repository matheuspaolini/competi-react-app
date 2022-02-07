import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 1rem;
`;

export const Main = styled.div`
  width: 100%;
  max-width: 1140px;

  height: 622px;

  background: #D4C3A3;

  margin: 0 auto;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);

  border-radius: 0 0 0.75rem 0.75rem;
`;

export const Title = styled.div`
  width: 100%;

  color: #535662;

  padding: 2rem;

  font-size: 21px;

  border-bottom: 1px solid #707070;
`;

export const Fields = styled.div<{ isMobile?: boolean }>`
  opacity: ${({ isMobile }) => isMobile && '0'};

  height: 3rem;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TypeField = styled(Field)`
  width: 100%;
`;

export const ActionField = styled(Field)`
  min-width: 6rem;
  justify-content: flex-start;
  padding-left: 1rem;
`;

export const Flex = styled.div<{ isMobile?: boolean }>`
  display: ${({ isMobile }) => isMobile ? 'none' : 'flex'};
  justify-content: space-around;

  min-width: 10rem;
`;

export const List = styled.div`
  width: 100%;
  height: calc(100% - 90px - 3rem);

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  overflow-y: scroll;
`;

export const Empty = styled.div``;
