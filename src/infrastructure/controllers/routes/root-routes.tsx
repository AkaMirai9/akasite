import EducationPage from 'infrastructure/ui/page/education/education-page';
import ExperiencesPage from 'infrastructure/ui/page/experience/experiences-page';
import MyselfPage from 'infrastructure/ui/page/myself/myself-page';
import ProjectsPage from 'infrastructure/ui/page/projects/projects-page';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from 'infrastructure/ui/page/home/home-page';

const rootRoutes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/education',
    element: <EducationPage />
  },
  {
    path: '/experiences',
    element: <ExperiencesPage />
  },
  {
    path: '/myself',
    element: <MyselfPage />
  },
  {
    path: '/projects',
    element: <ProjectsPage />
  }
]);

export default rootRoutes;
