import 'infrastructure/ui/App.css';
import { ThemeProvider } from '@mui/material';
import useCreateTheme from 'infrastructure/controllers/theme/use-create-theme';
import { RouterProvider } from 'react-router-dom';
import rootRoutes from 'infrastructure/controllers/routes/root-routes';

const App = () => {
  const { theme } = useCreateTheme();
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={rootRoutes} />
    </ThemeProvider>
  );
};

export default App;
