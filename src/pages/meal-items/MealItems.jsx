import { Avatar, Card, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import { useNavigate, useParams } from 'react-router';
import { useApiHooks } from '../../hooks/apiHooks';

export default function MealItems() {

  const { category } = useParams();
  const nav = useNavigate();

  const [data, loading, error] = useApiHooks(
    'https://www.themealdb.com/api/json/v1/1/filter.php',
    { c: category }
  );


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
            return <ListItem
              onClick={() => nav(`/meal/${meal.idMeal}`)}
              key={meal.idMeal} className='cursor-pointer'>
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
