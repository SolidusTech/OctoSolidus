import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';

import Menu from '../components/Menu';

import '../styles/globals.css';
import { defaultTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Menu>
        <Component {...pageProps} />
      </Menu>
    </ThemeProvider>
  );
}

export default MyApp;
