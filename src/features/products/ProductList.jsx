import { Rating } from "@material-tailwind/react";
import { baseUrl } from "../../app/mainApi.js";
import { useGetProductsQuery } from "../products/productApi.js"
import { useNavigate } from "react-router";


export default function ProductList() {
  const { isLoading, error, data } = useGetProductsQuery();
  const nav = useNavigate();
  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1>{error.data?.message || error.error}</h1>
  return (
    <div className='grid grid-cols-5 gap-4 px-6'>
      {data && data.map(({ _id, title, price, image, rating }) => {
        return <div
          onClick={() => nav(`/products/${_id}`)}
          className="shadow-lg cursor-pointer">
          <div className="h-[250px] w-full">
            <img className="h-full object-cover" src={`${baseUrl}${image}`} alt="" />

          </div>

          <div className="py-2 space-y-1 px-4">
            <h2 className="font-medium">{title}</h2>
            <p className="text-red-400">Rs.{price}</p>
            <Rating readonly value={rating} />
          </div>

        </div>
      })}


    </div>
  )
}
