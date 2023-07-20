import Login from '../pages/login';
import Category from '../pages/categories';
import Dashboard from '../pages/dashboard';
import Register from '../pages/registerAdmin';

// import Sidebar from '../src/components/sidebar';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Layout from '../components/Layout';


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/category',
        element: <Category />,
      },
      {
        path: '/register',
        element: <Register />,
      }
    ]
  }

])


export default router;