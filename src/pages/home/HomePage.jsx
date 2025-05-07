import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardBody, Typography, Avatar, IconButton } from "@material-tailwind/react";



export default function HomePage() {

  const { users } = useSelector((state) => state.userSlice);

  console.log(users);
  return (
    <div className='p-5'>

      {users.length < 1 && <h1>Try To Add User...</h1>}




      {users.length > 0 && <Card className="w-96">
        <CardBody>

          <div className="divide-y divide-gray-200">
            {users.map(({ username, gender, habits, country, message }, index) => (
              <div
                key={index}
                className="flex items-center justify-between pb-3 pt-3 last:pb-0"
              >
                <div className="flex items-center gap-x-3">

                  <div>
                    <Typography color="blue-gray" variant="h6">
                      {username}
                    </Typography>
                    <Typography variant="small" color="gray">
                      {message}
                    </Typography>

                    <div className='flex gap-4'>
                      {habits.map((habit, index) => <p key={index}>{habit}</p>)}
                    </div>

                  </div>
                </div>
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {gender}
                  </Typography>
                  <div className='flex mt-2 gap-5'>
                    <IconButton color='green' size='sm'>
                      <i className="fas fa-edit" />
                    </IconButton>
                    <IconButton color='pink' size='sm'>
                      <i className="fas fa-trash" />
                    </IconButton>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </CardBody>
      </Card>}

    </div>
  )
}
