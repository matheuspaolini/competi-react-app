import GlobalStyle from './styles/global';

import AppRoutes from './routes/AppRoutes';

import { ThemeProvider } from '@mui/material';

import MUITheme from './styles/mui/theme';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <GlobalStyle />

      <ToastContainer 
        theme="dark"
        limit={3}
        autoClose={5000}
        position="bottom-center"
      />

      <ThemeProvider theme={MUITheme}>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}
