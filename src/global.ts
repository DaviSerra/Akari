// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #ffffff;
    color: #333;
  }

  h1, h2 {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
