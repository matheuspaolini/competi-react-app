import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: white;

  border-radius: 0.5rem;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Title = styled.h1`
  text-transform: capitalize;
`;

export const Paragraph = styled.p``;

export const Image = styled.img`
  height: 10rem;
  width: auto;
`;

export const MinitatureList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Miniature = styled.img`
  height: 5rem;
  width: auto;

  border: 0.125px solid rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;

  background: #E0D7EC;

  cursor: pointer;

  :hover {
    background: #B4ADBE;
  }
`;

export const Lists = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const List = styled.div`
  height: 15rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  overflow-y: scroll;
`;

export const ListName = styled.h3``;

export const Field = styled.div`
  text-transform: capitalize;
`;
