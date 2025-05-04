import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function MealPage() {
  const { id } = useParams();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();



  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
        params: {
          i: id
        }
      });
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
