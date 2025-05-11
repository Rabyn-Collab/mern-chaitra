import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import CommentList from './features/comments/CommentList';
import RecipeList from './features/recipes/RecipeList';


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        { index: true, element: <RecipeList /> },


      ]
    },


  ]);

  return <RouterProvider router={router} />
}
