import Layout from '../components/Layout'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/items/:id',
        element: <ProductDetail />
      }
    ]
  },

])

export default router