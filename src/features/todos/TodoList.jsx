import React from 'react'
import { useGetTodosQuery } from './todoApi'
import { Card, Checkbox, IconButton, List, ListItem, Typography } from '@material-tailwind/react';
import TodoCheck from './TodoCheck';
import TodoRemove from './TodoRemove';

export default function TodoList() {

  const { isLoading, error, data } = useGetTodosQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>{error}</p>;



  return (
    <div>

      {data && data.length > 0 && <Card className="w-96">
        <List>

          {data.map((todo) => {
            return (
              <ListItem key={todo.id}>

                <div>

                  <div className='flex gap-28'>
                    <Typography variant="h6" color="blue-gray">
                      {todo.title}
                    </Typography>
                    <TodoRemove id={todo.id} />
                  </div>





                  <div className='flex items-center'>
                    <Typography variant="small" color="gray" className="font-normal">
                      isCompleted
                    </Typography>
                    <TodoCheck todo={todo} />
                  </div>


                </div>












              </ListItem>
            )
          })}



        </List>
      </Card>
      }


    </div>
  )
}
