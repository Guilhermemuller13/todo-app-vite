import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import GlobalStyles from './global';

type ThemeProviderProps = {};

const ViewThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default ViewThemeProvider;
