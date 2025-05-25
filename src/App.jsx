import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import HomePage from './features/home/HomePage';
import Register from './features/users/Register.jsx';
import Login from './features/users/Login.jsx';
import AdminPage from './features/admin/AdminPage.jsx';
import ProductAdd from './features/admin/ProductAdd.jsx';
import ProductUpdate from './features/admin/ProductUpdate.jsx';
import Product from './features/products/Product.jsx';
import CartPage from './features/carts/CartPage.jsx';


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        { index: true, element: <HomePage /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },

        { path: 'products/:id', element: <Product /> },
        { path: 'carts', element: <CartPage /> },

        { path: 'admin-panel', element: <AdminPage /> },
        { path: 'admin/add-product', element: <ProductAdd /> },
        { path: 'admin/edit-product/:id', element: <ProductUpdate /> },

      ]
    },


  ]);

  return <RouterProvider router={router} />
}
