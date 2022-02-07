import styled from 'styled-components';

export const Flex = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;
`;

export const PokemonLogo = styled.img`
  margin-right: 50px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 1298px;

  height: 55px;

  margin-right: 52px;

  border: none;
  border-radius: 0.5rem;

  font-size: 1.25rem;

  padding-left: 22px;
`;

export const Login = styled.button`
  min-width: 111px;
  height: 40px;

  margin-right: 43px;

  background: #7E7394;
  color: white;

  border: 2px solid #100B16;
  border-radius: 0.5rem;

  font-size: 1.25rem;
`;

export const Username = styled.div`
  font-size: 1.125rem;

  margin-right: 43px;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompetiLogo = styled.img``;

export const Container = styled.div`
  width: 100%;
  height: var(--header-height);

  background-color: #524153;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;

  @media screen and (max-width: 900px) {
    gap: 0.5rem;

    flex-direction: column;

    padding: 0.5rem;

    ${PokemonLogo} {
      width: 5rem;
      height: auto;

      margin-right: 0;
    }

    ${Input} {
      margin-right: 0;

      height: 2rem;

      font-size: 1rem;

      padding-left: 0.5rem;
    }

    ${Login} {
      min-width: 5rem;
      height: 2rem;

      font-size: 0.875rem;

      margin-right: 0;
    }

    ${CompetiLogo} {
      width: 5rem;
      height: auto;
    }
  }
`;