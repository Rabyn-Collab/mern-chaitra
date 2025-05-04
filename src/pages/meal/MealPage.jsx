import React from 'react'
import { useParams } from 'react-router'
import { useApiHooks } from '../../hooks/apiHooks';

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

  console.log(data)
  return (
    <div className='p-5'>
      {data && data.meals.map((meal) => {
        return <div key={meal.idMeal} className='space-y-5'>
          <h1>{meal.strMeal}</h1>
          <iframe width="520" height="315"
            src={`https://www.youtube.com/embed/${meal.strYoutube.split('=')[1]}`}>
          </iframe>
          <p>{meal.strInstructions}</p>

        </div>
      })}


    </div>
  )
}
