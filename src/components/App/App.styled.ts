import styled, { createGlobalStyle } from "styled-components";

const containerWidth = "768px";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: ${containerWidth};
  }
  #root {
    height: inherit;
  }
  `;

export const Layout = styled.div`
  max-width: ${containerWidth};
  margin: auto;
`;
