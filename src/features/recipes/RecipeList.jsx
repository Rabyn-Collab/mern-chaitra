import { Button } from '@material-tailwind/react';
import { useGetAllRecipesQuery, useLazyGetAllRecipesQuery } from './recipeApi'
import { Image, Shimmer } from 'react-shimmer'

export default function RecipeList() {

  const [getRecipes, { isLoading, data }] = useLazyGetAllRecipesQuery();



  // const { isLoading, error, data } = useGetAllRecipesQuery();

  // if (isLoading) return <p>Loading...</p>
  // if (error) return <p>{error}</p>



  // console.log(data);

  const handleRecipe = () => {
    getRecipes();
  }

  return (
    <div className='p-5'>
      <Button loading={isLoading} onClick={handleRecipe}>Get Recipes</Button>
      <div className='grid grid-cols-4 gap-5 mt-5 '>
        {data && data.recipes.map((rec) => {
          return <div key={rec.id}>
            <Image
              src={rec.image} alt=""
              fadeIn
              fallback={<Shimmer height={300} width={300} />}
            />
            <p>{rec.name}</p>

          </div>
        })}

      </div>
    </div>
  )
}
