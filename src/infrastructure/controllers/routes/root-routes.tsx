import { createBrowserRouter } from 'react-router-dom';
import HomePage from 'infrastructure/ui/page/home/home-page.tsx';

const rootRoutes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
]);

export default rootRoutes;
