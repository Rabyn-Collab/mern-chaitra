import React from 'react'
import { useGetRecipeQuery } from './recipeApi'
import { useParams } from 'react-router';

export default function Recipe() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetRecipeQuery(id);

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  console.log(data);
  return (
    <div className='p-5 space-y-4'>

      <h1>{data.name}</h1>

      <div className='grid grid-cols-3 gap-5'>
        <div>
          <img src={data.image} alt="" />
        </div>

        <div className='col-span-2 '>

          <div className='flex gap-5'>
            <div>
              <h1>Ingredients</h1>
              {data.ingredients.map((ing) => {
                return <p key={ing}>{ing}</p>
              })}
            </div>

            <div>
              <h1>Instructions</h1>
              {data.instructions.map((ins) => {
                return <p key={ins}>{ins}</p>
              })}
            </div>
          </div>

          <p>Prepare Time: {data.prepTimeMinutes}</p>


        </div>
      </div>


    </div>
  )
}
