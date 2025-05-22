import React from 'react'
import { useRemoveProductMutation } from '../products/productApi.js'
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { IconButton } from '@material-tailwind/react';

export default function RemoveProduct({ id }) {
  const [removeProduct, { isLoading }] = useRemoveProductMutation();

  const { user } = useSelector((state) => state.userSlice);

  const handleRemove = async () => {
    try {
      await removeProduct({
        id,
        token: user.token
      }).unwrap();
      toast.success('Product Removed');
    } catch (err) {
      toast.error(err.data.message || err.error);
    }
  }

  return (
    <>
      {isLoading ? <p>Loading...</p> : <IconButton onClick={handleRemove} color='pink'>
        <i className="fas fa-trash" />
      </IconButton>
      }

    </>
  )
}
