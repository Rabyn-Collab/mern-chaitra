import React from 'react'
import { useParams } from 'react-router'
import { useApiHooks } from '../../hooks/apiHooks';
import MealComponent from '../../components/MealComponent';

export default function MealPage() {
  const { id } = useParams();


  const [data, loading, error] = useApiHooks(
    'https://www.themealdb.com/api/json/v1/1/lookup.php',
    { i: id }
  );


  if (loading) {

    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className='p-5'>
      {data && data.meals.map((meal) => {
        return <MealComponent meal={meal} key={meal.idMeal} />
      })}


    </div>
  )
}
