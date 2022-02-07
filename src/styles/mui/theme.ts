import { createTheme } from '@mui/material';

const MUITheme = createTheme({
  components: {
    MuiModal: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
    }
  }
});

export default MUITheme;
