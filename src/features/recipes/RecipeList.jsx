import { useNavigate } from 'react-router'
import { Image, Shimmer } from 'react-shimmer'

export default function RecipeList({ data }) {

  const nav = useNavigate();
  return (
    <div className=''>

      <div className='grid grid-cols-4 gap-5 mt-4 '>
        {data && data.recipes.map((rec) => {
          return <div
            className='cursor-pointer'
            onClick={() => nav(`/recipes/${rec.id}`)}
            key={rec.id}>
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
