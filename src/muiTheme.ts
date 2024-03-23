import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'Montserrat', 'sans-serif'].join(','),
    h1: {
      fontSize: '48px',
      marginBottom: '20px',
      color: '#fff',
      fontWeight: 700,
    },
    h2: {
      fontSize: '32px',
      fontWeight: 700,
      color: '#fff',
      textAlign: 'center',
    },
  },
});
