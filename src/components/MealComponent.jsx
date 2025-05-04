import React from 'react'

export default function MealComponent({ meal }) {
  return (
    <div className='space-y-5'>
      <h1>{meal.strMeal}</h1>
      <iframe width="520" height="315"
        src={`https://www.youtube.com/embed/${meal.strYoutube.split('=')[1]}`}>
      </iframe>
      <p>{meal.strInstructions}</p>

    </div>
  )
}
