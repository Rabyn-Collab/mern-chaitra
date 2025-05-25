import { useNavigate, useParams } from 'react-router'
import { useGetProductQuery } from './productApi.js';
import { baseUrl } from '../../app/mainApi.js';
import { Button, Card, IconButton, Rating } from '@material-tailwind/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToCarts } from '../carts/cartsSlice.js';

export default function Product() {
  const { id } = useParams();
  const { isLoading, error, data } = useGetProductQuery(id);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.data?.message || error.error}</h1>;
  return (
    <div className='grid grid-cols-3 gap-5'>
      <div>
        <img className='h-[320px] object-cover' src={`${baseUrl}${data.image}`} alt="" />
      </div>

      <div className='space-y-3'>
        <h2>{data.title}</h2>
        <p className='text-red-400'>Rs.{data.price}</p>
        <Rating readonly value={Math.round(data.rating)} />
      </div>
      <AddToCart product={data} />

    </div>
  )
}




function AddToCart({ product }) {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user } = useSelector((state) => state.userSlice);
  const { carts } = useSelector((state) => state.cartSlice);
  const isExist = carts.find((cart) => cart._id === product._id);
  const [count, setCount] = useState(isExist?.quantity || 1);
  const handleCart = () => {
    dispatch(setToCarts({
      _id: product._id,
      title: product.title,
      price: product.price,
      image: product.image,
      rating: product.rating,
      quantity: count
    }));

  }
  return (
    <div>
      <Card className='flex flex-col items-center gap-7 py-3'>
        <h1>Add To Cart</h1>
        <div className='flex items-center space-x-3'>
          <IconButton
            onClick={() => setCount(count - 1)}
            disabled={count === 1}
            size='sm'>
            <i className='fas fa-minus'></i>
          </IconButton>
          <h1>{count}</h1>

          <IconButton
            onClick={() => setCount(count + 1)}
            size='sm'>
            <i className='fas fa-add'></i>
          </IconButton>
        </div>
        <Button
          disabled={!user || user?.role === 'Admin'}
          onClick={() => {
            handleCart();
            nav('/carts');
          }}
        >Add To Cart</Button>
      </Card>

    </div>
  )
}
