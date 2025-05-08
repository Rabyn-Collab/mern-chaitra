import React from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import HomePage from './pages/home/HomePage';
import AddUser from './pages/users/AddUser';
import UpdateUser from './pages/users/UpdateUser';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'add-user',
          element: <AddUser />
        },
        {
          path: 'update-user/:id',
          element: <UpdateUser />
        },


      ]
    },


  ]);

  return <RouterProvider router={router} />
}
