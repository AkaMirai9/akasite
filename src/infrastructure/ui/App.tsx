import 'infrastructure/ui/App.css';
import { RouterProvider } from 'react-router-dom';
import rootRoutes from 'infrastructure/controllers/routes/root-routes';

function App() {
  return <RouterProvider router={rootRoutes} />;
}

export default App;
