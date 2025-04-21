import React from 'react'

export default function UserCard({ image, label }) {


  return (
    <div className='w-[300px] shadow-2xl'>

      <div>
        <img className='h-[200px] object-cover rounded-tl-xl rounded-tr-xl' src={image} alt="" />
      </div>

      <div className='p-6 text-center'>

        <h1>{label}</h1>
        <div className='my-5'>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nihil laborum consequuntur, deserunt dolores minima accusamus placeat voluptates .</p>
        </div>

        <button className='bg-red-400 text-white px-20 rounded-4xl py-2'>JOIN US</button>

      </div>

    </div>
  )
}
