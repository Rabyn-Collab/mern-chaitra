import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardBody, Typography, Avatar, IconButton, Button } from "@material-tailwind/react";
import RemoveDialog from '../../components/RemoveDialog';
import { useNavigate } from 'react-router';
import { removeAll } from '../users/userSlice';



export default function HomePage() {

  const { users } = useSelector((state) => state.userSlice);
  const nav = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className='p-5'>

      {users.length < 1 && <h1>Try To Add User...</h1>}

      {users.length > 0 && <div className='flex justify-end'>
        <Button onClick={() => dispatch(removeAll())}>Remove All</Button>
      </div>
      }




      {users.length > 0 && <Card className="w-96">
        <CardBody>

          <div className="divide-y divide-gray-200">
            {users.map(({ username, gender, habits, country, message, id }, index) => (
              <div
                key={id}
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
                    <IconButton
                      onClick={() => nav(`/update-user/${id}`)}
                      color='green' size='sm'>
                      <i className="fas fa-edit" />
                    </IconButton>
                    <RemoveDialog index={index} />

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
