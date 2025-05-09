import React from 'react'
import { useGetCommentsQuery } from './commentApi'

export default function CommentList() {

  const { isLoading, error, data } = useGetCommentsQuery();

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  console.log(data);
  return (
    <div className='p-5'>

      {data && data.comments.map((comment) => {
        return <div key={comment.id}>
          <p>{comment.body}</p>
        </div>
      })}



    </div>
  )
}
