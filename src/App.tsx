import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AppRoutes } from './routes/AppRoutes';
import BlogAllArticles from './pages/BlogAllArticles/BlogAllArticles';

import './App.css';
import Article from './components/Articles/Article/Article';

function App() {
  const Layout = () => {
    return (
      <div id="root" className="app_wrapper">
        <Helmet />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        errorElement: <h1>PAGE NOT FOUND</h1>,
        children: [
          {
            path: AppRoutes.BLOGALLARTICLES,
            element: <BlogAllArticles />,
            errorElement: <h1>HOME PAGE NOT FOUND</h1>,
          },
          {
            path: AppRoutes.ARTICLE,
            element: <Article />,
            errorElement: <h1>HOME PAGE NOT FOUND</h1>,
          },
          {
            path: '*',
            element: <Navigate to={AppRoutes.BLOGALLARTICLES} replace />,
          },
        ],
      },
    ],
    { basename: '/' }
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
