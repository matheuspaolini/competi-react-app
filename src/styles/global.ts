import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: 'Roboto';

    transition: 0.15s ease;

    /* width */
    ::-webkit-scrollbar {
      width: 0.25rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  html, body, #root {
    height: 100%;
  }

  button {
    background: transparent;

    border: none;

    cursor: pointer;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :root {
    --header-height: 86px;
    --footer-height: 49px;
  }
`;

export default GlobalStyle;
