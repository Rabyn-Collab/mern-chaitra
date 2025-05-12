import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import RecipeSearch from './features/recipes/RecipeSearch';
import Recipe from './features/recipes/Recipe';
import HomePage from './features/home/HomePage';


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        { index: true, element: <HomePage /> },
        { path: 'recipes/:id', element: <Recipe /> },


      ]
    },


  ]);

  return <RouterProvider router={router} />
}
