import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

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
  margin: 2em;
  padding: 3em;
  border: 1px solid white;
}
`;

const Layout = props => (
  <ThemeProvider theme={theme}>
    <>
      <Head>
        <title>Hello Next.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="https://socket.io/images/favicon.png" />
      </Head>
      <GlobalStyle>{props.children}</GlobalStyle>
    </>
  </ThemeProvider>
);

export default Layout;
