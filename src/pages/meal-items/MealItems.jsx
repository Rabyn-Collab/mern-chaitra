import { Avatar, Card, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

export default function MealItems() {

  const { category } = useParams();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const nav = useNavigate();

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
          c: category
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


  return (
    <div className='p-5'>

      {data && <Card className="w-96">
        <List>

          {data?.meals.map((meal) => {
            return <ListItem key={meal.idMeal} className='cursor-pointer'>
              <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src={meal.strMealThumb} />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  {meal.strMeal}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  {meal.idMeal}
                </Typography>
              </div>
            </ListItem>

          })}


        </List>
      </Card>}



    </div>
  )
}
