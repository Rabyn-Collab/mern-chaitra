import { useGetAllRecipesQuery, useLazySearchRecipesQuery } from '../recipes/recipeApi'
import RecipeList from '../recipes/RecipeList';
import RecipeSearch from '../recipes/RecipeSearch'

export default function HomePage() {

  const { isLoading, isError, data } = useGetAllRecipesQuery();
  const [searchRecipe, { data: searchResult, isFetching }] = useLazySearchRecipesQuery();

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>{isError}</p>


  return (
    <div className='p-7'>

      <RecipeSearch searchRecipe={searchRecipe} isFetching={isFetching} />

      <RecipeList data={searchResult ? searchResult.recipes.length > 0 ? searchResult : data : data} />

    </div>
  )
}
