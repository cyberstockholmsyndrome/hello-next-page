import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import theme from "../utils/theme";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: ${({ theme }) => theme.font.primary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: black;
}
`;

const Layout = props => (
  <ThemeProvider theme={theme}>
    <GlobalStyle>{props.children}</GlobalStyle>
  </ThemeProvider>
);

export default Layout;
