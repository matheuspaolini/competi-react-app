import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: calc(100% - var(--header-height) - var(--footer-height));

  background-color: #E0D7EC;

  overflow-y: scroll;
`;
