import { faker } from '@faker-js/faker';
import { Button, IconButton, Typography } from '@material-tailwind/react';
import React, { useState } from 'react'

export default function Home() {


  const [users, setUsers] = useState([]);

  const handleUser = () => {
    const user = {
      userId: faker.string.uuid(),
      username: faker.internet.username(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    };
    setUsers((prev) => [...prev, user]);
  }

  const removeUser = (userId) => {
    setUsers((prev) => prev.filter((user) => user.userId !== userId));
  }


  return (
    <div>
      <div className='sticky top-0 bg-amber-100 p-3'>
        <Button onClick={handleUser} color='purple'>Add User</Button>
      </div>

      <div className='grid grid-cols-5 gap-10 p-5'>


        {users.map((user) => {
          return <div key={user.userId} className='mt-5 space-y-2'>
            <img className='h-[200px] w-full object-cover' src={user.avatar} alt="" />
            <Typography variant='h5'>{user.username}</Typography>
            <div className='flex justify-between flex-wrap gap-3'>
              <p>{user.email}</p>
              <IconButton onClick={() => removeUser(user.userId)} color='pink' size='sm' >
                <i className='fas fa-trash'></i>
              </IconButton>
            </div>


          </div>

        })}
      </div>



    </div>
  )
}
