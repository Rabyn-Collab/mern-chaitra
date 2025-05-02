import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

export default function Home() {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const nav = useNavigate();

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setLoading(false);
      setData(response.data);
      console.log(data);
    } catch (err) {
      setLoading(false);
      setError(err.message)
    }

  }

  useEffect(() => {
    getData();
  }, []);


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
