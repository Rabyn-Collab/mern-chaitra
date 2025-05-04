import axios from 'axios';
import React, { useEffect, useState, useTransition } from 'react'
import MealComponent from '../../components/MealComponent';

export default function RandomMeal() {

  const [data, setData] = useState();
  const [isPending, setTransion] = useTransition();

  const getData = () => {
    setTransion(async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        setData(response.data);
      } catch (err) {

      }
    })
  }

  useEffect(() => {
    getData();
  }, []);

  if (isPending) return <h1>Loading....</h1>


  return (
    <div className='p-5'>

      {data && <MealComponent meal={data.meals[0]} />}

    </div>
  )
}
