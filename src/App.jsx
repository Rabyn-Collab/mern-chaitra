import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import HomePage from './features/home/HomePage';


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        { index: true, element: <HomePage /> },

      ]
    },


  ]);

  return <RouterProvider router={router} />
}
