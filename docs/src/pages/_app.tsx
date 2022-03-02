import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import 'translate';

import Menu from 'components/Menu';

import 'styles/globals.css';
import { defaultTheme } from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Menu>
        <Component t={t} {...pageProps} />
      </Menu>
    </ThemeProvider>
  );
}

export default MyApp;
