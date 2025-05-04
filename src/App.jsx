import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from './pages/home/Home';
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import NotFound from './pages/not-found/NotFound';
import MealItems from './pages/meal-items/MealItems';
import MealPage from './pages/meal/MealPage';
import RandomMeal from './pages/random/RandomMeal';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'random-meal',
          element: <RandomMeal />
        },
        {
          path: 'meal/:id',
          element: <MealPage />
        },
        {
          path: 'meal-items/:category',
          element: <MealItems />
        },
        {
          path: '*',
          element: <NotFound />
        }

      ]
    },


  ]);

  return <RouterProvider router={router} />
}
