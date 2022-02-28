import { grey, purple } from '@mui/material/colors';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[100],
    },
  },
});
