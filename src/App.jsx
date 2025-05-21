import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import HomePage from './features/home/HomePage';
import Register from './features/users/Register.jsx';
import Login from './features/users/Login.jsx';
import AdminPage from './features/admin/AdminPage.jsx';
import ProductAdd from './features/admin/ProductAdd.jsx';


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        { index: true, element: <HomePage /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },

        { path: 'admin-panel', element: <AdminPage /> },
        { path: 'admin/add-product', element: <ProductAdd /> }

      ]
    },


  ]);

  return <RouterProvider router={router} />
}
