import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;

  background: #D4C3A3;

  margin: 0 auto;

  border-bottom: 1px solid #707070;

  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 1rem;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
`;

export const Label = styled.div`
  color: #535662;
`;

export const Select = styled.select`
  position: relative;

  height: 40px;
  width: 204px;

  padding-left: 0.5rem;

  font-size: 1.25rem;
  text-transform: capitalize;
`;

export const Option = styled.option`
  text-transform: capitalize;

  :first-child {
    color: rgba(0, 0, 0, 0.15);
  }
`;
