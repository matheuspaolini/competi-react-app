import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: #E0D7EC;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
`;

export const Main = styled.div`
  background: #524153;

  width: 100%;
  max-width: 25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem;

  border-radius: 1rem;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;

  border-radius: 0.5rem;
  border: none;

  padding-left: 1rem;

  font-size: 1.125rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 2.5rem;

  background: #7E7394;

  border: 2px solid #100B16;

  font-size: 1.125rem;

  color: white;

  border-radius: 0.5rem;
`;

export const CompetiLogo = styled.img`
  width: 5rem;
  height: auto;
`;
