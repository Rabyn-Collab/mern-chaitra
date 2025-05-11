import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import RecipeSearch from './features/recipes/RecipeSearch';


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        { index: true, element: <RecipeSearch /> },


      ]
    },


  ]);

  return <RouterProvider router={router} />
}
