import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import React from 'react'
import { useNavigate } from 'react-router';
import { useApiHooks } from '../../hooks/apiHooks';

export default function Home() {


  const nav = useNavigate();

  const [data, loading, error] = useApiHooks(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className='p-5 '>
      <div className='grid grid-cols-4 gap-x-6 gap-y-14 mt-7'>
        {data && data.categories.map((category) => {
          return <Card
            onClick={() => nav(`/meal-items/${category.strCategory}`)}
            key={category.idCategory} className='cursor-pointer'>
            <CardHeader>
              <img src={category.strCategoryThumb} alt="" />

            </CardHeader>


            <CardBody>
              <h1>{category.strCategory}</h1>
            </CardBody>




          </Card>


        })}
      </div>




    </div>
  )
}
