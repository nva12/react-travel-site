import { createGlobalStyle } from 'styled-components';
import { palette } from './variables';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #333;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: ${palette.secondary.main};
  }
`;

export default GlobalStyle;
