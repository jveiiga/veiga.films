// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: "Great Vibes", "Didact Gothic",  "Climate Crisis", serif;
    font-weight: 400;
    font-style: normal;
    background-color: #000; /* Cor de fundo padrão */
  }

  /* Estilos globais adicionais */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export default GlobalStyle