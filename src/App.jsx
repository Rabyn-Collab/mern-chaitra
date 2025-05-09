import React from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import CommentList from './features/comments/CommentList';


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        { index: true, element: <CommentList /> }


      ]
    },


  ]);

  return <RouterProvider router={router} />
}
