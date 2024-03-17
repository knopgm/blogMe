import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import Home from './pages/Home/Home';
import BlogAllArticles from './pages/BlogAllArticles/BlogAllArticles';

import './App.css';
import Article from './components/Articles/Article/Article';

function App() {
  const Layout = () => {
    return (
      <div id="root" className="app_wrapper">
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter(
    [
      {
        path: AppRoutes.MAIN,
        element: <Layout />,
        errorElement: <h1>PAGE NOT FOUND</h1>,
        children: [
          {
            path: AppRoutes.MAIN,
            element: <Home />,
            errorElement: <h1>HOME PAGE NOT FOUND</h1>,
          },
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
