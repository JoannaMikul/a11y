import { createGlobalStyle, ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    font-family: 'Lato', sans-serif;
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.white};
  }

  h1 {
    font-size: 3rem;
    font-weight: 900;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    margin: 0;
  }

  button {
    font-family: 'Lato', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: ${({ theme }) => theme.colors.porcelain};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.black030};
    background-color: ${({ theme }) => theme.colors.funGreen};
  }

  p {
    line-height: 1.5;
  }
`;

export const ThemeProvider = ({ children, theme }) => (
  <StyledComponentsThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
  </StyledComponentsThemeProvider>
);
